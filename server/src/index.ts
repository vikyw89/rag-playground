import 'dotenv/config'
import express from "express"

const app = express()

const PORT = 3000

app.get("/", (req, res) => {
    res.status(200).json("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})