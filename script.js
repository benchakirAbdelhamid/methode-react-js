// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
// console.log(fruits2.length);
// console.log(fruits2);

// =========================split===========================

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
// console.log(fruits3.length);
// console.log(fruits3);

// ========================join============================

const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
// console.log(fruitsString);

// ========================indexOf============================

// indexOf
const fruitsi = ["Apple", "Banana"];
// console.log(fruitsi.indexOf("Banana"));

// ========================includes============================

// includes
const fruitsx = ["Apple", "Banana"];
const x = fruitsx.includes("Banana"); // true
const xx = fruitsx.includes("Cherry"); // false
// console.log(x);
// console.log(xx);

// ========================push============================

const fruitss = ["Apple", "Banana"];
const newLength = fruitss.push("Orange");
// console.log(fruitss); // ["Apple", "Banana", "Orange"]
// console.log(newLength); // 3

// =======================unshift=============================

const fru = ["Banana", "Mango"];
const newLengh = fru.unshift("Strawberry");
// console.log(fru); // ["Strawberry", "Banana", "Mango"]
// console.log(newLengh); // 3

// =======================pop=============================

const fruitsa = ["Apple", "Banana", "Orange"];
const removedItem = fruitsa.pop();
// console.log(fruitsa); // ["Apple", "Banana"]
// console.log(removedItem); // Orange

// =======================shift=============================

const fruit = ["Apple", "Banana", "Orange"];
const removedIte = fruit.shift();
// console.log(fruits); // ['Apple', 'Banana']
// console.log(removedIte); // Apple

// =========================splice===========================

const fruitsw = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const removedItems = fruitsw.splice(-3);
// console.log(fruitsw); // ["Apple", "Banana"]
// console.log(removedItems); // ["Strawberry", "Mango", "Cherry"]

// ======================splice==============================

const fruitsc = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const removedItemsc = fruitsc.splice(2);
// console.log(fruitsc); // ["Apple", "Banana"]
// console.log(removedItemsc); // ["Strawberry", "Mango", "Cherry"]

// ==========================splice==========================

const frui = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const removedIt = frui.splice(0, 3);
// console.log(frui); // ["Banana", "Mango"]
// console.log(removedIt); // ["Apple", "Strawberry", "Cherry"]

// ========================splice============================

const fr = ["Strawberry", "Banana", "Mango"];
const start = fr.indexOf("Banana");
const removed = fr.splice(start, 1);
// console.log(fr); // ["Strawberry", "Mango"]
// console.log(removed); // ["Banana"]
// console.log(start); // index = 1

// =======================splice=============================

const its = ["Apple", "Banana", "Strawberry", "Mango"];
const Items = its.splice(1, 2);
// console.log(its); // ["Apple", "Mango"]
// console.log(Items); // ["Banana", "Strawberry"]

// =======================splice=============================

const uits = ["Apple", "Banana", "Strawberry"];
const remoms = uits.splice(-2, 2, "Mango", "Cherry");
// console.log(fruits);// ["Apple", "Mango", "Cherry"]
// console.log(remoms);// ["Banana", "Strawberry"]

// ====================for of================================

const fruis = ["Apple", "Mango", "Cherry"];
for (const fruit of fruis) {
  //   console.log(fruit);
}
// Apple
// Mango
// Cherry

// ====================================================

const fruitsg = ["Apple", "Mango", "Cherry"];
fruitsg.forEach((item, index, array) => {
  //   console.log(item, index, array);
});
// Apple 0 (3) ['Apple', 'Mango', 'Cherry']
// Mango 1 (3) ['Apple', 'Mango', 'Cherry']
// Cherry 2 (3) ['Apple', 'Mango', 'Cherry']

// =====================concat===============================

const fruitsv = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const z = fruitsv.concat(moreFruits);
// console.log(z); // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// ========Create a copy using spread syntax======spread operator ... ==============================

const g = ["Strawberry", "Mango"];
const fruitsCopy = [...g];
// console.log(fruitsCopy); // ["Strawberry", "Mango"]

// ======================at==============================
const cart = ["apple", "banana", "pear"];
const item1 = cart.at(-1);
// console.log(item1); // 'pear'
cart.push("orange");
const item2 = cart.at(-1);
// console.log(item2); // 'orange'

// =====================slice=????==============================

const colors = ["red", "green", "blue"];
const sliceWay = colors.slice(-2, -1);
// console.log(sliceWay);
// console.log(colors);

// ===========================concat=========================

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
// console.log(array3); //  output: Array ["a", "b", "c", "d", "e", "f"]

// =========================concat===========================

const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);
// console.log(alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]

// ========================copyWithin============================

const array12 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
// console.log(array12.copyWithin(0, 3));
// Copy to index 0 the element at index 2 TO INDEX 3
// console.log(array12.copyWithin(0, 2, 3));
// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index -2 the element at VALUE index 0
// console.log(array12.copyWithin(-2));

// ======================every==============================
// tout element === condition true
const ara1 = [12, 5, 8, 130, 44];
const ara2 = [12, 54, 18, 130, 44];
// console.log(ara1.every((x) => x >= 10)); // false
// console.log(ara2.every((x) => x >= 10)); // true

// =======================fill=============================
// fill(value)
// fill(value, start)
// fill(value, start, end)
const arra1 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
// console.log(arra1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
// console.log(arra1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
// console.log(arra1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// ===========================filter=========================
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word, index, array) => {
  //   console.log(index, array);
  console.log(word)
  // console.log(index)
  // console.log(array)
  // return word.length > 6;
});
// console.log(result); // ["exuberant", "destruction", "present"]

