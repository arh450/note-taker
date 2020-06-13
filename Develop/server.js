const express = require("express");
const app = express();

const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Server now listening at http://localhost:${PORT}`);
});