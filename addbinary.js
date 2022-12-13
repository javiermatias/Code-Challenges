/* Given two binary strings a and b, return their sum as a binary string. */

var addBinary = function (a, b) {


  let lenMenor = 0;
  let stringMasgrande = "";
  let stringMaspeque = "";
  let resto = 0;
  let stringResultado = "";
  let count = 1;

  if (a.length >= b.length) {
    stringMasgrande = a;
    //stringMaspeque = b;
    lenMenor = b.length;
    stringMaspeque=b.padStart((a.length - b.length)+b.length, "0");
  } else {
    stringMasgrande = b;
    //stringMaspeque = a;
    lenMenor = a.length;
    stringMaspeque=a.padStart((b.length - a.length)+a.length, "0");
  }
  let largo = stringMasgrande.length;
  //let largoPeque = stringMasgrande.length;

  while ((resto || lenMenor >= count) && largo >= count ) {

    let numMasGrande = parseInt(stringMasgrande[largo - count]);
    let numMaspeque = parseInt(stringMaspeque[largo - count]);
    let num = numMasGrande + numMaspeque + resto;
    switch (num) {
      case 3:
        stringResultado = "1" + stringResultado;
        break;
      case 2:
        resto = 1;
        stringResultado = "0" + stringResultado;
        break;

      case 1:
        resto = 0;
        stringResultado = "1" + stringResultado;
        break;

      case 0:
        stringResultado = "0" + stringResultado;
        break;

    }

    count++;


   

  }

  if(resto){
    stringResultado = "1" + stringResultado;
    count++;
  }

  if(largo >= count){
    stringResultado= stringMasgrande.substring(0,largo-count+1) +stringResultado;
  }
  return stringResultado;
}

/* var addBinary = function(a, b) {
    
  debugger;
  let len=0
  let stringMasgrande=[];
  let stringMaspeque="";
  let resto=false;
  
  if(a.length >= b.length){
      stringMasgrande=a.split('');
      stringMaspeque=b;
      len=b.length;
      //b.padStart(a.length - b.length,"0");
  }else{
       len=a.length;
       stringMasgrande=b.split('');
       stringMaspeque=a;
      
      //a.padStart(a.length - b.length,"0");
  }  



  let i=0;

  for(i=stringMasgrande.length-1; i>=0; i--){

    if(len==0){
      if(resto){
        if(stringMasgrande[i]=="1"){
          stringMasgrande[i]= "0";
        }else{
          stringMasgrande[i]= "1";
          resto=false;
        }

      }else{
         break;
      }
       
      
    }else{
  
        if(stringMasgrande[i]=="1" && stringMaspeque[i]=="1"){
            if(resto){
                stringMasgrande[i]= "1";
            }else{
                resto=true;
                stringMasgrande[i]= "0";
            }
          }else if(stringMasgrande[i]=="0" && stringMaspeque[i]=="0"){
            if(resto){
                resto=false;
                stringMasgrande[i]= "1"
            }
          }else{
              if(resto){
                stringMasgrande[i]="0"
    
              }else{
                stringMasgrande[i]= "1";
                  
              }
    
          }
          len--;
    }


      
     
  }
  
  //stringMasgrande = stringMasgrande.join('');
   if(resto){

     if(i<0){
      stringMasgrande=stringMasgrande.join('');
      stringMasgrande = "1" + stringMasgrande;
     }else{
      stringMasgrande[--i]= "1";
      stringMasgrande=stringMasgrande.join('');
     }
     
   }

   return stringMasgrande;

   

}; */
let a = "100"; //100101
let b = "110010";
console.log(addBinary(a, b));



//"100"
//"110010"