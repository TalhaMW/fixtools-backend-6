const express = require('express');
const path = require('path');

const cors = require('cors');

var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = process.env.PORT || 4000;

const allRoutes = require('./routes/route');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', allRoutes);

app.get('/', (req, res) =>
  res.send("Hello World , lets see what's been cooking")
);

const PATH = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('App is running...' + port);
});
