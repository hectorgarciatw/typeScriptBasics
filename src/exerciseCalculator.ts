interface ExerciseInput {
    daily_exercises: number[];
    target: number;
}

interface ExerciseOutput {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export const calculateExercises = (input: ExerciseInput): ExerciseOutput => {
    const { daily_exercises, target } = input;

    // Calculating the stadistics
    const periodLength = daily_exercises.length;
    const trainingDays = daily_exercises.filter((exercise) => exercise > 0).length;
    const total = daily_exercises.reduce((sum, exercise) => sum + exercise, 0);
    const average = total / periodLength;

    // Determinate the qualify
    const success = average >= target;
    let rating: number;
    let ratingDescription: string;

    if (average < target) {
        rating = 1;
        ratingDescription = "bad";
    } else if (average === target) {
        rating = 2;
        ratingDescription = "good";
    } else {
        rating = 3;
        ratingDescription = "excellent";
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    };
};
