import React from "react";
import './Advertisement.css';
import "antd/dist/antd.css";

import { Row, Col} from 'antd';
class Advertisement extends React.Component {
	
	 render() {     
		return (
            <div className="advertisement">
<div className="container">
 <Row>
 <Col span={24}>
 <div className="advertisement-offer">
 <img src={require('../../img/advertisement.PNG')}/>
 </div>

 </Col>
 </Row>
 </div>

            </div>


       );
    }
  }
  
  export default Advertisement;
  