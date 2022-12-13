
let obj={
    data:"qwerzcvfuhgtasdfertyjhgfgthupolk",
    chunkSize:4,
    largo : 32
}
let pattern = `.{1,${obj.chunkSize}}` // 1 to n characteres
let rgxp = new RegExp(pattern, "g"); // 
let arreglo = obj.data.match(rgxp);

console.dir(arreglo);
//console.log(arreglo);
//console.dir(shuffleArray(arreglo));
//Durstenfeld shuffle algorithm 
let data=[1,6,3,5,9,7,8]
for(let i=0; i < data.length-1; i++){
        
    for(let j=i+1; j<data.length; j++){
            console.log(data[i] + " "+ data[j]);
    }

  }






console.log(shuffleArray([...arreglo]));
function shuffleArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if(j==0) continue;
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



function arrayGood(){
    let arr=shuffleArray(arreglo);

    
}