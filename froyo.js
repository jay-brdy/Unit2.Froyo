// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter your froyo flavor(s) separated by commas!",
    "plain tart, strawberry, oreo"
  );


function trackFroyoFlavors(userInputString) {
    // // Split the string of flavors into an array of strings.
    const stringArray = userInputString.split(",");
    // Empty object to track flavors
    const flavorsObject = {};

    // For loop to iterate through the stringArray, updates the obj and keep track of how many times each flavor appears
    for (const flavor of stringArray) {
        // Check if the flavor already exists in the object
        if (flavorsObject[flavor]) {
            // If flavor exists already, increment count by 1
            flavorsObject[flavor]++;
        } else {
            // If flavor doesn't exist, init flavor with count of 1
            flavorsObject[flavor] = 1;
        }
    }
    return flavorsObject;
}

// Calls the trackFroyoFlavors function and stores the result in flavorsObject
const flavorsObject = trackFroyoFlavors(userInputString);
console.log(flavorsObject);