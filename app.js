const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)
const bodyParser = require(`body-parser`)
require(`dotenv/config`)

//body-parser
app.use(bodyParser.json())

///import Routes
const postsRoute = require(`./routes/posts`)
const userRoute = require(`./routes/user`)

///Middlewares are app.use:
// app.use(auth)
app.use(`/posts`, postsRoute)
app.use(`/user`, userRoute)



///Routes:

app.get('/', (req, res) => {
    res.send(`we are home..`)
})

///Connect to DB 

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () =>console.log(`Connected to the DB`)
)


app.listen(3000)