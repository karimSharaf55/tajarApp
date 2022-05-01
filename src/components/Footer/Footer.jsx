import React from "react";
import { Row, Col,Divider} from 'antd';
import './Footer.css';
import "antd/dist/antd.css";
import { Button, Menu, Dropdown, Icon, Input } from 'antd';



class NavbarBottom extends React.Component {

    render() {
        return (

            <div className="footer">
                <Row>
                    <div className="container">
                    <div className="footer-subscribe_holder">
                        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                            <div className="footer-subscribe">
                                <div className="footer-subscribe-left">
                                <img src={require("../../img/call.png")} />
                                </div>
                                <div className="footer-subscribe-right">

                                    <h3>+012 (345) 678-901</h3>
                                    <p> Free support line! </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                            <div className="footer-subscribe">
                                <div className="footer-subscribe-left">
                                <img src={require("../../img/swimm.png")} />
                                </div>
                                <div className="footer-subscribe-right">

                                    <h3>+012 (345) 678-901</h3>
                                    <p> Free support line! </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                            <div className="footer-subscribe">
                                <div className="footer-subscribe-left">
                                <img src={require("../../img/wordl.svg")} />
                                </div>
                                <div className="footer-subscribe-right">

                                    <h3>+012 (345) 678-901</h3>
                                    <p> Free support line! </p>
                                </div>
                            </div>
                        </Col>
                        </div>
                        <Divider  className="footer-hr"/>

                     <Col xs={24} sm={8} md={9} lg={9} xl={9}>

                            <div className="footer-details">
                                <img src={require("../../img/logo-footer.png")} />
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. </p>
                                <h3>   Contact info: </h3>
                                  
                                <h5> Lorem ipsum dolor sit amet, consectetur adi.</h5>
                            </div>
                        </Col>
                      
                        <Col xs={12} sm={8} md={5} lg={5} xl={5}>
                            <div className="footer-links">
                                <div className="footer_links-title">
                                    <h3>CUSTOMER SERVICE</h3>
                                </div>
                                <ul className="footer-menu">
                                    <li> <Icon type="right" /> Contact Us</li>
                                    <li> <Icon type="right" />  Returns </li>
                                    <li> <Icon type="right" /> Order History</li>
                                    <li> <Icon type="right" />  Track Order </li>
                                    <li> <Icon type="right" /> My Account</li>
                                    <li> <Icon type="right" /> Site Map</li>

                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={5} lg={5} xl={5}>
                            <div className="footer-links">
                                <div className="footer_links-title">
                                    <h3>CUSTOMER SERVICE</h3>
                                </div>
                                <ul className="footer-menu">
                                    <li> <Icon type="right" /> Contact Us </li>
                                    <li> <Icon type="right" />  Returns  </li>
                                    <li> <Icon type="right" /> Order History </li>
                                    <li> <Icon type="right" />  Track Order  </li>
                                    <li> <Icon type="right" /> My Account </li>
                                    <li> <Icon type="right" /> Site Map</li>

                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={5} lg={5} xl={5}>
                            <div className="footer-links">
                                <div className="footer_links-title">
                                    <h3>CUSTOMER SERVICE</h3>
                                </div>
                                <ul className="footer-menu">
                                    <li><a href="../home/contactus">  <Icon type="right" /> Contact Us </a> </li>
                                    <li> <Icon type="right" />  Returns  </li>
                                    <li> <Icon type="right" /> Order History </li>
                                    <li> <Icon type="right" />  Track Order  </li>
                                    <li><a href="../home/userprofile"> <Icon type="right" /> My Account </a></li>
                                    <li>  <Icon type="right" /> Site Map</li>

                                </ul>
                                <img src={require("../../img/payments.png")} />

                            </div>

                        </Col>
                        
                    </div>
                </Row>
            </div>



        );
    }
}

export default NavbarBottom;
