

// let arr = ["Rohit", "Megha", "Shilpa", "Somsi", "Divya"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// let arr = [10,20,30,40.5,47.89]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);


// To create an array of my desired size
// let arr = new Array(5);
// // To proceed in storing data in the empty Array
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// arr[4] = 50;
// // Now to acess the stored data
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// the above is not how we utilize arrays

// now how we utilize array using loop
let arr = new Array(5);

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

// let i;

// for(i = 0;i < 5; i++)
// {
//     console.log(arr[i])
// }

// for(i = 4;i >=0; i--)
// {
//     console.log(arr[i])
// }

for(let x of arr)
{
    console.log(x);
}