const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Database Connection
mongoose.connect('mongodb+srv://oliver:s0803940@notenest.dyihuvj.mongodb.net/?retryWrites=true&w=majority&appName=NoteNest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB")
}).catch((err) => {
  console.log("Error: ", err)
})

// Middleware for parsing JSON
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notes', require('./routes/notes'))


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
