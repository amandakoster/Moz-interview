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
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);


  }

  componentWillMount(){
    this.fetchData();
  }
  fetchData(){
    superagent
      .get(
        `https://data.seattle.gov/resource/5m8y-83zb.json?$order=jobtitle%20DESC`
      )
      .then(res => {
        let resArr = res.body;
        console.log(resArr[0], 'resArr');
        let resMap = [];
        console.log(resMap, 'resMap');
        resArr.map(data => {
          resMap.push([
            data.jobtitle ? data.jobtitle : 'no data',
            data.female_avg_hrly_rate  ? data.female_avg_hrly_rate  : 'no data',
            data.male_avg_hrly_rate ?  data.male_avg_hrly_rate  : 'no data',
          ]);
        });

        this.setState({data:resMap});
      });
  }

  // this.setState({searchText: e.target.value});

  handleClick(e){

  }

  render(){
    return(
      <div>
        <h1>Moz interview: Seattle wages by gender</h1>
        <table>
          <tbody>
            <tr>
              <th className="jobtitle" onClick={this.handleClick}> Job Title </th>
              <th className="women" onClick={this.handleClick}> Womens Wages </th>
              <th className="men" onClick={this.handleClick}> Male Wages </th>
            </tr>
            {this.state.data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data[0]}</td>
                  <td>{data[1]}</td>
                  <td>{data[2]}</td>
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
