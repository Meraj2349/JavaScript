// const person= {
//     age:20,
//     name:"meraj",
//     eyecolour: "blue",
//     // cars:{

//     //     car1: 'bmw',
//     //     car2:'audi'
//     // }
// };

// document.getElementById('demo').innerHTML=person.name+" is "+person.age+" years old ";
// //array use
// document.getElementById('demo').innerHTML=person['name']+'is '+person['age']+'years old ';
// delete person['age'];
// //for in loop

// let txt='';

// for (const x in person) {

//     txt +=person[x]+' ';

// }

// document.getElementById('demo').innerHTML=txt;

// mycarhouse={
//     name:'meraj',
//     age:20,

//     cars:[
//         {name: "BMW",model:['fiesta','focus','mustang']},
//         {name: "maesetis",model:['320','10','50']},
//         {name:"ferary",model:['200','500','100']}

//     ]
// }
// let text='';
// for (const x in mycarhouse.cars) {
//     text+='<h1>'+mycarhouse.cars[x].name+'</h1>';
//     for (const j in mycarhouse.cars[x].model) {
//         text+=mycarhouse.cars[x].model[j]+' ';

//     }
// }

// document.getElementById('demo').innerHTML=text;

// const person={
//     name : "shanto",
//     qulaty:"bukachoda ",

//     fullspecification : function()
//     {
//         return this.name+' '+this.qulaty;
//     }
// }

//document.getElementById('demo').innerHTML=person.fullspecification().toUpperCase();

//values
// const array= Object.values(person);
// document.getElementById('demo').innerHTML=array;

//jeson
// person.fullspecification=person.fullspecification.toString();
// const jesonUse = JSON.stringify(person);

// document.getElementById('demo').innerHTML=jesonUse;

//geter setter

// const obj = { count : 0 };

// Object.defineProperty(obj, "reset", {
//   get: function () {
//     this.count = 0;
//   },
// });

// Object.defineProperty(obj, "increment", {
//   get: function () {
//     this.count++;
//   },
// });
// Object.defineProperty(obj, "dicrement", {
//   get: function () {
//     this.count--;
//   },
// });
// Object.defineProperty(obj, "add", {
//   set: function (value) {
//     count += value;
//   },
// });
// Object.defineProperty(obj, "subtrac", {
//   set: function (value) {
//     count += value;
//   },
// });

// obj.reset;
// obj.add = 5;
// obj.increment;
// obj.dicrement;
// obj.subtrac = 3;

// document.getElementById("demo").innerHTML = obj.count;
// // Create object with an existing object as prototype
// Object.create()

// // Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// // Adding or changing object properties
// Object.defineProperties(object, descriptors)

// // Accessing Properties
// Object.getOwnPropertyDescriptor(object, property)

// // Returns all properties as an array
// Object.getOwnPropertyNames(object)

// // Accessing the prototype
// Object.getPrototypeOf(object)

// // Returns enumerable properties as an array
// Object.keys(object)