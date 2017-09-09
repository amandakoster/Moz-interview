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
  }

  componentWillMount(){
    this.fetchData();
  }
  fetchData(){
    superagent
      .get(`https://data.seattle.gov/resource/5m8y-83zb.json?$order=${this.state.sort}`
      )
      .then(res => {
        let resArr = res.body;
        console.log(resArr[0], 'resArr');
        let resMap = [];
        console.log(resMap, 'resMap');
        resArr.map(data => {
          resMap.push([
            data.jobtitle,
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
              <th className="jobtitle" onClick={this.handleChange}> Job Title </th>
            </tr>
            {this.state.data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data[0]}</td>
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
