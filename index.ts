import inquirer from "inquirer";

const answer: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Please enter a sentence to count the word:",
  },
]);

const word = answer.Sentence.trim().split(" ");
console.log(`The sentence consist of ${word.length} words`);
