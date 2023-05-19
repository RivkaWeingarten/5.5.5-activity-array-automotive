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
        passengerCount(passenger, maxPassengers) {
            if (passenger > maxPassengers  ) {
                console.log('sorry, you dont fit into this car')
                
                
            }
            else {
                console.log('you fit! come on in!')
            }   // tellMaxPassengers(make,model,maxPassengers){
        //     console.log(this.make + " " +this.model +'  can only hold' + this.maxPassengers)
        // }
    }


}

let sedan = new Car('Toyota', 'Camri', '2020', 'green', 40000)
sedan.start()
sedan.maintainService()
sedan.passengerCount(5,4)
