import { log } from "console";

let actualValue : number=10;
let guessNumber : number=20;
if(guessNumber==actualValue){
    console.log("congralution you guess correct number")

}else if(guessNumber>actualValue){
    console.log("your guess value is greater than actualValue")
    
}else if(guessNumber < actualValue){
    console.log(" your guess value is low then actualValue ")

}

