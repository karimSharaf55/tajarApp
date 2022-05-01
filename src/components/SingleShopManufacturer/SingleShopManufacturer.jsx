import React from "react";
import { Row, Col,Button, Tabs,Icon ,Input , Pagination } from 'antd';
import './SingleShopManufacturer.css';
import "antd/dist/antd.css";


class SingleShopManufacturer  extends React.Component {

    

	 render() {  
   
		return (

   <div className="SingleShopManufacturer container"> 
   <div class="title-header">
    <div class="title-header-headerleft">
        <h2>From the manufacturer</h2>
    </div>
    <div class="title-header-headerright">
        <p>Discover   </p>
        <a href="#"><button type="button" class="ant-btn ant-btn-primary">More</button></a>
    </div>
    <div class="ant-divider ant-divider-horizontal"></div>
</div>
<Col span={24}>

 <a href="#"> <img  className="SingleShopManufacturer-hirzontal"  src={require("../../img/manfructure1.png")} /> </a>

</Col>

<Col span={8}>
<a href="#"> <img className="SingleShopManufacturer-image" src={require("../../img/manfructure2.png")} />  </a>

</Col>

<Col span={8}>
<a href="#"><img   className="SingleShopManufacturer-image"  src={require("../../img/manfructure3.png")} /> </a>

</Col>
<Col span={8}>
<a href="#"><img  className="SingleShopManufacturer-image"  src={require("../../img/manfructure4.png")} /> </a>

</Col>
              
            </div>


       );
    }
  }
  
  export default SingleShopManufacturer;
  