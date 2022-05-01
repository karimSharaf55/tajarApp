import React from "react";
import { Row, Col } from 'antd';
import './MobileNav.css';
import "antd/dist/antd.css";
import { Button  ,Menu ,Dropdown ,Icon ,Input} from 'antd';
import MobileMenu from "../MobileMenu/MobileMenu";


class MobileNav  extends React.Component {
	
	 render() {     
		return (
<div className="mobilenav-holder">
            <div className="mobilenav container">
             <Row>
        <Col xs={10} sm={8} md={14} lg={0} xl={0}>
        <MobileMenu/>

       <a href="/home">   <img  className="mobilenav__logo" src={require("../../img/logo.png")} /></a>
      </Col>
      <div className="mobilenav-category">
     
     
      </div>


      <Col xs={14} sm={8} md={10} lg={8} xl={8}>

<div className="mobilenav-holder">

<span>
  <div className="mobilenav-img">
  
<img src={require("../../img/heart.svg")} />
</div>
<div className="mobilenav-details">

</div>
</span>




<span>
  <div className="mobilenav-img">
  <a href="../home/userprofile"> 

<img src={require("../../img/user.svg")} />
</a>
</div>
<div className="mobilenav-details">

</div>
</span>


<span>
  <div className="mobilenav-img">
  <a href="../home/shopingcart"> 
<img src={require("../../img/cartnav.svg")} />
</a> 
</div>

<div className="mobilenav-details">

 
  
</div>
</span>

</div>
      </Col>
    </Row>
            </div>
            </div>


       );
    }
  }
  
  export default  MobileNav;
  