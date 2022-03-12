require('dotenv').config()
const { Client } = require('pg')

const listar = async () => {
    const client = new Client()
    await client.connect()
    const res = await client.query('SELECT * from clientes')
    await client.end()
    return res.rows
}

const buscar = async (id) => {
    const client = new Client()
    await client.connect()
    const res = await client.query('SELECT * from clientes WHERE id = $1', [id])
    await client.end()
    return res.rows[0]
}

const ingresar = async (obj) => {
    const client = new Client()
    await client.connect()
    const date = new Date();
    const consulta = 'INSERT INTO clientes(nombre, descripcion, date) values($1, $2, $3)'
    const res = await client.query(consulta, [obj.nombre, obj.descripcion, date.toISOString()])
    await client.end()

}

const eliminar = async (id) => {
    const client = new Client()
    await client.connect()
    const res = await client.query('DELETE FROM clientes WHERE id=$1', [id])
    await client.end()
}

module.exports = { listar, buscar, ingresar, eliminar }
