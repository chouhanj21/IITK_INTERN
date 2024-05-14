import pg from 'pg';
const { Client } = pg;

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"nandesh786",
    database:"Database"
})
client.connect();
export default client;