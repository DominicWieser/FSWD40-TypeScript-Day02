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

 Category(){return this.VehicleCategory;}
 Mileage(){return this.VehicleMileage;}
 Data(){
  return { "Category": this.VehicleCategory,
           "Mileage": this.VehicleMileage,
           "Capacity": this.VehicleCapacity,
           "Power": this.VehiclePower,
           "Fuel": this.VehicleFuel,
           "Consumption": this.VehicleConsumption,
           "Year": this.VehicleYear,
           "Price": this.VehiclePrice
          };
       }
  Contact(){
   alert('you pushed the button for '+VehicleCategory+","+VehiclePrice);	
  }     
}

class Motor extends Vehicles{
 seats;

 constructor(category,mileage,capacity,power,fuel,consumption,year,price){
 super(category,mileage,capacity,power,fuel,consumption,year,price);
 this.seats=2;
 }
 Data(){return { "Category": this.VehicleCategory,
                 "Mileage": this.VehicleMileage,
                 "Capacity": this.VehicleCapacity,
                 "Power": this.VehiclePower,
                 "Fuel": this.VehicleFuel,
                 "Consumption": this.VehicleConsumption,
                 "Year": this.VehicleYear,
                 "Price": this.VehiclePrice,
                 "Seats": this.seats
               };
       }
}

class Truck extends Vehicles{
 seats;

 constructor(category,mileage,capacity,power,fuel,consumption,year,price){
 super(category,mileage,capacity,power,fuel,consumption,year,price);
 this.seats=2;
 }
 Data(){return {"Category": this.VehicleCategory,
                 "Mileage": this.VehicleMileage,
                 "Capacity": this.VehicleCapacity,
                 "Power": this.VehiclePower,
                 "Fuel": this.VehicleFuel,
                 "Consumption": this.VehicleConsumption,
                 "Year": this.VehicleYear,
                 "Price": this.VehiclePrice,
                 "Seats": this.seats
               };
       }
}

class Van extends Vehicles{
 seats;

 constructor(category,mileage,capacity,power,fuel,consumption,year,price){
 super(category,mileage,capacity,power,fuel,consumption,year,price);
 this.seats=8;
 }
 Data(){return {"Category": this.VehicleCategory,
                 "Mileage": this.VehicleMileage,
                 "Capacity": this.VehicleCapacity,
                 "Power": this.VehiclePower,
                 "Fuel": this.VehicleFuel,
                 "Consumption": this.VehicleConsumption,
                 "Year": this.VehicleYear,
                 "Price": this.VehiclePrice,
                 "Seats": this.seats
               };
       }
}

