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