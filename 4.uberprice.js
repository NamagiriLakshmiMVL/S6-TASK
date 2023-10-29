class fare{
    constructor(distance,time){
        this.distance = distance
        this.time = time
        console.log()
        console.log(`Given Kilometer: ${this.distance}km , Waiting Charge: ${this.time}min `)
        console.log("Total Price:",5 + (8*(this.distance-1))+(2*time))
    }
}
console.log("UBER PRICE")
console.log("First Kilometer: ₹5")
console.log("Subsequent Distance: ₹8 per Kilometer")
console.log("Waiting Charge: ₹2 per min")

const pricedetails = new fare(25,5)