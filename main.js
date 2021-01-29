// 11 - Destructuring Object Part 1:
/* Destructuring
- Object
- Array
- Parameter */

// Before ES6 (ECMAScript 6)
/* var user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    Website: "Drama Sport"
};
var n = user.name,
    g = user.gender,
    a = user.age,
    c = user.city,
    w = user.Website;
    console.log(`My Name Is: ${n}
I Am: ${g}
My Age Is: ${a}
I Live In: ${c}
My Website Is: ${w}`); */

// With ES6 (ECMAScript 6)
// Destructuring Object
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    Website: "Drama Sport"
};
const {name, gender, age, city, Website} = user;
// With Declare New Variables
    console.log(`My Name Is: ${name}
I Am: ${gender}
My Age Is: ${age}
I Live In: ${city}
My Website Is: ${Website}`); */

// With Assign Variables
/* let name = "Default",
    gender = "Default",
    age = 37,
    city = "Default",
    Website = "Default";

const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    Website: "Drama Sport"
};

// 1
// const {name, gender, age, city, Website} = user;
//     console.log(`My Name Is: ${name}
// I Am: ${gender}
// My Age Is: ${age}
// I Live In: ${city}
// My Website Is: ${Website}`); // SyntaxError: Identifier 'name' has already been declared

// 2
({name, gender, age, city, Website} = user);
    console.log(`My Name Is: ${name}
I Am: ${gender}
My Age Is: ${age}
I Live In: ${city}
My Website Is: ${Website}`); // My Name Is: Kinan
// I Am: Male
// My Age Is: 37
// I Live In: Berlin
// My Website Is: Drama Sport */

/* Create A New Variable, But I Am Not Sure, If This New Variable Already Exists Inside The Object */
// Example 1
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    Website: "Drama Sport"
};

const {name, gender, age, city, Website, theme} = user;

console.log(`My Name Is: ${name}
I Am: ${gender}
My Age Is: ${age}
I Live In: ${city}
My Website Is: ${Website}
My Theme Color Is: ${theme}`); // My Name Is: Kinan
// I Am: Male
// My Age Is: 37
// I Live In: Berlin
// My Website Is: Drama Sport
// My Theme Color Is: undefined */

// Example 2
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    Website: "Drama Sport"
};

const {name, gender, age, city, Website, theme = "Default"} = user;

console.log(`My Name Is: ${name}
I Am: ${gender}
My Age Is: ${age}
I Live In: ${city}
My Website Is: ${Website}
My Theme Color Is: ${theme}`); // My Name Is: Kinan
// I Am: Male
// My Age Is: 37
// I Live In: Berlin
// My Website Is: Drama Sport
// My Theme Color Is: Default */

// Example 3
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    Website: "Drama Sport",
    theme: "Red"
};

const {name, gender, age, city, Website, theme = "Default"} = user;

console.log(`My Name Is: ${name}
I Am: ${gender}
My Age Is: ${age}
I Live In: ${city}
My Website Is: ${Website}
My Theme Color Is: ${theme}`); // My Name Is: Kinan
// I Am: Male
// My Age Is: 37
// I Live In: Berlin
// My Website Is: Drama Sport
// My Theme Color Is: Red */

// ________________________________________

// 12 - Destructuring Object Part 2:

// If You Want To Change The Variable Name:
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default"
};
const {name: theNme, gender: theGender, age: theAge, city: theCity, website: theWebsite, theme: theTheme = "Default"} = user;

console.log(`My Name Is: ${theNme}
I Am: ${theGender}
My Age Is: ${theAge}
I Live In: ${theCity}
My Website Is: ${theWebsite}
My Theme Color Is: ${theTheme}`); // My Name Is: Kinan
// I Am: Male
// My Age Is: 37
// I Live In: Berlin
// My Website Is: Drama Sport
// My Theme Color Is: Default */

// Example 2
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default",
    langs: {
        html: "70%",
        css: "80%",
        js: "10%"
    }
};

