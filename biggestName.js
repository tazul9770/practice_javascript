const check = (friends) => {
    let big = friends[0];
    for(let i = 0; i < friends.length; i++) {
        if(friends[i].length > big.length) {
            big = friends[i];
        }
    }
    return big;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigName = check(friends);
console.log(bigName)