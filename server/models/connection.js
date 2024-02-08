const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})

connection.connect((error) => { if (error) response.status(500).json({status: false, message: ''}) })

module.exports = connection