import React from "react";
import { Row, Col,Button, Tabs,Icon ,Input } from 'antd';
import "antd/dist/antd.css";
import StarRatingComponent from 'react-star-rating-component';

class SingleShopReview  extends React.Component {
	
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

        function callback(key) {
          console.log(key);
        }
           
		return (


<div className="singleshop__review-users clearfix">
<Col xs={6} sm={24} md={3} lg={3} xl={3}>


<img src={require("../../img/userreview.jpeg")} />

</Col>

<Col xs={16} sm={24} md={12} lg={21} xl={21}>

<div className="singleshop__review-users-holder">
<div className="singleshop__review-users-left">

   <span className="singleshop__review-users-name">Mahmoud  <em></em></span>
   <span className="singleshop__review-users-date">Oct 15, 2017 </span>


</div>
<div className="singleshop__review-users-right">
<span> 
    <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        </span>
        <span>
            <Button type="deafult">Replay</Button>
            </span>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsdsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sddit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            </div>
            

</div>
</Col>
</div>
   
  

              

       );
    }
  }
  
  export default SingleShopReview;
  