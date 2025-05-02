import { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

export const startServer = (app: Express) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost: ${port}`);
    });
};
