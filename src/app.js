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

app.get('/livros/:id',async (req,res)=>{
    const livroId = (req.params.id)
    const getLivroById = await livro.findById(livroId)
    res.status(200).json(getLivroById)
})

app.post('/livros',async(req,res)=>{
    const livroToCreate = req.body
    livro.create(livroToCreate)
    res.status(201).json(livroToCreate)
})

app.delete('/livros/:id', async(req,res)=>{
    const livroToDelete = await livro.findById(req.params.id)
    await livro.deleteOne(livroToDelete)
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
})



export default app;
