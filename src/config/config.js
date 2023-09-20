import mongoose from "mongoose";

const DatabaseConnect = async () =>{
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection
} 


export default DatabaseConnect;