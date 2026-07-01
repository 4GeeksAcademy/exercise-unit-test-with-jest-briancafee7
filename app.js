console.log("Hello World")

const sum = (a,b)=>{
    return a + b
}

console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen =(valor)=>{
    let cambioAEuro = valor /oneEuroIs.USD
    return Number((cambioAEuro * oneEuroIs.JPY).toFixed(2))

}

const fromYenToPound =(valor)=>{
    let cambioAEuro = valor /oneEuroIs.JPY
    return Number((cambioAEuro * oneEuroIs.GBP).toFixed(2))
    
}

function fromEuroToDollar (valor){
    return valor*oneEuroIs.USD
}

console.log(fromDollarToYen(1))
console.log(fromYenToPound(1))
module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}