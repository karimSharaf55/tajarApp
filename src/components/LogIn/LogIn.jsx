import React from "react";
import './LogIn.css';
import "antd/dist/antd.css";
import { Row, Col,Divider, Input,Checkbox,Button  } from 'antd';
import Copyright from "../Copyright/Copyright";
import NavbarWithLogo from "../NavbarWithLogo/NavbarWithLogo";
import MobileNav from "../MobileNav/MobileNav";
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  
class LogIn  extends React.Component {
	
	 render() {     
		return (
            <div className="LogIn Login-page">
            <MobileNav/>
          <NavbarWithLogo/>

<div className="LogIn-text">
<div className="container">
 <Row>
 <Col xs={24} sm={24} md={9} lg={9} xl={9}>
 <div className="sign-in sign-page">
 <h2>Sign in</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <Divider>OR</Divider>
 <p className="account">Sign in using your social media accounts</p>
 <div className="social first">
 <ul>
    <li><a herf="#"><i class="fa fa-facebook-f"></i></a></li>
    <li> <a herf="#"><i class="fa fa-twitter"></i></a></li>
    <li> <a herf="#"><i class="fa fa-google-plus"></i></a></li>
     </ul>
     </div>
     <Divider></Divider>
     <h2 className="header-second gray-color">Sign up</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <Divider>OR</Divider>
 <p className="account">Sign in using your social media accounts</p>
 <div className="social second">
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
 <h2>WELCOME BACK</h2>
 <p>Sign in</p>
 <Input className="input-email" placeholder="Email / Phone Number" />
 <Input.Password className="inpt-pass" placeholder="input password" />
 
 <Checkbox onChange={onChange}>Remember me</Checkbox>
 <span className="login-forgot__password"> <a herf="#">forgot Password</a></span>
 <br></br>
 <a href="#"><Button className="submit" type="signin">Sign in</Button></a>
 <Divider>New at Tujjar.com</Divider>
 <a href="../auth/register"><Button className="submit-account" type="signin">Create Your Tujjar Account</Button></a>
 </div>
 </Col>
 <Col span={24}>

 <div className="login-settings">
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
  