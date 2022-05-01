import React from "react";
import { Row, Col,Button, Input } from 'antd';
import "antd/dist/antd.css";
import './ShopSidebar.css';

class   ShopSidebar  extends React.Component {
	 render() {     
		return (
            <div className="shopsidebar">

   
<div className="shopsidebar-border">

<ul className="shopsidebar-links">
<h3>  Feature Links </h3>
<li> <a href="#">  New Arrivals</a>  </li>
<li> <a href="#">  New Arrivals</a>  </li>
<li> <a href="#">  New Arrivals</a>  </li>
<li> <a href="#">  New Arrivals</a>  </li>
<li> <a href="#">  New Arrivals</a>  </li>
<li> <a href="#">  New Arrivals</a>  </li>

<li> <a href="#">  New Arrivals</a>  </li>

  
    </ul>
    <div className="shopsidebar-category">
    <h3> Feature Category</h3>
    <div className="shopsidebar-category__expand">
    <Button type="primary">Expand All </Button>

    </div>

 
    <ul className="feature-links">
    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>

    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>

    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>

    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>
    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>

    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>
    <li> <a href="#"><img src={require("../../img/labtop.svg")} />
    Laptops</a></li>
    </ul>
    <div className="shopsidebar-category__related">

    <a href="#">
   <Button type="primary"> 
    Related Categories
 

        </Button>
        </a>
        </div>
    </div>

 </div>

 </div>


       );
    }
  }
  
  export default ShopSidebar;
  