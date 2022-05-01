import React from "react";
import { Row, Col,Input,Checkbox,Button,Select,DatePicker, Divider,Menu,Icon,Dropdown} from 'antd';
import './ContactUs.css';
import Contactlocation from "../Contactlocation/Contactlocation";
import Breadcrumbing from "../Breadcrumbing/Breadcrumbing";

const { TextArea } = Input;
class ContactUs  extends React.Component {
	
	 render() { 
    function handleMenuClick(e) {
      console.log('click', e);
    }
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">i have problem in buy product </Menu.Item>
        <Menu.Item key="2">i have problem in shipping product </Menu.Item>
        <Menu.Item key="3">i have problem when login page </Menu.Item>
      </Menu>
    );
    
        
		return (
            <div className="ContactUs">
           <div className="container">
           <Row gutter={16}>
      <div className="contactus-location" >   
      <Breadcrumbing/>
      <Divider/>     
      <h2 className="contactus-header">Find our locations and branches on the map</h2>
      <Col xs={24} sm={24} md={12} lg={9} xl={9}>
 <ul className="il">
<li>

 <Contactlocation/>
 </li>

<li>

<Contactlocation/>
</li>
<li>

 <Contactlocation/>
 </li>

 </ul>

 </Col>
 <Col xs={24} sm={24} md={12} lg={15} xl={15}>
 <div className="contactus-map">
 {/* <img src={require('../../img/map.PNG')}/> */}
 <div className="mapouter">
 
 <div className="gmap_canvas"><iframe width={825} height={409} id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.pureblack.de" /></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:409px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:409px;width:auto !important;}" }} /></div>
 </div>
 </Col>
 </div>

 <Col span={24} className="contactus-issue">
<h2>Contact for an issue</h2>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>
<Button className="activeone" type="primary">An order I placed</Button>
</Col>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>
<Button type="primary">Devices</Button>
</Col>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>
<Button type="primary">Digital Content & Service</Button>
</Col>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>
<Button type="primary">Ask for something else</Button>
</Col>
</Col>


<Col span={24} className="contact-order">
<h2>Here’s a recent order</h2>
<p>We’re sorry, we couldn’t find a recent order for this account.</p>
<Button type="primary">Choose Different Order</Button>
<h3>Tell us More</h3>
<Dropdown overlay={menu}>
      <Button>
      Plese make a selection <Icon type="down" />
      </Button>
    </Dropdown>
</Col>
</Row>
 </div>
<Col span={24} className="contactus-message">
<Col xs={24} sm={24} md={12} lg={12} xl={12}>
<div className="contactus-message-input">
<h2>Drop us  a message</h2>
<Input placeholder="Full Name*:" />
<Input placeholder="E-Mail*:" />
<Input placeholder="Subject*:" />
<TextArea placeholder="Comments*:" rows={4} />
<br></br>
<Button type="primary">send
</Button>

</div>

</Col>
<Col xs={24} sm={24} md={12} lg={12} xl={12}>
<div className="contactus-faq-holder">
<div className="contactus-faq">
<h2>Help Center & faq</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <Button type="primary">Go TO HELP CENTER AND FAQ</Button>
 <h3>quick solutions</h3>
 <ul className="contactus-quick">
 <li>Your orders, track & return orders</li>
 <li>Devices & Contents</li>
<li>Payment methods settings</li>
 </ul>
<h3>Other</h3>
<ul className="contactus-quick">
<li>Return or replace intems</li>
<li>Manage address book</li>
<li>Change Name, Email Or Password</li>
</ul>
</div>
</div>
</Col>
</Col>





            </div>


       );
    }
  }
  
  export default ContactUs;
  