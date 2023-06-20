import express from "express"
import { config } from "dotenv"
import logger from 'morgan';
import cors from 'cors';
config({ path: './config.env' })
import connectDb from './DB/connect'
import indexRoute from './routes/index.route'

const app = express()
//creating a port for the server
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(
  cors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'POST, GET, PUT, PATCH, DELETE',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/v1', indexRoute);

app.listen(port, async () => {
	console.log(`Server don start for ${port}`);
	await connectDb();
});




