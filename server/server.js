// Import necessary modules
const express =  require("express"); // Import Express framework
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions
const bodyParser = require("body-parser"); // Import Body-parser for parsing request bodies
const dotenv = require("dotenv"); // Import dotenv for loading environment variables
const router = require('./router/userRoute.js');
const authRouter = require("./router/auth-router.js")
const connectDB = require("./config/db.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");

// Initialize Express app
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

app.use('/api/auth', authRouter);


app.use(errorMiddleware)

// Define port for the server to listen on
const PORT = process.env.PORT || 5000;
// Connect to MongoDB database
connectDB().then(()=>{
  // Start server on specified port
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`); // Log server running message
  });
})
.catch((error) => console.log(error)); // Log error if database connection fails


// app.use('/api/user', router)
