import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

class App extends React.Component{

  render(){
    return(
      <div>
        <h1> hello world </h1>
      </div>

    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
