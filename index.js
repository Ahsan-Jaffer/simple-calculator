#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First number : ",
        type: "number",
        name: "firstNum",
    },
    { message: "Enter Second number : ", type: "number", name: "secondNum" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Division", "Multiplication"]
    },
]);
const { firstNum, secondNum, operator } = answer;
if (operator === "Addition") {
    console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
}
else if (operator === "Substraction") {
    console.log(`${answer.firstNum}-${answer.secondNum} = ${answer.firstNum - answer.secondNum}`);
}
else if (operator === "Multiplication") {
    console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
}
else if (operator === "Division") {
    console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
}
// console.log(answer)
