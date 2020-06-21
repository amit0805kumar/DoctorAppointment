const express = require('express');
const data  =  require('./data.json');
var router = express.Router();
var app = express()
const connectDb = require('./config/db')

connectDb();


//Init Middleware
app.use(express.json({ extended: false }));

router.get('/',  (req, res, next)  => {
    return res.json("API running fine")
});

app.use("/api/availableDoctors",require("./routes/api/doctors"))
app.use("/api/emergencyDocs",require("./routes/api/emergencyDocs"))
app.use("/api/availableDocs",require("./routes/api/availableDocs"))
app.use("/api/auth",require("./routes/api/auth"))



const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
    return res.send('API is running')
})

app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
});