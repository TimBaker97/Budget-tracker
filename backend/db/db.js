const mongoose = require('mongoose');

const db = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log('The database is Connected...');
  } catch (error) {
    console.log('Database Connection Error...');
  }
};

module.exports = { db };
