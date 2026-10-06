"use strict";
// Task 1

let n1 = 21;

if (n1 % 3 === 0 && n1 % 7 === 0) {
    console.log("Eded 3-e ve 7-ye bolunur");
} else {
    console.log("Eded 3-e ve 7-ye bolunmur");
}
// Task 2

let n2 = 1;
let m2 = 10;
let countOdd = 0;

for (let i = n2; i <= m2; i++) {
    if (i % 2 !== 0) {
        countOdd++;
    }
}

console.log("Tek ededlerin sayi:", countOdd);

// Task 3

let n3 = 1;
let m3 = 10;
let sumEven = 0;

for (let i = n3; i <= m3; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}

console.log("Cut ededlerin cemi:", sumEven);

// Task 4

let n4 = 17;
let isPrime = true;

if (n4 < 2) {
    isPrime = false;
}

for (let i = 2; i < n4; i++) {
    if (n4 % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(n4, "sade ededdir");
} else {
    console.log(n4, "murekkeb ededdir");
}

// Task 5

let numbers1 = [5, 8, 12, 7, 4, 3];

let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        sum += numbers1[i];
    }
}

console.log("Array-deki cut ededlerin cemi:", sum);

// Task 6

let numbers2 = [12, 5, 24, 3, 18, 7];

let max = numbers2[0];
let min = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {

    if (numbers2[i] > max) {
        max = numbers2[i];
    }

    if (numbers2[i] < min) {
        min = numbers2[i];
    }
}

console.log("En boyuk eded:", max);
console.log("En kicik eded:", min);

// Task 7

let numbers3 = [5, -3, 0, 7, -8, 0, 4];

let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < numbers3.length; i++) {

    if (numbers3[i] > 0) {
        positive++;
    } else if (numbers3[i] < 0) {
        negative++;
    } else {
        zero++;
    }
}

console.log("Musbet:", positive);
console.log("Menfi:", negative);
console.log("Sifir:", zero);

// Task 8

let numbers4 = [5, 2, 7, 5, 3, 5, 8];

let searchNumber = 5;
let count = 0;

for (let i = 0; i < numbers4.length; i++) {

    if (numbers4[i] === searchNumber) {
        count++;
    }
}

console.log(searchNumber + " ededi " + count + " defe tekrarlanib");

// Task 9

let numbers5 = [1, 2, 3, 4, 5];

for (let i = numbers5.length - 1; i >= 0; i--) {
    console.log(numbers5[i]);
}

// Task 10

let n10 = 1234;
let digitSum = 0;

while (n10 > 0) {

    let digit = n10 % 10;

    digitSum += digit;

    n10 = Math.floor(n10 / 10);
}

console.log("Reqemlerin cemi:", digitSum);

// Task 11

let n11 = 121;

let text = n11.toString();

let reversedText = text.split("").reverse().join("");

if (text === reversedText) {
    console.log("Palindromdur");
} else {
    console.log("Palindrom deyil");
}

// Task 12

let student = {
    name: "Rufet",
    age: 21,
    group: "P123",
    score: 85
};

console.log(student.name);
console.log(student.age);
console.log(student.group);
console.log(student.score);