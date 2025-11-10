const Marvel = ["thor", "IronMan", "spiderman"]
const dc = ["SuperMan", "Batman", "flash"]

// Marvel.push(dc)

// console.log(Marvel);
// console.log(Marvel[3][1]);


// const allHeros = Marvel.concat(dc)
// console.log(allHeros);


const all_new_heros = [...Marvel, ...dc]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("shravan"))
console.log(Array.from("shravan"))
console.log(Array.from({name: "shravan"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
