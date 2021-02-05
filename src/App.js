import logo from './logo.svg';
import './App.css';
import Video from './components/Video.js'
import Navic from './components/Navic';
import TextAnimacija from './components/TextAnimacija';

function App() {
  return (
    <div className="App">
      <Video />
      <Navic />
      <TextAnimacija />
    </div>
  );
}

export default App;
