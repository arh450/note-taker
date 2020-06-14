const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const db = path.join(__dirname, "../db/db.json");

// get request to return data in db file to client on html
router.get("/notes", (req, res) => {
    // read data from db using readFile
    fs.readFile(db, "utf8", (err, data) => {
        res.json(JSON.parse(data));
        console.log("Notes Returned");
    });
});

// Post request that saves new note from client and updates db 
router.post("/notes", (req, res) => {
    // variable for new note to save on the request body
    let newNote = req.body;
    // assign id to the new note using .uuidv4() 
    newNote.id = uuidv4();

    // records new note to db file and then returns new note back to client on html
    fs.readFile(db, "utf8", (err, data) => {
        let note = JSON.parse(data);
        note.push(newNote);

        fs.writeFile(db, JSON.stringify(note), (err) => {
            if (err) {
                throw (err);

            }
            console.log("Note Recorded");
        });
    })
    res.json(newNote);


});

// allow users to delete previous saved notes
router.delete("/notes/:id", (req, res) => {

    fs.readFile(db, "utf8", (err, data) => {
        // paramter that contains the id of a note that is going to be deleted
        let noteId = req.params.id;
        let noteData = JSON.parse(data);
        // filter noteData using .filter() to ensure the selected note is deleted
        noteData = noteData.filter((note) => {
            if (noteId != note.id) {
                return true;
            } else {
                return false;
            };
        });
        // then rewrite notes to db file
        fs.writeFile(db, JSON.stringify(noteData), function (err) {
            if (err)
                throw err;
            res.send(console.log("Note Deleted"));
        })
    });



});







module.exports = router;