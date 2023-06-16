import express, { json } from "express"
import { config } from "dotenv"
config({ path: './config.env' })
import connectDb from './DB/connect'
import indexRoute from './routes/index.route'
const app = express()

// for parsing application/json
app.use(json())

app.set('view engine', 'ejs')

//Routes
app.use('/api/v1', indexRoute);

app.get("/api/v1/healthcheck", (req, res) => {
	res.status(200).send({ message: "Welcome to VicHotels", success : true})
});

//creating a port for the server
const port = process.env.PORT || 5500;

app.listen(port, async () => {
	console.log(`Server don start for ${port}`);
	await connectDb();
});




