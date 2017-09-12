import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import '../_main.scss';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      order: '',
      offset: '',
      formattedData:[],
    };

    this.rawData;
    this.fetchData = this.fetchData.bind(this);
    this.sortJobtitle = this.sortJobtitle.bind(this);
    this.sortWages = this.sortWages.bind(this);
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
        `https://data.seattle.gov/resource/5m8y-83zb.json?$order=jobtitle%20ASC`
      )
      .then(res => {
        this.rawData = res.body;
      });
  }

  formatData(arr){
    return arr.map(data => {
      return {
        jobtitle: data.jobtitle ? data.jobtitle : 'no data',
        female_avg_hrly_rate: data.female_avg_hrly_rate  ? data.female_avg_hrly_rate  : 'no data',
        male_avg_hrly_rate: data.male_avg_hrly_rate ?  data.male_avg_hrly_rate  : 'no data',
      };
    });
  }

  letterSort(arr) {
    var order = this.state.order;
    return arr.sort(function(a, b) {
      var A = a.jobtitle;
      var B = b.jobtitle;
      if (order == 'ASC') {
        if (A < B) return -1;
        if (A > B) return 1;
      } else {
        if (A < B) return 1;
        if (A > B) return -1;
      }
      return 0;
    });
  }

  numberSort(arr, column) {
    var order = this.state.order;
    return arr.sort(function(a, b) {
      var numA = (isNaN(Number(a[column]))) ? 0:Number(a[column]);
      var numB = (isNaN(Number(b[column]))) ? 0:Number(b[column]);
      if (order == 'ASC') {
        if(numA < numB) return -1;
        if(numA > numB) return 1;
      } else {
        if(numA < numB) return 1;
        if(numA > numB)return -1;
      }
      return 0;
    });
  }

  sortJobtitle(e){
    if (this.state.order != 'ASC') this.setState({order: 'ASC'});
    else this.setState({order: 'DESC'});
    this.setState({orderBy: e.target.className});
    this.setState({formattedData: this.letterSort(this.state.formattedData)});
  }

  sortWages(e){
    if (this.state.order != 'ASC') this.setState({order: 'ASC'});
    else this.setState({order: 'DESC'});
    this.setState({formattedData: this.numberSort(this.state.formattedData, e.target.className)});
  }

  render(){
    return(
      <div>
        <h1>Seattle wages by gender</h1>
        <table>
          <tbody>
            <tr>
              <th className="jobtitle" onClick={this.sortJobtitle}> Job Title </th>
              <th className="female_avg_hrly_rate" onClick={this.sortWages}> Womens Wages </th>
              <th className="male_avg_hrly_rate" onClick={this.sortWages}> Mens Wages </th>

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
