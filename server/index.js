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
        const {fName} = req.body;
        const {lName} = req.body;
        const {dateOfBirth} = req.body;
        const {afm} = req.body;
        const newInsert = await pool.query(
            "INSERT INTO employee (firstName, lastName, dateOfBirth, afm) VALUES($1, $2, $3, $4) RETURNING *",
            [fName, lName, dateOfBirth, afm]
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
app.get("/employee/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const oneEntrie = await pool.query(
            "SELECT * FROM employee WHERE id=$1",
            [id]
        );
        res.json(oneEntrie.rows[0]);
    }catch (err){
        console.log(err.message);
    }
});

//UPDATE
app.put("/employee/:id", async (req, res) =>{
    try{
        const {id} = req.params;
       
        const {fName} = req.body;
        const {lName} = req.body;
        const {dateOfBirth} = req.body;
        const {afm} = req.body;
        const updateElement = await pool.query(
            "UPDATE employee SET firstName=$1, lastName=$2, dateOfBirth=$3, afm=$4 WHERE id = $5",
            [fName, lName, dateOfBirth, afm, id]
        );
        res.json("UPDATED!");
    }catch (err){
        console.log(err.message);
    }
});


//DELETE
app.delete("/employee/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const deleteElement = await pool.query(
            "DELETE FROM employee WHERE id=$1",
            [id]
        );
        res.json("DELETED!");
    }catch (err){
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});