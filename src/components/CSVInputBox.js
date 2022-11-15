import React, { Component } from "react";

class CSVInputBox extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <label style={{display:"block"}}>Enter CSV contents:</label>
        <textarea 
            cols="50" rows="15" /*style={{width: "300px",
            height: "150px"}}
          name="textValue"*/
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default CSVInputBox;
/*
import React, { Component } from "react";

function box(){
    return(
        <textarea cols="50" rows="15">

        </textarea>
    );
}

export default box;*/