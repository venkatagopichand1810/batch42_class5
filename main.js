// JSON is javascirpt object notation....
// lightweight data format used to store and exchange the data b.w client and server

// javascript object

// let user = {
//     name: "rama",
//     age: 25, 
//     isActive: true
// }


// json



// JSON -> javascript Object ...JSON.parse()

let jsonData = '{"name": "rama", "age": 25}';

// convert JSON string to JS object
let User = JSON.parse(jsonData)

console.log(User.name)



// Javascript object -> JSON...JSON.stringify()

let person = {
    name: "venkat",
    age: 25
}

let jsData = JSON.stringify(person);

console.log(jsData)


//javascript object
let response = {
    status: "success",
    data: {
        id: 101, 
        name: "Laptop",
        price: 50000
    }
}
console.log(response.data.name)

