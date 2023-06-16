"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: './config.env' });
const connect_1 = __importDefault(require("./DB/connect"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const app = (0, express_1.default)();
// for parsing application/json
app.use((0, express_1.json)());
app.set('view engine', 'ejs');
//Routes
app.use('/api/v1', index_route_1.default);
app.get("/api/v1/healthcheck", (req, res) => {
    res.status(200).send({ message: "Welcome to VicHotels", success: true });
});
//creating a port for the server
const port = process.env.PORT || 5500;
app.listen(port, async () => {
    console.log(`Server don start for ${port}`);
    await (0, connect_1.default)();
});
