import React from "react";
import Slider from "react-slick";
import './SliderBook.css';
import "antd/dist/antd.css";
import { Row, Col,Button,Divider } from 'antd';
class SliderBook  extends React.Component {
	 render() { 
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    }; 
		return (
 <div className="sliderbook">

<div className="sliderbook-header">
<h2>book best sellers</h2>
<p>Discover<a href="#"><Button type="primary">MORE</Button></a></p>
</div>
<Divider/>
       <Slider {...settings}>
        <div>
          <a href="#"> <h3><img src={require('../../img/book1.png')}/> </h3></a>
        </div>
        <div>
        <a href="#">  <h3><img src={require('../../img/book2.png')}/></h3></a>
        </div>
        <div>
        <a href="#"> <h3><img src={require('../../img/book3.png')}/></h3></a>
        </div>
        <div>
        <a href="#"> <h3><img src={require('../../img/book4.png')}/></h3></a>
        </div>
        <div>
        <a href="#"> <h3><img src={require('../../img/book5.png')}/></h3></a>
        </div>
        <div>
          <h3><img src={require('../../img/book6.png')}/></h3>
        </div>
        <div>
          <h3><img src={require('../../img/book1.png')}/></h3>
        </div>
        <div>
          <h3><img src={require('../../img/book2.png')}/></h3>
        </div>
        <div>
          <h3><img src={require('../../img/book3.png')}/></h3>
        </div>
        <div>
          <h3><img src={require('../../img/book4.png')}/></h3>
        </div>
        <div>
          <h3><img src={require('../../img/book5.png')}/></h3>
        </div>
        <div>
          <h3><img src={require('../../img/book6.png')}/></h3>
        </div>
      </Slider>
     
      
            </div>
       );
    }
  }
  
  export default SliderBook;
  