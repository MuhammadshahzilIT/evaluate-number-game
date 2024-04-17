"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let actualValue = 20;
let guessNumber = 20;
if (guessNumber == actualValue) {
    console.log("congralution you guess correct number");
}
else if (guessNumber > actualValue) {
    console.log("your guess value is greater than actualValue");
}
else if (guessNumber < actualValue) {
    console.log(" your guess value is low then actualValue ");
}
