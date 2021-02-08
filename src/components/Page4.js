import React, { Component } from 'react'
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import team from '../img/team.jpeg'
import Anime from 'react-anime';

export default class Page4 extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="page4" id="page4">
                <Container>
                    <Row>
                      
                        <Col className="" lg={3} xs={6}>
                            <br></br>
                   <Anime  keyframes={[
   
    {translateX:150},
    {translateY: 15},
    {translateX: 0},
    {translateY: 0}
  ]} duration={1400} easing={"easeInQuint"}  loop={true} delay={2500}><h3 className="text-light">What we do</h3></Anime>     
                        
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
