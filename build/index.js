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
app.use((0, cors_1.default)({
    origin: "*",
}));
const PORT = 3001;
// eslint-disable-next-line
app.post("/links", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    const response = yield axios_1.default.post("https://cleanuri.com/api/v1/shorten", `url=${req.body.longUrl}`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    res.send(response.data);
}));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports = app;
