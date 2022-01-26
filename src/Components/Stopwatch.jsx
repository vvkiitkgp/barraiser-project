import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

class Stopwatch extends React.Component {
  state = {
    startTimer: false,
  };
  static getDerivedStateFromProps(prevProps, state) {
    if (prevProps.startTimer !== state.startTimer) {
      return {
        startTimer: prevProps.startTimer,
      };
    }
    return null;
  }

  render() {
    const { startTimer } = this.state;
    console.log('timer start', startTimer);
    return (
      <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        autoStart={startTimer}
        onChange={({ hours, minutes, seconds }) => {
          // do something
          const formatted = `${hours}:${minutes}:${seconds}`;
          this.props.updateClock(formatted);
        }}
        onCallback={() => console.log('Finish')}
        render={({ formatted, hours, minutes, seconds }) => {
          return (
            <div>
              <p>{formatted}</p>
            </div>
          );
        }}
      />
    );
  }
}

export default Stopwatch;
