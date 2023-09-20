import express from 'express'
import DatabaseConnect from './config/config.js'
import livro from './models/livro.js'


const connection = await DatabaseConnect()

connection.on("error",(error)=>{
    console.log("Cant connect to MongoDB");
})

connection.once("open",()=>{
    console.log("Successfully connected to MongoDb");
})

const app = express()
app.use(express.json())


app.get('/livros', async (req,res)=>{
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros)
})





export default app;
