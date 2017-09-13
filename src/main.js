import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
<<<<<<< HEAD
import Data from './components/data';



=======
import Data from './components/data-sort/index.js';
import './style/_main.scss';
>>>>>>> df55db6963c1daa76265d457f6b25b9829f61f6b
const API_URL = 'https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Data />
      </div>
    );
  }
}

const container = document.getElementById('root');
document.body.appendChild(container);
ReactDom.render(<App />, container);
