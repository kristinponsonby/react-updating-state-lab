import React from "react";

class DigitalClicker extends React.Component {
    constructor() {
        super();
    
        // Define the initial state:
        this.state = {
          timesClicked: 0,
          text: "Click me!"
        
        };
      }

      handleClick = () => {
          this.setState(prevState => ({
              timesClicked: prevState.timesClicked+1
          }))
        }

        changeText = (text) => {
          this.setState({ text }); 
        } 

      render() {
        const { text } = this.state
        return (
            <button onClick={ () => { this.changeText("newtext")}  } >{this.handleClick} { this.state.timesClicked} {text} </button>
            
        );
      }

}

export default DigitalClicker;

