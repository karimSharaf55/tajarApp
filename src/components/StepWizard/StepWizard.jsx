import React from "react";
import { Row, Col,Button, Divider,Checkbox,Steps,Icon} from 'antd';
import './StepWizard.css';
import NavbarWithLogo from "../NavbarWithLogo/NavbarWithLogo";
import Copyright from "../Copyright/Copyright";


class StepWizard  extends React.Component {
	
	 render() {     
    const { Step } = Steps;

    
		return (
            <div className="stepwizard">

     <Steps>
   <Step status="finish" title="Shopping" icon={<Icon type="user" />} />
   <Step status="finish" title="add to cart" icon={<Icon type="user" />} />
   <Step status="finish" title="checkout & Payment" icon={<Icon type="user" />} />
     <Step status="finish" title="Done" icon={<Icon type="shopping-cart" />} />


  </Steps>
</div>


       );
    }
  }
  
  export default StepWizard;
  