import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import './_main.scss';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      order: '',
      offset: '',
      formattedData:[],
      wageDifference: '',
      percent: '',
    };

    this.rawData;
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
    console.log(this.data, 'this.data');
    return arr.map(data => {
      return {
        jobtitle: data.jobtitle ? data.jobtitle : 'no data',
        female_avg_hrly_rate: data.female_avg_hrly_rate  ? data.female_avg_hrly_rate  : 'no data',
        male_avg_hrly_rate: data.male_avg_hrly_rate ?  data.male_avg_hrly_rate  : 'no data',

        ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage: data.ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage ? Number((data.ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage *
        100)).toFixed(2) : 'no data',

        amountGap: (data.male_avg_hrly_rate - data.female_avg_hrly_rate) ? Number((data.male_avg_hrly_rate - data.female_avg_hrly_rate)).toFixed(2) : 'no data',
      };
    });
  }

  jobtitle(arr) {

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

  wage(arr, column) {
    var order = this.state.order;
    return arr.sort(function(a, b) {
      var numA = (isNaN(Number(a[column]))) ? 0 : Number(a[column]);
      var numB = (isNaN(Number(b[column]))) ? 0 : Number(b[column]);
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
    this.setState({formattedData: this.jobtitle(this.state.formattedData)});
  }

  sortWages(e){
    if (this.state.order != 'ASC') this.setState({order: 'ASC'});
    else this.setState({order: 'DESC'});
    this.setState({formattedData: this.wage(this.state.formattedData, e.target.className)});
  }

  wageDifference(gap){
    let difference =
    this.state.female_avg_hrly_rate - this.male_avg_hrly_rate || this.state.male_avg_hrly_rate - this.state.female_avg_hrly_rate;
    if (this.state.female_avg_hrly_rate > this.state.male_avg_hrly_rate);
    if (this.state.female_avg_hrly_rate < this.state.male_avg_hrly_rate);
    else 0;
    return difference;
  }

  render(){
    return(
      <div>
        <h1>Seattle Wages By Gender</h1>
        <table>
          <tbody>
            <tr>
              <th className="jobtitle" onClick={this.sortJobtitle}> Job Title </th>
              <th className="female_avg_hrly_rate" onClick={this.sortWages}> Womens Wages </th>
              <th className="male_avg_hrly_rate" onClick={this.sortWages}> Mens Wages </th>
              <th className="ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage" onClick={this.sortWages}> Wage Gap: $ Difference </th>
              <th className="ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage" onClick={this.sortWages}> Wage Gap: % Percentage </th>
            </tr>
            {this.state.formattedData.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.jobtitle}</td>
                  <td>{data.female_avg_hrly_rate}</td>
                  <td>{data.male_avg_hrly_rate}</td>
                  <td>{data.amountGap}</td>
                  <td>{data.ratio_of_women_s_hourly_rate_to_men_s_hourly_rate_percentage}</td>
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
