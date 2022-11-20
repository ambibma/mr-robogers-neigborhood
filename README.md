step 1 Business 
Input: Application will take some number (string)
-The string will be converted into an array * = utility
-The array will be converted into numbers *= utility 
-The array will be checked for all digits containing  1s,2s, and 3s,
  -if digit has a 1 = boop
  -if digit has 1 & 2 = "beep"
  -if digit has 1 & 2 & 3 = "Won't you be my neighbor"
-array will be separated into special numbers and reg numbers
-special numbers will be transformed
-reg numbers will not
-final array will contain special numbers array and reg numbers array 

 see if we can print an array into a list with string and primitives, if no convert each element into string 

Step 2 UI logic
-web api will have an input box form to input string number
-app will have a submit button for the form that runs beepBoop()
-the array will then create <ul> tag and <li> tag in which every element will be appended into
-a button will exist to refresh page to take new input


Output: App will return a list of values from 0 => user's inputted number 
where all digits that contain a 1, are replaced with "Beep". 
All Numbers that contain 2 will be replaced with "Boop!" 
All numbers that contain a 3 are replaced with "Won't you be my neighbor"

Describe: stringArrayConvert(stringNumber)
test: It should take the primitive value from user inputted string
code: stringArrayConvert("5") = 5
Expected Output: (5)

Test: It should return user's inputted number into an organized string array starting from 0 all the way to the user's inputted number.
Code: stringArrayConvert("5");
Expected Output: ["0","1","2","3","4","5"]




Describe: hasNumber(numArray)
test: it should check to see if a two digit number has number
code: hasNumber("33", 3)
expected output: ["33"]

test: It should check each digit in an array to see if it it contains a single given number
code: hasNumber(3, [33,32,1,13])
expected: [33,32,13] or true

Describe: regNums(numArray)
test: It should return all non-special numbers in numArray
code: regNums([0,1,2,3,4,5,6,7,8,9])
expected Output:[0,4,5,6,7,8,9];

Describe: Special(numArray)
test: it should check each number starting from 0 in a array of string numbers for one special number, such as 3.
code: specialNumbers("5")
expected output 

test: it should be able to check each number for multiple special numbers

test: 

Describe: beepBoop(specialNumsArray)
test: It should return special Nums transformed as 1s to "Beep", 2s to "Boop" and 3s "Won't you be my neighbor?"
code: beepBoop([1,2,3]);
expected output: ["Beep",'boop','Wont't you be my neighbor?']

test: It should return specialNums transformed such as 10,12,13,21 respective to the hierarchal number, if it has 11, "beep," if 12, "Boop", if 13 "Won't you be my neighbor" if 20 "Boop" if 23 "wont you be my neighbor."
Code: beepBoop([11,12,13,...21,22,23])
Expected Output: ["beep","boop","wont you be my neighbor?"..."boop","boop","Won't you be my neighbor?"]

Describe: mrRoboger(stringNumber);
test: It should return regNums & beepBoopNums into a new array.
code: mrRoboger("5")
output: [0,"beep","boop","Won't you be my neighbor?", 4, 5];

test: If mrRoboger's Array cannot be appended into list tags with mixed data types...Array will be converted into string
code: mrRoboger("5")
output: ["0","beep","boop","Won't you be my neighbor?", "4", "5"];




