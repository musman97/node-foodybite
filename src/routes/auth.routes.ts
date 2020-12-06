import { Router } from "express";
import { AuthLoginRequestBody, AuthLoginResponseBody } from "../types";
import validator from "validator";
import { StatusCodes } from "../constants";

const auth = Router();

auth.post("/login", (req, res) => {
    const { email, password } = req.body as AuthLoginRequestBody;
    const response: AuthLoginResponseBody = {
        messages: [],
    };
    if (email === undefined) {
        response.messages.push("Email not provided");
    }
    if (!password === undefined) {
        response.messages.push("Password not provided");
    }
    if (!email.length) {
        response.messages.push(`The Email provided is empty`);
    }
    if (email.length && !validator.isEmail(email)) {
        response.messages.push(`The Email: "${email}" provided is Invalid`);
    }
    if (!password.length) {
        response.messages.push("Password provided is empty");
    }
    if (
        email.length &&
        !validator.isLength(password, {
            min: 6,
        })
    ) {
        response.messages.push(
            `Password length must be atleast "6" characters`
        );
    }
    if (response.messages.length) {
        return res.status(StatusCodes.BadRequest).send(response);
    }
    response.messages.push("Login Successfull");
    return res.status(StatusCodes.OK).send(response);
});

export default auth;
