const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { errorHandler, notFound } = require('./config/middleware');
// const { connectDB } = require('./config/db'); // Uncomment when needed

// Load environment variables
dotenv.config();

// Connect to database (if needed)
// connectDB();

// Import routes
const indexRoutes = require('./routes/index');

// Initialize express app
const app = express();

// Load middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routes
app.use('/', indexRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
