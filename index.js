//printing data with help for rest
var students ={
    name: "Ajay",
    age:"28",
    hobbies:["Cricket","Singing"]
}
const {age,...rest} = students;

console.log(rest);

//spread
var newStudent={
    ...students,
  age: "23"  //overiding the value of age
}
console.log(newStudent);
