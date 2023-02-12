const express = require("express")
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' });
const connectDB = require('./DB/connect');
const roomRoute = require('./routes/room')
const roomTypeRoute = require('./routes/room-type')
const app = express()

// for parsing application/json
app.use(express.json())

//base API
app.get("/", (req, res) => {
	res.status(200).send({ message: "Welcome to VicHotels", success : true})
})

//creating a port for the server
const port = process.env.PORT || 5000
const start = (async () => {
	await connectDB(process.env.MONGO_URI);

	app.listen(port, () => {
		console.log(`Server is listening on port ${port}...`);
	});
});

start();


