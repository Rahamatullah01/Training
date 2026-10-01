//challenge one

// let cgpa = 1.4;

// if (cgpa > 5.0) {
//     console.log("Invalid CGPA");
// } else if (cgpa >= 4.5) {
//     console.log("First Class Honours");
// } else if (cgpa >= 3.5) {
//     console.log("Second Class Honours (Upper Division)");
// } else if (cgpa >= 2.5) {
//     console.log("Second Class Honours (Lower Division)");
// } else if (cgpa >= 1.5) {
//     console.log("Third Class Honours");
// } else {
//     console.log("Fail");
// }

//challenge two
// let orderTotal = 50;

// if (orderTotal <= 0) {
//     console.log("Invalid order amount");
// } else if (orderTotal >= 100) {
//     console.log("Order total: $" + orderTotal + " | Shipping fee: $0");
// } else if (orderTotal >= 50) {
//     console.log("Order total: $" + orderTotal + " | Shipping fee: $5");
// } else {
//     console.log("Order total: $" + orderTotal + " | Shipping fee: $10");
// }

//challenge three
let lightColor = "purple";

if (lightColor === "red") {
    console.log("Stop immediately!");
} else if (lightColor === "yellow") {
    console.log("Prepare to stop.");
} else if (lightColor === "green") {
    console.log("Go!");
} else {
    console.log("Signal malfunctioning: Proceed with caution.");
}
//challenge four
let bmi = -5;

if (bmi <= 0) {
    console.log("Invalid BMI value");
} else if (bmi < 18.5) {
    console.log("Category: Underweight");
} else if (bmi < 25.0) {
    console.log("Category: Normal weight");
} else if (bmi < 30.0) {
    console.log("Category: Overweight");
} else {
    console.log("Category: Obese");
}