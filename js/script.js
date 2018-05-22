
var Elements=[];
var ElementsIndex=0;

function Output(category){
 $('#output').html(``);	
 VehicleData.map(function(o){
                  if(o.Category==category)
                   {var element=new Vehicles(o.Category,o.Mileage,o.Capacity,o.Power,o.Fuel,o.Consumption,o.Year,o.Price);
                    var old=$('#output').html();
                    Elements.push(element);
                     
                   	$('#output').html(old+`<div class="row space">
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<a href="#">
					<img src="${o.Image}" alt="car" class="img-responsive center-block">
					
				</a>
			</div>

			<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
				<table class="table">
				  <tr><td>"Mileage"</td><td>${o.Mileage}</td></tr>
                 <tr><td>"Capacity"</td><td>${o.Capacity}</td></tr>
                 <tr><td>"Power"</td><td>${o.Power}</td></tr>
                 <tr><td>"Fuel"</td><td>${o.Fuel}</td></tr>
                 <tr><td>Consumption</td><td>${o.Consumption}</td></tr>
                 <tr><td>"Year"</td><td>${o.Year}</td>
                 <tr><td>Price</td><td>${o.Price}</td>
                </table> 
                <button class="btn btn-danger" onclick="Elements[${ElementsIndex}].Contact()">Contact</button>
			</div>
		</div>
                   `);
                  ++ElementsIndex; 
                 }	
 });

}