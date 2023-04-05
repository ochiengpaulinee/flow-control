//Write a function that accepts an array of strings and console.logs each element using a for loop.
function forloop(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
let arr = ["garden","house","girl","boy"]
forloop(arr)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let num = [1,3,5,7,9]
let nums = []
num.forEach(numbers)

function numbers(num){
    nums.push(num*2)
}
console.log(nums)


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
// function arrayNUmbers()
let numberss = [2,4,6,8,10,12]
let c = []
function arrayNumbers(numberss){
    for(let z=0;z<numberss.length;z++){
        if(z<4){
            c.push(numberss[z]*8)
        }
        else{
            c.push(numberss[z]+5)
        }
    }
    console.log(c)
}
arrayNumbers(numberss)

//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
let n =0;

function whileloop(arrNum){
while(n<arrNum.length){
    console.log(arrNum[n])
    if(n===4){
        break;
    }
    n++
}
}
whileloop(arrNum)

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits = ["apple","plum","banana","strawberries","kiwi"]
function fruit(fruits){
for(let x=0;x<fruits.length;x++){
    if(x===2){
        continue;
    }
    console.log(fruits[x])
}
}
fruit(fruits)


