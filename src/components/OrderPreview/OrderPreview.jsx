import React from "react";
import { Row, Col,Button, Divider,Checkbox} from 'antd';
import './OrderPreview.css';
import NavbarWithLogo from "../NavbarWithLogo/NavbarWithLogo";
import Copyright from "../Copyright/Copyright";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileNav from "../MobileNav/MobileNav";
import StepWizard from "../StepWizard/StepWizard";


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

class OrderPreview  extends React.Component {
	
	 render() {     

    
		return (
            <div className="OrderPreview">
            <MobileNav/>
            <NavbarWithLogo/>
             
<div className="container">
<Col lg={{ span: 16, offset: 4 }}>

<StepWizard/>
</Col>

<div className="OrderPreview-holder-all">
<Row gutter={24}>

     <Col xs={24} sm={24} md={12} lg={12} xl={12}>

 <div className="OrderPreview-header">
 <h2>Preview and Place Order</h2>
 <h3>Dispatching to :</h3>
 <p>Mahmoud Abdallah Seif El Nasr,
 9th  Hafez Ramadan St. Off Ahmed Fakhry St, Cairo, Egypt, 12345</p>
 </div>
 <div className="OrderPreview-holder">
 <img src={require("../../img/previw.PNG")} />
 <div className="OrderPreview-adress">
 <h2>Logitech C270 Desktop or Laptop Webcam,HD 720p
Widescreen for Video Calling and Recording</h2>
<a href="#"><i class="fa fa-check-circle"></i>In Stock</a><span>Quantity : 1</span>
 <p>Shipped from: Tujjar.com Shopping Mall</p>
 <Button className="submit" type="signin">Change Order or delete</Button>
 </div>
 </div>
 <Divider/>
 <div className="OrderPreview-holder">
 <img src={require("../../img/previw.PNG")} />
 <div className="OrderPreview-adress">
 <h2>Logitech C270 Desktop or Laptop Webcam,HD 720p
Widescreen for Video Calling and Recording</h2>
<a href="#"><i class="fa fa-check-circle"></i>In Stock</a><span>Quantity : 1</span>
 <p>Shipped from: Tujjar.com Shopping Mall</p>
 <Button className="submit" type="signin">Change Order or delete</Button>
 </div>
 </div>
 <div className="OrderPreview-delivery">
 <h2>Choose a delivery option:</h2>
 <p>Global Delivery made easy by Amazon. Package tracking with import fee deposit estimated and 
customs clearance on your behalf. 
</p>
<Checkbox className="check" onChange={onChange}>Thursday, April 11</Checkbox><br></br>
<h4>Tujjar.com Shopping Mall</h4>
 </div>
 
 </Col>
 
 <Col xs={24} sm={24} md={12} lg={12} xl={12}>
 
 <div className="OrderPreview-place">
 <Button className="submit" type="signin">PLACE ORDER</Button>
 <h2>to see a personalized recommendations</h2>
 <p>New Customer ? <a href="#"> Register Now</a></p>

 
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
  
  export default OrderPreview;
  