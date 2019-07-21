import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./app.css";
import styled from "styled-components";
import Display from "../presentational/Display";
import Button from "../presentational/Button";
import dataDrum from "../presentational/dataDrum";

// Wrapper with styled component

const Wrapper = styled.section`
  padding-top: 2em;
  padding-bottom: 3em;
  background: papayawhip;
`;

class App extends Component {
  componentDidMount() {
    console.log(this.audio)
    window.focus()
  } 

  constructor(props) {
    super(props);
    this.state = {
      currentSoundId: "click"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  handleDisplay = (e) => {
    const value = e.currentTarget.id;
    this.setState({
      currentSoundId: `This sound now: ${value}`
    });
  };

  handleClick = () => {
    console.log("must sound", this.props.drumKey);
    this.audio.play();
    this.audio.currentTime = 0;
     // problem 1
    this.props.handleDisplay(this.props.drumKey);
  };

  render() {
    return (
      <div id="drum-machine" className="app">
        <Wrapper>
          <Display currentSoundText={this.state.currentSoundId} />
          <div className="display">
            {dataDrum.map(button => (
              <Button
                handleClick={this.handleClick}
                handleDisplay={this.handleDisplay}
                currentSoundId={button.name}
                drumKey={button.name}
                src={button.src}
                image={button.img}
                alt={button.name}
                // problem 2, i think
                result={ref => (this.audio = ref)}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}
 //export default App;

let container = document.getElementById('root');
let component = <App />;

ReactDOM.render(component, container);
 

