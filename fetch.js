
//console.log(traer());
/* fetch("https://rooftop-career-switch.herokuapp.com/token?email=manuel@gmail.com")
  .then(response => response.json())
  .then(data => console.log(data)); */


/* let token = fetch("https://rooftop-career-switch.herokuapp.com/token?email=manuel@gmail.com",
 //mode: 'no-cors', // no-cors, *cors, same-origin
 {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'mode': 'no-cors'
}).then( x=> console.log(x)); */

//console.log(token.json());
let pagraph= document.getElementById('ejecutar');

const endPoint = "https://rooftop-career-switch.herokuapp.com1";
window.onload=async() => {

try {
  pagraph.innerText="Comprobando desafio";
  const token = await traerToken("juandlospalotes@gmail.com");
  const block = await traerBlocks(token);
  let result = await ejecutar1(block,token);
  console.log(result);
  //result = result.join("")
  //11365.041015625 ms
  console.log(await verify({encoded:result.join("")},token));
  pagraph.innerText="Terminando";
} catch (error) {
  console.log(error);
}
}

async function traerToken(email) {
  let token = await fetch(`${endPoint}/token?email=${email}`);
  token = await token.json();
  return token.token;
}



async function traerBlocks(token) {
  let block = await fetch(`${endPoint}/blocks?token=${token}`);
  block = await block.json();
  return block;
  
}


async function ejecutar1({data:blocks},token) {

  console.time();
  //let blocks = block.data;
  //console.log(block.data);
  //let result = "";
  let executeParallel=[];
  
  for (let i = 0; i < blocks.length - 1; i++) {
    for (let j = i + 1; j < blocks.length; j++) {
      let obj = { "blocks": [blocks[i], blocks[j]] };
     
      //could be one by one
      executeParallel.push(validarBloque(obj,token));
   /*    if (await validarBloque(obj,token)) {
        let temp = blocks[i+1];
        blocks[i+1]= blocks[j];
        blocks[j]=temp;
        //result += blocks[i] + blocks[j]
        console.log(result);
        break;
        
       
      }  */
    }
      let results = await Promise.all(executeParallel);
      console.log(results)
      let index = results.indexOf(true);
      let temp = blocks[i+1];
      blocks[i+1]= blocks[index];
      blocks[index]=temp;
      executeParallel=[]; 
     
  }
  console.timeEnd();
   //console.log(result);
  return blocks;
  //console.log(block);

}



async function ejecutar(block,token) {

  console.time();
  let blocks = block.data;
  console.log(block.data);
  let result = "";
  let executeParallel=[];
  let j=0;
  for (let i = 0; i < blocks.length - 1; i++) {
    for (j = i + 1; j < blocks.length; j++) {
      let obj = { "blocks": [blocks[i], blocks[j]] };
     
      //could be one by one
     // executeParallel.push(validarBloque(obj,token));
      if (await validarBloque(obj,token)) {
        let temp = blocks[i+1];
        blocks[i+1]= blocks[j];
        blocks[j]=temp;
        //result += blocks[i] + blocks[j]
        console.log(result);
        break;
        
       
      } 
    }
    /*  let results = await Promise.all(executeParallel);
     let index = results.indexOf(true);
     [blocks[j], blocks[index]] = [blocks[index], blocks[j]]; //switch in the array
     console.log(results);
      executeParallel=[]; */
     
  }
  console.timeEnd();
   //console.log(result);
  return blocks;
  //console.log(block);

}


async function validarBloque(blocks,token) {
 
  const config = {
    method: 'POST',
    body: JSON.stringify(blocks),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let blockValid = await fetch(`${endPoint}/check?token=${token}`, config);
  blockValid = await blockValid.json();
  return blockValid.message;
}


async function verify(string,token){

  const config = {
    method: 'POST',
    body: JSON.stringify(string),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let check = await fetch(`${endPoint}/check?token=${token}`, config);
  check = await check.json();
  return check.message;

}

//https://www.tiktok.com/@joacoportis14/video/7058005713154608389?is_from_webapp=1&sender_device=pc&web_id7069795954190353925
//https://xander.oceansaver.in/pacific/?4f674a5a125d7103fca9e39762f
//https://dean81.oceansaver.in/pacific/?7208783b0c49d649a1aa7e9ca00


//https://www.tiktok.com/@marginalhastalosdientes/video/7062117950345579781?is_from_webapp=1&sender_device=pc&web_id7069795954190353925

//https://xander.oceansaver.in/pacific/?849fcc7cbefb8b2615ba1655eec

