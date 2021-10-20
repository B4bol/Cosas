/* 
Introduction to JavaScript, Where to?

JavaScript is a language that must be written into a html page or in node.js. 
But in the tag <script> of HTML we should define the js code or the .js path (<script src="example.js">)
*/

// Basic syntax and Console.log() statement.

console.log('Hello world!'); // Every statement needs a end ';'
    // in the () we can put whatever we want so we can output everything we want 

// Variable declaration.

// let is for declaring variables that they can change during the program.
    let number1 = 4;
    let age = 18;

// const is for declaring variblest that never change during the program.
    const birthday = '03/02/2004';
    const name = 'Vladimir';

// We can declare more than one variable in a single line and define it later.
    let let1, let2;
    const const1, const2;

    let1 = 0;
    let2 = false;
    const1 = 1,
    const2 = true;

// We can also declare variables in blocks of scope so the variables they can only be used there

// * We define a block with '{}'

    let x = 'Global scope variable';

    {
        let y = 'Block scope variable';
        console.log(y);
    }
    
    console.log(x); // OK
    console.log(y); //! Undefined variable -> Error! ('y' can NOT be used here)

/*
Primitive Data types.
There are 5 Primitve types of data,

Boolean: True/False
null: Doesn't exist
undefined: it's not defined
number: Real number of 64 bits
string: Sequence of characters 
*/
    const a = 'This is a string'; //type string
    const b = 12; //type number
    const c = 12.24; // type number
    const d = true; // type boolean

// Dynamic types, this means that the types of data may change during the code for example:
    let hasEmail; // True or false variable

    hasEmail = true; // Here the type of "hasEmail" is boolean
    hasEmail = 'yes'; // And now is a string

// Another example, we can merge together two varibles:
    let height, mesure;

    height = 155.5; // number
    mesure = ' cm'; // string

    console.log(height + mesure) // We merge the two variables with + and the type of data is a string

// Also we can convert a string into a number
    let height;

    height = '177.5 cm';
    console.log(height);

/*
Im going to introduce the parseInt and parseFloat.
parseInt funcion transforms the string into a normal number so we dont have decimals
paseFloat funcion transforms the string into a real number so we have decimals and such weird things
*/
    height = parseInt(height); // here the decimal will be removed
    console.log(height);

    height = parseFloat(height); // and here we will keep the decimal
    console.log(height);