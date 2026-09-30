// Write a javascript function that takes a number as input and prints whether the number is even or odd to the console.
function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}

// Call the function with a sample number
evenOrOdd(5); // Output: 5 is odd.
evenOrOdd(10); // Output: 10 is even.