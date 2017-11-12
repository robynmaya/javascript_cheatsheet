// ES6 is awesome
// It has class and constructor so we can mimic OOP better with JS 
// Getter and Setter are tools to expose your private variables (preceeded and marked with underscore)

class Dog {
    constructor(name) {
        this._name = name;
    }
  
    get name() {
        return this._name; // returning a private variable _name 
    }
  
    set name(newName) {
        this._name = newName; // reassigning the value of a private variable _name 
    }
  
    bark() {
        console.log(this._name + ' is barking.');
    }
}

// Inheritance in ES6
// using 'extends'
// 'extends' will give the subclass all the methods its parent class has 
         
class Corgi extends Dog {  
    constructor(name, food) {
        super(name); // no need to do this._name = name <- because it has been done by the parent 
        this._food = food;
    }
  
    get food() {
        return this._food;
    }
  
    set food(newFood) {
        this._food = newFood;
    }
  
    chew() {
        console.log(this._name + ' is chewing on ' + this._food + '.');
    }
    
    // since this is a subclass of Dog class - so it also has all of the parent's method 
    // we actually have bark() here 
    // see line 56! an instance of Corgi object using a method from Dog object (thanks to 'extends')
}
         
let random_dog = new Dog('Random dog');

random_dog.bark(); // Random dog is barking.
         
let pillow = new Corgi('Pillow', 'Toys');

pillow.bark(); // pillow is barking.

pillow.chew(); // Pillow is chewing on Toys. 

console.log("I am a Corgi and my name is",pillow.name,'!'); // I am a Corgi and my name is Pillow !
