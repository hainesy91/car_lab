function Car(make, model, year, color, passengers){
  this.year = year;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
}


Car.prototype.sale = function(newOwner){
  this.newOwner = 'Charlie';
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(){
  this.state = 'on';
};

Car.prototype.off = function(){
  this.state = 'off';
};

Car.prototype.pickUp = function(passengers){
  if(this.state === 'on'){
    this.passengers.push(passengers);
  };

Car.prototype.dropOff = function(passengers){
  if(this.state === "on"){
  this.passengers = "";
  }
};

};


module.exports=Car;