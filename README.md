# Note Taker

## Heroku URL
https://intense-sierra-29475.herokuapp.com/
## Brief Description
This is an application that uses Express as a web framework and a JSON file as a pseudo data base to allow a user to write, save, and delete various notes.  

The application uses three API routes that perform the following (using the node ```fs``` module to read and write file data):

* GET ```/api/notes```: Returns any previously saved notes in db.json file to user.

* POST ```/api/notes```: Allows a user to save a new note to the db.json file and will then be displayed back to user.

* DELETE ```/api/notes:id```: User can delete any given note and it will be removed from the db.json file and then the updates notes will be returned back to the user.

## Technologies Used

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This application is written and programmed using ES6 JavaScript for both the front and back end.

* [Node.js](https://nodejs.org/en/about/) - Used to open, read, and write file(s) locally on basic server and return content to client.

* [Express](https://expressjs.com/) - Used to build backend of application, and API requests/responses between db.json file and client.

* [UUID](https://www.npmjs.com/package/uuid) - NPM package used to assign random identification numbers to notes.

* [HMTL5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Used to give frontend html files their structure and DOM elements.

* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to style the html elements/application.

* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Grid/Column system used to create page layout/structure.  Also used to create and style elements such as buttons.

* [jQuery](https://jquery.com/) -  Used on frontend to simplify JavaScript code and DOM traversal.


* [Heroku](https://www.heroku.com/) -Used to host working application. (see app link above).


## Preview

![Note Taker](https://media.giphy.com/media/H3NYyK77rElNnCxg55/giphy.gif)

## Contributors/Authors

* Augustus Heptig - Author/Creator