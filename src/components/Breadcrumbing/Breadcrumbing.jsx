
import React from "react";
import { Row, Col,Button, Input ,Icon ,Divider,Breadcrumb} from 'antd';
import "antd/dist/antd.css";
import './Breadcrumbing.css';
import Slider from "react-slick";
class   Breadcrumbing extends React.Component {
render() {  
return (
<div className="breadcrumbing">
<Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
  
    <Breadcrumb.Item>Women</Breadcrumb.Item>
    <Breadcrumb.Item>Watch</Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <span>Ladies Michael Kors Access Bradshaw WearOS Bluetooth Watch MKT5001</span>
    </Breadcrumb.Item>
  </Breadcrumb>
</div>
);
}
}
export default  Breadcrumbing
;