// =======================find=============================
// the first element find condation and break next element
const aray1 = [5, 12, 8, 130, 44];
const found = aray1.find((element, index, array) => {
  //   console.log(index, array);
  return element > 10;
});
const found1 = aray1.find((element) => element > 4);
// console.log(found); //  12
// console.log(found1); //  5

// =====================find the first element===============================
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "cherries", quantity: 6 },
];
const result1 = inventory.find(({ name }) => name === "cherries");
// console.log(result1); // { name: 'cherries', quantity: 5 }

// ====================findIndex================================
// the return  index fint first element consition
const arr1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// console.log(arr1.findIndex(isLargeNumber)); // 3

// ====================================================
// the last element find condation and break next element
const rray1 = [5, 12, 50, 130, 44];
const ound = rray1.findLast((element) => element > 45);
// console.log(ound); // 130
// ====================================================
const arry1 = [5, 12, 50, 130, 44];
const ou = arry1.findLastIndex((element) => element > 45);
// console.log(ou); //  3 Index of element with value: 130

// ====================flat==delete number array and integrate value==============================
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const gg = arr4.flat(Infinity);
const gg1 = arr4.flat(3);
// console.log(gg);
// console.log(gg1);

// ========================forEach============================
const ar1 = ["a", "b", "c"];
// ar1.forEach((element, index, array) => console.log(element, index, array));

// =======================includes=============================
// includes exist value
// includes(searchElement, fromIndex)
// console.log([1, 2, 3].includes(2)); // true
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, 2)); // true

// =======================indexOf=============================
const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf("bison")); // 1
// Start from index 2
// console.log(beasts.indexOf("bison", 2)); // 4
// console.log(beasts.indexOf("giraffe")); // -1

// =====================join===============================
const elements = ["Fire", "Air", "Water"];
// console.log(elements.join()); // "Fire,Air,Water"
// console.log(elements.join("")); // "FireAirWater"
// console.log(elements.join("-"));// "Fire-Air-Water"

// ======================keys==============================
// returns a new Array that contains the keys for each index in the array.
const ray1 = ["a", "b", "c"];
const iterator = ray1.keys();
for (const key of iterator) {
  //   console.log(key); // 0  1  2
}

// =======================lastIndexOf=============================
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log(animals.lastIndexOf("Dodo")); //  3
// console.log(animals.lastIndexOf("Tiger")); // 1

// =======================map=============================
const aay1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = aay1.map((x, index, array) => {
  // console.log(index);
  // console.log(array);
  return x + x;
});
// console.log(map1);

// ======================of==============================

// console.log(Array.of(7, 2));
// console.log(Array(70, 5, 2));

// =======================pop=============================

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(plants.pop()); //  "tomato"
// console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
// console.log(plants); //["broccoli", "cauliflower", "cabbage"]

// =========================push===========================

const animal = ["pigs", "goats", "sheep"];
const count = animal.push("cows");
// console.log(count); // 4
// console.log(animal); // ["pigs", "goats", "sheep", "cows"]

// ====================================================

const rry1 = [1, 2, 3, 4];
//
const sumWithInitial = rry1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// console.log(sumWithInitial); //0 + 1 + 2 + 3 + 4 = 10

// ====================================================

const items = [1, 2, 3];
// console.log(items); // [1, 2, 3]
const xf = items.reverse();
// console.log(xf);
// console.log(items); // [3, 2, 1]

// =======================shift=============================

const ry1 = [1, 2, 3];
const firstElement = ry1.shift();
// console.log(ry1); // [2, 3]
// console.log(firstElement); // 1

const myFish = ["angel", "clown", "mandarin", "surgeon"];
// console.log("myFish before:", JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

// =========================slice===========================
// slice(start)
// slice(start, end)
const animalsx = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animalsx.slice(2)); //  ["camel", "duck", "elephant"]
// console.log(animalsx.slice(2, 4)); // ["camel", "duck"]
// ========================some============================
// some condition some tout element ==> true ou false
const some = [2, 5, 8, 1, 4].some((x) => x > 10); // false
const some1 = [12, 5, 8, 1, 4].some((x) => x > 10); // true
// console.log(some);
// console.log(some1);
// ====================sort================================
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
// console.log(months); // ["Dec", "Feb", "Jan", "March"]
const array11 = [1, 30, 4, 21, 100000];
array1.sort();
// console.log(array11); // [1, 100000, 21, 30, 4]
const items1 = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
items1.sort((a, b) => a.value - b.value);
// console.log(items1);
const array111 = [1, 30, 15, 80, 4, 21, 100000];
array111.sort((a, b) => a - b);
// console.log(array111); //[1, 4, 15, 21, 30, 80, 100000]
// ====================================================
const months5 = ["an", "March", "April", "June"];
months5.splice(1, 0, "Feb"); // Inserts at index 1
// console.log(months5); // ["Jan", "Feb", "March", "April", "June"]
const months50 = ["Jan", "March", "April", "June", "hamid"];
months50.splice(3, 2, "May"); //Replaces 1 element at index 3 and delete two element of index 3
// console.log(months50); // ['Jan', 'March', 'April', 'May']

// =========================toString===========================
const array18 = [1, 2, "a", "1a"];
// console.log(array18.toString()); // 1,2,a,1a

// =========================unshift===========================
let arr = [4, 5, 6];
arr.unshift(1, 2, 3);
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ========☻============================================
