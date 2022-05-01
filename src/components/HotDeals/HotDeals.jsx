import React from "react";
import { Row, Col,Button, Input ,Icon  ,Divider} from 'antd';
import "antd/dist/antd.css";
import './HotDeals.css';
import Slider from "react-slick";
import FeatureDealProduct from "../FeatureDealProduct/FeatureDealProduct";
import HotDealProduct from "../HotDealProduct/HotDealProduct";
class   HotDeals  extends React.Component {
render() {  
var settings = {
dots: true,
infinite: false,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3,
initialSlide: 0,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
initialSlide: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
};
return (
<div className="HotDeals">
<div class="title-header">
     <div className="title-header-headerleft"> 
     <h2>book best sellers</h2>
     </div>
     
     <div className="title-header-headerright"> 

     <p>Discover   </p>
       <a href="#">
     <button type="button" class="ant-btn ant-btn-primary">More
     </button>
     </a>
   
     
     </div>
     
     <Divider/>

     </div>
        <Slider {...settings}>
   
     <HotDealProduct/>
     <HotDealProduct/>
     <HotDealProduct/>
     <HotDealProduct/>

   </Slider>
</div>
);
}
}
export default HotDeals;