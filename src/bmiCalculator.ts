// The BMI (IMC)
export function calculateBmi(height: number, weight: number): string {
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
