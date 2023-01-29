// console.log("Well, hello my little friend")

//Control Statements
// const weekDay = 3

// switch (weekDay) {
//     case 1:
//     console.log("WEEKEND VIBES")        
//         break;
    
//     case 3:
//         console.log("week day!")        
//         break;
            

//     default: console.log("Invalid Statement!")
//         break;
// }

//Creating a Class
class Car {
    color = "Jet Black"
    wheels = 4
    doors = 4

    start () {
        console.log("Engine has started")
    }

    displayWheels (){
        console.log(this.wheels)
    }
}

//Instantiate a Class
const car = new Car()

// car.start()
// car.displayWheels()
// console.log(car)

//Creating a Constructor
    // class Person {
    //     constructor (name, age) {
    //         this.name = name,
    //         this.age = age
    //     }

    //     getAge() {
    //         console.log(this.age)
    //     }

    //     setAge(age) {
    //         this.age = age
    //     }
    // }

    // const James = new Person('James', '25')
    // const Queen = new Person('Queen', '21')
    // // console.log(James)
    // // console.log(Queen)
    // James.setAge(30)
    // Queen.setAge(25)
    // James.getAge()
    // Queen.getAge()


    //Creating a Regular Expression

    // let res1 = new RegExp("abc")
    // let res2 = /abc/.test("abc")

    // console.log(res2);

    //Pattern that starts with a digit
    // let res3 = /\d/.test("12bcdefg")
    // console.log(res3)

    //Repeating Patterns Using Quantifiers
    // const set1 = /\d{5,8}/.test("123456")
    // console.log(set1)

    // + Quantifier
    // const set2 = /hello[0-9]+/.test("hello1123345")
    // console.log(set2)

    // const set3 = /^\d\S+@\S+\.?\S+$/.test("1738acer@ace.com2023")
    // console.log(set3)


    //Creating Objects
    // const Person = {
    //     name : "Terry",
    //     age : "26"
    // }

    // const cars  = {
    //     Brand : "Mercedez Benz",
    //     model : "G-wagon"
    // }

    // const Lang = {
    //     frontEnd : "React",
    //     backEnd : "nodeJs"
    // }

    // console.log(Person)
    // console.log(cars)
    // console.log(Lang)

    //Creating Arrays
    const numbers = [10, 20, 30, 40, 50]

    //Using the Map Function
    const numMultiply = numbers.map((item) => item * 2)

    console.log(numMultiply)

    



