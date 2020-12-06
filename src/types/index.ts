import { Model, Document, Mongoose } from "mongoose";

// Auth
export type AuthLoginRequestBody = {
    email: string;
    password: string;
};
export type AuthLoginResponseBody = {
    messages: Array<string>;
};
// Models
export type DB = {
    mongoose: Mongoose;
    models: {
        user: Model<Document>;
    };
};
