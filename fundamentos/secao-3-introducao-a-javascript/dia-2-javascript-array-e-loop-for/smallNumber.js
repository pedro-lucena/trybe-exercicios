let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallNumber = numbers[0];
for (let index = 0;index < numbers.length; index +=1) {
    if(smallNumber > numbers[index]) {
        smallNumber = numbers[index]
    }
}

console.log(smallNumber)