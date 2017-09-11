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
      orderBy: '',
      offset: '',
      formattedData:[],
    };

    this.rawData;
    this.fetchData = this.fetchData.bind(this);
    this.sortJobtitle = this.sortJobtitle.bind(this);
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
        jobtitle:data.jobtitle ? data.jobtitle : 'no data',
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
      //var numA = Number(a.jobtitle);
      //var isNumber = isNaN(numA);

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
  // this.setState({searchText: e.target.value});

  sortJobtitle(e){
    console.log(e, 'E');
    if (this.state.order != 'ASC') this.setState({order: 'ASC'});
    else this.setState({order: 'DESC'});
    this.setState({orderBy: e.target.className});
    console.log(e.target.className);
    this.setState({formattedData: this.letterSort(this.state.formattedData)});
  }

  render(){
    return(
      <div>
        <h1>Seattle wages by gender</h1>
        <table>
          <tbody>
            <tr>
              <th className="jobtitle" onClick={this.sortJobtitle}> Job Title </th>
              <th className="woman" onClick={this.sortJobtitle}> Womens Wages </th>
              <th className="man" onClick={this.sortJobtitle}> Mens Wages </th>

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
