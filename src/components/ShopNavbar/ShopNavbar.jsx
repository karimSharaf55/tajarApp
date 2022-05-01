import React from "react";
import { Row, Col } from 'antd';
import './ShopNavbar.css';
import "antd/dist/antd.css";
import { Button  ,Menu ,Dropdown ,Icon ,Input,MenuItemGroup} from 'antd';


const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);


class ShopNavbar  extends React.Component {
    
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
<div className="Shop-navbar MainNavbar"> 
<div className="container"> 

             <Row>
            
      <Col span={24}>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      
     
 
      <Menu.Item key="alipay">
          <a className="Shopnav-active" href="#" target="_blank" rel="noopener noreferrer"> Computers & Accessories 
</a>
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="#" target="_blank" rel="noopener noreferrer">Best Sellers</a>
        </Menu.Item>
         
     
         <Menu.Item key="alipay2">
          <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
    Deals <Icon type="down" />
    </a>
  </Dropdown>    
      </Menu.Item>

      
        <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer">Laptops </a>
        </Menu.Item>
        <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer">Printers</a>
        </Menu.Item>
        <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer">Tablets</a>
        </Menu.Item>
        <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer">Tablet Accessories</a>
        </Menu.Item>

          <Menu.Item key="alipay2">
          <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown>    
      </Menu.Item>

        


  <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer">Monitors </a>
        </Menu.Item>



  <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer">Computer Accessories</a>
        </Menu.Item>


  <Menu.Item key="alipay2">
          <a href="#" target="_blank" rel="noopener noreferrer"> Networking</a>
        </Menu.Item>






      
      </Menu>
      
      
      

      
      
     
      </Col>
    </Row>
            </div>
            </div>


       );
    }
  }
  
  export default ShopNavbar;
  