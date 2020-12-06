import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({
        message: `You are Getting Response from the legend at Port: ${process.env.PORT}`,
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on Port: ${process.env.PORT}`);
});
