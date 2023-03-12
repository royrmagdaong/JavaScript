function test(){
  setTimeout(()=>{
    console.log('TEST 2');
  }, 1000);
}

console.log('TEST 1');
test();
console.log('TEST 3');
