var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 8889,
    user: "krrcn0e4a1qm3gbk",
    password: "3306",
    database: "bk28pavaswuxku6j"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;