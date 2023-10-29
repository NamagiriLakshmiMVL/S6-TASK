class circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius
        this.color = color
        console.log(this)
    }
    getRadius(){
        console.log("Using getRadius():",this.radius)
    }
    getColor(){
       let a= this.color;
      console.log("Using getColor():",a.toString())
      return a.toString();
    }
    getArea(){
        let sum = 3.14*this.radius*this.radius
        console.log("Area of Circle:",sum.toFixed(2))
    }
    getCircumference()
    {
        let sum = 2*3.14*this.radius
        console.log("Circumference of Circle:",sum.toFixed(2))
    }
    setColor(newcolor){
        console.log("Using setColor():",newcolor)
    }
    setRadius(newRadius){
        console.log("Using setRadius():",newRadius)
    }
    
}
console.log("Default Argument is Passed")
let Circle = new circle()
console.log()
console.log("New Radius value is assigned")
let Circle1 = new circle(2.5)
console.log()
console.log("New Radius and New Color value is assigned") 
let Circle2 = new circle(4,"blue") 
console.log()
Circle.setRadius(15)
Circle2.getColor()
Circle.setColor("Green")
console.log("toString Method:",Circle2.getColor())
Circle1.getArea()
Circle1.getCircumference()




