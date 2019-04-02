import React, { Component } from 'react';
// import Login from './components/Login';
import Usual from './Usual'
import GlobalHoc from './GlobalHoc';

@GlobalHoc
class App extends Component {
  componentDidMount() {
    const {$_axios} = this.props;
    console.log($_axios());
  }
  render() {
    return (
      <div className="App">
        <Usual />
      </div>
    );
  }
}

export default App;
