import React, {Component} from 'react';
import ReactDom from 'react-dom'


class WagesForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      jobTitle: '',
    }
  }
}









class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <h2>testing</h2>
      </div>

    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
