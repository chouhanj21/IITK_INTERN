import client from "../db.js";

export const getAllDataFromAWS3 = (req, res) => {
    client.query(`Select * from aws3`, (error,result)=>{
        if (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: "Error fetching data" });
        }
        else {
            res.status(200).json(result.rows);
        }
    })
};

export const getDataFromAWS3 = (req, res) => {
    // let start = new Date("2017-09-01").toISOString().split('T')[0];
    // let end = new Date("2017-09-02").toISOString().split('T')[0];
    const {startDate,endDate}=req.body.params;
    //console.log(startDate,endDate);
    let start = new Date(startDate);
    start.setDate(start.getDate() + 1); // Add one day
    start = start.toISOString().split('T')[0]; // Convert to ISO string
    let end = new Date(endDate);
    end.setDate(end.getDate() + 1); // Add one day
    end = end.toISOString().split('T')[0]; // Convert to ISO string
    client.query(`SELECT * FROM aws3 WHERE aws3."Date" BETWEEN '${start}' AND '${end}'`, (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: "Error fetching data" });
        } else {
            res.status(200).json(result.rows);
        }
    });
};

export const getDataFromAWS4 = (req, res) => {
    // let start = new Date("2017-09-01").toISOString().split('T')[0];
    // let end = new Date("2017-09-02").toISOString().split('T')[0];
    const {startDate,endDate}=req.body.params;
    //console.log(startDate,endDate);
    let start = new Date(startDate);
    start.setDate(start.getDate() + 1); // Add one day
    start = start.toISOString().split('T')[0]; // Convert to ISO string
    let end = new Date(endDate);
    end.setDate(end.getDate() + 1); // Add one day
    end = end.toISOString().split('T')[0]; // Convert to ISO string
    client.query(`SELECT * FROM aws4 WHERE aws4."Date" BETWEEN '${start}' AND '${end}'`, (error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: "Error fetching data" });
        } else {
            res.status(200).json(result.rows);
        }
    });
};

export const getAllDataFromSoilMoisture = (req, res) => {
    // console.log("I am here");
    const schema = "Soil Moisture";
    const id=6;
    client.query(`Select * from "${schema}".spectrum${id}`, (error,result)=>{
        if (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: "Error fetching data" });
        }
        else {
            res.status(200).json(result.rows);
        }
    })
};



