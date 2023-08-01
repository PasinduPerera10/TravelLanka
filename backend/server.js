const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const beachRoutes = require('../backend/routes/location.route');

const app = express();
const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup, update 'mongodb://localhost:27017/travelweb' with your MongoDB connection string
mongoose.connect('mongodb+srv://Pasindu:Pasindu@cluster0.4fhs7.mongodb.net/VisitLanka', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/beaches', beachRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});