function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("n");    
}

// sayMyName()

// function addTwoNumbers(a, b){
//     console.log(a + b);
// }
function addTwoNumbers(a, b){
    // let result = a + b
    // return result

    return a + b
}

const result = addTwoNumbers(3, 5)

// console.log(`Result ${result}`);

function loginUserMessage(username = "Mayur"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shravan"))
// console.log(loginUserMessage("Shravan"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000))

const user = {
    username: "shravan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Mayur",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000, 1000,3000]));
