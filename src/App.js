//import logo from './logo.svg';
import './App.css';
import CanvasDisplay from './components/CanvasDisplay';
import React, { useState } from 'react';

const allowedExtensions = ["plain"];

function App() {

  //let csv_data = useRef();

      // State to store the parsed file data.
      const [data, setData] = useState(new Array());
      

      // State to contain error in case of non-supported filetype.
      const [error, setError] = useState("");
       
   
    //Loads the data to the data state for use in the canvas components.
    function generateMatrix(txt){
        //console.log('Contents to parse: \n'+txt)
        txt = txt.split(/\r?\n/)
        let dataw = [];
              txt.forEach((row,id)=>{
                console.log('row #'+(id+1)+' = '+row)
                dataw.push(row.split(''));
              });
        setData(dataw);
        console.log('Data state saved:\n')
        console.log(data)
        return dataw;
    }
    
    // This function is called when the inputted file is changed.
      const handleFileChange = (e) => {
          setError("");
          //console.log( e.target.files[0])
          // Make sure user uploaded a file.
          if (e.target.files.length) {
              const inputFile = e.target.files[0];
              // Check that the file extension is part of acceptable list.
              const fileExtension = inputFile?.type.split("/")[1];
              if (!allowedExtensions.includes(fileExtension)) {
                  setError("Please input a .txt file");
                  return;
              }
              // If input type is correct set the state
                        // Initialize a reader which allows user
          // to read any file or blob.
          const reader = new FileReader();
           
          // Event listener on reader when the file
          // loads, we parse it and set the data.
          reader.onload = async ({ target }) => {
              let dataw = generateMatrix(target.result);
              console.log('Layout Matrix Generated:\n');
              console.log(dataw)
          };
          reader.readAsText(inputFile);
          }else{
            setError("Please input a .txt file");
                  return;
          }
      };

      function handleTextBoxInputChange(event) {
        
          //console.log(event.key+' has been pressed.');
        generateMatrix(event.target.value);
      }

  return (
    <div className="App">
      <h1>Optimal Lighting Fixture Gen</h1>
      <CanvasDisplay layout={data} style={{verticalAlign: 'top',marginTop:'10px'}}/>
      <div className="sidePanel" style={{display:'inline-block'}}>
      <h3>Render from textbox.</h3>
      <div>
        <label style={{display:"block"}}>Enter CSV contents:</label>
        <textarea 
            cols="25" rows="5" /*style={{width: "300px",
            height: "150px"}}
          name="textValue"*/
          onChange={handleTextBoxInputChange}
        ></textarea>
      </div>
      <hr style={{width:"50%"}}></hr>
      <h3>Upload File Instead</h3>
      <div>
            <label htmlFor="csvInput" style={{ display: "block" }}>
                Enter txt File
            </label>
            <input
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
            />
            <br></br>
            <label style={{marginTop:"2rem"}}>Extracted 2D Array:</label>
            <br></br>
            <div style={{ marginTop: "2rem", marginBottom: '1em' }}>
                {error ? error : (data.map((col,
                  idx) => <div key={idx}>#{idx+1}: {col}</div>))}
            </div>
            {/*<div>
                <p>
                    This is the data:
                    <br></br>
                    {data}
                </p>
            </div>*/}
            </div>
        </div>
    </div>
  );
}

export default App;
