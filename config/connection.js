
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burger_db"
    });
}

connection.connect(err => {
    if (err)
        console.log(err);
    console.log("Connected to burger_db");
});

module.exports = connection;
