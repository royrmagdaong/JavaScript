function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate a delay before fetching data
      setTimeout(() => {
        // Simulate successful data retrieval
        const data = { name: "John", age: 100 };
        if(data.age < 60){
            resolve(data);
        }else{
            reject({message: 'senior'});
        }
        
        // Alternatively, simulate an error
        // reject(new Error("Failed to fetch data"));
      }, 2000);
    });
}
  
  // Using the promise
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));