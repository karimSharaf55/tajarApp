import React from "react";
import { Row, Col,Button } from 'antd';
import './ProductColumn.css';
import "antd/dist/antd.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
class ProductColumn  extends React.Component {


	 render() {     
		return (

            <div className="productCoulmn"> 
<div className="container">
<Row gutter={8}>
 <Col   id="first" xs={12} sm={12} md={6} lg={6} xl={6}>
 {/* <ScrollAnimation animateIn="fadeInLeft"
 animatePreScroll={false}> */}

 <div className="ProductColumn-left">
 <div className="ProductColumn-title">
 <h2>Creative wood</h2>
 <p>The primary idea of modern furniture</p>
 <p>SHOP<span><a href="#"><Button type="primary">NOW</Button></a></span></p>
 </div>
 <a href="#"> <img src={require('../../img/1.jpg')}/> </a>
<div className="product-overlay">
</div>
</div>
{/* </ScrollAnimation> */}

 </Col>

 <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
 <Col  className="no-padding" xs={24} sm={24} md={24} lg={24} xl={24}>
 {/* <ScrollAnimation animateIn="fadeInDown"
 animatePreScroll={false}> */}
 <div className="ProductColumn-center">
 <div className="product-overlay">
</div>
 <div className="ProductColumn-center-title">
 <h2>Big fetival for fashion</h2>
 <strong>25%</strong>
 <p>28th - 30th, Dec, 2019</p>
 </div>
 <a href="#"><img src={require('../../img/3.jpg')}/> </a>
 
 </div>
 {/* </ScrollAnimation> */}
 </Col>
 {/* <ScrollAnimation animateIn="fadeInUpBig"
 animatePreScroll={false}> */}
 <Col span={12} className="no-padding">
 <div className="ProductColumn-bottom">
 <div className="product-overlay">
</div>
 <div className="ProductColumn-bottom-title">
 <h2>cooking and dining</h2>
 <p>OFFERS & DEALS</p> <div className="productcoulmn__btn-holder">SHOP<a href="#"><Button type="primary">NOW</Button></a>

 </div>

 </div>
 <img src={require('../../img/5.jpg')}/> 
 </div >
 </Col>
 <Col span={12}>
 <div className="image-right">
 <div className="product-overlay">
</div>
 <div className="ProductColumn-image-title">
 <h2>flowerpot</h2>
 <p>HOUSE DECORATING</p>
 </div>
 <a href="#"><img src={require('../../img/4.jpg')}/>  </a>

 </div>
 </Col>
 {/* </ScrollAnimation> */}

 </Col>

 <Col  id="second" xs={12} sm={12} md={6} lg={6} xl={6}>
 {/* <ScrollAnimation animateIn="fadeInRight"
 animatePreScroll={false}> */}
 <div className="ProductColumn-right">
 <div className="ProductColumn-title">
 <h2>Creative wood</h2>
 <p>The primary idea of modern furniture</p>
 <p>SHOP<span><a href="#"><Button type="primary">NOW</Button></a></span></p>
 </div>
 <a href="#"><img src={require('../../img/2.jpg')}/>   </a>

 <div className="product-overlay">
</div>
</div>


{/* </ScrollAnimation> */}
 </Col>
 </Row>
 </div>
            </div>


       );
    }
  }
  
  export default ProductColumn;
  