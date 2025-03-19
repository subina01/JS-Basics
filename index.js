/** using object literal */

const Person = {
      "name":"subina",
      "age":22,
      "address": "hetauda"
    };
console.log(Person.name)
    
/**using new object() */

const individual = new Object();
individual.name = "subina";
individual.age = 23;
console.log(individual.age);

/**using a constructor function*/

function girl(name, age) {
  this.name = name;
  this.age = age;
}

const girl1 = new girl("subina", 23)
console.log(girl1.name);

/** using a class */

class lady{
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }
}

const lady1 = new lady("subina dhakal", 23);
console.log(lady1.age);

/** access js objects */

console.log(lady1["name"]);
console.log(lady1.age);

/** Adding, updating and deleting properties */

Person.country = "Nepal";
individual.country = "Nepal";
console.log(Person.country);
console.log(individual.country);
console.log(Person)
delete Person.country;
console.log(Person)

/**Declaring arrays */
const num = [1, 2, 3, 4, 5]
const fruits = new Array("apple", "mango", "banana", "strawberry")

/**Accessing arrays */
console.log(fruits[0]);
console.log(fruits);

/** Modifying arrays */
fruits[2] = "orange";
console.log(fruits);

/** array length*/
console.log(fruits.length)

/**adding or removing elements */
num.push(6);
num.push(7);
console.log(num)
num.pop();
console.log(num)

/** add at the beginning */
num.unshift(0);
console.log(num);
num.shift(0);
console.log(num);

fruits.unshift("guava");
console.log(fruits);
fruits.shift("guava");
console.log(fruits);

/**Looping through array */
for (i = 0; i < fruits.length; i++)
{
  console.log(fruits[i])
}
num.forEach(nums => console.log(nums))

/** Transforming an array using map() */

console.log(num.map(num => num * 2))

/**filtering an array */
console.log(num.filter(num => num > 4))

/**sorting and array */
console.log(num.sort())

/** reducing an array */
console.log(num.reduce((total, num) => total + num, 0));

/**slice vs splice */
// slice(start, end) - Doesn't modify original array
console.log(num.slice(1, 3))
// splice(start, deleteCount, item1, item2...) - Modifies original array
console.log(num.splice(1, 3))
console.log(num)

/**Destructuring arrays */
const [a, b] = ["apple", "banana", "mango"]
console.log(a, b)

/**spreading arrays */
const numbers = [...num, 8, 9, 10, 11]
console.log(numbers)

/**rest operator */
function sum(...numbers) {
  return numbers.reduce((total, num)=> total+num, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

/** template literals */
const name = "subina";
const age = "20";
console.log(`My name is ${name} and I am ${age} years old`);

/** ternary operator */
const IsLoggedIn = true;
const message = IsLoggedIn ? "welcome! user" : " please enter your correct credentials";
console.log(message)

/** arrow function */
const getusername = (name) => {
  console.log(`hi! ${name}`)
};
getusername("subina"); 

/** short circuiting */
const user = "";
const username = user || "guest"
console.log(username)

/** Method Chaining */
const users = ["subina", "ram", "shyam"];
const capitalizedUsers = users.map(user => user.toUpperCase()).sort();

/**asynchornous js */
console.log("Loading...");
setTimeout(() => console.log("Data loaded!"), 2000);

/**promises(.then() & .catch()) handles api calls */
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => console.log(user))
  .catch(error => console.log("Error:", error));