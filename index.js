const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); 

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
    //server static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
  }
//ROUTES//

//CREATE 
app.post("/employee", async (req, res) =>{
    try{
        const {fName, lName, dateOfBirth, afm} = req.body;
        const newInsert = await pool.query(
            "INSERT INTO employee (firstName, lastName, dateOfBirth, afm) VALUES($1, $2, $3, $4) RETURNING *",
            [fName, lName, dateOfBirth, afm]
        );
        res.json(newInsert.rows[0]);
    }catch (err){
        console.log(err.message);
    }
});

//GET ALL
app.get("/employee", async (req, res) =>{
    try {
        const { afm } = req.query;
        const { page } = req.query;
        const limit = 5;
    
        if (afm === undefined) {
          const countEmpl = await pool.query("SELECT COUNT(*) FROM employee");
          const startIndex = (page - 1) * limit;
          const allEmployees = await pool.query(
            "SELECT * FROM employee ORDER BY id OFFSET $1 LIMIT $2",
            [startIndex, limit]
          );
    
          const employeesElements = {
            totalEmployees: countEmpl.rows[0].count,
            employees: allEmployees.rows,
            countPages: countEmpl.rows[0].count / limit,
            pageNumber: page,
          };
          res.json(employeesElements);
        }else{
          const checkEmployee = await pool.query(
            "SELECT * FROM employee WHERE afm=$1",
            [afm]
          );
          if (checkEmployee.rows[0] == undefined) {
            res.json("EMPTY");
          } else {
            res.json(checkEmployee.rows[0]);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    });

//GET ONE
app.get("/employee/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const oneEntry = await pool.query(
            "SELECT * FROM employee WHERE id=$1",
            [id]
        );
        res.json(oneEntry.rows[0]);
    }catch (err){
        console.log(err.message);
    }
});


//UPDATE
app.put("/employee/:id", async (req, res) =>{
    try{
        const {id} = req.params;
       
        const {fName, lName, dateOfBirth, afm} = req.body;
        const updateElement = await pool.query(
            "UPDATE employee SET firstName=$1, lastName=$2, dateOfBirth=$3, afm=$4 WHERE id = $5",
            [fName, lName, dateOfBirth, afm, id]
        );
        res.json(updateElement.rows[0]);
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
        res.json(deleteElement.rows[0]);
    }catch (err){
        console.log(err.message);
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });