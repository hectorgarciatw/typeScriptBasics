import express, { Request, Response } from "express";
import { calculateBmi } from "./bmiCalculator";

// Create the Express server
const app = express();
const port = 3002;

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello Full Stack!");
});

// The endpoints
app.get("/bmi", (req: Request, res: Response) => {
    // Get the query string anda validate
    const height = req.query.height ? Number(req.query.height) : NaN;
    const weight = req.query.weight ? Number(req.query.weight) : NaN;

    // Validating
    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({ error: "malformatted parameters" });
    }

    // Calculate the BMI
    const bmi = calculateBmi(height, weight);
    res.json({
        weight: weight,
        height: height,
        bmi: bmi,
    });
});

// Initialize the server
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});
