function Car(make, model, year, color, state, previousOwners, currentOwner, passengers) {
  this.year = year;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
}


Car.prototype.sale = function(newOwner){
  this.newOwner = 'Charlie';
  this.previousOwners = ["Manufacturer"];
  this.currentOwner = "Charlie";
};

Car.prototype.paint = function(newColor){
  this.color = "Blue";

};


module.exports=Car;