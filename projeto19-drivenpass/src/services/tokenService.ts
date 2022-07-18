import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction } from "express";
dotenv.config();

//How to type "req" and "res" so authorization and locals work? 
async function verifyToken(req, res, next: NextFunction) {
  const { authorization }= req.headers;
  const secretKey = process.env.JWT_SECRET;
  const token = authorization?.replace("Bearer", "").trim();
 
  const session = await jwt.verify(token, secretKey);
  const { id } = session;

  res.locals.session = { id };

  next();
};

export default verifyToken;