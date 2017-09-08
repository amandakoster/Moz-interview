
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL = 'https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi';
let searchSeattle;


//let renderIf = (test, component) => test? component ; undefined

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      jobtitle: '',

    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e) {
    this.setState({textInput: e.target.value});
  }

  handelSubmit(e) {
    e.preventDefault();
    console.log('handlesubmit');
    this.props.searchSeattle(this.state.textInput);
  }
  render() {
    return (
      <form onSubmit = {this.handelSubmit}>
        <input type = 'text'
          value = {this.state.textInput}
          onChange = {this.handelChange}/>
        <button type='submit'> search button </button>
      </form>
    );
  }
}

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('HIT SearchResultList');
    return (
      <div>
        <h1> List</h1>
        <ul> {this.props.jobtitle.map((item, i) => {
          return (
            <li key = {i}>
              <a href = {item.data.url}>
                {item.data.title}
              </a>
            </li>
          );
        })
        }
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobtitle: [],
      femaleRate: 0,
      maaleRate: 0,
      results: null,
      jobtitleSelected: null,
      jobtitleError: null,
    };
    this.searchSeattle = this.searchSeattle.bind(this);
  }

  searchSeattle(jobtitle, limit) {
    superagent.get(`${API_URL}${jobtitle}.json`)
      .then(res => {
        console.log(res, 'RES');
        this.setState({
          results: res.body,
          serchErrorMessage: null,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          jobtitle: res.body.data.children,
        });
        console.log(this.state.jobtitle[3].data.title);
      });
  }

  render() {
    console.log('HIT App');
    return (
      <main>
        <div>
          <h1>Hit APP</h1>
          <SearchForm
            searchSeattle={this.searchSeattle}
            hasError={this.state.hasError}/>

          <div className="inputBox">
            <SearchResultList jobtitle = {this.state.jobtitle} />
          </div>
        </div>
      </main>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render( < App / > , container);
