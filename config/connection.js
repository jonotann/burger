var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
		port: 3306,
		host: 'gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'krrcn0e4a1qm3gbk',
		password: 'b8fv8msfb3hgo20o',
		database: 'bk28pavaswuxku6j'
	})
};


connection.connect(function(err) {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;