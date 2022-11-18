// Describe: stringArrayConvert(stringNumber)
// test: It should take the primitive value from user inputted string
// code: stringArrayConvert("5")
// Expected Output: (5)

function stringConvert(stringNumber) {
  let stringValue = parseInt(stringNumber);
  console.log(stringValue);
  return stringValue;
}

// Describe: stringArrayConvert(stringNumber)
// Test: It should return user's inputted number into an organized string array starting from 0 all the way to the user's inputted number.
// Code: stringArrayConvert("5");
// Expected Output: ["0","1","2","3","4","5"]
// for (i)
// Test: It should return user's inputted number into an organized array starting from 0 all the way to the user's inputted number as primitives *.
// code: stringArrayConvert("5");
// Expected Output: [0,1,2,3,4,5]

// Input: 5
// output: [x,x ,x ,x ,x ,5]
// shift all numbers <5 from the begining

function stringArrayConvert(stringNumber) { // stringValue =5
  let outputArray = []; // array = [0]
  let stringArray = stringConvert(stringNumber);
  for (i = 0; i<=stringArray; i += 1) {  // i=1; i<=5; i++
    outputArray.push(i);
  }
  return outputArray;
}

// Describe: specialNums(numArray)
// test: It should return all digits containing 1s,2s and 3s 
// code: specialNums([1,2,3,4,5]);
// Expected Output: [1,2,3];

// test: It should return all digits containing 13, 12, 23, 21
// code: specialNums([0,1,2,3,4,5,6,7,8,9,10,12,13...23]);
// Expected output: [0,1,2,3,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

// Describe: regNums(numArray)
// test: It should return all non-special numbers in numArray
// code: regNums([0,1,2,3,4,5,6,7,8,9])
// expected Output:[0,4,5,6,7,8,9];

// Describe: beepBoop(specialNumsArray)
// test: It should return special Nums transformed as 1s to "Beep", 2s to "Boop" and 3s "Won't you be my neighbor?"
// code: beepBoop([1,2,3]);
// expected output: ["Beep",'boop','Wont't you be my neighbor?']

// test: It should return specialNums transformed such as 10,12,13,21 respective to the hierarchal number, if it has 11, "beep," if 12, "Boop", if 13 "Won't you be my neighbor" if 20 "Boop" if 23 "wont you be my neighbor."
// Code: beepBoop([11,12,13,...21,22,23])
// Expected Output: ["beep","boop","wont you be my neighbor?"..."boop","boop","Won't you be my neighbor?"]

// Describe: mrRoboger(stringNumber);
// test: It should return regNums & beepBoopNums into a new array.
// code: mrRoboger("5")
// output: [0,"beep","boop","Won't you be my neighbor?", 4, 5];

// test: If mrRoboger's Array cannot be appended into list tags with mixed data types...Array will be converted into string
// code: mrRoboger("5")
// output: ["0","beep","boop","Won't you be my neighbor?", "4", "5"];
