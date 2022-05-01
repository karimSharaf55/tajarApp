import React from "react";
import { Row, Col,Button, Input ,Icon ,Dropdown ,Menu,Divider,InputNumber} from 'antd';
import "antd/dist/antd.css";
import './SingleShop.css';
import ShopSidebar from "../ShopSidebar/ShopSidebar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRatingComponent from 'react-star-rating-component';
import { Carousel } from 'react-responsive-carousel';
import SingleShopSellers from "../SingleShopSellers/SingleShopSellers";
import SingleShopSpecifications from "../SingleShopSpecifications/SingleShopSpecifications";
import ShopNavbar from "../ShopNavbar/ShopNavbar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import FeatureDealProduct from "../FeatureDealProduct/FeatureDealProduct";
import FeaturesDeal from "../FeaturesDeal/FeaturesDeal";
import FeatureProductSlider from "../FeatureProductSlider/FeatureProductSlider";
import SingleShopManufacturer from "../SingleShopManufacturer/SingleShopManufacturer";
import FutureProduct from "../FutureProduct/FutureProduct";
import Breadcrumbing from "../Breadcrumbing/Breadcrumbing";
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
class   SingleShop  extends React.Component {

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
    const { rating } = this.state;

    function callback(key) {
      console.log(key);
    }
          
return (
    <div>
<ShopNavbar/>
   
<div className="container">
<Breadcrumbing/>
<div className="single-shop-border">
    <Row gutter={24}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

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
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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
                <span className="singleshop-share__product">  Share This Product :</span>
                <a href="#">
                    <Icon className="singleshop-share__icon" type="facebook" />
                </a>
                <a href="#">
                    <Icon  className="singleshop-share__icon" type="twitter" />
                </a>
                <a href="#">
                    <Icon  className="singleshop-share__icon" type="youtube" />
                </a>
                <a href="#">
                    <Icon  className="singleshop-share__icon" type="instagram" />
                </a>
            </div>
            <div className="clearfix"></div>
            <div className="singleshop-seller">
                <div className="singleshop-seller-image">
                    <img src={require("../../img/singleseller.png")} />
                </div>
                <div className="singleshop-seller__info">
                    <h3> <b> Seller  </b>: Michael Kors Marketplace .</h3>
                    <p>  <b> Payment Method  </b>  : Cash On Delivery -  Online Payment .</p>
                    <div>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="singleshop-content-rating">  ( 16340 )</span> 
      </div>

                    
                </div>
                
            </div>
        </div>
        </Col>

    </Row>
    </div>
    <SingleShopSellers/>
    <div className="singleshop_form-reviewmore">
    <SingleShopSpecifications/>
    
    </div>
    <SingleShopManufacturer/>
    <FutureProduct/>
    </div>
</div>

);
}
}
export default SingleShop;