
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

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
    this.search = this.search.bind(this);
  }

  search(jobtitle, limit) {
    superagent.get(`https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi`)
      .then(res => {

        console.log(res);
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
        console.log(this.state.jobtitle[0].data.title);
      });
  }

  render() {
    return (
      <main>
        <div>
          <h1></h1>
          <SearchForm search = {this.search} />
          <div className="inputBox">
            <SearchResultList jobtitle = {this.state.jobtitle} />
          </div>
        </div>
      </main>
    );
  }
}

//let renderIf = (test, component) => test? component ; undefined

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e) {
    this.setState({searchText: e.target.value});
  }

  handelSubmit(e) {
    e.preventDefault();
    console.log('handlesubmit');
    this.props.search(this.state.searchText);
  }
  render() {
    return (
      <form onSubmit = {this.handelSubmit}>
        <input type = 'text'
          value = {this.state.searchText}
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

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render( < App / > , container);
