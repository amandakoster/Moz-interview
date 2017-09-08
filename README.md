# Moz-interview


Summary
* Consume a public API and render in a sortable, paginated table. Provide several filtering options (details below).

##### Allowed Tools
You are allowed to use your choice of open source technologies, such as React, lodash, Bootstrap.

For the paginated table itself, you may use Bootstrap or similar for styling, but you need to write the code.
API
The City of Seattle provides an API comparing wages by gender:
https://data.seattle.gov/api/views/cf52-s8er/rows.json

Use this API key: SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi

https://data.seattle.gov/api/views/cf52-s8er/rows.json?api_key=SCC1c0Cove7ypmBeuf3dTX2WZOk6qEfCAki6MoNi

(If you run into trouble and need to include the json in your project, that is ok).

More information:
https://data.seattle.gov/dataset/City-of-Seattle-Wages-Comparison-by-Gender-All-Job/cf52-s8er
http://catalog.data.gov/dataset/city-of-seattle-wages-comparison-by-gender-all-job-classifications-e471a
Detailed Project Instructions

1. Create a paginated, sortable table using the API data. The table should show at least columns for:
* Job title
* Average female wage
* Average male wage

Each column should be sortable.

##### 2. Add filters:

Only show job titles where men/women make more. After applying this first filter, the table will only show jobs where either men or women make more (e.g., it hides rows where men and women make the same amount).
Filter by minimum gap (e.g. $0.50 and more). This filter arrows results based on an arbitrary threshold pay difference. From a user perspective, this could be written as "show me only those jobs where the difference in pay is at least 0.50" (where the 0.50 is user-configurable). This would hide results where (a) men and women make the same amount, (b) where men make up to 0.50 more than women, and (c) where women make up to 0.50 more than men.
Filter by gap percentage. This filter is the same as above, except the user's request is equivalent to "show me only jobs where the difference in pay is at least 5%" (where 5% is configurable).

Filters must handle gracefully any rows that are missing either male or female information.

##### 3. Add pagination:
25 per page. Bonus if customizable.

##### Above & Beyond
Is this all too easy, or not sufficient to show off your dev skills? No problem — complete the assignment and then keep going! We’d love to see you take this a step further, to be creative, and do even more with the data. Use your imagination.
Project Delivery
You can either:

Send working code to us with any instructions for how to run your project, including instructions about any dependencies.
Deploy your finished project somewhere, like Heroku, and send us the URL. If you choose this method, please also make your code available to us via email or Github.

Let me know if you have any questions. Thanks Amanda.
