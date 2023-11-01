const readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,output:process.stdout
});

let guess = Math.floor(Math.random()*10)+1;

function guessIt(n){
    
    if(guess===n){
        console.log("You guessed correct");
        return true;
    }else if(n<guess){
        console.log("A Little above");
    }else{
        console.log("A little below");
    }
    return false;
}

function play(){
    
    r1.question("Guess a number between 1-10 :",(userInput)=>{
        let n=Number(userInput);
        const correct=guessIt(n);
        if(!correct){
            play();
        }else{
            r1.close();
        } 
    });
}
play();
