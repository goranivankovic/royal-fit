import React, { Component } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import Media from "react-media";
import { FaBars} from 'react-icons/fa'


import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Anime from 'react-anime';


export default class Navic extends Component {
    constructor(){
        super()
        this.state={
            laz:false,
            laz2:false,
            textAnimacija:'',
            broj0:0,
           
        }
        this.scorllChangeBack=this.scorllChangeBack.bind(this)
        this.funkcija768=this.funkcija768.bind(this)

    }
    componentDidMount(){
        this.setState({
            laz:true,
            laz2:true
        })
     setTimeout(()=>{ 
       
             
            this.setState({
                  
           
           textAnimacija:'Online Personal Traning'

        
                  
       
       })

        
     },1500)

     
    }

  
    scorllChangeBack(){

        if(window.scrollY <= 80 ){
            this.setState({
                laz:true,

             

            })

        }else{
            this.setState({
                laz:false,
              

            })
          


        }

    }
   


    funkcija768(){

        if(this.state.laz2){

            let navicMainDiv768 =document.querySelector('.navicMainDiv768')
             let ulClassa768 =document.querySelector('.u768');
             ulClassa768.style.display='flex'
             navicMainDiv768.style.backgroundColor="black"
             navicMainDiv768.style.opacity='0.55'
          
           
             

             this.setState({
                 laz2:false
             })

     
           }else if(!this.state.laz2){

               
            let navicMainDiv768 =document.querySelector('.navicMainDiv768')
            let ulClassa768 =document.querySelector('.u768');
            ulClassa768.style.display='none'
            navicMainDiv768.style.backgroundColor="transparent"
            navicMainDiv768.style.opacity='1'
      
               
      
       
           
               this.setState({
                   laz2:true
               })


           }


    }


    render() {

        window.addEventListener('scroll',this.scorllChangeBack)
        return (



<Media query={{ maxWidth: 768 }}>
                    {matches =>
                      matches ? (

                        <div id="page1">
                            
                <Container fluid className='navicMainDiv768'>
              
                <Row>
                    
                    <Col xs={12}>
                    
                        <h3 className="text-left text-primary"><FaBars onClick={this.funkcija768} /></h3>
                        </Col>
                        <Col xs={12} className="ul768">
                       
                     
                            <ul>
                                <div className="u768">
                             <Link to="page1" smooth={true} offset={0} duration={1200} onClick={()=>{
                                 if(!this.state.laz2){

               
                                    let navicMainDiv768 =document.querySelector('.navicMainDiv768')
                                    let ulClassa768 =document.querySelector('.u768');
                                    ulClassa768.style.display='none'
                                    navicMainDiv768.style.backgroundColor="transparent"
                                    navicMainDiv768.style.opacity='1'
                              
                                       
                              
                               
                                   
                                       this.setState({
                                           laz2:true
                                       })
                        
                        
                                   }

                             }}><li className="h5">Home</li></Link>
                                <Link to="page2" smooth={true} offset={300} duration={1200} onClick={()=>{
                                    if(!this.state.laz2){

               
                                        let navicMainDiv768 =document.querySelector('.navicMainDiv768')
                                        let ulClassa768 =document.querySelector('.u768');
                                        ulClassa768.style.display='none'
                                        navicMainDiv768.style.backgroundColor="transparent"
                                        navicMainDiv768.style.opacity='1'
                                  
                                           
                                  
                                   
                                       
                                           this.setState({
                                               laz2:true
                                           })
                            
                            
                                       }

                                }}><li className="h5">Gym </li>  </Link>                               
                       <Link to="page3" smooth={true} duration={1200} offset={0} onClick={()=>{
                            if(!this.state.laz2){

               
                                let navicMainDiv768 =document.querySelector('.navicMainDiv768')
                                let ulClassa768 =document.querySelector('.u768');
                                ulClassa768.style.display='none'
                                navicMainDiv768.style.backgroundColor="transparent"
                                navicMainDiv768.style.opacity='1'
                          
                                   this.setState({
                                       laz2:true
                                   })
                    
                    
                               }
                    
                       }}><li className="h5">Workouts</li></Link>

                             <Link to="page4" smooth={true}  duration={1200} offset={0} onClick={()=>{
                            if(!this.state.laz2){

               
                                let navicMainDiv768 =document.querySelector('.navicMainDiv768')
                                let ulClassa768 =document.querySelector('.u768');
                                ulClassa768.style.display='none'
                                navicMainDiv768.style.backgroundColor="transparent"
                                navicMainDiv768.style.opacity='1'
                          
                                   this.setState({
                                       laz2:true
                                   })
                    
                    
                               }
                    
                       }}><li className="h5">About</li></Link>     
                            <Link to="page5" smooth={true} offset={-50} duration={1200} onClick={()=>{
                                 if(!this.state.laz2){

               
                                    let navicMainDiv768 =document.querySelector('.navicMainDiv768')
                                    let ulClassa768 =document.querySelector('.u768');
                                    ulClassa768.style.display='none'
                                    navicMainDiv768.style.backgroundColor="transparent"
                                    navicMainDiv768.style.opacity='1'
                              
                                       
                              
                               
                                   
                                       this.setState({
                                           laz2:true
                                       })
                        
                        
                                   }

                             }}><li className="h5">Contact</li></Link>       
                               </div>


                            </ul>
                    
                  
                    </Col>
                </Row>
            </Container>
         
 



    </div>



              

                        ) : (

<div id="page1">
                            
                <Container fluid className={this.state.laz ? 'navicMainDiv' : 'navicMainDiv nesto' }>
              
                <Row className="navicMainDivRed">
                    
                    <Col xs={4}>
                    
                  <h3 className="text-primary">Royal-fit</h3>
                        </Col>
                        <Col xs={8} className="ulClassa">
                     
                            <ul className="ulClassaItems">
                            <Link to="page1" smooth={true} offset={0} duration={1200}><li className="h5">Home</li></Link>
                           <Link to="page2" smooth={true} duration={1200} offset={-50}><li className="h5">Gym </li>  </Link>                                
                           <Link to="page3" smooth={true} duration={1200} offset={0}><li className="h5">Workouts</li></Link>
                             <Link to="page4" smooth={true} duration={1200} offset={-55}><li className="h5">About</li></Link>
                             <Link to="page5" smooth={true} duration={1200} offset={0}><li className="h5">Contact</li></Link>    



                            </ul>
                    
                  
                    </Col>
                </Row>
            </Container>

            <Container className="textAnimacija">

<Row>

    <Col>
 
   
  <h2 className="text-center text-primary">{this.state.textAnimacija} </h2>

   
    </Col>
 
</Row>


</Container>
            
               
       
         


   
            



    </div>



                        
                       )
                     }
                   </Media>

        



        
        )
    }
}
