import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import '../_main.scss';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sort: '',
      order: '',
      offset: '',
      formattedData:[],
    };

    this.rawData;
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.fetchData()
      .then(() => {
        this.setState({formattedData : this.formatData(this.rawData)});
      });
  }

  fetchData(){
    return superagent
      .get(
        `https://data.seattle.gov/resource/5m8y-83zb.json?$order=jobtitle%20DESC`
      )
      .then(res => {
        this.rawData = res.body;
      });
  }

  formatData(arr){
    return arr.map(data => {
      return {
        jobtitle:data.jobtitle ? data.jobtitle : 'no data',
        female_avg_hrly_rate: data.female_avg_hrly_rate  ? data.female_avg_hrly_rate  : 'no data',
        male_avg_hrly_rate: data.male_avg_hrly_rate ?  data.male_avg_hrly_rate  : 'no data',
      };
    });
  }

  // this.setState({searchText: e.target.value});

  handleClick(e){

  }

  render(){
    return(
      <div>
        <h1>Seattle wages by gender</h1>
        <table>
          <tbody>
            <tr>
              <th className="jobtitle" onClick={this.handleClick}> Job Title </th>
              <th className="women" onClick={this.handleClick}> Womens Wages </th>
              <th className="men" onClick={this.handleClick}> Male Wages </th>
            </tr>
            {this.state.formattedData.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.jobtitle}</td>
                  <td>{data.female_avg_hrly_rate}</td>
                  <td>{data.male_avg_hrly_rate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p> Data Source: {'https://data.seattle.gov/resource/5m8y-83zb.json'}</p>
      </div>
    );
  }
}


export default Data;
