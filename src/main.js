
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
const API_URL = 'https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      jobtitle: '',
    };
  }
  componentWillMount() {
    superagent.get(`${API_URL}`)
      .then(res=> {
        console.log(res.body);
        let responceArray = res.body;
        responceArray.data.map(data => {
          for(let i = 0; i<=data.length; i++){
            console.log(data[8]);
            console.log(data[9]);
            console.log(data[12]);
          }
        });
      });
  }

  render() {
    return(
      <div>
        <h1> Search Results </h1>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <SearchResults />
      </div>
    );
  }

}

const container = document.getElementById('root');
document.body.appendChild(container);
ReactDom.render(<App />, container);
