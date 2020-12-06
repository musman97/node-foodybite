import mongoose from "mongoose";
import { DB } from "../types";
import User from "./user.model";

const db: DB = {
    mongoose,
    models: {
        user: User,
    },
};

export default db;
