import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import Data from './data.js';
import * as firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAoywsbQUHk1Ld6g6cYOJ9K612bbeqCLJk',
  authDomain: 'seattle-wage-by-gender.firebaseapp.com',
  databaseURL: 'https://seattle-wage-by-gender.firebaseio.com',
  projectId: 'seattle-wage-by-gender',
  storageBucket: '',
  messagingSenderId: '535226148346',
};
firebase.initializeApp(config);



const API_URL = 'https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Data />
      </div>
    );
  }
}

const container = document.getElementById('root');
document.body.appendChild(container);
ReactDom.render(<App />, container);
