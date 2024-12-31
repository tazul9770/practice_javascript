var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let unique = [];
for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]);
    }
}

console.log(...unique);