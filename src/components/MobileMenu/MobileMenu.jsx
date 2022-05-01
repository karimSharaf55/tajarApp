import React from "react";
import { Row, Col,Input,Checkbox,Button,Select,DatePicker, Divider ,Icon} from 'antd';
import './MobileMenu.css';
import Contactlocation from "../Contactlocation/Contactlocation";
import { slide as Menu } from 'react-burger-menu'

const { TextArea } = Input;

class MobileMenu  extends React.Component {
    
    showSettings (event) {
        event.preventDefault();
      
      }
      
    
	 render() {     
		return (
            <div className="MobileMenu">
           <div className="container">
           <Menu noOverlay >
        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>
        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>
        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>
        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>

        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>

        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>

        <a id="home" className="menu-item" href="/"> <Icon type="check-circle" />Home</a>
      </Menu>
    
           </div>
            </div>


       );
    }
  }
  
  export default MobileMenu;
  