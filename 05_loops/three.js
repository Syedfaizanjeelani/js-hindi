// for of 
let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
    
}

const string = "Hello World !"
for (const str of string) {
    // console.log(`Each char ${str}`)
    
}


//MAPS
// MAP HAMESHA UNIQUE VALUE KE LIYE JANE JAATE HAI

const map = new Map()
map.set("In", "India")
map.set("Usa", "United State of America")
map.set("Gr", "Germany")
// map.set("In", "India")           (dublicate value print nhi krega map )

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ":", value)
    
}