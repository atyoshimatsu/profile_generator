const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  questions["What's your name? Nicknames are also acceptable :) "] = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    questions["What's an activity you like doing? "] = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      questions["What do you listen to while doing that? "] = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        questions["Which meal is your favourite (eg: dinner, brunch, etc.) "] = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          questions["What's your favourite thing to eat for that meal? "] = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            questions["Which sport is your absolute favourite? "] = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              questions["What is your superpower? In a few words, tell us what you are amazing at! "] = answer;
              rl.close();
            });
          });
        });
      });
    });
  });
});
