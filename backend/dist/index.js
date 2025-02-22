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
const db_1 = require("./db");
const console_1 = require("console");
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://4ytvoch:ZtS3sF0KzgKBOi0C@cluster0.s2ief.mongodb.net/secondBrain').then(() => (0, console_1.log)("DB connected successfully"));
const User = zod_1.z.object({
    username: zod_1.z.string({ message: "please enter username" })
        .min(3, { message: "username must contain at least 3 characters" })
        .max(12, { message: "username must not be longer than 12 characters" }),
    password: zod_1.z.string({ message: "please enter password" }).min(6, { message: "password must contain at least 6 characters" })
        .max(50, { message: "password must not be longer than 50 characters" })
});
app.post('/api/v1/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validate = User.safeParse({
        username: req.body.username,
        password: req.body.password
    });
    if (validate.success) {
        const { username, password } = validate.data;
        const hashedPass = yield bcrypt_1.default.hash(password, 5);
        try {
            yield db_1.UserModel.create({
                username: username,
                password: hashedPass
            });
        }
        catch (error) {
            if (error.code === 11000) {
                res.send("user already exist");
                return;
            }
            else {
                res.send("connection lost please try again later");
                return;
            }
        }
    }
    else {
        res.send(validate.error.issues[0].message);
        return;
    }
    res.send('You are signed up successfully');
}));
app.post('/api/v1/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const curUser = yield db_1.UserModel.findOne({ username: username });
    if (curUser && curUser.password) {
        const isUser = yield bcrypt_1.default.compare(password, curUser.password);
        if (isUser) {
            const token = jsonwebtoken_1.default.sign({
                id: curUser._id
            }, config_1.JWT_SECRET);
            res.json({
                token: token
            });
        }
        else {
            res.send("password is incorrect");
        }
    }
    else {
        res.send("user does not exist");
    }
}));
app.post('/api/v1/content', middleware_1.auth, (req, res) => {
    res.send('new req');
});
app.get('/api/v1/content', (req, res) => {
});
app.delete('/api/v1/content', (req, res) => {
});
app.post('/api/v1/brain/share', (req, res) => {
});
app.post('/api/v1/brain/:sharedLink', (req, res) => {
});
app.listen(port, () => {
    console.log(`app is listening to http://localhost:${port}`);
});
