var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(category, mileage, capacity, power, fuel, consumption, year, price) {
        this.VehicleCategory = "";
        this.VehicleMileage = "";
        this.VehicleCapacity = "";
        this.VehiclePower = "";
        this.VehicleFuel = "";
        this.VehicleConsumption = "";
        this.VehicleYear = "";
        this.VehiclePrice = "";
        this.VehicleCategory = category;
        this.VehicleMileage = mileage;
        this.VehicleCapacity = capacity;
        this.VehiclePower = power;
        this.VehicleFuel = fuel;
        this.VehicleConsumption = consumption;
        this.VehicleYear = year;
        this.VehiclePrice = price;
    }
    Vehicles.prototype.Category = function () { return this.VehicleCategory; };
    Vehicles.prototype.Mileage = function () { return this.VehicleMileage; };
    Vehicles.prototype.Data = function () {
        return { "Category": this.VehicleCategory,
            "Mileage": this.VehicleMileage,
            "Capacity": this.VehicleCapacity,
            "Power": this.VehiclePower,
            "Fuel": this.VehicleFuel,
            "Consumption": this.VehicleConsumption,
            "Year": this.VehicleYear,
            "Price": this.VehiclePrice
        };
    };
    Vehicles.prototype.Contact = function () {
        alert('you pushed the button for ' + this.VehicleCategory + "," + this.VehiclePrice);
    };
    return Vehicles;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(category, mileage, capacity, power, fuel, consumption, year, price) {
        var _this = _super.call(this, category, mileage, capacity, power, fuel, consumption, year, price) || this;
        _this.seats = 2;
        return _this;
    }
    Motor.prototype.Data = function () {
        return { "Category": this.VehicleCategory,
            "Mileage": this.VehicleMileage,
            "Capacity": this.VehicleCapacity,
            "Power": this.VehiclePower,
            "Fuel": this.VehicleFuel,
            "Consumption": this.VehicleConsumption,
            "Year": this.VehicleYear,
            "Price": this.VehiclePrice,
            "Seats": this.seats
        };
    };
    return Motor;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(category, mileage, capacity, power, fuel, consumption, year, price) {
        var _this = _super.call(this, category, mileage, capacity, power, fuel, consumption, year, price) || this;
        _this.seats = 2;
        return _this;
    }
    Truck.prototype.Data = function () {
        return { "Category": this.VehicleCategory,
            "Mileage": this.VehicleMileage,
            "Capacity": this.VehicleCapacity,
            "Power": this.VehiclePower,
            "Fuel": this.VehicleFuel,
            "Consumption": this.VehicleConsumption,
            "Year": this.VehicleYear,
            "Price": this.VehiclePrice,
            "Seats": this.seats
        };
    };
    return Truck;
}(Vehicles));
var Van = /** @class */ (function (_super) {
    __extends(Van, _super);
    function Van(category, mileage, capacity, power, fuel, consumption, year, price) {
        var _this = _super.call(this, category, mileage, capacity, power, fuel, consumption, year, price) || this;
        _this.seats = 8;
        return _this;
    }
    Van.prototype.Data = function () {
        return { "Category": this.VehicleCategory,
            "Mileage": this.VehicleMileage,
            "Capacity": this.VehicleCapacity,
            "Power": this.VehiclePower,
            "Fuel": this.VehicleFuel,
            "Consumption": this.VehicleConsumption,
            "Year": this.VehicleYear,
            "Price": this.VehiclePrice,
            "Seats": this.seats
        };
    };
    return Van;
}(Vehicles));
