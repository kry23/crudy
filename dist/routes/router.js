"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amazingRouter = void 0;
const express_1 = require("express");
const amazingRouter = express_1.Router();
exports.amazingRouter = amazingRouter;
amazingRouter.get('/', function (req, res) {
    res.send('Hello World!');
});
amazingRouter.get('/:id', function (req, res) {
    res.send('Hello World!');
});
amazingRouter.post('/', function (req, res) {
    res.send('Got a POST request');
});
amazingRouter.put('/:id', function (req, res) {
    res.send('Got a PUT request at /user');
});
amazingRouter.delete('/:id', function (req, res) {
    res.send('Got a DELETE request at /user');
});
//# sourceMappingURL=router.js.map