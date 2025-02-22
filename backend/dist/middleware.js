"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const config_1 = require("./config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const currUser = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        req.userId = currUser.id;
        next();
    }
    else {
        res.send('you are not authorized to access this page.');
        return;
    }
}
