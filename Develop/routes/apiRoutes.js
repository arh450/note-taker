const router = require("express").Router();
const fs = require("fs");
const { uuid } = require('uuidv4');





// allow users to view previous saved notes 
router.get("/notes", (req, res) => {
    console.log("Test Get");
});
// allow users to create and save notes 
router.post("/notes", (req, res) => {


    console.log("Test post");
});

// allow users to delete previous saved notes
router.delete("/notes", (req, res) => {
    console.log("Test delete");
});

module.exports = router;