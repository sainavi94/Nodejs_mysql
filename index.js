const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize.sync({alter:true}).then(() => console.log("Table Created")).catch((e) => console.log(e));


app.use('/api', routes);


app.listen(5000, console.log("Server is running on 5000"))