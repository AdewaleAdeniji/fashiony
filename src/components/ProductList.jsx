import ProductCard from "./productCard";
import Products from "../assets/products.json";

const ProductList = () => {
  return (
    <div className="product-grid parent">
      {Products.map((product) => {
        return <ProductCard product={product} key={product.sku}/>;
      })}
    </div>
  );
};
export default ProductList;
