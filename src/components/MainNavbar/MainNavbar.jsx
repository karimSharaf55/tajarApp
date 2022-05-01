import React from "react";
import { Row, Col } from 'antd';
import './MainNavbar.css';
import "antd/dist/antd.css";
import { Button  ,Menu ,Dropdown ,Icon ,Input,MenuItemGroup ,Divider} from 'antd';


const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Cairo
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Alexandria
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Mansora
      </a>
    </Menu.Item>
  </Menu>
);
class MainNavbar  extends React.Component {
    
    state = {
        current: 'mail',
      }
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    
	 render() { 
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        
        
		return (
<div className="MainNavbar"> 
<div className="container"> 

             <Row>
             <Col span={4}>
             <div className="MainNavbar-location">
             <img src={require("../../img/location.svg")} />
             <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
    define<Icon type="down" />
    <p> Your Location</p>
    
    </a>
  </Dropdown>
<h6> </h6>

  </div>
              </Col>
      <Col span={20}>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      
        <SubMenu key="sub2" title={<span className="mainnavbar-shopby"><i class="fa fa-bars"></i> <a className="ant-dropdown-link" href="#">
    Shop By<Icon type="down" />
    <p> Departments</p>
    
    </a></span>}>
      <Menu.Item key="5">Option 5</Menu.Item> 
      <SubMenu className="mainnavbar-menu" key="sub3" title="Submenu">
      
       <Col span={8}>
                            <div className="footer-details">
                            
                                <h3>   Contact info: </h3>
                                  
                                <h5> Lorem ipsum dolor sit amet, consectetur adi.</h5>
                            </div>
                        </Col>
                      
                        <Col span={8}>
                            <div className="footer-links">
                                <div className="footer_links-title">
                                    <h3>CUSTOMER SERVICE</h3>
                                </div>
                                <ul className="Main-navbar footer-menu">
                                    <li> <a href="#"><Icon type="right" />  Contact Us  </a> </li>
                                    <li>  <a href="#"><Icon type="right" />  Returns  </a></li>
                                    <li>  <a href="#"><Icon type="right" /> Order History </a></li>
                                    <li>  <a href="#"><Icon type="right" />  Track Order  </a></li>
                                    <li>  <a href="#"><Icon type="right" /> My Account </a></li>
                                    <li>  <a href="#"><Icon type="right" /> Site Map</a></li>

                                </ul>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="footer-links">
                                <div className="footer_links-title">
                                    <h3>CUSTOMER SERVICE</h3>
                                </div>
                                <ul className="Main-navbar footer-menu">
                                <li> <a href="#"><Icon type="right" />  Contact Us  </a> </li>
                                    <li>  <a href="#"><Icon type="right" />  Returns  </a></li>
                                    <li>  <a href="#"><Icon type="right" /> Order History </a></li>
                                    <li>  <a href="#"><Icon type="right" />  Track Order  </a></li>
                                    <li>  <a href="#"><Icon type="right" /> My Account </a></li>
                                    <li>  <a href="#"><Icon type="right" /> Site Map</a></li>

                                </ul>
                            </div>
                        </Col>
                       
          
      </SubMenu>
    </SubMenu>
   
 
      

        <Menu.Item key="alipay">
          <a href="/home/shop" rel="noopener noreferrer">SHOP PAGE</a>
        </Menu.Item>
         
     
        <Menu.Item key="alipay">
          <a href="/home/singleproduct" rel="noopener noreferrer">SINGLE PRODUCT</a>
        </Menu.Item>
        <Divider type="vertical" />

        <Menu.Item key="alipay2">
          <a href="../auth/login" rel="noopener noreferrer">LOGIN AND REGISTER</a>
        </Menu.Item>
         <Menu.Item key="free" className="mainli"> 
         <img src={require("../../img/freeshipphing.svg")} />
          FREE SHIPPING OFFERS
        </Menu.Item>
        <Menu.Item key="help">
        <img src={require("../../img/needhelp.svg")} />

                    NEED A HELP
        </Menu.Item>
      </Menu>
      
      
      

      
      
     
      </Col>
    </Row>
            </div>
            </div>


       );
    }
  }
  
  export default MainNavbar;
  