import React from "react";
import { Row, Col,Input,Checkbox,Button,Select,DatePicker,Rate} from 'antd';
import './ProductsItem.css';
import StarRatingComponent from 'react-star-rating-component';

class ProductsItem  extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 4
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

	 render() {  
    const { rating } = this.state;
   
		return (
      <div className="dsds">
            <div className="shoping-cart ProductsItem">
         <div className="producat-iteam-cart">
<div className="producat-item-image">
<a href="../home/singleproduct"> <img src={require('../../img/item.PNG')}/></a> 
</div>

<div className="producat-price">
<span>
<a href="../home/singleproduct"><h2>Full HD Webcam  <br/>  Calling and Recording
</h2> </a>
<p className="productitem-description">  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
<Button className="submit" type="signin">5000 L.E</Button>
<div className="productitem-rating-holder clearfix"> 
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="vendors singleshop-content-rating">  ( 16340 )</span> 
      </div><p className="productitem-shoptext">shop<Button className="price-submit" type="signin">now</Button>
</p>
</span>
</div>

</div>

      </div>


            </div>


       );
    }
  }
  
  export default ProductsItem;
  