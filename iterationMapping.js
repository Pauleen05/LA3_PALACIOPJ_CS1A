// Prompt the user to enter the max limit for the loops
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

// Start the outer loop, iterating from 0 up to and including maxLimit
for (let i = 0; i <= maxLimit; i++) {
    // Start the inner loop, also iterating from 0 up to and including maxLimit
    for (let j = 0; j <= maxLimit; j++) {
        let addedValue = i + j;
        // Display the values of i, j
        console.log(`[${i}][${j}] Added value is ${addedValue}`);
    }
}