var obt = prompt("Total Marks obt.")
var frm = prompt("Mark obt. From")
var tot = obt/frm*100

alert(tot + "%")


var b = 90;
var c = 80;
var d = 70;
var e = 60;
var f = 50;
var g = 50;

if(tot>= b){
    alert("A*")
}
else if(tot>= c){
    alert("A")
}
else if(tot>= d){
    alert("B")
}
else if(tot>= e){
   alert("C")
}
else if(tot>= f){
    alert("D")
}
else if(g>tot){
    alert("u")
}
else{
    alert("eror")
}

if (weight > 300 && time < 6) {
 alert("Come to our tryout!");
 }
 else {
 alert("Come to our cookout!");
 }
 if (weight > 300 && time < 6 && age > 17 && gender === "male") {
 alert("Come to our tryout!");
 }
 else {
alert("Come to our cookout!");
 }
if (SAT > avg || GPA > 2.5 || sport === "football") {
 alert("Welcome to Bubba State!");
  }
 else {
 alert("Have you looked into appliance repair?");
  }

  if ((x === y || a === b) && c === d) {
  g = h;
 }
  else {
  e = f;
  }

    
 if (c === d) {
 if (x === y) {
 g = h;
 }
 else if (a === b) {
 g = h;
 }
 else {
 e = f;
 }
 }
 else {
 e = f;
 }
 
 var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);
var mixedArray = [1, "Bob", "Now is", true];
var pets = [];
 pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[6] = "snake";
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

pets.shift();
pets.unshift("fish", "ferret");
pets.splice(2, 2, "pig", "duck", "emu");
pets.splice(2, 0, "pig", "duck", "emu");
