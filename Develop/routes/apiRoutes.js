const router = require("express").Router();

// allow users to create and save notes 
router.post("/notes", (req, res) => {
    const { title, text } = req.body;
    console.log(title, text);
});

// allow users to view previous saved notes 


// allow users to delete previous saved notes


module.exports = router;