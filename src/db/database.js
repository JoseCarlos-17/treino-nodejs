const mongoose = require('mongoose')

async function database() {
  try {
    await mongoose.connect("mongodb+srv://josecarlosbsilva172_db_user:O1PkVd7acXsvUiJ7@cluster0.bwe1lzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log('connected to database')
  } catch (error) {
    console.log(`Error detected: ${error}`)
  }
}

module.exports = database