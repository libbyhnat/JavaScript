
// alert('File linked');

//1 The below = 75
// var number1 = 35;
// var number2 = 40;
// alert(number1 + number2);

//2 with "" popup 3540
// var number1 = "35";
// var number2 = "40";
// alert(number1 + number2);

            // ARRAYS
// Arrays with strings
var colors = ['red', 'blue', 'green'];
// alert(colors[2]);
//both work
var colors = new Array('red', 'yellow', 'orange');
// colors[3] = 'green';
//can but not a great way to add to the arrya
// Better
colors.push('purple');
// alert(colors[3]);

//Array with numbers
// var numbers = [5,77,6,43];
// alert(numbers[0] + numbers[2]);
// var numbers =  [5, 77,6,'seven'];
// alert(numbers[3]);

            //  LOOPS
// For Loos
// for(var i = 0; i < 10; i++){
// console.log('i love the number' +i);
// }

  // WHILE LOOP
// var i = 0;
// while(i < 10){
//   console.log(i);
//   i++;
//
// }

    // LOOPS WITH ARRAYS
// FOR H LOOP with an Arrays
// var numbers =[33, 54, 76, 34, 2, 6];
// numbers.reverse();
//         Example 1
// number.forEach(function( number){
//   console.log(number);
// });

    // Array with a FOR LOOP
  //       var numbers =[33, 54, 76, 34, 2, 6];
  // for(var i = 0;i < numbers.length;i++){
  //   console.log(numbers[i]);
  // }

          // CONDITIONS

//Example 1
//     var var1 = 3;
//     var var2 = 4;
// if(var1 == var2){
//   console.log('this is ture');
// } else {
//   console.log('this is false');
// }

// Example 2 - add Conditions to this "and" (&&)
// var var1 = 3;
// var var2 = 4;
// if(var1 == var2 && var1 == 3){
// console.log('this is ture');
// } else {
// console.log('this is false');
// }

// Example 3 add "or"
// var var1 = 3;
// var var2 = 4;
// if(var1 == var2 || var1 == 3){
// console.log('this is ture');
// } else {
// console.log('this is false');
// }


// Switch Statments
// var fruit = 'grapes';
// switch(fruit) {
//   case "banana":
//     alert('I hate bananas');
//     break;
//   case "apple":
//     alert('I love apple');
//     break;
//   case "orange":
//     alert('Oranges are ok');
//     break;
//   default:
//     alert('I love all other fruits');
//     break;
//
// }


        // OBJECTS

  // Ojbect Literals
 var person = {
   firstName: 'Brad',
   lastName: 'Traversy',
   age: 34
 }

console.log(person.age);

// Literals -Object Literals ARRAYS
var person = {
  firstName: 'Brad',
  lastName: 'Traversy',
  age: 34,
  children: ['Brianna', 'Nicholas']
}

console.log(person.children[0]);



// Literals -Inbeded OBJECTS Literals
var person = {
  firstName: 'Brad',
  lastName: 'Traversy',
  age: 34,
  children: ['Brianna', 'Nicholas'],
  address: {
    street:'555 Something st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person.address.state);

//Literals -Add a functions to Inbeded OBJECTS Literals
var person = {
  firstName: 'Brad',
  lastName: 'Traversy',
  age: 34,
  children: ['Brianna', 'Nicholas'],
  address: {
    street:'555 Something st',
    city: 'Boston',
    state: 'MA'
  },
  fullName: function(){
    return this.firstName +" "+this.lastName;
  }
}

console.log(person.fullName());

// Object function (Constructor Pattern)
function fruit(name, color, shape){
  this.name = name;
  this.colot = color;
  this.shape = shape;

  this.describe = function(){
    return 'A '+this.name+ 'is the color' +this, color+'and is the shape' +this. shape;
  }
}
// var apple = new fruit('apple', 'red', 'round');
var melon = new fruit('melon',  'green',  'round');
console.log(melon.describe());

// Arrays of OBJECTS
var users = [
  {
    name: 'John Doe',
    age: 30
  },
  {
    name: 'Mark Smith',
    age: 44
  },
  {
    name: 'Shelly Williams',
    age: 20
  }
];
console.log(users[0]);


            // EVENTS
  // function doclick(){
  //   alert('You Clicked!');
  // }
//  off to HTML
