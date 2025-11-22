// singleton
// Object.create


// object literals

const mySym = Symbol("key1")



const JsUser = {
    name: "Shravan",
    "full name": "Shravan Thombare",
    [mySym]: "mykey1",
    age: 20,
    location: "Shrirampur",
    email: "Shravan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Shravanthombare@gmail.com"
// Object.freeze(JsUser) // It freezes the object so after using this funciton you cannot change the value of the object
JsUser.email = "Shravanthombare@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hellow JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hellow JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
