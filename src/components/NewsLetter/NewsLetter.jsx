import React from "react";
import { Row, Col,Button, Input } from 'antd';
import './NewsLetter.css';
import "antd/dist/antd.css";
class NewsLetter  extends React.Component {
	 render() {     
		return (
            <div className="newsletter ourteam">
       <div className="container">
 <Row>
 <Col span={24}>
 <div className="ourteam-submit">
<h2>Your recently viewed items and featured recommendationss</h2>
<a href="#"><Button type="signin">SIGN IN</Button></a>
<p>to see a personalized recommendations</p>
<p className="Register">New Customer ?<a herf="#"> Register Now</a></p>
<h3>Join Our Newsletter</h3>
<Input className="inpt-email" type="email" placeholder="Enter your email" /><span><Button type="Subscribe">Subscribe</Button></span>
<h3>download our app</h3>
<a className="download"><img src={require('../../img/layer.png')}/></a>
</div>
 </Col>
 </Row>
 </div>
            </div>


       );
    }
  }
  
  export default NewsLetter;