import { Redis } from "ioredis";
import dotenv from 'dotenv';
dotenv.config();

const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log("Reddis connected")
        return process.env.REDIS_URL;
    }
    throw new Error("Redis connection failed");
}
// Add connectTimeout option here
const redisOptions = {
    tls: {
        rejectUnauthorized: false,
    },
};

export const redis = new Redis(redisClient(), redisOptions);