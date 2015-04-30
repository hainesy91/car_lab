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

Car.prototype.start = function(start){
  this.state = 'on';
};

Car.prototype.off = function(off){
  this.state = 'off';
};

Car.prototype.pickUp = function(passengers){
  this.passengers = ["john"];
};

module.exports=Car;