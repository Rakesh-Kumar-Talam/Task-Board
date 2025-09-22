const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://talamrakeshkumar123_db_user:7hZQVBfACzXtt8aJ@taskboard.xw9rxyf.mongodb.net/?retryWrites=true&w=majority&appName=TaskBoard';
    
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('Server will continue running without database connection...');
    console.log('Please check your MongoDB Atlas connection string and IP whitelist settings.');
    // Don't exit the process - let the server continue running
  }
};

module.exports = connectDB;
