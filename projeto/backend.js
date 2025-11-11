const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const stringConexaoBD = process.env.CONEXAO_BD

//função de conexão com o banco
async function conectarAoMongoDB () {
  await mongoose.connect(stringConexaoBD)
}

const Filme = mongoose.model ("Filme", mongoose.Schema({
  titulo: {type: String}, 
  sinopse: {type: String}
}))

const usuarioSchema = mongoose.Schema({
  login: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)

//endpoint para atender um get filmes: http://localhost:3000/filmes
app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find()
    res.json(filmes)
})

//cadastrar um novo filme: post filmes: http://localhost:3000/filmes
app.post('/filmes', async (req, res) => {
    //capturar as informações do usuário
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //construir um objeto filme da classe Filme
    const filme = new Filme({titulo: titulo, sinopse: sinopse})
    //salvar o filme no banco
    await filme.save()
    //buscar no banco a base atualizada
    const filmes = await Filme.find()
    res.json(filmes)
})
app.post('/signup', async (req, res) => {
  try {
    //captura o que o usuário digita
    const login = req.body.login
    const password = req.body.password
    //criptografar a senha
    const passwordCriptografada = await bcrypt.hash(password, 10)
    //constroi o objeto usuário
    const usuario = new Usuario({
      login: login,
      password: passwordCriptografada
    })
    //salvar o usuário, capturando a resposta do Mongo
    const respostaMongo = await usuario.save()
    console.log(respostaMongo);
    res.status(201).end()
  }
    catch (exception) {
    console.log(exception)
    res.status(409).end()
  }
})

app.post('/login', async (req, res) => {
  //captura o que o usuário digita
  const login = req.body.login
  const password = req.body.password
  //busca no banco MongoDB
  const user = await Usuario.findOne({login: login})
  if (!user) {
    //usuário não encontrado, encerra com mensagem adequada
    return res.status(401).json({mesagem: "usuário inválido"})
  }
  const senhaValida = await bcrypt.compare(password, user.password)
  if (!senhaValida) {
    //senha inválida, encerra com mensagem adequada
    return res.status(401).json({mensagem: "senha inválida"})
  }
  //vamos gerar o token e dovolver
  const token = jwt.sign(
    {login: login},
    "senha-secreta",
    {expiresIn: "1h"}
  )
  res.status(200).json({token: token})
})


app.listen(3000, () => {
    try {
      conectarAoMongoDB()
      console.log('server up & running & conexão ok')
    }
    catch (e) {
      console.log("erro:" + e)
    }
})