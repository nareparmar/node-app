
//Q1 Writer a function that returns the reverse of string ?

// let str = "narendraParamr";


// function reverseString(data){
//     let reverse = '';
//     for(let i = data.length-1; i >=0; i--){
//        reverse += data[i];
//     }
//    return reverse;
// }


// function reverseStr(data){
//     return data.split("").reverse().join("");
// }
// //reverseString(str);
// console.log(reverseStr(str));

/////------////

//Q2 Write a function that return the longest word in sentence 

// let str = "narendra paramr eklera mostvaluebleperson";

// function findLongestWord(data){
//     const words = data.split(" ");
//     let longestword = "";

//     for (let word of words){
//         if(word.length > longestword.length) {
//             longestword = word;
//         }
//     }
//     return longestword;
// }

// console.log(findLongestWord(str));


///Q3  A palindrome is a word that reads the same of forward and backward?

// let str = "racecar";

// function reverseStr(data){
//     let reverseDaat = data.split("").reverse().join("");

//     return data === reverseDaat;

// }
// console.log(reverseStr(str));

//Q4 Write a function to remove duplicate elements from array 

// let arr = [1, 2, 3, 4, 5, 6, 6, 4];

// function removeDuplicateValue(data){
//     //return data.filter((value, index) => data.indexOf(value) === index);
//    // return[... new Set(data)];
// //    let uniqueArr = [];
// //    data.forEach(element => {
// //     if(!uniqueArr.includes(element)){
// //         uniqueArr.push(element);
// //     }
// //    });
// //    return uniqueArr;


// }
// Array.prototype.unique = function () {
//     return Array.from(new Set(this));
// }
// console.log(arr.unique());


//Q5  Write a function that checks whether two string are anagrams or not ?

// function areAnagram(str1, str2) {
//     const sortstr1 = str1.split("").sort().join("");
//     const sortstr2 = str2.split("").sort().join("");
    
//     return sortstr1 === sortstr2;

// }

// areAnagram("listen", "silent");

//Q6 function for count vowels

// let str = "Hello, World aeiou";

// function countVowels(data){
//     let count = 0;
//     const vowles = ["a", "e", "i", "o", "u"];

//     for (let char of data.toLowerCase()) {
//         if(vowles.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels(str));


//q8  write a function for largest number in array 

// let arr = [1 , 2 , 5 ,  9 , 3 ,7];

// function findLargestValue(data){

//     let largest = data[0];

//     for (let i = 1; i < data.length; i++) {
//         if(data[i] > largest){
//             largest = data[i];
//         }
        
//     }
//     return largest;
// }

// console.log(findLargestValue(arr));


///using filter method remove duplciate value in array
//var arr = ["apple" , "orange", "banana", "apple", "orange"];

// function removeDuplicate(data){
//     return data.filter((value, index) => data.indexOf(value) !== index);
// }


// console.log(removeDuplicate(arr));

////
///using Set method remvoe duplicate value
//var arr = ["apple" , "orange", "banana", "apple", "orange"];

// function removeDuplicate(data){
//     return[...new Set(data)];
// }

///Function for get prime number

// function getPrime(no) {
//     for (let i = 2; i < no/2; i++) {

//         if(no % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(getPrime(10));

//factorial of a no function 

// function noOfFacetorial(no) {

//     let factNo = 1;
//     for (let i = 1; i <= no; i++) {
//         factNo *= i;
//     }
//     return factNo;
// }

// console.log(noOfFacetorial(5));


///Q remove white space in string 


// let str1 = "narendrta parmar calss";

// function removeWhiteSpace(str){
//     const result = str.replace(/\s/g, "");
//     return result;
// }

// console.log(removeWhiteSpace(str1));






// console.log(removeDuplicate(arr));
///

///using foreach method


//  var arr = ["apple" , "orange", "banana", "apple", "orange"];

//  function removeDuplicate(data){
//     let unique = [];

//     data.forEach(element => {
//         if(!unique.includes(element)){
//             unique.push(element)
//         }
//     });
//     return unique;
//  }

//  console.log(removeDuplicate(arr));



///
// let arr = ["apple" , "orange", "banana", "apple", "orange"];
// Array.prototype.unique = function () {
//     return Array.from(new Set(this));
// }

// console.log(arr.unique());



// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxsum =0;
// for(let i=0; i < array.length; i++){
//     let subArr =array[i];
//     let sum = 0;
//     for(let j=0; j < subArr.length;j++){
//         sum += subArr[j];
//     }
//     if(sum > maxsum){
//         maxsum = sum;
        
//     }
// }
// console.log(maxsum);




