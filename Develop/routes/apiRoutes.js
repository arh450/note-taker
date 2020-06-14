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

const updateDb = (dbNotes) => {
    fs.writeFileSync(db, JSON.stringify(dbNotes), (err) => {
        if (err) {
            throw (err);
        }
    });
}

// get request to return data in db to html
router.get("/notes", (req, res) => {
    return res.json(dbNotes);
});
// Post request that saves new note from client and updates db 
router.post("/notes", (req, res) => {
    // variable to request post from client (a new note)
    let newNote = req.body;
    // adds id using uuid to post from client (a new note)
    newNote.id = uuidv4();
    // adds post from client (a new note) to the db
    dbNotes.push(newNote);
    // function to synchronously write file for db
    updateDb(dbNotes);
    // return new data from db to html file 
    return res.json(dbNotes);
});

// allow users to delete previous saved notes
router.delete("/notes/:id", (req, res) => {

});


module.exports = router;