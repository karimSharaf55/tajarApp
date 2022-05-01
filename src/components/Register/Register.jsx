import React from "react";
import './Register.css';
import "antd/dist/antd.css";
import { Row, Col,Divider, Input,Checkbox,Button  } from 'antd';
import NavbarWithLogo from "../NavbarWithLogo/NavbarWithLogo";
import Copyright from "../Copyright/Copyright";
import MobileNav from "../MobileNav/MobileNav";

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

class LogIn  extends React.Component {
	
	 render() {     
		return (
            <div className="Regisrt-page LogIn">
            <MobileNav/>
          <NavbarWithLogo/>

<div className="LogIn-text">
<div className="container">
 <Row>
 <Col xs={24} sm={24} md={9} lg={9} xl={9}>

 <div className="sign-in gray-color rigster-page">
 <h2>Sign in</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <Divider>OR</Divider>
 <p className="account">Sign in using your social media accounts</p>
 <div className="social custom">
 <ul>
    <li><a herf="#"><i class="fa fa-facebook-f"></i></a></li>
    <li> <a herf="#"><i class="fa fa-twitter"></i></a></li>
    <li> <a herf="#"><i class="fa fa-google-plus"></i></a></li>
     </ul>
     </div>
     <Divider></Divider>
     <h2 className="header-second  cusotm">Sign up</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <Divider>OR</Divider>
 <p className="account">Sign in using your social media accounts</p>
 <div className="social">
 <ul>
    <li><a herf="#"><i class="fa fa-facebook-f"></i></a></li>
    <li> <a herf="#"><i class="fa fa-twitter"></i></a></li>
    <li> <a herf="#"><i class="fa fa-google-plus"></i></a></li>
     </ul>
     </div>
     </div>
 </Col>
 <Col xs={24} sm={24} md={15} lg={15} xl={15}>

 <div className="creat-account">
 <h2 className="add-account">Create account</h2>
 <Input className="input-email" placeholder="Your Name" />
 <Input className="input-email" placeholder="E-Mail" />
 <Input.Password className="inpt-pass" placeholder="input password" />
 <Input.Password className="inpt-pass" placeholder="Repeat Password" />
 <a className="register" href="#"><Button className="submit" type="signin">Create Your Tujjar Account</Button></a>
 <Checkbox className="check" onChange={onChange}> By creating an account you agree to Tujjar's <a className="service" herf="#" > Conditions of Use & Sale.  </a> Please see our
 <a className="service" herf="#" > Privacy Notice </a>, our Cookies Notice and our <a className="service" herf="#" > Interest-Based Ads Notice.</a> </Checkbox>
 <br></br>
 <div className="register-add">
 <a href="#"><Button className="submit-account" type="signin">Are you a Vendor ?</Button></a>
 </div>
 </div>
 </Col>
 <Col span={24}>

 <div className="setting-holder">
<ul className="setting">
<li><a herf="#">Conditions of Use</a></li>
<li><a herf="#"> Privacy Notice</a></li>
<li><a herf="#">   Help </a></li>
<li><a herf="#">Cookies Notice </a></li>
<li><a herf="#"> Interest-Based</a></li>
<li><a herf="#">Ads Notice </a></li>
</ul>
 </div>
</Col>
 </Row>
 </div>



</div>
<Copyright/>

            </div>


       );
    }
  }
  
  export default LogIn;
  