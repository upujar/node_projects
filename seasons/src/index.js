import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {lat: null, lon: null, errorMsg: null};

  }

  //called when rendered object is mounted: state
  componentDidMount() {
    console.log("mounted")
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState(
              {lat: position.coords.latitude, lon: position.coords.longitude})
        },
        (err) => {
          this.setState({errorMsg: err.message})
        }
    );
  }

  // called when the rendered object is updated
  componentDidUpdate() {
    console.log("updated")
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDisplay lat={this.state.lat}/>;
    } else if (!this.state.lat && this.state.errorMsg) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    return <Spinner message="Please accept location request."/>;
  }

  render() {
    return (
        //just an example to wrap the content of multiple if else logic into one common style
        <div className="border red">
          {this.renderContent()}
        </div>
    )

  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

