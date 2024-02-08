const marval_heroes = ["IronMan", "Hulk", "Thor"]
const dc_heroes = ["Suparman", "Flash", "batman"]

// marval_heroes.push(dc_heroes)

// console.log(marval_heroes)
// console.log(marval_heroes[3][1])


// const heroes = marval_heroes.concat(dc_heroes)
// console.log(heroes)


//spread = bikhar jana
const all_new_heroes = [...marval_heroes, ...dc_heroes]       //... = spread 
// console.log(all_new_heroes);

// const anotherArray = [1,2,3,[4,5,6],[7,8,9]]            //flat sare number ko spread krdega or eak hi array mai sab laa dega
// const real_anothera_array = anotherArray.flat(Infinity)
// console.log(real_anothera_array)


console.log(Array.isArray("Faizan"))      // ye true or false mai btadega array hai ya nhi hai = isArray
console.log(Array.from("Faizan"));        //string to array(from)
console.log(Array.from({name:"Faizan"}));   //YE DIRECTLY COVERT NHI KAR PA RHA TABHI YE OUTPUT MAI EMPTY ARRAY DE RHA([]) (INTERRESTING)


// second method to convert Array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))