import express from 'express'
const app = express()
app.use(express.json())


const livros = [
    {
        id: 1,
        titulo: 'O homem que sabia , mas não sabia'
    },
    {
        id:2,
        titulo: 'Entre o cavalo e a cobra'
    }
]


function BuscaId(id){
    return livros.findIndex(livro => livro.id === Number(id));
}


app.get("/",(req,res)=>{
    res.status(200).send("Curso de node")
});


app.get('/livros',(req,res)=>{
    res.status(200).json(livros)
})


app.post('/livros',(req,res)=>{
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.get('/livros/:id',(req,res)=>{
    const index = BuscaId(req.params.id)
    res.status(200).json(livros[index])
})

app.put('/livros/:id',(req,res)=>{

    const index = BuscaId(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete('/livros/:id',(req,res)=>{
    const index = BuscaId(req.params.id)
    livros.splice(index,1)
    res.status(200).json(livros)
})

//mongodb+srv://felipekamada:<password>@cluster0.6s2iv28.mongodb.net/?retryWrites=true&w=majority


export default app;
