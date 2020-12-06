import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { Auth } from "./routes";
import { StatusCodes } from "./constants";
import db from "./models";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/auth", Auth);

app.get("/", (req, res) => {
    res.send({
        message: `You are Getting Response from the legend at Port: ${process.env.PORT}`,
    });
});

app.use("*", (req, res) => {
    res.status(StatusCodes.NotFound).send({
        message: "The Url requested does not exists",
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on Port: ${process.env.PORT}`);
    db.mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ksegu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        .then((res) => {
            console.log("Connected to DB Successfully");
        })
        .catch((error) => {
            console.log("Error Connecting to DB: ", error);
        });
});
