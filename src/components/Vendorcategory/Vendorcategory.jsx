import React from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import './Vendorcategory.css';
class Vendorcategory  extends React.Component {
	
	 render() {     
		return (
            <div class="Vendorcategory">
<a href="../home/shop">

<div className="vendor-category-image">
<div className="vendor-category-text vendortcat-tilte">
<h2>Men T-Shirt</h2>
</div>
<img src={require('../../img/categery.jpg')}/>
</div>
</a>
            </div>


       );
    }
  }
  
  export default Vendorcategory;
  