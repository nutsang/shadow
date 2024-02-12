import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ProductManagement from './pages/product-management/ProductManage'
// import GeneralManage from './pages/general-management/GeneralManage';
// import InsertGeneralProduct from './pages/insert-product/InsertGeneralProduct'
// import InsertGachaProduct from './pages/insert-product/InsertGachaProduct';
import InsertAuctionProduct from './pages/insert-product/InsertAuctionProduct';
import NavbarGuest from './components/Navbar/Navbar-guest';
// import SignIn from './pages/Sign-in/SignIn';
import reportWebVitals from './reportWebVitals';
// import SignIn from './pages/Sign-in/SignIn';
import NavbarGuest from './components/Navbar-guest';
// import NavbarMember from './components/Navbar-member/';
// import NavbarAdmin from './components/Navbar-admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarGuest/>
    <InsertAuctionProduct/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
