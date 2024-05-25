import mongoose from "mongoose";
import app from "./app.js";

const {DB_HOST, PORT = 3001} = process.env
mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server connnect ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })  