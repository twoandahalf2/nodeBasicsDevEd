1. important modules of node are fs, http, path, url


2. set up nodemon by adding this to the package.json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "develop": "nodemon app.js",
    "start": "node app.js"

  },

npm run develop


3. npm install dotenv to hide sensitive data

4. npm install body-parser to convert the req.body data to string for the DB