const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: '5433',
    database: 'tasksdb'
})

module.exports = pool;