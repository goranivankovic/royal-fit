
import React, { Component } from 'react'
import Anime from 'react-anime';
import {Container,Row,Col,Button} from 'react-bootstrap';
import body from '../img/body.jpeg'

export default class Page2 extends Component {
    constructor(){
        super()
        this.state={
            laz:false,
            broj25:0,
            broj50:0,
            broj100:0,
        }
        this.scorllChangeBack=this.scorllChangeBack.bind(this)
    }

    
    scorllChangeBack(){


            if(window.scrollY >= window.innerHeight-50){
                // console.log('page2');
                const ugasi=setInterval(()=>{
                    this.setState({
                        broj100:this.state.broj100+1,
                        broj50:this.state.broj50+1,
                        broj25:this.state.broj25+1,
                    })
                    if(this.state.broj25>=25 && this.state.broj50>=50 &&  this.state.broj100>=100){
                        this.setState({
                            broj50:50,
                            broj25:25,
                            broj100:100
                            
                        })
                        clearInterval(ugasi)

                    }

                },20)
        
        
                }


        

    }
   


    render() {
        window.addEventListener('scroll',this.scorllChangeBack)
        return (
           
            <div className="page2">
                <Container className="" id="page2" fluid>
                    <Row className="page2Row">
                        <Col lg={6} md={12} >
                            <img src={body} className="slika" alt=""/>
                            </Col>
                            <Col lg={6} md={12}>
                           
                                <Container>
                                    <Row>
                                        <Col lg={6} md={6} className="h">
                                            <br></br>
                                        <h5 className="text-center text-primary">Beginner</h5>
                                        <h2 className="text-center text-light">{this.state.broj25}<span className="h4">$</span></h2>
                                        <h6 className="text-primary">Monthly</h6>
                            <div className="divThreeItems">
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Pariatur quo enim culpa ipsa! Quam deserunt saepe harum facilis, sint est laudantium vero, dignissimos necessitatibus pariatur dolores ut adipisci, quod asperiores.</p>

                                <Button className="btn-sm">Read More</Button>
                                </div>

                                        
                                        </Col>
                                        <Col lg={6} md={6} className="h">
                                        <br></br>

                                        <h5 className="text-center text-primary">Advanced</h5>
                                        <h2 className="text-center text-light">{this.state.broj50}<span className="h4">$</span></h2>
                                        <h6 className="text-primary">Monthly</h6>
                            <div className="divThreeItems">
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Pariatur quo enim culpa ipsa! Quam deserunt saepe harum facilis, sint est laudantium vero, dignissimos necessitatibus pariatur dolores ut adipisci, quod asperiores.</p>

                                <Button className="btn-sm">Read More</Button>
                                </div>

                                        
                                        
                                        
                                        </Col>
                                        <Col lg={12} md={12} className="h">
                                       <br></br>
                                           

                              <h5 className="text-center text-primary">Warrior</h5>     
                               <h2 className="text-center text-light">{this.state.broj100}<span className="h4">$</span></h2>
                               <h6 className="text-primary">Monthly</h6>
                              <div className="divThreeItems">
                               <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Pariatur quo enim culpa ipsa! Quam deserunt saepe harum facilis, sint est laudantium vero, dignissimos necessitatibus pariatur dolores ut adipisci, quod asperiores.</p>

                               <Button className="btn-sm">Read More</Button>

                               </div>

</Col>


                                    </Row>
                                </Container>
                         
                            
                            </Col>
                    </Row>


                </Container>    
            </div>
        )
    }
}
