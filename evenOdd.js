let num = 23;
if(num % 2 == 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// same kaj ta array tew kori and function use kori

function evenOdd(number) {
    for(let i = 0; i < number.length; i++) {
        if(number[i] % 2 == 0) {
            console.log(number[i], "even number");
        } else {
            console.log(number[i], "odd number");
        }
    }
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
evenOdd(number);