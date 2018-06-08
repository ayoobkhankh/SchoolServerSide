//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');
var app = express();

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.get('/', (req, res) => res.send('Wow it worked!'))

var connection = mysql.createConnection({
    // multipleStatements: true,
    host: '127.0.0.1',
    port: 2206,
    user: 'root',
    password: 'Moveon@786',
    database: 'testdb'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

//Function to connect to database and execute query
// var executeQuery = function (res, query) {
//     mysql.connect(dbConfig, function (err) {
//         if (err) {
//             console.log("Error while connecting database :- " + err);
//             res.send(err);
//         } else {
//             // create Request object
//             // var query = "SELECT * FROM test_table;"
//             // query to the database
//             connection.query(query, function (err, res) {
//                 if (err) {
//                     console.log("Error while querying database :- " + err);
//                     res.send(err);
//                 } else {
//                     res.send(res);
//                 }
//             });
//         }
//     });
// }

//GET API
app.get("/user", function (req, res) {
    connection.query("SELECT * FROM test_table;", function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
        } else {
            console.log("There is an error")
        }
    })
    connection.end();
});

// //POST API
// app.post("/api/user", function (req, res) {
//     var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password”);
//     executeQuery(res, query);
// });

// //PUT API
// app.put("/api/user/:id", function (req, res) {
//     var query = "UPDATE [user] SET Name= " + req.body.Name + " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
//     executeQuery(res, query);
// });

// // DELETE API
// app.delete("/api/user /:id", function (req, res) {
//     var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
//     executeQuery(res, query);
// });