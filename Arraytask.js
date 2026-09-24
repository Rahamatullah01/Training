// 1. Favorites Movies
const favoriteMovies = ["Vincenzo", "The Uncanny Counter", "Fiery Priest"];

console.log(favoriteMovies[0]); 
console.log(favoriteMovies[2]); 

// 2. Adding Mango and Orange to the end of the array
const fruits = ["Apple", "Banana"];

fruits.push("Mango", "Orange")
console.log(fruits)

// 3. Removing the last number and log the removed number
const numbers = [10, 20, 30, 40];

const removedNumber=numbers.pop()
console.log(removedNumber)
console.log(numbers)

// 4. Adding items to the beginning
const queue = ["User2", "User3"]

queue.unshift("User1")
console.log(queue)

// 5. Removing items from  the begining
const tasks = ["Task1", "Task2", "Task3"]

tasks.shift()
console.log(tasks)

// 6. Replace an item with another
const colors = ["Red", "Green", "Blue"];

colors[1] = "Yellow";
console.log(colors)
console.log(colors.length)

// 7. add and remove an item from the array
const playlist = ["Song A"];

playlist.push("Song B", "Song C");
playlist.pop();
console.log(playlist);

//8. add and remove
const guests = ["Bob", "Charlie"];
guests.unshift("Alice");
guests.shift();
console.log(guests);

//9. Empty an array
const figures = [100, 200];
figures.pop();
figures.pop();
console.log(figures);
console.log(figures.length);

// //10. todolist
const todoList = [];

todoList.push("Study", "Workout");
todoList.unshift("Wake Up");
todoList.pop();
console.log(todoList);

let name = prompt