const express = require("express");
const app = express();
const cors = require("cors"); 
const pool = require("./db");

//middleware 
app.use(cors());
app.use(express.json());

//ROUTES//

//CREATE 

app.post("/employee", async (req, res) =>{
    try{
        const {Fname} = req.body;
        const {Lname} = req.body;
        const {Date_of_birth} = req.body;
        const {Afm} = req.body;
        const newInsert = await pool.query(
            "INSERT INTO employee (Fname, Lname, Date_of_birth, Afm) VALUES($1, $2, $3, $4) RETURNING *",
            [Fname, Lname, Date_of_birth, Afm]
        );
        res.json(newInsert);
    }catch (err){
        console.log(err.message);
    }
});

//GET ALL 

app.get("/employee", async (req, res) =>{
    try{
        const allEntries = await pool.query(
            "SELECT * FROM employee"
        );
        res.json(allEntries.rows);
    }catch (err){
        console.log(err.message);
    }
});

//GET ONE

app.get("/employee/:Id", async (req, res) =>{
    try{
        const {Id} = req.params;
        const oneEntrie = await pool.query(
            "SELECT * FROM employee WHERE Id=$1",
            [Id]
        );
        res.json(oneEntrie.rows[0]);
    }catch (err){
        console.log(err.message);
    }
});

//UPDATE

app.put("/employee/:Id", async (req, res) =>{
    try{
        const {Id} = req.params;
        const {Fname} = req.body;
        const {Lname} = req.body;
        const {Date_of_birth} = req.body;
        const {Afm} = req.body;
        const updateElement = await pool.query(
            "UPDATE employee SET Fname=$1, Lname=$2, Date_of_birth=$3, Afm=$4 WHERE Id = $5",
            [Fname, Lname, Date_of_birth, Afm, Id]
        );
        res.json("UPDATED!");
    }catch (err){
        console.log(err.message);
    }
});


//DELETE

app.delete("/employee/:Id", async (req, res) =>{
    try{
        const {Id} = req.params;
        const deleteElement = await pool.query(
            "DELETE FROM employee WHERE Id=$1",
            [Id]
        );
        res.json("DELETED!");
    }catch (err){
        console.log(err.message);
    }
});


app.listen(5000, () => {
    console.log("Server has started on port 5000");
});