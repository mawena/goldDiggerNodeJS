const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");

const articleRoutes = require("./Routes/article");
const websiteRoutes = require("./Routes/website");
const categoryRoutes = require("./Routes/category");

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'goldDigger',
    password: 'licdovic',
    database: 'goldDigger'
}

// middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json());

// routes
app.get("/", (req, res)=>{
    res.send('Welcome to my API');
});

app.use("/api/article", articleRoutes);
app.use("/api/website", websiteRoutes);
app.use("/api/category", categoryRoutes);

// Server running
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'));
});