const express = require("express")
// const rateLimit = require('express-rate-limit');
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' })
const connectDB = require('./DB/connect')
const testMiddleware = require('./middleware/test')
const roomRoute = require('./routes/room')
// const roomTypeRoute = require('./routes/room-type')
const loginRoute = require('./routes/login')
const app = express()

//Limit requests from same ip
// const limiter = rateLimit({
// 	max: 100,
// 	windowMs: 60 * 60 * 1000,
// 	message: 'Too many requests from this ip, please try again in an hour',
// });
// app.use('/api', limiter);

// for parsing application/json
app.use(express.json())

app.set('view engine', 'ejs')

//Routes
app.use('/api/v1', testMiddleware, roomRoute);
// app.use('/api/room-type', roomTypeRoute);
app.use('/api/v1/user', loginRoute);

app.get("/", (req, res) => {
	res.status(200).send({ message: "Welcome to VicHotels", success : true})
})



// app.use('/', require('./routes/login'))

//creating a port for the server
const port = process.env.PORT || 5500
const start = (async () => {
	await connectDB(process.env.MONGO_URI);

	app.listen(port, () => {
		console.log(`Server don start for ${port}...`);
	});
});

start();


