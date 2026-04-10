const Usermodel = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const UserModel = require("../model/User.model");
exports.getUser = async (req, res) => {
  const user = await Usermodel.findAll();
  res.json(user);
};
exports.getOneuser = async (req, res) => {
  const id = req.params.id;
  const user = await Usermodel.findOne(id);
  res.json(user);
};
exports.createUser = async (req, res) => {
  await body("fullname")
    .exists({ checkFalsy: true })
    .withMessage("fullname is required")
    .isString()
    .withMessage("fullname should be a string")
    .run(req);

  await body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .isString()
    .isEmail()
    .withMessage("should be in email format")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await Usermodel.create(fullname, email, hashedPassword);
  res.json(user);
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await Usermodel.delete(id);
  res.json(user);
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findByEmail(email);
  if (!user.length) return res.status(404).send("User not found");
  const IsPassword = await bcrypt.compare(password, user[0].password);
  if (!IsPassword) {
    return res.status(401).send("Password doesnot match");
  }
  const token = jwt.sign(
    { id: user[0].id, email: user[0].email },
    process.env.SECRETKEY,
    { expiresIn: "2h" },
  );

  return res
    .status(201)
    .json({ message: "Login successfull", token: token, user: user });
};


