
interface Drivable {
    drive():void;
}

class Car {

    //attributes
    //private color:string;
    private price:number;
    private features:string[] = ["transmission","power windows","gps","leather","seats"];

    constructor(private color:string, thePrice:number = 10000) {
        // this.color = theColor;
        this.price = thePrice;
    }

    drive():void {
        console.log(`The ${this.color} car drives.`);
//        console.log("The "+this.color+" car drives.");
    }

    private listFeatures():void {
        this.features.forEach((feature) => {
            console.log("Includes: "+feature+" at "+this.price);
        })
    }

}


let redCar:Car = new Car("red",12000);
let blueCar:Car = new Car("blue");

redCar.drive();
redCar.listFeatures();
blueCar.drive();

let vehicle:Drivable = new Car(); //new MotorCycle(); //new Boat();
vehicle.drive();