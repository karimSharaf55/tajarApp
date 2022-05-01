import React from "react";
import { Row, Col,Divider} from 'antd';
import './About.css';
import "antd/dist/antd.css";
import { Button, Menu, Dropdown, Icon, Input } from 'antd';



class About extends React.Component {

    render() {
        return (

            <div className="About">
           
        <div className="container">
        <div className="terms__content">

          <div className="row">
            <div className="terms__content-condittion">
              <h3> E-Commerce Terms and Conditions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br /> <br /> 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="row">
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <div className="terms__list-number">
                  <h3>   Numbered List
                  </h3>
                  <ol>
                    <li><span> Lorem ipsum dolor sit amet, consectetur </span></li>
                    <li> <span> adipisicing elit, sed do eiusmod</span></li>
                    <li> <span> tempor incididunt ut labore et dolore magna </span></li>
                  </ol>
                </div>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <div className="terms__list-markered">
                  <h3> Markered List</h3>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur </li>
                    <li>adipisicing elit, sed do eiusmod </li>
                    <li>tempor incididunt ut labore et dolore magna</li>
                  </ul>
                </div>
              </Col>
            </div>
            <div className="clearfix" />
            {/* TABLE */}
            <div className="table-action__title">
              <h3> Table Content Preview</h3>
            </div><table className="table table-action">
              <thead>
                <tr>
                  <th className="t-small">Popular Items</th>
                  <th className="t-small">Size</th>
                  <th className="t-small">Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="popular-item"> One, there are drinks that make you shrink</td>
                  <td>16 Inches </td>
                  <td>Black</td>
                </tr>
                <tr>
                  <td className="popular-item"> Two, there are foods that make you grow.</td>
                  <td>22 Inches </td>
                  <td>White</td>
                </tr>
                <tr>
                  <td className="popular-item"> Three, animals can talk. </td>
                  <td> Mega Fridge</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <td className="popular-item">  Four, cats can disappear.</td>
                  <td>Small Fridge</td>
                  <td>Green</td>
                </tr>
              </tbody>
            </table>
            <div className="terms-quote">
              <h3> Text &amp; Quote </h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <em className="terms__special-text"> laboris nisit ut aliquip ex </em> ea commodo consequat. </p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .        
              </h4>
              <p className="terms-quote__second">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem  <em className="terms-quote__second-custome"> accusantium doloremque</em> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              </p>
            </div>
           
            {/* END TABLE */}
          </div>
        </div>
        <div className="terms__ads row">
              
              <img src={require("../../img/aboutad.png")} />
            </div>
      </div>


            </div>



        );
    }
}

export default About;
