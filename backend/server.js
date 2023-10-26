const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { db } = require('./db/db.js');
const { readdirSync } = require('fs');
const app = express();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

const path = require('path');
const dirPath = path.resolve(__dirname, './routes');

//routes
//We map the files within the routes folder
readdirSync(dirPath).map((route) =>
  app.use('/api/v1', require('./routes/' + route))
);

// app.get('/', (req, res) => {
//   res.send('Hello');
// });

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
};

server();
