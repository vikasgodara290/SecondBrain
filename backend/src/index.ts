import express from 'express'
import {ContentModel, UserModel} from './db';
import mongoose from 'mongoose';
import {z} from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import { auth } from './middleware';

const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb+srv://4ytvoch:ZtS3sF0KzgKBOi0C@cluster0.s2ief.mongodb.net/secondBrain').then(
    ()=>console.log("DB connected successfully")
)

const User = z.object({
    username: z.string({message: "please enter username"})
        .min(3, {message: "username must contain at least 3 characters"})
        .max(12, {message: "username must not be longer than 12 characters"}),
    password : z.string({message: "please enter password"}).min(6, {message: "password must contain at least 6 characters"})
        .max(50, {message:"password must not be longer than 50 characters"})
})

app.post('/api/v1/signup', async (req, res)=>{
    const validate = User.safeParse({
        username : req.body.username,
        password : req.body.password
    })

    if(validate.success){
        const { username, password } = validate.data;
        const hashedPass = await bcrypt.hash(password,5);
        try{
            await UserModel.create(
                {
                    username:username,
                    password:hashedPass
                }
            )
        }
        catch(error: any){
            if(error.code === 11000) {
                res.send("user already exist");
                return;
            }
            else{
                res.send("connection lost please try again later");
                return;
            }
        }
    }
    else{
        res.send(validate.error.issues[0].message);
        return;
    }

    res.send('You are signed up successfully');
})

app.post('/api/v1/signin', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const curUser = await UserModel.findOne({username: username});
    if(curUser && curUser.password){
        const isUser = await bcrypt.compare(password, curUser.password);
        if(isUser){
            const token = jwt.sign({
                id: curUser._id
            }, JWT_SECRET);
            res.json({
                token : token
            })
        }
        else{
            res.send("password is incorrect");
        }
    }
    else{
        res.send("user does not exist");
    }
})

app.post('/api/v1/content', auth, async (req, res)=>{
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    const tags = req.body.tags;
    const userId = req.userId;
    
    try{
        await ContentModel.create(
            {
                link: link,
                type: type,
                title: title,
                tags: tags,
                userId: userId
            }
        )
        res.send('done');
    }
    catch(error){
        console.log(error);
    }
})

app.get('/api/v1/content', auth, (req, res)=>{
    
})

app.delete('/api/v1/content', auth, (req, res)=>{
    
})

app.post('/api/v1/brain/share', auth, (req, res)=>{
    
})

app.post('/api/v1/brain/:sharedLink', (req, res)=>{
    
})

app.listen(port, ()=>{
    console.log(`app is listening to http://localhost:${port}`);
})