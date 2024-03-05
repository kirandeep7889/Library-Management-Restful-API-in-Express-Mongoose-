const express = require("express");
const app = express();
const rootRoute = require("./routes/rootRoute");
const url = "mongodb+srv://skirandeep999:Kirandeep7889@cluster0.hqrjaa0.mongodb.net/library-management-system";
const mongoose=require("mongoose")

app.use(express.json());

mongoose.connect(url)
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

app.use("/api/v1", rootRoute);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
