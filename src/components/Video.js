import React, { Component } from 'react'
import running from '../video/running2.mp4'


export default class Video extends Component {
    constructor(){
        super()
    

   
    }






    render() {
   


        return (
            <div>
            <div className='videoMainDiv'>
                <video src={running} id="hg" type="video/mp4" autoPlay={true} muted={true} loop={true}></video>
                
   
            </div>

       
            </div>
        )
    }
}
