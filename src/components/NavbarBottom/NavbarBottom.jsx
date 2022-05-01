import React from "react";
import { Row, Col } from 'antd';
import './NavbarBottom.css';
import "antd/dist/antd.css";
import { Button  ,Menu ,Dropdown ,Icon ,Input} from 'antd';
const Search = Input.Search;

const menu = (
  <Menu>
     <Menu.Item key="0">
      <a href="../home/">Home</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="../home/shop">Shop</a>
    </Menu.Item>
    <Menu.Item key="2">
    <a href="../home/singleproduct">Single Product</a>
    </Menu.Item>
   
    <Menu.Item key="3">
    <a href="../home/vendors">Vendors</a>
    </Menu.Item>
    <Menu.Item key="4">
    <a href="../auth/checkout">Chekout</a>
    </Menu.Item>
    <Menu.Item key="5">
    <a href="../auth/login">Login</a>
    </Menu.Item>
    <Menu.Item key="6">
    <a href="../auth/register">Register</a>
    </Menu.Item>
    <Menu.Item key="7">
    <a href="../home/shopingcart"> Shopingcart</a>
    </Menu.Item>
    <Menu.Item key="8">
    <a href="../home/emptycart">Empty Shoping cart</a>
    </Menu.Item>
    <Menu.Item key="9">
    <a href="../home/contactus">Contact Us</a>
    </Menu.Item>
    <Menu.Item key="10">
    <a href="../home/userprofile">User Profile</a>
    </Menu.Item>
   
    <Menu.Item key="11">
    <a href="../auth/orderpreview">Order Preview</a>
    </Menu.Item>
  </Menu>
);

class NavbarBottom  extends React.Component {
	
	 render() {     
		return (
<div className="navbarbottom-holder">
            <div className="navbarbottom container">
             <Row>
        <Col xs={0} sm={0} md={0} lg={4} xl={4}>

       <a href="/home">   <img  className="navbar-bottom__logo" src={require("../../img/logo.png")} /></a>
      </Col>
      <div className="navbarbottom-category">
     
      <Col xs={24} sm={24} md={0} lg={12} xl={12}>
      <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
    All Category <Icon type="down" />
    </a>
  </Dropdown>
  <div>
    <Search className="navbarbottom-search"
      placeholder="Search anything here.."
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /><br />
   
    
  </div>
      </Col>
      </div>


      <Col xs={0} sm={0} md={0} lg={8} xl={8}>

<div className="navbarbottom-holder">

<span>
  <div className="navbarbottom-img">
  
<img src={require("../../img/heart.svg")} />
</div>
<div className="navbarbottom-details">

   <a href="#"><h3>Go to your </h3>   </a>
  <a href="#"> <p> Wishlist </p>  </a>  
</div>
</span>




<span>
  <div className="navbarbottom-img">
  
<img src={require("../../img/user.svg")} />
</div>
<div className="navbarbottom-details">

   <a href="#"><h3>Hello, Guest</h3>   </a>
  <a href="../home/userprofile"> <p> Your Account </p>  </a>  
</div>
</span>


<span>
  <div className="navbarbottom-img">
  
<img src={require("../../img/cartnav.svg")} />
</div>
<div className="navbarbottom-details">

   <a href="#"><h3>33 item ( s )</h3>   </a>
  <a href="../home/shopingcart"> <p> Your Cart </p>  </a>  
  
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
  
  export default NavbarBottom;
  