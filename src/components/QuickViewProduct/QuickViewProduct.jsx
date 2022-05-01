
import React from "react";
import { Row, Col,Button, Input ,Icon ,Divider ,Modal ,Menu,Dropdown ,InputNumber} from 'antd';
import "antd/dist/antd.css";
import './QuickViewProduct.css';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import CountdownTimer from "react-component-countdown-timer";
import StarRatingComponent from 'react-star-rating-component';
function handleMenuClick(e) {
    console.log('click', e);
    }
    const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
    );

class  QuickViewProduct extends React.Component {
    constructor() {
        super();
     
        this.state = {
          rating: 4
        };
      }
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
     }

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
    const { rating } = this.state;

    function callback(key) {
      console.log(key);
    }
         
return (
<div className="Quiq-View-Modal">
    <Col span={24}>
    <div>
        
     
         <div className="single-shop-border">
    <Row gutter={24}>
        <Col span={10}>
        <div className="singleshop_slider">
            <Carousel>
                <div>
                    <img src={require("../../img/single1.png")} />
                </div>
                <div>
                    <img src={require("../../img/single1.png")} />
                </div>
                <div>
                    <img src={require("../../img/single1.png")} />
                </div>
                <div>
                    <img src={require("../../img/single1.png")} />
                </div>
            </Carousel>
        </div>
        </Col>
        <Col span={14}>
        <div className="singleshop_detailes">
            <div className="singleshop_detailes-title">
                <h3> Ladies Michael Kors Access Bradshaw WearOS Bluetooth Watch</h3>
            </div>

            <div className="singleshop-reviewproduct"> 
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="singleshop-content-rating">  ( 16340 )</span> 
      <span className="singleshopcustomer-review"> Customer Reviews</span>
      </div>
            <div className="singleshop-price">
                <span className="singleshop-mainprice"> 750L.E
                </span>
                <span className="singleshop-wasprice">1000L.E</span>
            </div>
            <div className="singleshop-tax">
                <h3>Value-added tax INCLUDES</h3>
            </div>
            <div className="singleshop-stock">
                <span>
                    <Icon type="check-circle" />
                </span>
                <span> In Stock</span>
            </div>
            <div className="singleshop-ship">
                <span>
                    <Icon type="warning" />
                </span>
                <span> This item does not ship to Egypt.</span>
            </div>
            <div className="singleshop-Manufacture">
                <span> Product Manufacture :  </span> 
                <Button className="orginal" > Original</Button>
                <Button className="used" type="dashed">Used</Button>
                <Button className="Renewed" type="dashed">Renewed</Button>
                <Divider/>
            </div>
            <div className="singleshop-description">
                <h3>Product Details : </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dLorem ipsum dolor sit amet, 
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <Divider/>
            </div>
            <div className="singleshop-options">
                <span>Color : </span>
                <span className="singleshop-options-btn">
                    <Dropdown overlay={menu}>
                        <Button>
                            Choose a colour 
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                </span>
                <span>Size : </span>
                <span className="singleshop-options-btn">
                    <Dropdown overlay={menu}>
                        <Button>
                            Choose a size 
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                </span>
                <span>Qty : </span>
                <span className="singleshop-options-btn">
                    <InputNumber defaultValue="1" min="1" />
                </span>
                <Divider/>
            </div>
            <div className="singleshop-addcart__info">
                <Button type="primary" icon="download">
                Add to cart
                </Button>
                <Button type="primary" icon="download">
                Buy Now
                </Button>
                
            </div>
         
        </div>
        </Col>

    </Row>
    </div>
      </div>
    </Col> 
</div>
);
}
}
export default   QuickViewProduct
;
