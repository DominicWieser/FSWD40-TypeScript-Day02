
function Output(category){
 VehicleData.map(function(o){
                  if(o.Category==category)
                   {$('#output').html(`<div class="row space">
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
			</div>
		</div>
                   `);}	
 });

}