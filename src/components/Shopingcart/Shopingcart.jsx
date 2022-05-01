import React from "react";
import { Row, Col,Button,Rate,Divider,Dropdown,Checkbox,Menu,Icon,InputNumber} from 'antd';
import './Shopingcart.css';
// import {Table} from 'react-bootstrap';
import ProductsItem from "../ProductsItem/ProductsItem";
import FeaturesDeal from "../FeaturesDeal/FeaturesDeal";
 
function handleMenuClick(e) {
    console.log('click', e);
  }
       const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">1st item</Menu.Item>
          <Menu.Item key="2">2nd item</Menu.Item>
          <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
      )
      function onChange(e) {
        console.log(`checked = ${e.target.checked}changed', value`);
      }
     
class Shopingcart  extends React.Component {
	
 
	 render() {     
		return (
            <div className="Shoppingcart">
        <div className="container">
        <Row gutter={24}>
        
        <Col xs={24} sm={24} md={16} lg={18} xl={18}>

 <div className="cart-aboutholder">
 <h2>shopping cart</h2>
 {/* <table> */}


<tr className="cart-about">
<th class="CartPrice-thumbnail">Product Details</th>
<th class="CartPrice-remove">&nbsp;</th>
<th class="CartPrice-remove">&nbsp;</th>
<th class="CartPrice-quantity">Price</th>
<th class="CartPrice-subtotal">Quantity</th>
<th class="CartPrice-remove">&nbsp;</th>
	</tr>

<tr className="cart-item">
<th class="cartitem-thumbnail">
<div className="shoping-image">
<img src={require('../../img/headphone.PNG')}/>
</div>
<div className="shopingcart-detalis-holder">
<div className="shopingcart-detalis">
<span><a href="../home/orderpreview"><h2>Logitech C270 Desktop or Laptop Webcam,HD 720p
Widescreen for Video Calling and Recording</h2> </a></span>
<ul className="shopingcart-product">
    <li className="rate-used">Used, Very Good</li>
    <li className="shipped">Shipped from: </li>
    <li><Button className="product" type="signin">WeatherTech</Button></li>
</ul>
<ul className="shopingcart-rate">
<li><a herf="#"><i class="fa fa-check-circle"></i>In Stock</a></li>
<li className="rate-stock" ><Rate allowHalf defaultValue={2.5} /></li>
<li className="rate-counter">( 16340 )</li>
<li className="rate-review">Customer Reviews</li>
 </ul>
<ul className="shopingcart-icon">
<li><i class="fa fa-bitbucket"></i></li>
<li className="bookmark" ><i class="fa fa-bookmark"></i></li>
<li><i class="fa fa-retweet"></i></li>
</ul>


</div>
</div>
</th>


<th class="CartPrice-remove">&nbsp;</th>
<th class="CartPrice-remove">&nbsp;</th>
<th class="shopingcart-quantity"><a herf="#">1500 L.E</a></th>
<th class="shopingcart-subtotal"><a herf="#"><InputNumber  min={1} max={10} defaultValue={3} onChange={onChange} /></a></th>
</tr>
<Divider />

<tr className="cart-item"> 

<th class="cartitem-thumbnail">
<div className="shoping-image">
<img src={require('../../img/headphone.PNG')}/>
</div>
<div className="shopingcart-detalis-holder">
<div className="shopingcart-detalis">
<span><a href="../home/orderpreview"><h2>Logitech C270 Desktop or Laptop Webcam,HD 720p
Widescreen for Video Calling and Recording</h2> </a></span>
<ul className="shopingcart-product">
    <li className="rate-used">Used, Very Good</li>
    <li className="shipped">Shipped from: </li>
    <li><Button className="product" type="signin">WeatherTech</Button></li>
</ul>
<ul className="shopingcart-rate">
<li><a herf="#"><i class="fa fa-check-circle"></i>In Stock</a></li>
<li className="rate-stock" ><Rate allowHalf defaultValue={2.5} /></li>
<li className="rate-counter">( 16340 )</li>
<li className="rate-review">Customer Reviews</li>
 </ul>
<ul className="shopingcart-icon">
<li><i class="fa fa-bitbucket"></i></li>
<li className="bookmark" ><i class="fa fa-bookmark"></i></li>
<li><i class="fa fa-retweet"></i></li>
</ul>


</div>
</div>
</th>


<th class="CartPrice-remove">&nbsp;</th>
<th class="CartPrice-remove">&nbsp;</th>
<th class="shopingcart-quantity"><a herf="#">1500 L.E</a></th>
<th class="shopingcart-subtotal"><a herf="#"><InputNumber  min={1} max={10} defaultValue={3} onChange={onChange} /></a></th>
</tr>
<Divider />
<div className="subtotal-item">
<h2>Subtotal ( 2 Items ) : 3000 L.E</h2>
<p>The price and availability of items at tujjar.com are subject to change.
 The Cart is a temporary place to store a list of your items and reflects
 each item's most recent price plus this if you have a gift card or promotional code, 
  We'll ask you to enter your claim code when it's time to pay.</p>

</div>


</div> 

 </Col>



        <Col xs={24} sm={24} md={8} lg={6} xl={6}>

  <div className="shopingcart-subtoltal">
  <div className="shopingcart-subtoltal-background">
 
<div className="subtotla">
<h2>Subtotal ( 2 Items ) : 3000 L.E</h2>
<Checkbox className="subtotl-hint" onChange={onChange}>This order contains a gift</Checkbox>
<Button className="submit" type="signin">Proceed to checkout</Button>
<Button className="submit" type="signin">Buy all items with 1-Click</Button>
<Dropdown overlay={menu}>
      <Button>
      Ship to : Add an address

<Icon type="down" />
      </Button>
    </Dropdown>



</div>
</div>
</div>
<div className="shping-cart__sidebar">

<div className="subtotla-Sponsore">
<h2>Sponsored Products related to
items in your cart.</h2>
</div>

{/* this product for shoping cart right sidbar*/}
<ProductsItem/>
<ProductsItem/>
<ProductsItem/>
</div>


 </Col>
 <Col xs={24} sm={24} md={18} lg={18} xl={18}>

 <FeaturesDeal/>
 </Col>
 </Row>

 </div>
 

            </div>


       );
    }
  }
  
  export default Shopingcart;
  