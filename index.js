
const express = require('express');
const { connection } = require('./db');
const { flatRoute } = require('./route/flat.route');
 const app = express();
 const cors = require('cors')

 app.use(cors())
 app.use(express.json())

 
 app.use("/flat",flatRoute)


 app.listen(8080,async() => {
    try {
        await connection
        console.log("connected to database")
        console.log("server is listening on port 8080")
    } catch (error) {
        console.log("facing error while running server",error)
    }
 })