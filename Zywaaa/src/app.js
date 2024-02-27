require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cardRoutes = require("./routes/cards");

const app = express();
const PORT = process.env.PORT || 3000;


// Established MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Middleware to parse JSON requests
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/styles', express.static('styles'));


// Including routes
app.get('/', (req, res) => {
  res.render('index', { status: null });
});
app.use("/api", cardRoutes);


// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
