// The interface
interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

// The function
const calculateExercises = (dailyExerciseHours: number[], target: number): Result => {
    const periodLength = dailyExerciseHours.length;
    const trainingDays = dailyExerciseHours.filter((day) => day > 0).length;
    const totalHours = dailyExerciseHours.reduce((sum, day) => sum + day, 0);
    const average = totalHours / periodLength;

    let rating: number;
    let ratingDescription: string;

    if (average >= target) {
        rating = 3;
        ratingDescription = "excellent!";
    } else if (average >= target * 0.75) {
        rating = 2;
        ratingDescription = "not too bad but could be better";
    } else {
        rating = 1;
        ratingDescription = "you need to work!";
    }

    // Result
    return {
        periodLength,
        trainingDays,
        success: average >= target,
        rating,
        ratingDescription,
        target,
        average,
    };
};

// Get the arguments
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Please provide at least the target and the daily exercise hours.");
    process.exit(1);
}

// Convert the first argument
const target = Number(args[0]);

// Validate that target is a number
if (isNaN(target)) {
    console.log("The target should be a valid number.");
    process.exit(1);
}

// Convert the remaining arguments to an array of numbers
const dailyExerciseHours = args.slice(1).map((hour) => Number(hour));

// Validate
if (dailyExerciseHours.some(isNaN)) {
    console.log("All daily exercise hours should be valid numbers.");
    process.exit(1);
}

// Call the function
const result = calculateExercises(dailyExerciseHours, target);
console.log(result);
