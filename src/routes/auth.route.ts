import express, { Router, Request, Response, NextFunction } from 'express';
import { isUserLoggedin } from '../middleware/auth';
import {AuthController} from '../controller/auth.controller';
const authRouter: Router = express.Router();

authRouter.post("/getProfile", isUserLoggedin, AuthController.getProfile);
export default authRouter;
