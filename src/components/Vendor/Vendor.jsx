import React from "react";
import { Row, Col,Input,Checkbox,Button,Select,DatePicker,Rate,BackTop,Divider} from 'antd';
import './Vendor.css';
import StarRatingComponent from 'react-star-rating-component';
import Vendorcategory from "../Vendorcategory/Vendorcategory";
import ShopNavbar from "../ShopNavbar/ShopNavbar";
import ProductsItem from "../ProductsItem/ProductsItem";
class Vendor extends React.Component {
    render() {
        return (  
<div>
    <div className="vendorpage build">
        <ShopNavbar/>
        <div className="container">
            <Row gutter={16}>
                <Col span={24}>
                <div className="vendor-adv">
                    <a href="#"><img src={require('../../img/NB.PNG')}/></a>
                    <h2 className="diffrentcolor">NEW BALANCE</h2>
                    <ul className="vendor-list">
                        <li  className="diffrentcolor">Department : Sportive</li>
                        <li className="vendor-list-alin">Category : Sportive</li>
                        <li>
                            <em> Rating :  </em>
                            <Rate allowHalf defaultValue={2.5} />
                            <span> ( 321 )</span>  <Button className="vendor-review__btn" type="signin">REVIEWS</Button>
                        </li>
                        <ul className="vendor-list-share">
                            <li className="sharesocial">  Share :</li>
                            <li className="vendor-social__media"> <a herf="#"><i class="fa fa-facebook-f"></i></a></li>
                            <li  className="vendor-social__media"><a herf="#"><i class="fa fa-twitter"></i></a></li>
                            <li  className="vendor-social__media"><a herf="#"><i class="fa fa-google-plus"></i></a></li>
                            <li  className="vendor-social__media"> <a herf="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </ul>
                </div>
                </Col>
                <Divider></Divider>
                <Col xs={24} sm={24} md={15} lg={18} xl={18}>
                <div className="vendor-about">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br></br>.
                        <br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="vendor-category_background">
                        <ul className="category">
                            <li className="ss">New Arrivals</li>
                            <li> <a href="#">Light Deals </a> </li>
                            <li><a href="#">Recommended for you </a></li>
                            <li><a href="#">Top Rated </a></li>
                            <li><a href="#"> New Releases </a></li>
                            <li><a href="#">Final Pieces </a></li>
                            <li> <a href="#">Gifts&coupons </a></li>
                        </ul>
                    </div>
                </div>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Vendorcategory/>
                </Col>
                <BackTop className="vendorscroll">
                    <div className=" ant-back-top-inner">
                        <ul>
                            <li><i class="fa fa-arrow-up"></i></li>
                            <li>MOVE</li>
                            <li>TOP</li>
                        </ul>
                    </div>
                </BackTop>
                <div className="vendor-nbshop clearfix">
                    <img src={require('../../img/NBshop.PNG')}/>
                </div>
                </Col>
                <Col xs={24} sm={24} md={9} lg={6} xl={6}>
                <div className="ProductsTrends-header">
                    <h3>TRENDS</h3>
                    <span><strong>Discover</strong><Button className="price-submit" type="signin">More</Button></span>
                </div>
                <Divider></Divider>
                {/* this product for  vendor  right sidbar*/}
                <ProductsItem/>
                <ProductsItem/>
                <ProductsItem/>
                <div className="adv-shoes">
                    <img src={require('../../img/shoes-item.PNG')}/>
                </div>
                <div className="adv-shoes-nb">
                    <img src={require('../../img/adv-nb.PNG')}/>
                </div>
                </Col>
            </Row>
        </div>
    </div>
</div>


);
}
}
export default Vendor;