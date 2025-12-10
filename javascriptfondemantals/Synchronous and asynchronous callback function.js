// Array iteration using a callback
const numbers = [1, 2, 3];
numbers.forEach((number) => {
  console.log(`Number: ${number}`);
});


// Simulating a delayed operation
function loadData(callback) {
  console.log("Loading data...");
  setTimeout(() => {
    console.log("Data loaded!");
    callback();
  }, 2000); // 2-second delay
}

// Define the callback
function processData() {
  console.log("Processing data...");
}

// Call the parent function with the callback
loadData(processData);
