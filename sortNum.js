// number sort using selection sort 

const num = [2, 9, 16, 12, 1, 3, 7, 8, 10, 19, 5, 6, 20, 14, 17, 13, 4, 11, 15];

for(let i = 0; i < num.length; i++) {
    for(let j = i+1; j < num.length; j++) {
        if(num[i] > num[j]) {
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
    }
}

console.log(...num);