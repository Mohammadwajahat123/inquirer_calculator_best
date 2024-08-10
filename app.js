import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter the first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter the second number",
    },
    {
        type: "list",
        name: "operator",
        message: 'select the operation you want to performance',
        choices: ['add', 'subtract', 'multiply', 'divide']
    },
]);
let result;
switch (answer.operator) {
    case 'add':
        result = answer.num1 + answer.num2;
        console.log('The answer for addition is: ' + result);
        break;
    case 'subtract':
        result = answer.num1 - answer.num2;
        console.log('The answer for Subtraction is: ' + result);
        break;
    case 'multiply':
        result = answer.num1 * answer.num2;
        console.log('The answer for multiplication is: ' + result);
        break;
    case 'divide':
        result = answer.num1 / answer.num2;
        console.log('The answer for division is: ' + result);
        break;
}
;
