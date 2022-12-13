




let log=console;
const inflacionAnual = 60/100;
const cantidadMeses = 12;
const inflacionMensual=inflacionAnual/cantidadMeses;
let arreglo= new Array(cantidadMeses);
arreglo.fill((inflacionAnual/cantidadMeses), 0,cantidadMeses);
let usd = 0.003083631638487045; 

console.log( usd *60*24);
let valorInicial=1500; //valor de tu servicio

let trimestre=1;
let contador=1
let average=0
for(let i=1; i<=12; i++){
     
     valorInicial += valorInicial*inflacionMensual;
     if(contador <= 3){
         average += valorInicial;
         contador++; 
     }else{
          log.table("Trimestre : " + trimestre + " Valor " + average/3);
          average=0;
          contador=2;
          average += valorInicial;
          trimestre++;
     }     
     
     
     log.table("Mes : " + i + " Valor " + valorInicial);
}
log.table("Trimestre : " + trimestre + " Valor " + average/3);

console.log(console);