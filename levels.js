'use strict';

/*
 * Complete the 'maximumPoints' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY costs
 */

//3,1,7
let costs=[5,2,3,1,4,5,3]; 


//console.log(maximumPoints(10,costs));

function maximumPoints(k, costs) {
    // Write your code here
    //let indice_max=0;
    let valor_max=0;
    let puntos=0;
    let gastos=0;
    let salto_nivel=false;
    
    for(let i=3; i<costs.length;i++ ){
          if(costs[i]>valor_max){
              valor_max=costs[i];
              //indice_max=i;
          }
          
            
          if(gastos + costs[i] <= k){
              gastos += costs[i]; // 10  
              puntos++;     //4         
          }else{
              if(salto_nivel){
                  break;
              }else{
                 //5
                 gastos -= valor_max;
                 puntos--; //2
                 salto_nivel=true; //true
                 i--;//i 2 
              }
              
          }
          
    }
    return puntos;

}
