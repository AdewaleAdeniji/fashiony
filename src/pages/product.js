import React, { useState } from "react";
import ProductHeader from "../components/productHeader";
import { CiShop } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import Jump from "react-reveal/Jump";
import products from "../assets/products.json";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { toast } from "react-toastify";

const ProductPage = (props) => {
  const sku = props.match.params.sku;
  const productSku = products.filter((p) => p.sku === sku);
  if (productSku.length === 0) {
    window.location.href = "/";
  }
  const product =  productSku[0];

  const sold = parseInt(product.rating.average * product.rating.totalRatings);
  const [tab, setTab] = useState(true);
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
     payment_options: "card, mobilemoney, ussd",
    payment_plan: "3341",
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    meta: { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  const PayNow = () => {
    handleFlutterPayment({
        callback: () => {
            toast.success("Payment Successful, Order will be shipped now!");
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {
            toast.success("Payment Canceled. Please try again");
            console.log('closed')
        },
      });
  }
  return (
    <>
      <ProductHeader />
      <Jump>
        <div
          className="product-images"
          style={{
            backgroundImage:
              `url('${product.image}')`,
          }}
        >
          <ul>
          <li>
              <img
                src={product.image}
                alt="Product item"
              />
            </li>
          </ul>
        </div>
      </Jump>
      <div className="product-details">
        <Fade up>
          <span className="shop">
            <CiShop />
            {product.brand} Shop
          </span>
          <h6>{product.displayName} </h6>
          <ul className="ratings">
            <li>
              <i className="fa fa-star"></i> {product.rating.average} Ratings
            </li>
            <li>{product.rating.totalRatings} Reviews</li>
            <li>{sold} Sold</li>
          </ul>
        </Fade>
        <div className="tabs">
          <div
            className={`tab ${tab && "active"}`}
            onClick={() => setTab(true)}
          >
            About Item
          </div>
          <div
            className={`tab ${!tab && "active"}`}
            onClick={() => setTab(false)}
          >
            Reviews
          </div>
        </div>
        {tab ? (
          <Fade up>
            <div className="tab-content">
              <div className="details">
                <div className="detail">
                  <div>
                    <span className="title">Brand: </span>
                    <span>{product.brand}</span>
                  </div>
                  <div>
                    <span className="title">Color: </span>
                    <span>Black</span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ) : (
          <Fade up>
            <div className="tab-content show">
              <section class="review-section">
                <div class="reviews">
                  <Fade up>
                    <div class="review">
                      <h3 class="reviewer-name">John Smith</h3>
                      <p class="review-text">
                        This product is amazing! It's exactly what I was looking
                        for and it works perfectly. I highly recommend it!
                      </p>
                    </div>
                  </Fade>
                  <Fade up>
                    <div class="review">
                      <h3 class="reviewer-name">Mary Johnson</h3>
                      <p class="review-text">
                        I'm really impressed with this product. It exceeded my
                        expectations and I'm so happy with my purchase.
                      </p>
                    </div>
                  </Fade>
                  <Fade up>
                    <div class="review">
                      <h3 class="reviewer-name">David Lee</h3>
                      <p class="review-text">
                        I was a little hesitant to buy this product at first,
                        but I'm glad I did. It's made a big difference in my
                        life and I would definitely buy it again.
                      </p>
                    </div>
                  </Fade>
                </div>
              </section>
            </div>
          </Fade>
        )}
        <div className="product-footer">
          <div className="price-tag">
            <h6>Total Price</h6>
            <h2>&#8358; {product?.prices.rawPrice}</h2>
          </div>
          <div className="order">
            <button className="order-btn">
              <IoBagOutline /> 1
            </button>
            <button className="buy-btn" onClick={PayNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
