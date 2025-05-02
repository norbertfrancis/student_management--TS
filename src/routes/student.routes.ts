import express from "express";
import Student, { IStudent } from "../models/student.model.js";

const router = express.Router();

router.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Error fetching students", error });
    }
});

router.post("/students", async (req, res) => {
    try {
        const student: Partial<IStudent> = {
            id: Date.now(), // Simple ID generation
            name: req.body.name,
            age: req.body.age
        };
        const newStudent = new Student(student);
        await newStudent.save();
        res.json({ message: "Student added", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Error adding student", error });
    }
});

export default router;
