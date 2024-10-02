# Database Interacation in Web Applications

This demonstrates the cconnection of MySQL database and Node.js to create a simple API

## Requirements
- [Node.js](https://nodejs.org/) installed
-  MySQL installed and running
-  A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup
1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependancies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a ``` server.js ``` and ```.env``` files
5. Basic ```server.js``` setup
   <br>
   
   ```js
   const express = require('express')
   const app = express()

   

   // Question 1 goes here
   app.get('/data', (req,res) => {
        // Retrieve data from database
        const getPatients = 'SELECT first_name, last_name, date_of_birth FROM patients'
        db.query(getPatients, (err, results) => {
            if (err) {
                console.error(err);
                (err);
                res.statusMessage(500).send('Failed to get patients');
            } else {
                // Display the records to the browser
                res.render('data', {results: results});
            }
        });
    });


   // Question 2 goes here
   app.get('/data', (req,res) => {
        // Retrieve data from database
        const getProviders = 'SELECT first_name, last_name, provider_specialty FROM providers'
        db.query(getProviders, (err, results) => {
            if (err){
                console.error(err);
                (err);
                res.statusMessage(500).send('Error retrieving data');
            } else {
                // Display the records to the browser
                res.render('data', {results: results});
            }
        });
    });


   // Question 3 goes here
   app.get('/data', (req,res) => {
        // Retrieve data from database
        const getPatients = 'SELECT first_name FROM patients'
        db.query(getPatients, (err, results) => {
            if (err) {
                console.error(err);
                (err);
                res.statusMessage(500).send('Failed to get patients');
            } else {
                // Display the records to the browser
                res.render('data', {results: results});
            }
        });
    });


   // Question 4 goes here
   app.get('/data', (req,res) => {
        // Retrieve data from database
        const getProviders = 'SELECT first_name, provider_specialty FROM providers'
        db.query(getProviders, (err, results) => {
            if (err){
                console.error(err);
                (err);
                res.statusMessage(500).send('Error retrieving data');
            } else {
                // Display the records to the browser
                res.render('data', {results: results});
            }
        });
    });

   

   // listen to the server
   const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   ```
<br><br>

## Run the server
   ```
   nodemon server.js
   ```
<br><br>

## Setup the ```.env``` file
```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection
Configure the ```server.js``` file to access the credentials in the ```.env``` to use them in the database connection

<br>

## 1. Retrieve all patients
Create a ```GET``` endpoint that retrieves all patients and displays their:
- ```patient_id```
- ```first_name```
- ```last_name```
- ```date_of_birth```

<br>

## 2. Retrieve all providers
Create a ```GET``` endpoint that displays all providers with their:
- ```first_name```
- ```last_name```
- ```provider_specialty```

<br>

## 3. Filter patients by First Name
Create a ```GET``` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty
Create a ```GET``` endpoint that retrieves all providers by their specialty

<br>


## NOTE: Do not fork this repository


# Here's a step-by-step explanation of the code:

## Step 1: Import Dependencies

# JavaScript
const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');

The above code:-
* Import Express.js framework.
* Create an Express app instance.
* Import MySQL2 driver for database interaction.
* Import Dotenv for environment variable management.
* Import CORS for cross-origin resource sharing.


## Step 2: Configure Middlewares

# JavaScript
app.use(express.json());
app.use(cors());
dotenv.config();

The above code:-
* Enable JSON parsing for incoming requests.
* Enable CORS for cross-origin requests.
* Load environment variables from .env file.


## Step 3: Establish Database Connection

# JavaScript
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

The above code:-
* Create a MySQL connection object using environment variables.


## Step 4: Check Database Connection

# JavaScript
db.connect((err) => {
  // ...
});

The above code:-
* Establish a connection to the database.
* Handle connection errors.


## Step 5: Configure View Engine (Optional)

# JavaScript
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
Set EJS as the view engine (optional).

The above code:-
* Specify the views directory.


## Step 6: Define Routes

# JavaScript
app.get('/data', (req, res) => {
  // Retrieve data from database
  db.query('SELECT * FROM patients', (err, results) => {
    // ...
  });
});

The above code:-
* Define a GET route for /data.
* Retrieve data from the patients table.
* Handle query errors.
* Render the data view with retrieved data.


## Step 7: Start Server

# JavaScript
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  // ...
});

The above code:-
* Start the server on the specified port.
* Log a success message.


## Step 8: Define Additional Routes (Optional)
JavaScript
app.get('/', (req, res) => {
  res.send('Server started successfully! Wedding can go on!!!')
});

The above code:-
* Define an additional GET route for the root URL (/).
* Send a success message.

## Conclusively, all the code above sets up an Express server with MySQL database connectivity, retrieves data from the patients table, and renders an EJS view.


## Here's a step-by-step explanation of the HTML/EJS code:

## Step 1: Table Structure

# HTML
<table>
``"


*   Begins the HTML table structure.


## **Step 2: Table Head**


```html
<thead>
``"


*   Defines the table head section.


 **Step 3: Table Row**


```html
<tr>
``"


*   Begins a table row.


 **Step 4: Table Headers**


```html
<th>Patient ID</th>
<th>First Name</th>
<th>Last Name</th>

Defines table headers for Patient ID, First Name, and Last Name.

 **Step 5: Close Table Row and Head
 # HTML
</tr>
</thead>
Closes the table row and head sections.

Step 6: Table Body
HTML
<tbody>
Begins the table body section.

Step 7: Loop Through Results
HTML
<% results.forEach(row => { %>
Uses EJS syntax to loop through the results array.
Iterates over each row in the results.

Step 8: Table Row for Each Result
HTML
<tr>
Begins a new table row for each result.

Step 9: Display Result Data
HTML
<td><%= row.patient_id %></td>
<td><%= row.first_name %></td>
<td><%= row.last_name %></td>
Displays the patient ID, first name, and last name for each result.
Uses EJS syntax (<%= %>) to output the data.

Step 10: Close Table Row and Loop
HTML
</tr>
<% }); %>
Closes the table row and loop.

Step 11: Close Table Body and Table
HTML
</tbody>
</table>
Closes the table body and table structures.

## The above code generates an HTML table displaying patient data from the results array, using EJS templating to loop through and display each row.

