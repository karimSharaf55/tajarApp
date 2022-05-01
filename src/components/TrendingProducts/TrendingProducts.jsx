import React from "react";
import { Row, Col,Button, Input, Divider } from 'antd';
import "antd/dist/antd.css";
import './TrendingProducts.css';
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
class   TrendingProducts  extends React.Component {
    
	 render() {  
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
		return (
            <div className="TrendingProducts">
     <div class="title-header">
     <div className="title-header-headerleft"> 
     <h2>book best sellers</h2>
     </div>
     
     <div className="title-header-headerright"> 

     <p>Discover   </p>
       <a href="#">
     <button type="button" class="ant-btn ant-btn-primary">More
     </button>
     </a>
   
     
     </div>
     
     <Divider/>

     </div>
     


             <Slider {...settings}>
             <ScrollAnimation animateIn="fadeInLeft"
 animatePreScroll={false}>
        <div className="TrendingProducts-item">
        <div className="TrendingProducts__item-image">
        <img src={require("../../img/shop-item.png")} />

        </div> 
        <div className="TrendingProducts__item-description">

          <h3>HP 21.5-Inch All-in-One
Desktop Px</h3>
<p> With the Intel Core i3 
processor and 1 TB 
storage for you and ..</p>
<h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>
  </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft"
 animatePreScroll={false}>
        <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require("../../img/shop-item.png")} />

        </div> 
        <div className="TrendingProducts__item-description">

          <h3>HP 21.5-Inch All-in-One
Desktop PC</h3>
<p> With the Intel Core i3 
processor and 1 TB 
storage for you and ..</p>
<h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>
  </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft"
 animatePreScroll={false}>
        <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require("../../img/shop-item.png")} />

        </div> 
        <div className="TrendingProducts__item-description">
       
          <h3>HP 21.5-Inch All-in-One
Desktop PC</h3>
<p> With the Intel Core i3 
processor and 1 TB 
storage for you and ..</p>

<h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>

        </div>
        </div>
        </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft"
 animatePreScroll={false}>
        <div className="TrendingProducts-item"> 
        <div className="TrendingProducts__item-image">
        <img src={require("../../img/shop-item.png")} />

        </div> 
        <div className="TrendingProducts__item-description">

          <h3>HP 21.5-Inch All-in-One
Desktop PC</h3>
<p> With the Intel Core i3 
processor and 1 TB 
storage for you and ..</p>
<h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>

        </div>
        </div>
        </ScrollAnimation>

        <div className="TrendingProducts-item"> 
          <div className="TrendingProducts__item-image">
        <img src={require("../../img/shop-item.png")} />

        </div> 
        <div className="TrendingProducts__item-description">

          <h3>HP 21.5-Inch All-in-One
Desktop PC</h3>
<p> With the Intel Core i3 
processor and 1 TB 
storage for you and ..</p>
<h6><a href="#" className="secondrycolor">  shop   </a>     <Button type="primary">now</Button>
  </h6>

        </div>
        </div>
      </Slider>
            </div>


       );
    }
  }
  
  export default TrendingProducts;
  