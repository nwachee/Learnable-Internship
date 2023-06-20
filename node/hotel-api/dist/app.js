var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { config } from "dotenv";
import logger from 'morgan';
import cors from 'cors';
config({ path: './config.env' });
import connectDb from './DB/connect';
import indexRoute from './routes/index.route';
const app = express();
//creating a port for the server
const port = process.env.PORT || 5000;
app.use(logger('dev'));
app.use(cors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'POST, GET, PUT, PATCH, DELETE',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routes
app.use('/api/v1', indexRoute);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server don start for ${port}`);
    yield connectDb();
}));
