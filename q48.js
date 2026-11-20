let arr=[10,20,30,40,50];
console.log("original arra:",arr);
arr.splice(2, 0, 25);
console.log("aafter insertion:",arr);
arr.splice(3, 1);
console.log("After diletion:",arr);
let num=40;
let index=arr.indexOf(num);
if(index!==-1){
 console.log(num,"foud at index",index);
}else{
console.log(num, "not found");
}
arr.sort((a,b) => a-b);
console.log("Sorted array:", arr);
