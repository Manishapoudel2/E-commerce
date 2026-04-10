const Category = ({ category, setCategory }) => {
  return (
    <div className="text-gray-900 py-2 px-8 font-sans h-full">
      <div className="flex  items-center gap-2">
        <h1 className="font-semibold text-xm">Filter Products :</h1>

        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-200 rounded-sm w-fit  py-1 px-3"
        >
          <option value="All">All</option>
          <option value="electronic">Electronic</option>
          <option value="accessories">Accessories</option>
          <option value="traditional">Traditional</option>
          <option value="babies toy">Babies Toy</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="shoes">Shoes</option>
          <option value="jwellery">Jwellery</option>
          <option value="groceries">Groceries</option>
          <option value="sports">Sports</option>
          <option value="home & decore">Home & Decore</option>
          <option value="health">Health</option>
        </select>
      </div>
    </div>
  );
};
export default Category;
