function leapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

year = 2024;
if(leapYear(year)) {
    console.log(year, "is leap year!");
} else {
    console.log(year, "is not leap year!");
}