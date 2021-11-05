let arr = new Array();

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor((Math.random() * 900) + 100);
}
console.log(arr);
 let sort = arr.sort();
console.log(sort);
    console.log("The Second Largest Number is: " + arr[arr.length-2]);
    console.log("The Second Smallest Number is: " + arr[1]);