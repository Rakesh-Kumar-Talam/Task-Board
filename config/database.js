const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://talamrakeshkumar123_db_user:7hZQVBfACzXtt8aJ@taskboard.xw9rxyf.mongodb.net/?retryWrites=true&w=majority&appName=TaskBoard');

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('Server will continue running without database connection...');
    console.log('Please whitelist your IP address in MongoDB Atlas: https://cloud.mongodb.com/');
    // Don't exit the process - let the server continue running
  }
};

module.exports = connectDB;
