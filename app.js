//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');
var Sequelize = require('sequelize');
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


var sequelize = new Sequelize('testdb', 'root', 'Moveon@786', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: { socketPath: '/var/run/mysqld/mysqld.sock' }
});

sequelize.authenticate().then(function (err) {
    if (err) {
        console.log('There is connection in ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});

//Create Item Table Structure
var Item = sequelize.define('Item', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
});

//Applying Item Table to database
sequelize.sync({ force: true }).then(function (err) {
    if (err) {
        console.log('An error occur while creating table');
    } else {
        console.log('Item table created successfully');
    }
});

//GET API
app.get("/user", function (req, res) {
    // res.send('User route worked!')

    var connection = mysql.createConnection({
        // multipleStatements: true,
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Moveon@786',
        database: 'testdb',
        socketPath: '/var/run/mysqld/mysqld.sock'
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... \n\n");
        } else {
            console.log("Error connecting database ... \n\n");
        }
    });

    connection.query("SELECT name as childname FROM test_table", function (err, rows, fields) {
        if (!err) {
            res.send(rows);
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