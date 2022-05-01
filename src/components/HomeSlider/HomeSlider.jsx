import React from "react";
import { Row, Col } from 'antd';
import './HomeSlider.css';
import "antd/dist/antd.css";
import { Button  ,Menu ,Dropdown ,Icon ,Input} from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class HomeSlider  extends React.Component {
	
	 render() {     
		return (

            <div className="HomeSlider">
            <div className="container-fluid"> 
             <Row>
      <Col span={24}>
      <Carousel
      showThumbs={false}
      showStatus={false}>
                <div className="HomeSlider_caption-holder"> 
               
  

                <div className="Homeslider-caption">
              {/* <ScrollAnimation animateIn="fadeIn"
                animatePreScroll={false}> */}

                    <h3> Infinite <span className="secondrycolor"> Air Corden</span></h3>
                                        {/* </ScrollAnimation> */}

                    <h4> Men's Running Shoe</h4>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. </p>
                    <h5><span className="secondrycolor">  1600.00   </span>le  </h5>
                    <h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>

                    </div>
                <img src={require("../../img/slide1.png")} />
                
                </div>
                <div>
                <div className="Homeslider-caption">
              {/* <ScrollAnimation animateIn="fadeIn"
                animatePreScroll={false}> */}

                    <h3> Infinite <span className="secondrycolor"> Air Corden</span></h3>
                                        {/* </ScrollAnimation> */}

                    <h4> Men's Running Shoe</h4>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. </p>
                    <h5><span className="secondrycolor">  1600.00   </span>le  </h5>
                    <h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>

                    </div>
                <img src={require("../../img/slide1.png")} />
                  
                </div>
                <div>
                <div className="Homeslider-caption">
              {/* <ScrollAnimation animateIn="fadeIn"
                animatePreScroll={false}> */}

                    <h3> Infinite <span className="secondrycolor"> Air Corden</span></h3>
                                        {/* </ScrollAnimation> */}

                    <h4> Men's Running Shoe</h4>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. </p>
                    <h5><span className="secondrycolor">  1600.00   </span>le  </h5>
                    <h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>

                    </div>
                <img src={require("../../img/slide1.png")} />
                </div>
            </Carousel>
      </Col>
    </Row>
            </div>
            </div>


       );
    }
  }
  
  export default HomeSlider;
  