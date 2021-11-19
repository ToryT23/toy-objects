const toys = [
{
    id: 1,
    name: "Xbox",
    maker: "Microsoft",
    instock: true,
    price: 300,
    weight: 5.5
},
{
    id: 2,
    name: "Playstation",
    maker: "Sony",
    instock: true,
    price: 450,
    weight: 4.8
},
{ 
    id: 3,
    name: "Monopoly",
    maker: "Hasbro",
    instock: true,
    price: 40,
    weight:3.5
}
]
const Connect_4 = {
    name: "Connect 4",
    maker: "Hasbro",
    instock: false,
    price:  10,
    weight: 2.7
}
const Nintendo_Wii = {
    name: "Wii",
    maker:"Nintendo",
    instock: false,
    price: 285,
    weight: 3.2
}
const addToyToInventory = (toyObject) => {

    const lastIndex = toys.length -1
    const currentLastToy= toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
     toyObject.id = idForNewToy
     toys.push(toyObject)
    }
addToyToInventory(Connect_4)
addToyToInventory(Nintendo_Wii)
for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
console.log(toys)
}




//
////toys.push(//Connect_4)
////toys.push(Ni//ntendo_Wii)
////const toyToF//ind = 2
////
////for (const toy of toys) {
////    if(toy.id === toyToFind) {
////    toy.price = toy.price * 0.05 + toy.price
////console.log(`The toy name is ${toy.name} and the price is $${toy.price}`)
//}
//} 
