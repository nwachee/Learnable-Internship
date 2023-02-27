import express, { json } from "express"
import { config } from "dotenv"
config({ path: './config.env' })
import connectDB from './DB/connect'
import testMiddleware from './middleware/test'
import roomRoute from './routes/room'
// const roomTypeRoute = require('./routes/room-type')
import loginRoute from './routes/login'
const app = express()

// for parsing application/json
app.use(json())

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


