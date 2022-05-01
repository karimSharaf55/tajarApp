import React from "react";
import { Row, Col,Button, Input ,Icon ,Dropdown ,Menu,Divider,InputNumber} from 'antd';
import "antd/dist/antd.css";
import './SingleShopSellers.css';
import StarRatingComponent from 'react-star-rating-component';
class   SingleShopSellers  extends React.Component {

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
    <Row gutter={24}>

<div className="singleshopsellers">
    <h3 className="singleshopsellers-ttile"> Other sellers on amazon</h3>
    <div className="singleshopseller-discover">
        <p>Discover<a href="#"><Button type="primary">MORE</Button></a></p>
    </div>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>

            <div className="singleshop-seller-secondry">
                <div className="singleshop-seller-image">
                    <img src={require("../../img/singleseller.png")} />
                </div>
                <div className="singleshop-seller__info">
                   <h3> <b> Seller  </b>: Accessoris Shop</h3>
                   <p className="singleshop-seller-secondry-price"><b> 800 L.E  </b>  </p>
                    <div>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="singleshop-content-rating">  ( 16340 )</span> 
      </div>


 
                </div>
            </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="singleshop-seller-secondry">
                <div className="singleshop-seller-image">
                    <img src={require("../../img/singleseller.png")} />
                </div>
                <div className="singleshop-seller__info">
                <h3> <b> Seller  </b>: Accessoris Shop</h3>
                    <p className="singleshop-seller-secondry-price"><b> 800 L.E  </b>  </p>
                    <div>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="singleshop-content-rating">  ( 16340 )</span> 
      </div>

                </div>
            </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="singleshop-seller-secondry">
                <div className="singleshop-seller-image">
                    <img src={require("../../img/singleseller.png")} />
                </div>
                <div className="singleshop-seller__info">
                    <h3> <b> Seller  </b>: Accessoris Shop</h3>
                    <p className="singleshop-seller-secondry-price"><b> 800 L.E  </b>  </p>
                              <div>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="singleshop-content-rating">  ( 16340 )</span> 
      </div>

                </div>
            </div>
            </Col>
        
</div>
</Row>
);
}
}
export default  SingleShopSellers;