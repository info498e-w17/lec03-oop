"use strict";
var Car = (function () {
    function Car(color, thePrice) {
        if (thePrice === void 0) { thePrice = 10000; }
        this.color = color;
        this.features = ["transmission", "power windows", "gps", "leather", "seats"];
        // this.color = theColor;
        this.price = thePrice;
    }
    Car.prototype.drive = function () {
        console.log("The " + this.color + " car drives.");
        //        console.log("The "+this.color+" car drives.");
    };
    Car.prototype.listFeatures = function () {
        var _this = this;
        this.features.forEach(function (feature) {
            console.log("Includes: " + feature + " at " + _this.price);
        });
    };
    return Car;
}());
var redCar = new Car("red", 12000);
var blueCar = new Car("blue");
redCar.drive();
redCar.listFeatures();
blueCar.drive();
var vehicle = new Car(); //new MotorCycle(); //new Boat();
vehicle.drive();
