let jsonData = '{"name": "rama", "age": 25, "city": "bangalore"}';


// convert json string to js object
let obj = JSON.parse(jsonData);

// iterate object....for...in
for(let key in obj){
    console.log(key, obj[key])
}



// JSON ARRAY

let jsonArray = '["HTML", "CSS", "javascript"]';

let skills = JSON.parse(jsonArray);

for(let i =0; i< skills.length; i++){
    console.log(skills[i])
}







// // o/p: name rama
// age: 25
