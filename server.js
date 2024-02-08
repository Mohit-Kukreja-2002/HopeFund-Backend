import  {app}  from "./app.js";
import connectDb from "./utils/db.js";
import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
// import cron from 'node-cron';
dotenv.config();

// const keepServerActive = () => {
//     // Perform any task here that keeps the server active
//     console.log('Task executed to keep server active.');
// };

// cron.schedule('*/10 * * * *', keepServerActive);

// cloudinery config
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY,
});

// create server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDb();
});