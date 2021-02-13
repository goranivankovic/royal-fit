import React, { Component } from 'react'
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import team from '../img/team.jpeg'
import Anime from 'react-anime';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Page4 extends Component {
    constructor(){
        super()
        this.state={
            products:'1,432',
            customers:'20,000',
            orders:'45,000'
        }
    }
    render() {
        return (
            <div className="page4" id="page4">
                <Container>
                    <Row className="page4Row">
                      
                        <Col className="" lg={3} xs={6}>
                       
                   <Anime   keyframes={[
   
    {translateX:150},
    {translateY: 15},
    {translateX: 0},
    {translateY: 0},
 
  ]} duration={1400}  easing={"easeInQuint"}  loop={true} delay={2500}><h3 className="text-primary hz">What we do</h3></Anime>     
                        
                        </Col>
                        <Col lg={9} xs={12}>
                        <br></br>


                        <h5 className="text-light" data-aos="fade-up"  data-aos-delay="500" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false">
                            We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.

   </h5> 
                        
                        </Col>
                        <Col lg={10}xs={10}>
                           
                        <br></br>
                        <img src={team} data-aos="fade-down"  data-aos-delay="2500" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" className="slika2" alt=""/>
                        
                        </Col>
                      

                        <Col lg={4}xs={4}>
                        <br></br>

                        <h3 className="text-primary hz" data-aos="fade-up" data-aos-delay="500" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false">
                  <span className="text-warning">{this.state.products}</span> 
                  <br></br>
              
                  <span>Products</span>
                    

                        </h3>
                        
                        
                        </Col>

                        <Col lg={4}xs={4}>
                        <br></br>

                        <h3 className="text-primary hz" data-aos="fade-up" data-aos-delay="1200" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false">
                  <span className="text-warning">{this.state.customers}</span> 
                  <br></br>
              
                  <span>Customers </span>
                    

                        </h3>
                        
                        
                        </Col>
                        
                        <Col lg={4}xs={4}>
                        <br></br>

                        <h3 className="text-primary hz" data-aos="fade-up" data-aos-delay="1700" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false">
                  <span className="text-warning">{this.state.orders}</span> 
                  <br></br>
              
                  <span>Orders</span>
                    

                        </h3>
                        
                        
                        </Col>




                    </Row>
                </Container>
                
            </div>
        )
    }
}
