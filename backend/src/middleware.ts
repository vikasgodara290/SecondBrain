import { JWT_SECRET } from './config';
import express, {Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function auth(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization;
    if(token){
        const currUser: any = jwt.verify(token, JWT_SECRET);
        req.userId = currUser.id;
        next();
    }
    else{
        res.send('you are not authorized to access this page.');
        return;
    }
}