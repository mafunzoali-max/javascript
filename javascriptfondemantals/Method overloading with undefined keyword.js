function add(a, b) {
    if (typeof b === "undefined") {
        console.log("Single number:", a);
    } else {
        console.log("Sum:", a + b);
    }
}

add(5);      // Output: Single number: 5
add(3, 4);   // Output: Sum: 7
function logMessage(message, level) {
    if (level === undefined) {
        console.log("INFO: " + message);
    } else {
        console.log(level + ": " + message);
    }
}

logMessage("System started");          // Output: INFO: System started
logMessage("System failure", "ERROR"); // Output: ERROR: System failure
