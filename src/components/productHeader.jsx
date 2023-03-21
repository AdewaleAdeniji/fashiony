/* eslint-disable jsx-a11y/anchor-is-valid */
import { IoBagOutline } from "react-icons/io5";
import { RiShareLine } from "react-icons/ri";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
const ProductHeader = () => {
  return (
    <Fade down>
    <header className="product">
      <div className="container">
        <nav>
          <div className="search-box">
            <Link to="/">
            <i className="fa fa-angle-left back-btn"></i>
            </Link>
          </div>
          <div className="icons">
            <a href="#">
              <i className="fa fa-heart count-bg"></i>
            </a>
            <a href="#">
              <RiShareLine />
              <span className="cart-count">2</span>
            </a>
            <a href="#" className="fx-28">
              <IoBagOutline />
              <span className="msg-count">3</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
    </Fade>
  );
};
export default ProductHeader;
