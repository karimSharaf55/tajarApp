import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Copyright from './components/Copyright/Copyright';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Shop from './components/Shop/Shop';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Shopingcart from './components/Shopingcart/Shopingcart';
import EmptyCart from './components/EmptyCart/EmptyCart';
import ShopSidebar from './components/ShopSidebar/ShopSidebar';
import NavbarTop from './components/NavbarTop/NavbarTop';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import MainNavbar from './components/MainNavbar/MainNavbar';
import SingleShop from './components/SingleShop/SingleShop';
import Vendors from './components/Vendors/Vendors';
// import Vendor from './components/Vendor/Vendor';

import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import AuthRoutes from './components/AuthRoutes';

import UserProfile from './components/UserProfile/UserProfile';

import { BrowserRouter , Redirect } from 'react-router-dom'
import { Switch, Route ,Router} from 'react-router-dom';
import MobileNav from './components/MobileNav/MobileNav';
import About from './components/About/About';
import Vendor from './components/Vendor/Vendor';
 

function App() {
  return (

    <div className="App">
    <MobileNav/>
    <NavbarTop/>
    <NavbarBottom/>
    <MainNavbar/>

   <Switch>
   <Route exact path="/home"  component={Home} />
     <Route exact path="/home/shop"  component={Shop} />
      <Route exact path="/" exact component={Home} />
      <Route path="/home/singleproduct"  component={SingleShop} />
      <Route path="/home/vendors"  component={Vendors} />
      <Route path="/home/vendor"  component={Vendor} />
      <Route path="/home/shopingcart"  component={Shopingcart} />
      <Route path="/home/userprofile"  component={UserProfile} />
      <Route path="/home/contactus"  component={ContactUs} />      
      <Route path="/home/emptycart"  component={EmptyCart} />
      <Route path="/home/about"  component={About} />
    </Switch>

  

     <NewsLetter/>
      <Footer/> 
     <Copyright/> 
  

</div>

  );
}

export default App;
