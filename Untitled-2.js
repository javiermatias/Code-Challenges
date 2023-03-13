
let arr = [5,6,7,8,4,7,6];


//we need the average;
let sum = 0;

let obj ={nombre:"javi"}
for(let valor of arr){
sum += valor;
}
let ave = sum / arr.length;

console.log(ave);



arr.push(67);

console.log(arr);

console.log(arr.pop()); // extraemos el ultimo valor