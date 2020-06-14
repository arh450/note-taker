const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Middleware that is needed to use POST data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware to load css file
// CITED: https://stackoverflow.com/questions/34174133/why-does-omitting-the-line-app-useexpress-static-dirname-public-stop-my
app.use(express.static(path.join(__dirname, "public")));



app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server now listening at http://localhost:${PORT}`);
});