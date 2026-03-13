const ProductModel = require("../model/Product.model");
exports.postProduct = async (req, res) => {
  const { title, description, category, price, rating, imageurl } = req.body;
  const product = await ProductModel.create(
    title,
    description,
    category,
    price,
    rating,
    imageurl,
  );
  res.json(product);
};
exports.getProduct = async (req, res) => {
  const product = await ProductModel.findAll();
  res.json(product);
};
exports.getOneProduct = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findOneProduct(id);
  res.json(product);
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, description, category, price, rating, imageurl } = req.body;
  const product = await ProductModel.update(
    id,
    title,
    description,
    category,
    price,
    rating,
    imageurl,
  );
  res.json(product);
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.delete(id);
  res.json(product);
};
