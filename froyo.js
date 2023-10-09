// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter your froyo flavor(s) separated by commas!",
    "plain tart, strawberry, oreo"
  );

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

