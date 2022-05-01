import React from "react";
import Slider from "react-slick";
import './Vendors.css';
import "antd/dist/antd.css";
import { Row, Col,Button,Divider ,Input ,Menu,Dropdown,Icon } from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import StarRatingComponent from 'react-star-rating-component';
import VendorSeller from "../VendoreSeller/VendoreSeller";
import ShopNavbar from "../ShopNavbar/ShopNavbar";

class Vendors  extends React.Component {
    constructor() {
        super();
     
        this.state = {
          rating: 4
        };
      }
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
	 render() { 

        const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
        const { rating } = this.state;

		return (

       


            <div className="vendors">
            <ShopNavbar/>
            <div className="container-fluid no-padding"> 
 <Row>
<Col span={24}>
<Carousel
showThumbs={false}
showStatus={false}>
    <div className="vendor-slider HomeSlider_caption-holder"> 
  
    <img src={require("../../img/vendoreslider.png")} />
    
    </div>
    <div>
    <img src={require("../../img/vendoreslider.png")} />
      
    </div>
    <div>
    <img src={require("../../img/vendoreslider.png")} />
    </div>
</Carousel>
</Col>

</Row>


</div>

<div className="vendors-holder container">
<Row gutter={16}>
<div className="vendors-holder__title">

<h3>  VENDORS </h3>


<h4> TRENDING Vendors</h4>

<Divider/>
</div>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>

  <VendorSeller/>
  </Col>
  <Col xs={24} sm={24} md={12} lg={6} xl={6}>


<VendorSeller/>
</Col>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>


<VendorSeller/>
</Col>
<Col xs={24} sm={24} md={12} lg={6} xl={6}>


<VendorSeller/>
</Col>

<Col xs={24} sm={24} md={24} lg={19} xl={19}>
<div className="vendors-sort clearfix">
<span className="vendors-sort_name">
<Input placeholder="Vendor Name" />

</span>
<span>
    <h3> Vendor Dep..</h3>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
    Choose Dep..<Icon type="down" />
    </a>
  </Dropdown>

</span>
<span>
    <h3> Vendor Rating :</h3>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
    Choose Dep.. <Icon type="down" />
    </a>
  </Dropdown>

</span>
<span>
    <h3> Vendor Rating :</h3>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
         1 <Icon type="down" />
    </a>
  </Dropdown>

</span>

<span className="vendor-search">

        <Button type="primary">Search</Button>

</span>


</div>

<div className="vendor-other">

<div className="vendors-holder__title">

<h4> TRENDING Vendors</h4>

<Divider/>
</div>
<Col xs={24} sm={24} md={12} lg={8} xl={8}>

<VendorSeller/>
</Col>
<Col xs={24} sm={24} md={12} lg={8} xl={8}>

<VendorSeller/>
</Col>
<Col xs={24} sm={24} md={12} lg={8} xl={8}>

<VendorSeller/>
</Col>
<Col xs={24} sm={24} md={12} lg={8} xl={8}>

<VendorSeller/>
</Col>
<Col xs={24} sm={24} md={12} lg={8} xl={8}>

<VendorSeller/>
</Col>
<Col xs={24} sm={8} md={12} lg={8} xl={8}>

<VendorSeller/>
</Col>
</div>

</Col>

<Col xs={24} sm={24} md={12} lg={5} xl={5}>
<div className="vendors-ads">
<img src={require("../../img/vendorspage.png")} />

</div>

</Col>
<div className="vendor-lastdvider">
<Divider/>
</div>
</Row>


</div>
</div>


       );
    }
  }
  
  export default Vendors;
  