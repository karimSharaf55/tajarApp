import React from "react";
import { Row, Col,Button, Tabs,Icon ,Input , Pagination } from 'antd';
import './SingleShopSpecifications.css';
import "antd/dist/antd.css";
import StarRatingComponent from 'react-star-rating-component';
import SingleShopReview from "../SingleShopReview/SingleShopReview";
import SingleShopPagination from "../SingleShopPagination/SingleShopPagination";

class SingleShopSpecifications  extends React.Component {
	
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
    const { TextArea } = Input;

        const TabPane = Tabs.TabPane;
        const { rating } = this.state;

        function callback(key) {
          console.log(key);
        }
           
		return (

            <div className="singleshopspecfic"> 

<Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Product Specifications" key="1">
    <Col xs={12} sm={24} md={6} lg={6} xl={6}>
     <ul className="ShopSpecifications-list greay-background">
     <li>Brand Name </li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li>Brand Name </li>
     <li>Brand Name </li>
     <li>Brand Name <button className="primary"> More</button> </li>
     </ul>
     </Col >
    <Col xs={12} sm={24} md={6} lg={6} xl={6}>
     <ul className="ShopSpecifications-list white-background">
     <li>Brand Name </li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li>Brand Name </li>
     <li>Brand Name </li>
     <li>Brand Name <button className="primary"> More</button> </li>
     </ul>

      </Col >
    <Col xs={12} sm={24} md={6} lg={6} xl={6}>
     <ul className="ShopSpecifications-list greay-background">
     <li>Brand Name </li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li>Brand Name </li>
     <li>Brand Name </li>
     <li>Brand Name <button className="primary"> More</button> </li>
     </ul>


      </Col >
    <Col xs={12} sm={24} md={6} lg={6} xl={6}>
     <ul className="ShopSpecifications-list white-background">
     <li>Brand Name </li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li> Brand Name</li>
     <li>Brand Name </li>
     <li>Brand Name </li>
     <li>Brand Name <button className="primary"> More</button> </li>
     </ul>


      </Col >
    </TabPane>
    <TabPane tab="reviews" key="2">
    <div className="singleshop_reviewtab-holder container-fluid ">

    <Col xs={{ span: 18, offset: 3 }}  md={{ span: 14, offset: 5 }}  sm={{ span: 14, offset: 5 }} lg={{ span: 14, offset: 5 }}>

    
    <div className="singleshop_reviewtab">
    

     <h3>ADD YOUR REVIEW</h3>
     <div className="singleshop_connect">

     <p> Connect with: </p> <span>  <a href="#">
                    <Icon className="singleshop-specif__icon" type="facebook" />
                </a> </span>  <span>  <a href="#">
                    <Icon  className="singleshop-specif__icon" type="twitter" />
                </a> </span> 
                </div>
                <span className="your-rate"> Your Rate :</span> 
                <span> 
                <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
    

       </span>
       </div>
       <div className="singleshop_reviewform">

<Input className="singleshop_reviewform-name"   type="text" placeholder="Full Name" />
<Input className="singleshop_reviewform-email"  type="email" placeholder="E-mail Address" />
       
<TextArea rows={4} placeholder="Add Your Review" />

    <Button type="primary">submit yout review</Button>


</div>




</Col>

</div>
<div className="SingleShopReview">

<SingleShopReview/>
<SingleShopReview/>
<SingleShopReview/>
<SingleShopReview/>


</div>
<div className="singleshop__pagination-holder">
<SingleShopPagination/>

</div>
    </TabPane>
    <TabPane tab="product Details" key="3">
    <div className="ShopSpecifications-list single__product-deatils ">
     <p><b> Item Weight:</b> <em> 231 g</em> </p>
     <p><b>   Item model number:</b> <em> MKT5046</em> </p>

     <p><b>  Boxed-product Weight:</b> <em> 231 g</em> </p>
     <p><b>  Delivery Destinations:</b> <a href="#">Visit the Delivery Destinations </a>   Help page to see where this item can be delivered. Find out
        more about our Delivery Rates and Returns Policy </p>
     <p className="single__product-many-review"><b> Review:</b> 
     
       <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
 
       
         <em>  8762 Customer Reviews</em> 

      </p>
 <p> #137 in <button className="primary"> Men's Watches</button> </p>
 <p> #137 in <button className="primary"> Mobile Phones & Communication</button> </p>

     </div>
    </TabPane>
  
    
  </Tabs> 

            
            </div>


       );
    }
  }
  
  export default SingleShopSpecifications;
  