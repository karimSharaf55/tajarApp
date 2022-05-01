import React from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import ProductColumn from "../ProductColumn/ProductColumn";
import SliderBook from "../SliderBook/SliderBook";
import ProducatShop from "../ProducatShop/ProducatShop";
import FutureProduct from "../FutureProduct/FutureProduct";
import Advertisement from "../Advertisement/Advertisement";
import Copyright from "../Copyright/Copyright";
import NavbarBottom from "../NavbarBottom/NavbarBottom";
import HomeSlider from "../HomeSlider/HomeSlider";
import MainNavbar from "../MainNavbar/MainNavbar";

import { Row, Col} from 'antd';
class Home  extends React.Component {
	
	 render() {     
		return (
            <div>

<HomeSlider/>
<ProductColumn/>
<div className="container">
 <Row>
 <Col span={24}>
<SliderBook/>
</Col>
</Row>
</div>

<ProducatShop/>
<div className="sliderbook-background">
<div className="container">
 <Row>
 <Col span={24}>
<SliderBook/>
</Col>
</Row>
</div>
</div>
<ProducatShop/>
<Advertisement/>

<FutureProduct/>
<ProducatShop/>


            </div>


       );
    }
  }
  
  export default Home;
  