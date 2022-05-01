
import React from "react";
import { Row, Col,Button, Input ,Icon ,Divider,Modal} from 'antd';
import "antd/dist/antd.css";
import './HotDealProduct.css';
import Slider from "react-slick";
import CountdownTimer from "react-component-countdown-timer";
import QuickViewProduct from "../QuickViewProduct/QuickViewProduct";
class   HotDealProduct extends React.Component {
    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
render() {  
return (
<div className="FeaturesDeal-item">

   <div>
       
        <Modal
          title="About My Product"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <QuickViewProduct/>
        </Modal>
      </div>
      
    <Col span={24}>
    <div className="product-grid4">
        <div className="product-image4">
        <div className="image-holder">
            <a href="../home/singleproduct">
            <img className="pic-1" src={require("../../img/img-5.jpg")} />
            <img className="pic-2" src={require("../../img/img-6.jpg")} />
            </a>
            </div>
            <ul className="social">
            {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
                <li><a  onClick={this.showModal} data-tip="Quick View"><i className="fa fa-eye" /></a></li>
                <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
            </ul>
            <span className="product-timerlabel">
            <CountdownTimer count={9932} showTitle size={12} labelSize={10}/>

            </span>
            <a href="#">
            <span className="product-discount-label">
                <Icon type="heart" />
            </span>
           </a>
           <a href="#">
            <span className="product-discount-label2">
                <Icon type="eye" />
            </span>
            </a>
        </div>
        <Divider />

        <div className="product-content">
            <h3 className="title"><a href="../home/singleproduct">Samsung new Wireless Charging Pad 
                25cm distance -  More Devices .</a>
            </h3>
            <div className="price">
                9000.00 L.E
            </div>
            <span className="price-was">860.00 L.E</span>
        </div>
    </div>
    </Col> 
</div>
);
}
}
export default   HotDealProduct
;
