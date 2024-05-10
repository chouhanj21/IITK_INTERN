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

// client.connect();
// client.query(`Select * from table1`, (err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     client.end;
// })