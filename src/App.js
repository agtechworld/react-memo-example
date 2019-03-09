import React, { Component } from 'react';
import FunctionalComp from './Components/MyFunctionalComponent';

class App extends Component {

  state = {
    val: 100
  }

  componentDidMount() {
  
   setInterval(() => {
     this.setState({val:200})
   }, 1000);

  }
  render() {
    return (
      <div>
     
      <FunctionalComp shareprice={this.state.val}/>
        
      </div>
    );
  }
}

export default App;
