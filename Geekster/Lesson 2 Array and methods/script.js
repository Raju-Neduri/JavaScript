//array and methods

var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);
console.log(typeof arr);
console.log(arr[3]);

var arr3 = [
  12,
  30,
  "new",
  true,
  null,
  undefined,
  { name: "John", age: 30 },
  [1, 2, 3],
];
console.log(arr3[6].name); // Accessing the name property of the object in the array
console.log(arr3[7][2]); // Accessing the third element of the nested array
console.log(arr3);

arr3[1] = "Raju";
console.log(arr3[1]); // Accessing the second element of the array after modification
console.log(arr3);
