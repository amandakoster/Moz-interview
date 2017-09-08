import React, {Component} from 'react';
import ReactDom from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello World</h1>
      </div>

    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
