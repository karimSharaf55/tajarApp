import React from "react";
import './UserProfile.css';
import { Row, Col,Button} from 'antd';
import Othersetting from "../Othersetting/Othersetting";
import ShopNavbar from "../ShopNavbar/ShopNavbar";
class Home  extends React.Component {
	
	 render() {     
		return (
            <div className="user-profail">
            <ShopNavbar/>
       <div className="container">
           <Row gutter={24}>
   <Col xs={24} sm={24} md={7} lg={6} xl={6}>
 <div className="account-setting-holder">
 <h2>Account Settings</h2>
<ul className="account-setting">
<li><a herf="#"> Presonal Information<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> MY Wishlist<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> My Cart<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> Payment Methods<i class="fa fa-angle-right"></i></a>  </li>
  </ul>
  <h2>Orders & Information</h2> 
  <ul className="account-setting">
<li><a herf="#"> Current Orders<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> Orders History<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> Recurring Orders<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> Track Order<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> Request Refund<i class="fa fa-angle-right"></i></a>  </li>
  </ul>
  <h2>Others</h2> 
  <ul className="account-setting">
<li><a herf="#"> Coupons & Gifts<i class="fa fa-angle-right"></i></a>  </li>
<li><a herf="#"> Subscription<i class="fa fa-angle-right"></i></a>  </li>
  </ul>
  <Button className="submit" type="signin">Sign Out</Button>
  </div>
 </Col>


 <Col xs={24} sm={24} md={17} lg={18} xl={18}>

 <h2 className="your-Account">Your Account</h2>
 <Col xs={24} sm={24} md={12} lg={8} xl={8}>
 <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require('../../img/order.PNG')}/>
        </div>
        <div className="TrendingProducts__item-description">
          <h3>YOUR ORDERS</h3>
          <p>Track, Return
or buy things again</p>
        </div>
      </div>
      </Col>
 <Col xs={24} sm={24} md={12} lg={8} xl={8}>
 <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require('../../img/order.PNG')}/>
        </div>
        <div className="TrendingProducts__item-description">
          <h3>YOUR ORDERS</h3>
          <p>Track, Return
or buy things again</p>
        </div>
      </div>
      </Col>
 <Col xs={24} sm={24} md={12} lg={8} xl={8}>
 <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require('../../img/order.PNG')}/>
        </div>
        <div className="TrendingProducts__item-description">
          <h3>YOUR ORDERS</h3>
          <p>Track, Return
or buy things again</p>
        </div>
      </div>
      </Col>
 <Col xs={24} sm={24} md={12} lg={8} xl={8}>
 <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require('../../img/order.PNG')}/>
        </div>
        <div className="TrendingProducts__item-description">
          <h3>YOUR ORDERS</h3>
          <p>Track, Return
or buy things again</p>
        </div>
      </div>
      </Col>
 <Col xs={24} sm={24} md={12} lg={8} xl={8}>
 <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require('../../img/order.PNG')}/>
        </div>
        <div className="TrendingProducts__item-description">
          <h3>YOUR ORDERS</h3>
          <p>Track, Return
or buy things again</p>
        </div>
      </div>
      </Col>
 <Col xs={24} sm={24} md={12} lg={8} xl={8}>
 <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require('../../img/order.PNG')}/>
        </div>
        <div className="TrendingProducts__item-description">
          <h3>YOUR ORDERS</h3>
          <p>Track, Return
or buy things again</p>
        </div>
      </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
      <Othersetting/>
      </Col>
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
      <Othersetting/>
      </Col>
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
      <Othersetting/>
      </Col>  
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
      <Othersetting/>
      </Col> 
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
      <Othersetting/>
      </Col> 
      <Col xs={12} sm={12} md={12} lg={8} xl={8}>
      <Othersetting/>
      </Col> 

      


 </Col>


 </Row>
 </div>
            </div>


       );
    }
  }
  
  export default Home;
  