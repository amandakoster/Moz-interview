## SODA API: Seattle Wages by Gender
### Summary
This project consumes a public API and renders specific data in a sortable. The app is responsive for web and mobile.

### The City of Seattle API comparing wages by gender:
* Data; https://data.seattle.gov/api/views/cf52-s8er/rows.json
* API key: SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi
https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi

More information:
* https://data.seattle.gov/dataset/City-of-Seattle-Wages-Comparison-by-Gender-All-Job/cf52-s8er
*  http://catalog.data.gov/dataset/city-of-seattle-wages-comparison-by-gender-all-job-classifications-e471a

### Detailed Project Information:
#### 1. How to run this project:
Dependencies: You will find the dependencies listed in the package.json file. Use yarn to install these packages and type 'yarn install' in terminal and the packages will install.  

Run the app: type 'yarn watch' in terminal and that will launch 'webpack-dev-server --inline --hot' serve the app at http://localhost:8080/.

#### 2. Sortable data:
I have created a sortable table using the API data. The table shows 5 sortable columns for:
* Job title
* Average female wage
* Average male wage
* Wage Gap: $ Difference
* Wage Gap: % Percentage
