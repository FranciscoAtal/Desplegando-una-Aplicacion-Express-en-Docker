const { Router } = require("express")
const db = require("./db.js")
const bodyParser = require("body-parser")

const router = Router()

router.get('/', async (req, res) => {
    const arr = await db.listar();
    res.render('home', { clientes: arr })
})

router.get('/todos', async (req, res) => {
    const arr = await db.listar();
    res.render('home', { clientes: arr })
})

router.get('/todo-create', (req, res) => {
    res.render('creaCliente')
})

router.get('/todo-delete/:id', async (req, res) => {
    const { id } = req.params
    const {confirmado} = req.query

    if (confirmado) {
        await db.eliminar(id)
        return res.redirect("/")
    }

    const cliente = await db.buscar(id)
    res.render('eliminaCliente', { cliente })
})

router.post('/todos', async (req, res) => {
    await db.ingresar(req.body)
    res.redirect('/')
})

module.exports = router
