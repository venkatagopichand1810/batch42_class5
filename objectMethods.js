// object methods .....

// Object.keys()....returns array of keys

let user = {
    name: "rama",
    age: 22,
    city: "bangalore"
}

let keys = Object.keys(user);

console.log(keys)


// Object.values()
// returns array of values 

let values = Object.values(user);
console.log(values)


// key - value pairs ....Object.entries()

let entries = Object.entries(user);
console.log(entries)



// object.freeze....makes object completely immutable 

let settings = {
    theme: "dark"
}

Object.freeze(settings);

settings.theme = "light";
console.log(settings.theme)