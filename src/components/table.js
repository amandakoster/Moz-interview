import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      jobtitle: '',
    };
  }

  componentWillMount(){
    this.fetchData();
  }

  fetchData(){
    superagent.get(`https://data.seattle.gov/resource/5m8y-83zb.json`)
      .then(res => {
        let resArr = res.body;
        let resMap = [];
        console.log(resMap);
        resArr.map(data => {
          resMap.push([
            data.jobtitle,
            console.log(resMap[0]),
          ]);
        });

        this.setState({data:resMap});
      });
  }

  render(){

    return(
      <div>
        <h1> Search Results </h1>
        <p> Data Source: {'https://data.seattle.gov/resource/5m8y-83zb.json'}</p>
      </div>
    );
  }
}


export default Table;
