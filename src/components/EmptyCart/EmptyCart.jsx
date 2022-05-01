import React from "react";
import { Row, Col,Button, Divider,Checkbox} from 'antd';
import './EmptyCart.css';
import FeaturesDeal from "../FeaturesDeal/FeaturesDeal";
import ProductsItem from "../ProductsItem/ProductsItem";

class EmptyCart  extends React.Component {
	 render() {     
		return (
            <div className="EmptyCart">
            <div className="container">
<Row gutter={24}>
<Col span={18}>
<div className="empatycard-shoping">
<img src={require("../../img/emptycart.svg")} />
<h2>Your Shopping Basket is empty.</h2>
<p>Your Shopping Basket lives to serve. Give it purpose--fill it with books, CDs, videos, DVDs, toys, electronics, and more.<br></br> 
Continue shopping on the<a href="#"> Tujjar.com</a>homepage, learn about<a href="#"> today's deals</a>, or visit your<a href="#"> Wish List.</a> <br></br>
The price and availability of items at tujjar.com are subject to change. <br></br>
The shopping basket is a temporary place to store a list of your items and reflects each item's most recent price.</p>
<h3>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</h3>
</div>
<FeaturesDeal/>

</Col>
<Col span={6}>
<div className="shping-cart__sidebar">

<div className="subtotla-Sponsore">
<h2>Sponsored Products related to
items in your cart.</h2>
</div>

{/* this product for shoping cart right sidbar*/}
<ProductsItem/>
<ProductsItem/>
<ProductsItem/>
<ProductsItem/>

</div>

</Col>
</Row>
</div>

            </div>
       );
    }
  }
  
  export default EmptyCart;
  