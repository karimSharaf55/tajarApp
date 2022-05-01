import React from "react";
import { Row, Col,Button, Input } from 'antd';
import "antd/dist/antd.css";
import './Shop.css';
import ShopSidebar from "../ShopSidebar/ShopSidebar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import FeaturesDeal from "../FeaturesDeal/FeaturesDeal";
import HotDeals from "../HotDeals/HotDeals";

import ShopNavbar from "../ShopNavbar/ShopNavbar";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
class  Shop  extends React.Component {
	 render() {     

		return (
      <div>
        <div className="shoppage ShopNavbar">
<ShopNavbar/>
     
       <div className="container">

 <Row gutter={16}>
     <Col xs={24} sm={24} md={6} lg={6} xl={6}>

<ShopSidebar/>
</Col>
       <Col xs={24} sm={24} md={18} lg={18} xl={18}>

     <div className="shopad-image">
     <a href="#"> <img src={require("../../img/shop-ad.png")}/></a>

     </div>
     <ScrollAnimation animateIn="fadeInUp"
 animatePreScroll={false}>
<TrendingProducts/>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp"
 animatePreScroll={false}>
<FeaturesDeal/>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp"
 animatePreScroll={false}>
<HotDeals/>
</ScrollAnimation>
</Col>
 </Row>
 </div>
 </div>


 
 </div>
 
       );
    }
  }
  
  export default Shop;
