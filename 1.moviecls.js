class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title
        this.studio =studio
        this.rating = rating
        console.log(this)
    }

    getPG(arr){
      let num = []
        for (let val of arr)
        {
            this.title = val[0]
            this.rating = val[2]
                 if (this.rating == "PG")
                 {
                      num.push(this.title)
                }
              }
         console.log(num)
  }
}
console.log("1. a)Created Constructor and sets the class properties to values")
let film = new Movie("Leo","7ScreenStudios",10)
let film2 = new Movie("Darbar","Lyca",8)
console.log()
console.log("1. b)Default rating is Provided with PG")
let film1 = new Movie("Kanaa","SK Productions")
console.log()
console.log("1. c)Displaying Movie name with the rating PG")
let val = [["Leo","7ScreenStudios","PG"],["Kaithi","Dream Warrior Pictures","PG"],["Darbar","Lyca",8],["Pathu Thala","Studio Green",8]]
film.getPG(val)
console.log()
console.log("1. d)Created class with the assigned properties with the values")
let film3 = new Movie("Casino Royale","Eon Production","PG-13")