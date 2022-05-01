import React from "react";
import { Row, Col,Input,Checkbox,Button,Select,DatePicker,Tabs,Icon } from 'antd';
import './Checkoutt.css';
import Copyright from "../Copyright/Copyright";
import NavbarWithLogo from "../NavbarWithLogo/NavbarWithLogo";
import MobileNav from "../MobileNav/MobileNav";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const InputGroup = Input.Group;
const Option = Select.Option;
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  

class Checkoutt  extends React.Component {
    state = {
        dataSource: [],
      };
    
      handleChange = value => {
        this.setState({
          dataSource:
            !value || value.indexOf('@') >= 0
              ? []
              : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
        });
      };
    
	 render() {     
		return (
            <div className="checkout">
            <MobileNav/>
                      <NavbarWithLogo/>

           <div className="container">
           <Row gutter={24}>
           <div className="checkout clearfix">
     <Col xs={24} sm={24} md={12} lg={12} xl={12}>
 <div className="add-address">
 <h2>Select a delivery address</h2>
 <h3>Enter a new delivery address.</h3>
 <p>When finished, click the "Continue" button.</p>
 <Input placeholder="Full Name*:" />
 <Input placeholder="Phone number*:" />
 <Input placeholder="Country :" />
 <Input placeholder="Town/City:"/>
 <Input placeholder="Address Line 1: " />
 <Input placeholder="Address Line 2: " />
 </div>
 <div className="access-code">
 <h2>Optional Delivery Preferences</h2>
<p>Preferences are used to plan your delivery.However,<br></br>shipments can sometimes arrive early or later than planned.</p>  
<h3><span>.</span>Weekend Delivery: </h3>
<ul>
<li className="packages">I can receive packages on</li>
<li><Checkbox onChange={onChange}>Saturday</Checkbox></li>
<li><Checkbox onChange={onChange}>Sunday</Checkbox></li>
</ul>
<h3 className="secutity-access"><span>.</span>Security Access Code: </h3>
<Input placeholder="for appartments and flats" />
<h3 className="submit-holder"><span>.</span>What if I am not in?</h3>
<a href="#"><Button className="submit" type="signin">Tell us where to leave your package</Button></a>
<h3 className="add-address-holder"><span>.</span>Is this address also your invoice address? </h3>
<ul className="add-address">
<li><Checkbox onChange={onChange}>Yes</Checkbox></li>
<li><Checkbox onChange={onChange}>No (If not we'll ask you for it in a moment.)</Checkbox></li>
</ul>
</div>
 </Col>

     <Col xs={24} sm={24} md={12} lg={12} xl={12}>
 <div className="payment">
 <h2>Choose your suitable payment method</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

<Tabs defaultActiveKey="1">
    <TabPane
      tab={
        <span>
             <img src={require('../../img/card1.PNG')}/>
    
        </span>
      }
      key="1"
    >
    <Input placeholder="Card Number*" />
<Input className="card-holder"style={{ width: '386px' }} placeholder="Card Holder*" /><span><Input style={{ width: '80px' }} placeholder="CVV*" /></span>
<InputGroup compact>
          <DatePicker style={{ width: '43%' }} />
          <DatePicker style={{ width: '42%' }} />
        </InputGroup>
    </TabPane>
    <TabPane
      tab={
        <span>
   <img src={require('../../img/card2.PNG')}/>
        </span>
      }
      key="2"
    >
     Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
       sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.


    </TabPane>
    <TabPane
      tab={
        <span>
           <img src={require('../../img/card3.PNG')}/>
        </span>
      }
      key="3"
    >
  Lorem ipsum dolor sit amet,
   consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </TabPane>
  </Tabs>
{/* <ul className="pay-card">
<li> <img src={require('../../img/card1.PNG')}/></li>
<li> <img src={require('../../img/card2.PNG')}/></li>
<li> <img src={require('../../img/card3.PNG')}/></li>
</ul> */}
 
        <div className="payment-cart">
        <img  src={require('../../img/payment2.png')}/>
        </div>
        <div className="order-total">
        <div className="pay-order">
        <h2>order total</h2>
        <h3>3000</h3>
        <p>livre égyptienne</p>
        <p className="order-shipping">Free Shipping<br></br> 25% Coupon Discount</p>
        <Button  type="signin">CONTINUE shopping PROCESS</Button>
        </div>
        </div>
 </div>
 </Col>
 </div>
 </Row>

           </div>
           <Copyright/> 

            </div>
       );
    }
  }
  
  export default Checkoutt;
  