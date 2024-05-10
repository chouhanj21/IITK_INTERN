import express from "express";
import path from "path";
import cors from "cors";
import router from "./src/routes.js";
const app = express();

app.use(express.json());
app.use(cors(
    {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true,
    }
   
));

app.get("/",(req,res)=>{
    //res.sendFile(path.join(path.resolve(),"index.html"));
    res.send("hello world!");
})

app.use("/api/v1/db/",router);


app.listen(5000,()=>{
    console.log("server is working");
})

