const r=require('readline');
const rl=r.createInterface({
    input: process.stdin,
    output: process.stdout
    }
);
rl.question("enter a string: ",function(str) {
    console.log("Length:",str.length);
    console.log("Uppercase:",str.toUpperCase());
   console.log("Lowercase:",str.toLowerCase());
   console.log("Reverse:",str.split('').reverse().join(''));
rl.close();
}
);
