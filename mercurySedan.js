//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
        this.started = false
    }
    start() {
        if (this.fuel > 0) {
            console.log("engine started...");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;

        }
    }

    maintainService(mileage) {
        if (mileage > 30000) {
            console.log('schedule for service')
            this.scheduleService = true
            return this.scheduleService
        }
        else {
            console.log("no service needed")
        }
    }
}

let sedan = new Car('Toyota', 'Camri', '2020', 'green', 40000)
sedan.start()
sedan.maintainService(40000)
//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
