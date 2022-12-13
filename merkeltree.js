//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice



const months = ['A', 'B', 'C', 'D', 'E'];
                //    1                2            3
        //if indice % 2
        //

     // Root
    // /   \
   // 1     E
   /// \    |
  //1    2  E
 /// \  / \ |
// A B  C D E

// si i + 1  == months.length -> ultima iteracion i = 0 ;
 
 let index = 4 ;
let proof = [];
while(months.length > 1 ){
   
  //es par  { data: 'D', left: false },
    if(index % 2 == 0) {
       if(index == months.length - 1 && months.length % 2 == 0){
       
       }else{
      
       proof.push({data:months[index+1], left:false});
       index = index / 2;
       }
    }else{    
      proof.push({data:months[index-1], left:true});
      index--;
      index = index / 2;
    }  
  console.log(proof);
  
  
  
 for(let i = 0; i < months.length; i++){

  
    if(i+1 < months.length) months.splice(i,2,(i+1));
    
    console.log(months);
   
   
  }
}



// expected output: Array ["Jan", "Feb", "March", "April", "June"]