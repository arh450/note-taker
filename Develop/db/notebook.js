const { uuid } = require('uuidv4');
const fs = require("fs");


class Notebook {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }

    // getNote() - read (readFile) from db.json file

    getNote() {
        fs.readFile("./db.json", (err, data) => {
            if (err) {
                throw (err);
            }
        });
    }

    // addNote() write to the db.json file using writeFile()

    addNote() {
        // newNote object that sets id using uuidv4, the title using express request, and text using express request 
        const newNote = {
            id: { uuid },
            title: req.body.title,
            text: req.body.text
        };

        // then writeFile using newNote object as argument
        fs.writeFile("./db.json", (err, newNote) => {
            if (err) {
                throw (err);
            }
            console.log(`${newNote} saved`)

        });

    }

    // deleteNote() - HW README - "Should receive a query parameter containing the id of a note to delete"

    deleteNote(id) {
        return true;
    }
}

module.exports = Notebook;