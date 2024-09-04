class car {
  constructor(a, b, c) {
    //properties
    this.name = a;
    this.color = b;
    this.topSpeed = c;
    this.currentSpeed = 0; //new property
  }
 //getters and setters
  getCurrentSpeed(){
    return this.currentSpeed
  }

  zeroToSixty(){
    setTimeout(() => {
        console.log('that was fast')
        this.currentSpeed = 60;
        console.log(this.currentSpeed)
    }, 3000);
  }
//set method
  drive() {
    //Don't include keyword function()
    // console.log("just drove 2 miles");
    this.currentSpeed += 10;
    console.log(`driving speed at ${this.currentSpeed} mph`)
  }

  brake() {
    console.log("braking: coming to halt");
    this.currentSpeed -= 10;
    console.log(`driving speed at ${this.currentSpeed} mph`)
  }

  stop(){
    console.log(`${this.currentSpeed}`)
    this.currentSpeed = 0;
  }
}

const ferrari = new car("ferrari", "red", 250);

// console.log(ferrari)
 // console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.topSpeed);
// console.log(ferrari.currentSpeed)
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// console.log(ferrari.currentSpeed)
// ferrari.brake();
// // ferrari.zeroToSixty();
// ferrari.stop();
// console.log(ferrari.currentSpeed)

const porsche = new car("Porsche", "yellow", 300)
    console.log(porsche.name);
    console.log(porsche.color);
    console.log(porsche.topSpeed);
    porsche.zeroToSixty();

[1,2,3,4,5].forEach(i => porsche.drive())

console.log(`current speed: ${porsche.getCurrentSpeed()}`)

