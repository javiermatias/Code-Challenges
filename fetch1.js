const endPoint = "https://dolar.novanok.com/api/all";
window.onload=async() => {

try {

    let result = await fetch(endPoint, { mode: 'no-cors'});
    let rJson = await result.json();
    console.log(rJson);
} catch (error) {
  console.log(error);
}
}