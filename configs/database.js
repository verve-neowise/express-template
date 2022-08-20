import pg from 'pg'

export const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: '',
    port: 5432,
})

client.connect()
