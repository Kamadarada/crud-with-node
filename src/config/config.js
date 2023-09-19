import mongoose, { mongo } from "mongoose"

const DatabaseConnect = async () =>{
    mongoose.connect("mongodb+srv://felipekamada:tvhxUaJDKf6uJMOx@cluster0.6s2iv28.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection
} 


export default DatabaseConnect;