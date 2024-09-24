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

// Calling the function
const result = calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);
console.log(result);
