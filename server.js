// initialize dependencies / variables

const express = require('express');
const app = express();
const mysql = require ('mysql2');
const dotenv = require ('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

// Connect to the database ***

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// Check if db connection works
db.connect((err) => {
    // No wedding today
    if(err) return console.log("Error connecting to the mysql db");
    
    // Yes wedding connected
    console.log("Connected to mysql successfully as id: ", db.threadId)

    // Your code goes here
    // GET METHOD example

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

    // Data is the name of the file inside views folder
    app.get('/data', (req,res) => {
        // Retrieve data from database
        db.query('SELECT * FROM providers', (err, results) => {
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



    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);

        // Send a message
        console.log('Sending message to browser...'); 
        app.get('/', (req, res) => {
            res.send('Server started successfully! Wedding can go on!!!')
        })
    });
}); 


