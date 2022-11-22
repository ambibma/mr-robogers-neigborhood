# Mr Roboger's Neighborhood
---
#### By Ambi Hidalgo 
###### ambio.pk@gmail.com
#
###### Website image by Eric Krull

#
---

#### What is Mr. Roboger's neighborhood?
Mr.Roboger's Neigborhood is a student-driven project that exists to demonstrate knowledge of javascript. Utilizing arrays, loops and branching logic the program can recieve a user inputted number and output every number below it...with a twist! 

## Technologies Used

* Javascript
* CSS
* HTML
* VS Code
* Google Developer's Tools
* Github.com

## Setup/Installation Requirements

* Clone this repository (https://github.com/ambibma/mr-robogers-neighboorhood)
* using terminal or gitbash navigate to Mr Roboger's repository file
* Once in the repo file 
    *       $ Start index.html
        or if on mac
    *       $ open index.html
* Say hi to Mr. Roboger by inputting a number

## Known Bugs

* No known bugs at the moment
send bug concerns to ambi.pk@gmail.com

## License


Copyright (c) Ambi Hidalgo 2022

## Tests for Business Logic


Describe: stringArrayConvert(stringNumber)
test: It should take the primitive value from user inputted string
code: stringArrayConvert("5") = 5
Expected Output: (5)

Test: It should return user's inputted number into an organized string array starting from 0 all the way to the user's inputted number.
Code: stringArrayConvert("5");
Expected Output: [0,1,2,3,4,5]

Describe: digitSplitter(stringNumber);
test: It should take the user inputted number, and return a number as string.
Code: digitSplitter("5")
Expected Output: ["5"]

test: should the number happen to be a primitive, it will still return string.
Code: digitSplitter(5);
expected output: ["5"]

describe: stringArray convert should take either either prim or string numbers and use digitSplitter to return an index of inputted number and always return string.
code: stringArrayConvert("5");
expected Output: ["5","4","3","2","1"]


Describe: digitChecker(number, number)
test: it should check to see if a single digit number has number
code: hasNumber("3", 3)
expected output: true

test: it should check to see if a double digit number contains a single number
code: digitChecker("33", 3)
expected output: true

test: It should check each digit in an array to see if it it contains a single given number
code: digitChecker(["33","32","1","13"], 3)
expected: true

test: It should always take the number to be checked and convert it to string using digitSplitter()
expected output: true


Describe: beepBoop(specialNumsArray)
test: It should return special Nums transformed as 1s to "Beep", 2s to "Boop" and 3s "Won't you be my neighbor?"
code: beepBoop([1,2,3]);
expected output: ["Beep",'boop','Wont't you be my neighbor?']

test: It should return specialNums transformed such as 10,12,13,21 respective to the hierarchal number, if it has 11, "beep," if 12, "Boop", if 13 "Won't you be my neighbor" if 20 "Boop" if 23 "wont you be my neighbor."
Code: beepBoop([11,12,13,...21,22,23])
Expected Output: ["beep","boop","wont you be my neighbor?"..."boop","boop","Won't you be my neighbor?"]





