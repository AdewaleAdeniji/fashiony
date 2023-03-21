/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Carousel from "../components/carousel";
import Header from "../components/header";
import { BiCategory } from "react-icons/bi";
import { BsAirplane } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import ProductList from "../components/ProductList";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <div className="list-container">
        <div className="list-items">
          <div className="list-item">
            <button className="item-button">
              <BiCategory />
            </button>
            <span className="item-name">Category</span>
          </div>
          <div className="list-item">
            <button className="item-button">
              <BsAirplane />
            </button>
            <span className="item-name">Flight</span>
          </div>
          <div className="list-item">
            <button className="item-button">
              <HiOutlineClipboardList />
            </button>
            <span className="item-name">Bill</span>
          </div>
          <div className="list-item">
            <button className="item-button">
              <BsAirplane />
            </button>
            <span className="item-name">Data Plan</span>
          </div>
          <div className="list-item">
            <button className="item-button">
              <HiOutlineClipboardList />
            </button>
            <span className="item-name">Top up</span>
          </div>
          <div className="list-item">
            <button className="item-button">
              <HiOutlineClipboardList />
            </button>
            <span className="item-name">Validate Bank Account</span>
          </div>
        </div>
        <div className="list-indicator">
          <div className="indicator-dot"></div>
          <div className="indicator-dot active"></div>
          <div className="indicator-dot"></div>
        </div>
      </div>
      <div className="products-container">
        <div className="product-header">
          <h6>Best Sale Products</h6>
          <a href="#" className="see-more-link">
            See more
          </a>
        </div>
        <ProductList />
      </div>
    </>
  );
};
export default LandingPage;
