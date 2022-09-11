

console.log("antes")

/* window.onload=()=>{
    while(true);
} */

window.onload= async() => {

    llamada();
    console.log("finalizo")
};
async function llamada(){
    for (let index = 0; index < 150000; index++) 
    console.log(index);
}



console.log("despues")

function sync(){
   
    return new Promise(resolve =>{
     for (let index = 0; index < 5000; index++) 
            console.log(index);
        
       
    
    resolve("termino task");
    });
   
    
}

async function llamda(){
    console.time();
    const result =await sync();
    console.log(result);
    console.timeEnd();
} 
