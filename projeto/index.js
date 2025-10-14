const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
//REQUISISÃO GET no endereço http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('OI')
})

let filmes = [
    {
        titulo: "Forrest Gump - O Contador de Histórias",
        sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
        titulo: "Um Sonho de Liberdade",
        sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime quenunca cometeu, o homicídio de sua esposa e do amantedela"
    },
    {
        "titulo": "Interestelar",
        "sinopse": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar"
    },
];
//requisição GET para obter lsiat de filmes http://localhost:3000/filmes
app.get("/filmes", (req, res) => {
    res.json(filmes)
})

// REQUISÃO PARA CADASTRAR UM NOVO FILME NAA MEMÓRIA
//POST http://localhost:3000/filmes
app.post("/filmes", (req, res) => {
    //obtem as informações que chegam 
    const titulo = req.body.titulo
    const sinopse =  req.body.sinopse
    //monta o objeto json
    const filme = {titulo: titulo, sinopse: sinopse}
    filmes.push(filme)
    //só para verificar
    res.send(filmes)
})

app.listen(3000, () => console.log(" SERVIDOR up and running"))
