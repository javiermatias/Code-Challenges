
const { Observable } = rxjs;
const foo = new Observable((emitter) => {
  console.log('Hello');
  emitter.next(42);
  emitter.next(100); // "return" another value
  emitter.next(200); // "return" yet another
  setTimeout(() => {
    emitter.next(5000); // happens asynchronously
  }, 10000);
});
 
console.log('before');
foo.subscribe((x) => {
  console.log("suscribe 1:"+x);
});
console.log('after');

console.log('before s1');
foo.subscribe((x) => {
  console.log("suscribe 2:"+x);
});
console.log('after s2');