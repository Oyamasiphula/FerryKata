function Cars(color, passenger_No){
 // console.log('');
  this.color = color;
  // adding * 2 the value of passengers
  this.passenger_No = passenger_No += passenger_No;
};

function Ferry(color, passenger_No){
 // console.log('');
  this.color = color;
  this.passenger_No = passenger_No;
};


var BMW = new Cars("Green",5);
var Mazda = new Cars("White",8);
var VW = new Cars("Blue",4);
var Ford = new Cars("Red",6);
var Nissan = new Cars("Green",10);