class Cat{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says meow!`
    }
}

let cat = new Cat

class Dog{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says woof!`
    }
}

let dog = new Dog

class Bird{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`
    } else {
        return `${this.name} says squawk!`
      }
    }
}

let bird = new Bird
let bird2 = new Bird