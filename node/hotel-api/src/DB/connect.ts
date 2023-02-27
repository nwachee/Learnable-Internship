import { connect } from "mongoose";

const connectDB = (url) => {
    return connect(url, { 
         useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected!!!');
      });
}

// create a model from schema and export it
export default connectDB