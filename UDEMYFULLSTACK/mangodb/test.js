const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb') 
.then(() => {
  console.log("MongoDB Connected ✅");
  mongoose.connection.close();
})
.catch(err => console.error("Connection Error ❌", err.message));