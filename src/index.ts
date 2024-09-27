import express, { Request, Response } from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

// Create the Express server
const app = express();
const port = 3002;

app.use(express.json());

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

// The exercises POST
app.post("/exercises", (req: Request, res: Response) => {
    const { daily_exercises, target } = req.body;

    // Validating
    if (!daily_exercises || !target) {
        res.status(400).json({ error: "parameters missing" });
    }

    // Another validation
    if (!Array.isArray(daily_exercises) || typeof target !== "number") {
        res.status(400).json({ error: "malformatted parameters" });
    }

    // Calling the external function
    const output = calculateExercises({ daily_exercises, target });
    res.json(output);
});

// Initialize the server
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});
