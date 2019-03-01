// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, punc) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // locate every thrid word and add punctionation
        // give the ability to custom add any character for punctuation
        if ((i + 1) % 3 === 0 && i !== 0){

            buildMeUp += theWordArray[i] + punc + " ";
          } else{
            buildMeUp += theWordArray[i] + " ";  
          }
          console.log(buildMeUp);
        // Print buildMeUp to the console
    }
}
// Invoke the function and pass in the array

addExcitement(sentence, "+")

