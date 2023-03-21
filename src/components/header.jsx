/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoBagOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { RiHome5Fill, RiCommandLine, RiSettingsLine } from "react-icons/ri";
import { TbWallet } from "react-icons/tb";

const Header = () => {
  return (
    <>
    <header>
      <div className="container">
        <nav>
          <div className="search-box">
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
            <input type="text" placeholder="Search" />
          </div>
          <div className="icons">
            <a href="#">
              <IoBagOutline />
              <span className="cart-count">2</span>
            </a>
            <a href="#" className='fx-28'>
              <TbMessage2 />
              <span className="msg-count">3</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
    <footer>
        <div className='footer-item active'>
            <RiHome5Fill />
            <span>Home</span>
        </div>
        <div className='footer-item'>
            <RiCommandLine />
            <span>Voucher</span>
        </div>
        <div className='footer-item'>
            <TbWallet />
            <span>Wallet</span>
        </div>
        <div className='footer-item'>
            <RiSettingsLine />
            <span>Settings</span>
        </div>
    </footer>
    </>
  );
};
export default Header;