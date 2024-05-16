import pg from 'pg';
const { Pool } = pg;

const client = new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"nandesh786",
    database:"Database"
})

// const client = new Pool({
//     host:"database-1.cjemsss6esby.ap-south-1.rds.amazonaws.com",
//     user:"postgres",
//     port:5432,
//     password:"nandesh786",
//     database:"iitk_database"
// })

client.connect();
export default client;