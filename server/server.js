const express = require("express");
const cors = require("cors");
const connectDb = require("./Utils/db.js");
const router = require("./router/auth-router.js")


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",router);


connectDb().then(() => {
    app.listen(3001, () => {
        console.log(`Server is running on 3001`)
    })

})


