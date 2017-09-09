
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import Table from './components/table';
const API_URL = 'https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div>
        <Table />
      </div>
    );
  }

}

const container = document.getElementById('root');
document.body.appendChild(container);
ReactDom.render(<App />, container);
