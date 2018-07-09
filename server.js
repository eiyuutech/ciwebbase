const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

const db = require('./app/config/db.mysql.js');
// force: true will drop the table if it already exists
// db.sequelize.sync({
//     force: true
// }).then(() => {
//     console.log('Drop and Resync with { force: true }');
// });

require('./app/route/category.route.js')(app);

const port = process.arch[2] || 3000;
app.listen(port, function() {
    console.log("Server listening on port: " + port);
});