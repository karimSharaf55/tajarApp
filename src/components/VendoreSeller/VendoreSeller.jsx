import React from "react";
import { Row, Col,Button, Input ,Icon ,Dropdown ,Menu,Divider,InputNumber} from 'antd';
import "antd/dist/antd.css";
import './VendoreSeller.css';
import StarRatingComponent from 'react-star-rating-component';
class   VendorSeller  extends React.Component {

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

            <div className="vendors singleshop-seller-secondry">
                <div className="singleshop-seller-image">
                    <img src={require("../../img/singleseller.png")} />
                </div>
                <div className="vendors singleshop-seller__info">
                    <h3> <a href="../home/vendor">THE NORTH FACE </a> </h3>
                    <p className="vendors singleshop-seller-secondry-description"> Lorem ipsum dolor sit amet, 
                 consectetur adipisicing elit </p>
                              <div>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      <span className="vendors singleshop-content-rating">  ( 16340 )</span> 
      </div>

                </div>
            </div>
            
        
);
}
}
export default  VendorSeller;