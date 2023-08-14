const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Pollyana Caldas',
        imagem: 'https://instagram.fcfb2-1.fna.fbcdn.net/v/t51.2885-19/194400561_122267153259831_482168733094915939_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcfb2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=VK5VIdm333kAX9KtkcH&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCSd_HAJIC6tQMEvGyWLST14xsBFppsTlrDRElNaQQP6A&oe=64CBB90A&_nc_sid=8b3546',
        minibio: 'Astronauta da Programaria'
    },
    {
        nome: 'Simara conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)