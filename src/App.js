// import logo from './favicon.svg';
import './App.css';
import PicturedDiv from './PicturedDiv';
import background from './assets/test-image.jpg';

function App() {
  return (
    <div className="App">
      <div id='background-container'>
        <img id='background-img' src={background} />
      </div>
      {/* &nbsp; is used for tab */}
      &nbsp; planning on having a drop down menu of the left side.
      <div className='tester'>
      <PicturedDiv />
      </div>
    </div>
  );
}

export default App;
