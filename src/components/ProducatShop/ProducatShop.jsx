import React from "react";
import './ProducatShop.css';
import "antd/dist/antd.css";
import { Row, Col,Button,Divider } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
class Home  extends React.Component {
	
	 render() {     
		return (
            <div className="ProducatShop">
<div className="container">
 <Row gutter={24}>
 <Col xs={24} sm={8} md={8} lg={8} xl={8}>
 {/* <ScrollAnimation animateIn="fadeInLeft"
 animatePreScroll={false}> */}
 <div className="ProducatShop-headr">
 <a href="#">

 <div className="ProducatShop-tilte">
 <h2>Renewed computers</h2>
<span>SHOP<a href="#"><Button type="primary">NOW</Button></a></span>
<p>on tujjar renewed</p>
 </div>
 <img src={require('../../img/produact1.png')}/>
 </a>
 
 </div>
 {/* </ScrollAnimation> */}
 </Col>

 <Col xs={24} sm={8} md={8} lg={8} xl={8}>
 {/* <ScrollAnimation animateIn="fadeIn"
 animatePreScroll={false}> */}
 <div className="ProducatShop-headr">
 
 <div className="ProducatShop-tilte">
 <h2>enhanced Handmade</h2>
<span>SHOP<a href="#"><Button type="primary">NOW</Button></a></span>
<p>on tujjar renewed</p>
 </div>
 <img src={require('../../img/produact2.png')}/>
 </div>
{/* </ScrollAnimation> */}
</Col>
<Col xs={24} sm={8} md={8} lg={8} xl={8}>
 {/* <ScrollAnimation animateIn="fadeInRight" 
 animatePreScroll={false}> */}
<div className="ProducatShop-headr">
<div className="ProducatShop-tilte">
 <h2>Feel-good products</h2>
<span>SHOP<a href="#"><Button type="primary">NOW</Button></a></span>
<p>on tujjar renewed</p>
 </div>
<img src={require('../../img/produact.png')}/>
</div>
{/* </ScrollAnimation> */}
</Col>
</Row>
</div>



            </div>


       );
    }
  }
  
  export default Home;
  