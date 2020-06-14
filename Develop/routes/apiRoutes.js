const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const db = path.join(__dirname, "../db/db.json");

// Variable that parses data in db and using readFile will be then used to return notes in db to html
const dbNotes = JSON.parse(fs.readFileSync(db, (err, data) => {
    if (err) {
        throw (err);
    }
})
);


// get request to return data in db to html
router.get("/notes", (req, res) => {
    return res.json(dbNotes);
    console.log("Data from db has been returned");
});
// allow users to create and save notes 
router.post("/notes", (req, res) => {

});

// allow users to delete previous saved notes
router.delete("/notes", (req, res) => {
    console.log("Test delete");
});

module.exports = router;