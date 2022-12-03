import ValidationSample from './ch5/ValidationSample.jsx';
import RefSample from './ch5/createRef.jsx';
import { Component } from 'react';

class App extends Component{
  render()
  {
    return (
      <div>
        <ValidationSample />
        <RefSample />
      </div>
    );
  }
}

export default App;