async function fetchUserData() {
  const userResponse =  await fetch('./users.json');
  const userJson =  await userResponse.json();
  return userJson;
}

// Using the async function
fetchUserData().then(data => {
  console.log(data)
  console.log('Hello World 22');
}).catch(err=>{
  console.log(err);
})

console.log('Hello World');
