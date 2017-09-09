import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
const API_URL = 'https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi';


class AppTwo extends React.Component({
  constructor (props) {
    super(props)
    this.state ={
      data: [],
    };
  },
  componentWillMount: function() {
    var component = this;
    var url = API_URL;
    var end = function (error, response) {
      component.setState({repos:response.body});
      console.log(res);
    };
    var req = superagent.get(url).end(end);
  },
  render() {
    return (
      <div>
        Hello {this.props.name}
        <div>
          superagent result:
          {this.state.repos.map(function(repo){return(
            <div>{repo.name}</div>
          );})}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <AppTwo/>,
  document.getElementById('container')
);
