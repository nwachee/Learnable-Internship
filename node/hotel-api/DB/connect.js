const mongoose = require("mongoose")

const connectDB = (url) => {
    return mongoose.connect(url, { 
         useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected!!!');
      });
}

// create a model from schema and export it
module.exports = connectDB