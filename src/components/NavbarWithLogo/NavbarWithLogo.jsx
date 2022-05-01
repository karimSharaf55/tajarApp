import React from "react";
// import './NavbarTop.css';
import { Row, Col, Divider } from 'antd';
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon  } from 'antd';
import Grid from "antd/lib/card/Grid";
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">2nd menu item</a>
    </Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class NavbarWithLogo  extends React.Component {
	 render() {  
        
		return (
<div className="topnavbar">
<div className="container">
 <Row>
 <Col span={9}>
  <div className="service">
  <div className="service-num">
 <img src={require('../../img/forma-1.png')}/> 
 <span>+012 (345) 678-901</span>
 <img src={require('../../img/email.png')}/> 
 <span>info@yourdomain.com</span>
</div>
</div>
</Col>

<Col span={5}>
<div className="navbarwithlogo clearfix">
<a href="/home"> 
<div className="eee">
<img  className="navbar-bottom__logo" src={require("../../img/logo.png")} />

</div> 
</a>
</div>

</Col>
<Col span={9}>
<div className="countery">
<div className="countery-select">
<img src={require('../../img/layer-2.png')}/> 
<Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
      English <Icon type="down" />
    </a>
  </Dropdown>
 <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
     <span><img src={require('../../img/usd.svg')}/>USD </span> <Icon type="down" />
    </a>
  </Dropdown>
 </div>
</div>
</Col>
</Row>
<Divider/>
       </div>
    

</div>
       );
    }
  }
  
  export default NavbarWithLogo;
  