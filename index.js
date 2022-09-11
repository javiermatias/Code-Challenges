//let numbers=[-5,3,9,4];// Declaro el arreglo var



let numbers=[4,-8,2,-10,3,-20];// Declaro el arreglo
console.log("El maximo es valor es: " + grossValue(numbers));
function grossValue(arr){
// arr=numbers=[-5,3,9,4]
let n = arr.length + 1; //el largo que puedo elegir de los numeros 
let max_value=0;   
for(let i=1; i<=n; i++){
    for(let j=i; j<=n; j++){
        for(let k=j; k<=n; k++){
              let value = sumArr(arr,i,j,k);
               console.log("["+i+","+j+","+k+"]" +"="+value);
               if(value > max_value){
                max_value = value;
               }
    
        }
        
    }
  }
  return max_value;
}
//console.log(sum(numbers,3,4,4));
function sum(arr,i1,i2,i3){
 
    let suma= sumArray(1,i1,arr) - sumArray(i1,i2,arr) + sumArray(i2,i3,arr)
    - sumArray(i3,arr.length+1,arr);
    return suma;
}

function sumArray(min,max,arr){

    let sum=0;
    for(let i=min-1; i < max-1; i++){
       sum += arr[i];
    }

    return sum;

}
//let arr_1=[-5,3,9,4];
//console.log(sumArr(arr_1,2,3,4));
function sumArr(arr,i1,i2,i3){
    //[-5,3,9,4] i1=1, i2=2, i3=4 
//pos   1 2 3 4 5
      
// i=0 array[i]=-5

    //sum1 = sum[1,1] = 0
    //sum2 = sum[1,2] = -5
    //sum3 = sum[2,4] = 12  sum[i2,i4]
    //sum4 = sum[4,5] = 4
    //sumTotal = sum1 - sum2 + sum3 - sum4 
    //           0 - (-5) + 12 -4 = 13
    let suma1=0,suma2=0,suma3=0,suma4=0;

    for(let i=0; i<arr.length; i++){
         if(i<i1-1){
             suma1+=arr[i];// indice 0 es el primer elemento del arreglo
         }
         if(i1-1 <= i && i<i2-1){
             suma2+=arr[i];
         }
         if(i2-1 <= i && i < i3-1){
             suma3 += arr[i];
         }

         if(i3-1 <= i && i<arr.length){
             suma4+=arr[i];
         }
    }
    return suma1 - suma2 + suma3 - suma4;
}



/* function sym() {

    const array =Array.from(arguments);
    console.log(arguments.length);
    array.forEach(element => {
        console.log(element);
    });
    
   // return args;
  }
  
sym([1, 2, 3], [5, 2, 1, 4]); */










/* let counts = [ "900,google.com",
"60,mail.yahoo.com",
"10,mobile.sports.yahoo.com",
"40,sports.yahoo.com",
"300,yahoo.com",
"10,stackoverflow.com",
"20,overflow.com",
"5,com.com",
"2,en.wikipedia.org",
"1,m.wikipedia.org",
"1,mobile.sports",
"1,google.co.uk"];


for (let i = 0; i < counts.length; i++) {
    const element = counts[i].split(',');
    let count = element[0];
    let urls= getUrls(element[1]);

    for (let j = 0; j < urls.length; j++) {

        if(i==j){continue}
        
        const element = urls[index];
        
    }


    
}
getUrls("mobile.sports.yahoo.com");

function getUrls(url){
    
    const elements = url.split('.');

    let domains = [];
    domains.push(url);

   for (let index = 0; index < elements.length-1; index++) {
    
    let position = url.indexOf('.');

    url= url.substring(position + 1, url.length);

    //console.log(url);
    domains.push(url);
       
   }
   


}

console.log(counts);

 */

/* You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1345
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)
 */