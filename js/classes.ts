class Vehicles{
 VehicleCategory="";
 VehicleMileage="";
 VehicleCapacity="";
 VehiclePower="";
 VehicleFuel="";
 VehicleConsumption="";
 VehicleYear="";
 VehiclePrice="";

 constructor(category,mileage,capacity,power,fuel,consumption,year,price){
  this.VehicleCategory=category;
  this.VehicleMileage=mileage;
  this.VehicleCapacity=capacity;
  this.VehiclePower=power;
  this.VehicleFuel=fuel;
  this.VehicleConsumption=consumption;
  this.VehicleYear=year;
  this.VehiclePrice=price;
 }
}

class Motor extends Vehicles{
 seats;

 constructor(category,mileage,capacity,power,fuel,consumption,year,price){
 super(category,mileage,capacity,power,fuel,consumption,year,price);
 this.seats=2;
 }
}

class Truck extends Vehicles{
 seats;

 constructor(category,mileage,capacity,power,fuel,consumption,year,price){
 super(category,mileage,capacity,power,fuel,consumption,year,price);
 this.seats=2;
 }
}
