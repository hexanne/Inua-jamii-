function apply() {
var i = document.getElementById("amnt").value;
if(i<10000 || i>250000){
 alert("Minimum amount is 10,000 and the maximum limit is 250000.");
 return false;
} else if(i > 10000 || i < 250000) {
 alert("Loan Amount verified.");
 return true;
 }}
 var a = document.getElementById("jj")value;
 if (typeof(Storage) !== "firstname") {
 // Store
 localStorage.setItem("firstname", a);
 // Retrieve
 document.getElementById("result").innerHTML = localStorage.getItem("firstname");
 } else {
 document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
 
};

function check() {
var a = document.getElementById("m").value;
switch (a) {
  case "10000":
    a = "237";
    break;
  case "15000":
    a = "287";
    break;
  case "":
    a = "337";
    break;
  case "":
    a = "487";
    break;
  case "537":
    a = "Thursa";
    break;
  case "587":
    a = "Fria";
    break;
  case  "637":
    a = "Satura";
    break;
    case "10000":
    a = "Suna";
    break;
    case "":
    a = "Mona";
    break;
    case "":
    a = "Tuesa";
    break;
    case "":
    a = "Wednesa";
    break;
    case "":
    a = "Thursa";
    break;
    case "":
    a = "Fria";
    break;
    case  "":
    a = "Satura";
    break;
    case "10000":
    a = "Suna";
    break;
    case "":
    a = "Mona";
    break;
    case "":
    a = "Tuesa";
    break;
    case "":
    a = "Wednesa";
    break;
    case "":
    a = "Thursa";
    break;
    case "":
    a = "Fria";
    break;
    case  "":
    a = "Satura";
    break;
}
document.getElementById("not").innerHTML =  a;
}