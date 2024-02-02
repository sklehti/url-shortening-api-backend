"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
(0, cors_1.default)({
    origin: "http://localhost:3001",
}));
const PORT = 3001;
/* app.get('/dog',(req,res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    ...
    }) */
app.get("/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
// eslint-disable-next-line
app.get("/test", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req, " ja ");
    const response = yield axios_1.default.post("https://cleanuri.com/api/v1/shorten", `url=https://cleanuri.com/api/v1/shorten`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    console.log(response);
    res.send(response.data);
}));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
