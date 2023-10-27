const readline=require('readline');//for reading input like scanner in java



const r1=readline.createInterface({
    input:process.stdin,output:process.stdout
});



function palindrome(string){
    var lowerString = string.toLowerCase();
    var values=lowerString.split("");
    const rev = values.reverse();
    const revString = rev.join('');
    if(lowerString==revString){
        console.log("It is a palindrome");
    }else{
        console.log("It is not a palindrome");
    }
}
r1.question("Enter a String: ",(userinput)=>{
    input:palindrome(userinput);
    r1.close;
    process.exit(0);//to stop the code
});

/*
            OUTPUT
        Enter a String: HHHhhhH
        It is a palindrome

        TEST CASE:1
            Enter a String: malayalam
            It is a palindrome
        TEST CASE:2
            Enter a String: hello
            It is not a palindrome

*/