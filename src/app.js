const express = require('express');
const parser = require('body-parser');
const port = 3000;
const routes = require('./routes')
const mysql = require("mysql");
const app = express();

app.use(parser.json())

routes(app);


const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "mypassword",
  database: process.env.MYSQL_DATABASE || "api",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM Users", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});



//Get all users
app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});
//Get users by id
app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

//Add user
app.post('/user/add', (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  const id = Object.keys(users).length+1;
  const user = {
    id,
    username: req.body.username,
    email: req.body.email,
  };
  users[id] = user;
  return res.send(user);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log();
})

