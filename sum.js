function sumDigitsFromString(str) {
    var sum = 0;
    var numbers = str.match(/\d+/g).map(Number);
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}

// Test it
console.log(sumDigitsFromString("1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80"));
