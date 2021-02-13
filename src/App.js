import logo from './logo.svg';
import './App.css';
import Video from './components/Video.js'
import Navic from './components/Navic';

import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'



function App() {
  return (
   
         
    <div className="App">

      <Navic />
      <Video />
      <Page2 />
      <Page3 />
      <br></br>
      <Page4 />
      <Page5 /> 
    

    </div>
         
  
  );
}

export default App;
