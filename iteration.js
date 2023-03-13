//Tenemos una lista de numeros de telefono para enviar un mensaje
//Tenemos una lista de celulares conectados para enviar.
//Realize un programa para enviar un mensaje por vez, con cada uno de los telefonos.
//Por ejemplo si son 4 telefonos conectados, primero que envie con el 1
//despues con el 2 y asi sucesivamente.


let drivers= [null,"celu2","celu3","celu4",null];
let index = 0; 
//console.log(nextDriver(4));

let numerosEnviar = [5,7,3,6,3,7,3,6,7,2,1]


for (const numero of numerosEnviar) {
    console.log(nextDriver(index));
 
}

function nextDriver(_index){
 
  
  let recorrido = 0;
  while(recorrido < drivers.length){
            
             if(drivers[_index] != null){
                index = (_index + 1) % drivers.length;
                return drivers[_index];
                 
             }
             _index = (_index + 1) % drivers.length;
             recorrido++;
           
  }

  return null;

}