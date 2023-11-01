const readline=require('readline');

function recur(n,start){
    console.log(start);
    if (start<n){
        recur(n,start+1);
    }
}

const r1=readline.createInterface({
    input: process.stdin,output:process.stdout
});
r1.question("Enter a number: ",(userInput)=>{
    const n=parseInt(userInput);
    recur(n,1);
    r1.close;

});