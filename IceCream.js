"use strict"

var person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name);  // Output: John
person.greet();  // Output: Hello, my name is John