const {name, gender, langs} = user;
//  1
// console.log(`My Name Is: ${name}
// I Am ${gender}
// My Languages: ${langs}`); // My Name Is: Kinan
// I Am Male
// My Languages: [object Object]
 */
// Example 3
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default",
    langs: {
        html: "70%",
        css: "80%",
        js: "10%"
    }
};

const {name, gender, langs: {html, css}} = user;
//  1
console.log(`My Name Is: ${name}
I Am ${gender}
My HTML Progress Is: ${html}`); // My Name Is: Kinan
// I Am Male
// My HTML Progress Is: 70% */

// Example 3
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default",
    langs: {
        html: "70%",
        css: "80%",
        js: "10%"
    }
};

const {name, gender, langs: {html, css, python = "10%"}} = user;
//  1
console.log(`My Name Is: ${name}
I Am ${gender}
My HTML Progress Is: ${html}
My Python Progress Is: ${python}`); // My Name Is: Kinan
// I Am Male
// My HTML Progress Is: 70%
// My Python Progress Is: 10% */

// Example 4
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default",
    langs: {
        html: "70%",
        css: "80%",
        js: "10%",
        python: "20%"
    }
};

const {name, gender, langs: {html, css, python = "10%"}} = user;
//  1
console.log(`My Name Is: ${name}
I Am ${gender}
My HTML Progress Is: ${html}
My Python Progress Is: ${python}`); // My Name Is: Kinan
// I Am Male
// My HTML Progress Is: 70%
// My Python Progress Is: 20% */

// Example 5
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default",
    langs: {
        html: "70%",
        css: "80%",
        js: "10%",
        python: "20%"
    }
};

const {name, gender, langs: {html: theHtml, css, python = "10%"}} = user;
//  1
console.log(`My Name Is: ${name}
I Am ${gender}
My HTML Progress Is: ${theHtml}
My Python Progress Is: ${python}`); */

// Example 6
/* const user = {
    name: "Kinan",
    gender: "Male",
    age: 37,
    city: "Berlin",
    website: "Drama Sport",
    theme: "Default",
    langs: {
        html: "70%",
        css: "80%",
        js: "10%",
        python: "20%"
    }
};

const {html, css, js, python} = user.langs;

console.log(`${html}
${css}
${js}
${python}`); // 70%
80%
10%
20% */

// ________________________________________

// 13 - Destructuring Array Part 1:
/* const food = ["Burger", "Pizza", "Chicken"];
const [one, two, three] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${three}`); */

/* // If There Are Already Variables:
let one = "Default",
    two = "Default",
    three = "Default";
const food = ["Burger", "Pizza", "Chicken"];
const [one, two, three] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${three}`); // SyntaxError: Identifier 'one' has already been declared */

/* // If There Are Already Variables:
let one = "Default",
    two = "Default",
    three = "Default";
const food = ["Burger", "Pizza", "Chicken"];
[one, two, three] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${three}`); // The Food Which I Love Are: Burger, Pizza, Chicken */

// If You Want To Create A Default Value For A Specific Variable:
// 1
/* const food = ["Burger", "Pizza", "Chicken"];
[one, two, three, four = "Default"] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${three}, ${four}`); // The Food Which I Love Are: Burger, Pizza, Chicken, Default */

// 2
/* const food = ["Burger", "Pizza", "Chicken", "Meat"];
[one, two, three, four = "Default"] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${three}, ${four}`); // The Food Which I Love Are: Burger, Pizza, Chicken, Meat */

// Skipping ( How Can You Skip A Specific Variable, Or An Element In An Array, That I Don't Want? ):
/* const food = ["Burger", "Pizza", "Chicken", "Meat", "Rice"];
[one, , , four] = food; */

/* console.log(`The Food Which I Love Are: ${one}, ${two}, ${three}, ${four}, ${five}`); // ReferenceError: two is not defined */

/* console.log(`The Food Which I Love Are: ${one}, ${three}, ${four}, ${five}`); // ReferenceError: five is not defined */

