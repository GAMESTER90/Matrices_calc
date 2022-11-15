//import logo from './logo.svg';
import './App.css';
import CanvasDisplay from './components/CanvasDisplay';
import CSVInputBox from './components/CSVInputBox';
import { useRef } from 'react';

function App() {

  let csv_data = useRef();


  return (
    <div className="App">
      <h1>Optimal Lighting Fixture Gen</h1>
      <CanvasDisplay />
      <br></br>
      <h3>Render CSV from textbox.</h3>
      <CSVInputBox />
      <hr style={{width:"50%"}}></hr>
      <h3>Upload File Instead</h3>
    </div>
  );
}

export default App;
