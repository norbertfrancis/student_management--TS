import express from "express";
import {Student, StudentStore } from "../models/student.model.js";

const router = express.Router();
const store = new StudentStore();


router.get("/students", (req, res) => {
    res.json(store.getStudents());
});

router.post("/students", (req, res) => {
    const student: Student = {
        id: Date.now(),   // Simple ID generation 
        name: req.body.name,
        age: req.body.age
    };
    store.addStudent(student);
    res.json({message: "Student added ", student});
});


export default router;

