# Mr Roboger's Neighborhood
---
#### By Ambi Hidalgo 
###### ambio.pk@gmail.com
#
###### Website image by Phillip Glickman

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
expected output: true

Describe: beepBoop(specialNumsArray)
test: It should return special Nums transformed as 1s to "Beep", 2s to "Boop" and 3s "Won't you be my neighbor?"
code: beepBoop([1,2,3]);
expected output: ["Beep",'boop','Wont't you be my neighbor?']

test: It should return specialNums transformed such as 10,12,13,21 respective to the hierarchal number, if it has 11, "beep," if 12, "Boop", if 13 "Won't you be my neighbor" if 20 "Boop" if 23 "wont you be my neighbor."
Code: beepBoop([11,12,13,...21,22,23])
Expected Output: ["beep","boop","wont you be my neighbor?"..."boop","boop","Won't you be my neighbor?"]





