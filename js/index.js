//task1
var input = +prompt("kindly enter a number")
for(var i = 1; i <= input; i++) {
    if (input % i === 0) {
        console.log(i);
    }
}

//task 2
var input = +prompt("kindly enter a number")
var sum = 0;
for (var i = 1; i <= input; i++) {
    if (input % i === 0) {
        sum = sum + i;
    }
}
console.log(sum)

// task3
var input = +prompt("kindly enter a number")
var num = 0;
for (i = 1; i <= input; i++) {
    if (input % i === 0) {
        num = num + 1;
    }
}
console.log(num)

var sum = 0;
for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(sum);

// task5
var input = +prompt("kindly enter a number")
var product = 1;
for (i = 1; i <= input; i++) {
    if (input % i === 0) {
        product = product * i;
    }
}
console.log(product)

//  task6
for (var i = 0; i < 5; i++) {
    console.log("Ayla")
}

// task7
var a = prompt("ad daxil edin")
for (var i = 0; i < 5; i++) {
    console.log(ayla)
}

// task8
var input = +prompt("eded daxil edin")
while (input > 0) {
    console.log(input % 10);
    input = Math.floor(input / 10);
}

// task9
var input = +prompt("eded daxil edin")
var count = 0;
while (input > 0) {
    count = count + 1;
    input = Math.floor(input / 10);
}
console.log(count)

// task10
var input = +prompt("eded daxil edin")
var sum = 0;
while (input > 0) {
    var digit = input % 10;
    sum = sum + digit;
    input = Math.floor(input / 10);
}
console.log(sum)

// task11
var input = +prompt("kindly enter a number")
var product = 1;
while (input > 0) {
    var digit = input % 10;
    product = product * digit;
    input = Math.floor(input / 10);
}
console.log(product)
 task1
var input = +prompt("eded daxil edin")
var isPrime = true;
if (input < 2) {
    
}
for (var i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? 'eded sadedir' : 'eded murekkebdir')

// task13- input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstərin.
var input = +prompt("eded daxil edin")
while (input > 0) {
    var digit = input % 10;
    var isPrime = true;
    if (digit < 2) {
        isPrime = false;
    }
    for (var i = 2; i <= Math.sqrt(digit); i++) {
        if (digit % i === 0) {
           
            break;
        }
    }
    if (isPrime) {
        console.log('sadədir', digit)
   }
    input = Math.floor(input / 10);
}
// task16
var input = +prompt("eded daxil edin")
var count = 0;
while (input > 0) {
    var digit = input % 10;
    if (digit === 0) {
        count = count + 1;
    }
    input = Math.floor(input / 10);
}
console.log(count)

task15
var n = 5;
var sum = 0;
for (var i = 0; i < n; i++) {
    var input = +prompt('kindly enter a number')
    sum = sum + input;
}
console.log(sum)

// task17- 1-20 
for (var i = 1; i <= 20; i++) {
    console.log(i)
}

//  task18
var a = +prompt('eded daxil edin')
for (var i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//  task19
var a = prompt("kindly enter a number")
var b = prompt("kindly enter a number")
var c = a ** b
console.log(c)

// task20
var input = +prompt("kindly enter a number")
var sum = 0;
while (input > 0) {
    var digit = input % 10;
    sum = sum + digit * digit;
    input = Math.floor(input / 10);
}
console.log(sum)

//  task21
var n = 8;
var sum = 0;
for (var i = 0; i < n; i++) {
    var input = +prompt("kindly enter a number")
    sum = sum + input;
}
var average = sum / n;
console.log(average);

// task22
var input = +prompt("kindly enter a number")
while (input > 0) {
    var digit = input % 10;
    if (digit % 2 == 0) {
        console.log('cutdur', digit)
    }
    input = Math.floor(input / 10);
}

// task23 
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
var isPerfect = true;
for (var i = 1; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0 && sum / i !== i) {
        isPerfect = false;
        break;
    }
}
console.log(isPerfect ? 'mükəmməldir' : 'mükəmməl deyil')

// task24
var input = +prompt('eded daxil edin')
var maxDigit = 0;
while (input > 0) {
    var digit = input % 10;
    if (maxDigit < digit) {
        maxDigit = digit;
    }
    input = Math.floor(input / 10);
}
console.log('en boyuk reqem', maxDigit);

//  task25
var a = prompt('ad daxil edin')
var n = prompt('say daxil edin')
for (var i = 1; i <= n; i++) {
    console.log(a)
}

// task26
var a = +prompt('eded daxil edin');
var factorial = 1;
for (var i = 1; i <= a; i++) {
    factorial = factorial * i;
}
console.log(factorial);