
// Create an array called words
let words = ['This', 'is', 'JavaScript', 'Coding!']

// Create an empty string to add words to
let sentence = "";


function createSentence(array) {
    // Start getting words into sentences. 
    // For each word in words add to string starting from the first word.
    for(let i = 0; i < array.length; i++
          
    ) {
        sentence += array[i]
        
        if (i < array.length - 1) {
            // Add a space to each word besides the last word
            sentence += " ";
        }
    }
    return sentence;
}

console.log(createSentence(words));