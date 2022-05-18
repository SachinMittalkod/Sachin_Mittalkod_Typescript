// const person:{name:String; age: number; hobbies: String[]; }={
//     name:"sachin",
//     age:32,
//     hobbies:['sachin' , 'Mittalkod', "hey dude"]
// };
// console.log(person.age, " "+ person.name);
const person:{name:string; age:number; role:[number, string] } ={
    name:"sachin",
    age:32,
    role:[2, "author"]      
}
// for(const hobby of person.hobbies){
//     console.log(hobby);
// }
person.role.push("sachin");

console.log(person.role);
// let no: number[];
//  no=[2,4,8,23];
// console.log(no);





