import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose"


dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
    }
}));

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

import studentRoute from "./routes/student.routes.js";
import adminRoute from "./routes/admin.routes.js";

app.use("/", studentRoute);
app.use("/admin", adminRoute);

mongoose.connect("mongodb://localhost:27017/student-management", {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as any)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

import {startServer} from "./config/server.config.js";
startServer(app);