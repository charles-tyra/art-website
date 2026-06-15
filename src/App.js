import { Routes, Route } from 'react-router';
import './App.css';
import PicturedDiv from './PicturedDiv';
import background from './assets/test-image.jpg';

function App() {
  return (
    <div className="App">
      <div id='background-container'>
        <img id='background-img' alt='background' src={background} />
      </div>
            {/* &nbsp; is used for tab */}
      <div className='tester'>
        <PicturedDiv />
      </div>
    </div>
  );
}

export default App;