/* console.log(`The Food Which I Love Are: ${one}, ${three}, ${four}`); // The Food Which I Love Are: Burger, Chicken, Meat */

/* console.log(`The Food Which I Love Are: ${one}, ${four}`); // The Food Which I Love Are: Burger, Meat */

// ________________________________________

// 14 - Destructuring Array Part 2:
// Nested Array
/* const food = ["Burger", "Pizza","Chicken", ["Apple", "Banana", "Mango", "Orange"]];
const [one, two, there, [fr1, fr2, fr3, fr4 = "Default"]] = food; */

// 1
/* console.log(`The Food Which I Love Are: ${one}, ${two}, ${there}
The Fruit Which I Love Are: ${fr1}, ${fr2}, ${fr3}, ${fr4}`); // The Food Which I Love Are: Burger, Pizza, Chicken
// The Fruit Which I Love Are: Apple, Banana, Mango, Default */

// 2
/* console.log(`The Food Which I Love Are: ${one}, ${two}, ${there}
The Fruit Which I Love Are: ${fr1}, ${fr2}, ${fr3}, ${fr4}`); // The Food Which I Love Are: Burger, Pizza, Chicken
// The Fruit Which I Love Are: Apple, Banana, Mango, Orange */

/* const food = ["Burger", "Pizza","Chicken", ["Apple", "Banana", "Mango",["EgyOrange", "PakistanOrange"]]];
const [one, two, there, [fr1, fr2, fr3, [o1, o2]]] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${there}
The Fruit Which I Love Are: ${fr1}, ${fr2}, ${fr3}
And I Love All Kind Of Orange Specially: ${o1}, ${o2}`); // The Food Which I Love Are: Burger, Pizza, Chicken
// The Fruit Which I Love Are: Apple, Banana, Mango
// And I Love All Kind Of Orange Specially: EgyOrange, PakistanOrange */

// 1
/* const food = ["Burger", "Pizza","Chicken", ["Apple", "Banana", "Mango",["EgyOrange", "PakistanOrange"]]];
const [one, two, there, [fr1, fr2, [o1, o2]]] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${there}
The Fruit Which I Love Are: ${fr1}, ${fr2}
And I Love All Kind Of Orange Specially: ${o1}, ${o2}`); */ // The Food Which I Love Are: Burger, Pizza, Chicken
// The Fruit Which I Love Are: Apple, Banana
// And I Love All Kind Of Orange Specially: M, a

// 2
/* const food = ["Burger", "Pizza","Chicken", ["Apple", "Banana", "Mango",["EgyOrange", "PakistanOrange"]]];
const [one, two, there, [fr1, fr2, , [o1, o2]]] = food;

console.log(`The Food Which I Love Are: ${one}, ${two}, ${there}
The Fruit Which I Love Are: ${fr1}, ${fr2}
And I Love All Kind Of Orange Specially: ${o1}, ${o2}`); // The Food Which I Love Are: Burger, Pizza, Chicken
// The Fruit Which I Love Are: Apple, Banana
// And I Love All Kind Of Orange Specially: EgyOrange, PakistanOrange */

// Example With Rest Operator:
/* const food = ["Burger", "Pizza", "Chicken", "Apple", "Banana", "Mango","Rice", "Meat"];
const [one, two, three, ...otherFood] = food;

console.log(`The Food Which I Love Are: ${one} ${two} ${three}, ${otherFood}`); */

// ________________________________________

// 15 - Destructuring Array - Swap Variables:

// Swap The Old Way:
/* var book = "Video",
    video = "Book";

// Copy First Variable Into Stash
var stash = book;

// Swapping Variables
book = video;

// Get Book Value From Stash
video = stash;

console.log(`Book Is ${book} And The Video Is ${video}`); // Book Is Book And The Video Is Video */

// With Destructuring Array:
/* var book = "Video",
    video = "Book";

[book, video] = [video, book];

console.log(`Book Is ${book} And The Video Is ${video}`); // Book Is Book And The Video Is Video */

// ________________________________________