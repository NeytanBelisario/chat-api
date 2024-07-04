var express = require("express")
var app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send("<h1>API - CHAT</h1>")
}))

app.use('/', router.get('/sobre', (req, res) => {
    res.status(200).send({
        "nome": "API-CHAT",
        "versão": "0.1.0",
        "autor": "Neytan Belisário"
    })
}))

app.use("/", router.get('/salas', (req, res) => {
    const salaController = require('./controllers/salaController');
    const resp = salaController.get();
    res.status(200).send(resp);
}))

module.exports = app;