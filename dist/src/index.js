"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("../routes/router");
const app = express_1.default();
app.use(express_1.default.json());
app.use(router_1.amazingRouter);
app.listen(3003, () => {
    console.log("listening on 3003");
});
//# sourceMappingURL=index.js.map