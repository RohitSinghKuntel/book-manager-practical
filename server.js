const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const bookRoutes = require("./routes/bookRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/api/books", bookRoutes)

app.listen(3000)