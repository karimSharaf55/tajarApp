import React from "react";
import { Row, Col,Button, Tabs,Icon ,Input , Pagination } from 'antd';
import './SingleShopPagination.css';
import "antd/dist/antd.css";
import StarRatingComponent from 'react-star-rating-component';

class SingleShopPagination  extends React.Component {


	 render() {  
   
           
		return (

            <div className="singleshop-pagination"> 

<Pagination defaultCurrent={2} total={100} />
  

              
            </div>


       );
    }
  }
  
  export default SingleShopPagination;
  