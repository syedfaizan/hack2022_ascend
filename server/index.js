const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();
const cors = require('cors');
require('./models/recipe');
require('./models/user');
require('./models/comment');

app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ascend-db');

restify.serve(router, mongoose.model('Recipe'));
restify.serve(router, mongoose.model('Comment'));
restify.serve(router, mongoose.model('User'));

app.use(router);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
