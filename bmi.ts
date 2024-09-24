// The BMI function
function calculateBmi(height: number, weight: number): string {
    const heightInMeters = height / 100;
    const bmi = weight / Math.pow(heightInMeters, 2);
    let result = "";

    if (bmi < 18.5) {
        result = "Low (low weight)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal (healthy weight)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = "High (high weight)";
    } else {
        result = "Obesity";
    }

    return result;
}

// Get arguments from the command line
const args = process.argv;

if (args.length < 4) {
    console.log("Please provide both height (cm) and weight (kg) as arguments.");
    process.exit(1);
}

const height = Number(args[2]);
const weight = Number(args[3]);

// Validate if the arguments are valid
if (isNaN(height) || isNaN(weight)) {
    console.log("Both height and weight should be valid numbers.");
    process.exit(1);
}

// Calculate the Bmi
console.log(calculateBmi(height, weight));
