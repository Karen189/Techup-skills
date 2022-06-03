let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last string of the secretMessage array
secretMessage.pop();

// Add two new words to the edn of the array
secretMessage.push('to', 'Program');

// Change the word easily to the word right
secretMessage[7] = 'right';

// Remove the first string from the array
secretMessage.shift();

// Add the word programming to the beginning of the array
secretMessage.unshift('Programming');

// replace strings in the array and replace with a single string.
secretMessage.splice(6, 5, 'know');

// use .join to print the message to the console as a sentence.
console.log(secretMessage.join(' '));
 