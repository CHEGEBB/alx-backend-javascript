## 0x02. ES6 Classes 🚀

Welcome to the ES6 Classes project! 🎉 This project aims to give you a solid understanding of ES6 classes and how to use them effectively in JavaScript. 

### Overview 📚
ES6 classes provide a new syntax for creating objects and handling inheritance. They offer a cleaner and more intuitive way to work with object-oriented programming in JavaScript.

### Key Concepts 🔑
- **Class Declaration**: Creating classes using the `class` keyword.
- **Constructor Method**: Initializing objects with the `constructor` method.
- **Methods**: Defining functions within the class.
- **Inheritance**: Extending classes to create subclasses.

### Structure 🏗️
1. **Basic Class Structure**
   - Creating a class
   - Adding properties and methods
2. **Constructor Method**
   - Initializing class properties
3. **Class Methods**
   - Defining functions inside the class
4. **Inheritance**
   - Extending classes using `extends`
   - Using the `super` keyword

### Example Code 💻
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

### Resources 📖
- [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript Info: Classes](https://javascript.info/class)

Happy coding! 🎨👨‍💻👩‍💻