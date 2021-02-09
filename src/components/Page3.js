import React, { Component } from 'react'
import Anime from 'react-anime';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import women from '../img/women.jpeg'
import men from '../img/men.jpeg'
import body2 from '../img/body2.jpeg'
import run from '../img/run.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Page3 extends Component {
    constructor(){
        super()
    }
    render() {
        AOS.init();



        return (
            <div className="page3" id="page3">
                <br></br>
                    <br></br>
                    <br></br>
           
                <Container>
                    <Row>
                    
                        <Col xs={12}><h2 className="text-center text-primary" data-aos="fade-up"  data-aos-delay="500" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" >Our Popular Classes</h2></Col>
                     
                        <Col lg={3} md={6}>
                        <br></br>
                        <Card>
  <Card.Img variant="top" src={women} data-aos="fade-up"  data-aos-duration="1000"  data-aos-easing="ease-in-out"   data-aos-mirror="true"
    data-aos-once="false"/>
  <Card.Body>
    <Card.Title className="text-primary">Women Workout</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary btn-sm">Training</Button>
  </Card.Body>
</Card>
                        
                        
                        </Col>


                        <Col lg={3} md={6}>
                        <br></br>
                        <Card>
  <Card.Img variant="top" src={men} data-aos="fade-down"  data-aos-duration="1000"  data-aos-easing="ease-in-out"   data-aos-mirror="true"
    data-aos-once="false"/>
  <Card.Body>
    <Card.Title className="text-primary">Strength Training</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary btn-sm">Training</Button>
  </Card.Body>
</Card>
                        
                        
                        </Col>

                        <Col lg={3} md={6}>
                        <br></br>
                        <Card>
  <Card.Img variant="top" src={body2} data-aos="fade-up"  data-aos-duration="1000"  data-aos-easing="ease-in-out"   data-aos-mirror="true"
    data-aos-once="false" />
  <Card.Body>
    <Card.Title className="text-primary">Bodybuilding</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary btn-sm">Training</Button>
  </Card.Body>
</Card>
                        
                        
                        </Col>
                       
                        <Col>
                        <br></br>
                        <Card>
  <Card.Img variant="top" src={run} data-aos="fade-down"  data-aos-duration="1000"  data-aos-easing="ease-in-out"   data-aos-mirror="true"
    data-aos-once="false"  />
  <Card.Body>
    <Card.Title className="text-primary">Cardio Training</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary btn-sm">Training</Button>
  </Card.Body>
</Card>
                        
                        
                        </Col>






                    </Row>
                </Container>
                
            </div>
        )
    }
}
