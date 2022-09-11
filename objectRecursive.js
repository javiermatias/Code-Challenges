const example = {
    first: 'thing',
    second: 'stuff',
    third: 'value',
    four: { five:'lo q sea', six:'another', seven:'other'}
  };
  
  let array=Object.entries(example);
  console.log(array);

  let objectKey =array[0][0];
  let objectValue =array[0][1];
  //const [objectKey, objectValue] = entries[i];
  console.log(objectKey + " " +objectValue);


console.log(findValue(example,'five','lo q sea'))




  //returs true if key value is found, othrwise returns false.
  function findValue(obj, key,value){

    if(typeof obj !== "object"){ return false;}
    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i++) {
        let objectKey =entries[i][0];
        let objectValue =entries[i][1];
  
        if (objectKey === key && objectValue === value) {
          return true;
        }
        if(typeof objectValue === "object"){
        const child = findValue(objectValue, key, value);

        if (child === true) {
          return true;
        }
      }
       
    }
  
    return false;

}