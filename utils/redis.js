import { Redis } from "ioredis";
import dotenv from 'dotenv';
dotenv.config();

const redisClient=()=>{
    if(process.env.REDIS_URL){
        console.log("Reddis connected")
        return process.env.REDIS_URL;
    }
    throw new Error("Redis connection failed");
}
// Add connectTimeout option here
const redisOptions = {
    connectTimeout: 10000, // Adjust the timeout value as needed
};

export const redis=new Redis(redisClient(),redisOptions);