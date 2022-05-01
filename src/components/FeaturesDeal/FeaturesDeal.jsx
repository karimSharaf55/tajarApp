import React from "react";
import { Row, Col,Button, Input ,Icon ,Divider,Modal} from 'antd';
import "antd/dist/antd.css";
import './FeaturesDeal.css';
import Slider from "react-slick";
import FeatureDealProduct from "../FeatureDealProduct/FeatureDealProduct";
// import QuickViewProduct from "../QuickViewProduct/QuickViewProduct";

class   FeaturesDeal  extends React.Component {
render() {  
var settings = {
dots: true,
infinite: false,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3,
initialSlide: 0,
centerPadding:'50px',

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
breakpoint: 768,
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
<div className="FeaturesDeal">

<div>
      
     </div>
     


<div class="title-header">
     <div className="title-header-headerleft"> 
     <h2>Featured deals</h2>
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
      
     <FeatureDealProduct/>
     <FeatureDealProduct/>
     <FeatureDealProduct/>
     <FeatureDealProduct/>
     <FeatureDealProduct/>

   </Slider>
</div>
);
}
}
export default FeaturesDeal;