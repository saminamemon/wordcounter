#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(" Welcome to WORD COUNTER");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let words = await inquirer.prompt([{
        name: "wordcounter",
        type: "input",
        message: "enter your words to count:"
    }
]);
console.log(chalk.bgRed(`your words counter is ${words.wordcounter.length}`));
