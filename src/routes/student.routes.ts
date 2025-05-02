import express from "express";
const router = express.Router();

router.get("/students", (req, res) => {
    res.send("Student List");
});





export default router;

