import React from "react";
import { Row, Col,Button, Input } from 'antd';
import './FutureProduct.css';
import "antd/dist/antd.css";
import SliderBook from "../SliderBook/SliderBook";
import FeatureProductSlider from "../FeatureProductSlider/FeatureProductSlider";
class FutureProduct extends React.Component {
	
	 render() {     
		return (
     <div className="FutureProduct">
  <div className="container">
 <Row> 
 <Col xs={24} sm={24} md={16} lg={16} xl={16}>

<FeatureProductSlider/>
   </Col>
   <Col xs={24} sm={24} md={8} lg={8} xl={8}>
 <div className="advertisement">
 <a href="#"> <img src={require('../../img/adv.PNG')}/></a>
 </div>
 </Col>
 
 </Row>
 </div>

            </div>
       );
    }
  }
  

  export default FutureProduct;
  