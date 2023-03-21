import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Fade up>
      <div className="product-card">
        <Link to={`/product/${product.sku}`}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <button className="favorite-button">
              <i className="fa fa-heart-o"></i>
            </button>
          </div>
          <div className="product-caption">
            <div className="product-category">{product?.brand}</div>
            <div className="product-name">{product?.displayName}</div>
            <div className="product-alt">
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <span className="product-rating-count">
                  {product?.rating?.average} | {product?.rating?.totalRatings}
                </span>
              </div>
              <div className="product-price">
                &#8358;{product.prices.rawPrice}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fade>
  );
};
export default ProductCard;
