import React from 'react';
import { BarContainer, TextFieldInput } from './ProjectBar.styles';
import { Button } from '@mui/material';
import Stopwatch from './Stopwatch';

export class ProjectBar extends React.Component {
  state = {
    startTimer: false,
    clock: '',
    name: '',
  };
  AddProject = () => {
    this.props.addProject({ name: this.state.name });
  };

  updateClock = (time) => {
    this.setState({
      clock: time,
    });
  };

  setProjectName = (name) => {
    this.setState({
      name: name,
    });
  };
  startTheTimer = () => {
    const { startTimer } = this.state;
    if (startTimer) {
      this.AddProject();
    }

    this.setState({
      startTimer: !startTimer,
    });
  };

  render() {
    return (
      <div>
        <BarContainer>
          <TextFieldInput>
            <input
              style={{ height: '100%', width: '100%' }}
              onChange={(e) => this.setProjectName(e.target.value)}
            ></input>
          </TextFieldInput>
          <Button variant="text">+ Project</Button>
          <div>3</div>
          <div>2</div>
          <Stopwatch
            startTimer={this.state.startTimer}
            updateClock={(time) => this.updateClock(time)}
          ></Stopwatch>
          <Button variant="contained" onClick={this.startTheTimer}>
            Start
          </Button>
          <div>3</div>
        </BarContainer>
      </div>
    );
  }
}

export default ProjectBar;
