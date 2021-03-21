//validate module



function validateProfile(){
  var valid = true
  //All Input
  var firstName = document.forms["profile"]["firstName"].value;
  var lastName = document.forms["profile"]["lastName"].value;
  var address = document.forms["profile"]["firstAddress"].value;
  var city = document.forms["profile"]["city1"].value;
  var province = document.forms["profile"]["province1"].value;
  var country = document.forms["profile"]["country1"].value;

  //ALL Errors
  var firstNameError =document.getElementById("fnameError");
  var lastNameError =document.getElementById("lnameError");
  var addressError =document.getElementById("addressError");
  var cityError =document.getElementById("cityError");
  var provinceError =document.getElementById("provinceError");
  var countryError =document.getElementById("countryError");

  var valid = true

  //Validate function
  if (firstName == ""){
    alert("Please provide a First name")
    firstNameError.innerHTML="*First name required*"
    return false;
  }
  else if (lastName == "") {
    alert("Please provide a Last name")
    lastNameError.innerHTML="*Last name required*"
    return false;
  }
  else if (address == "") {
    alert("Please provide a Address")
    addressError.innerHTML="*Address required*"
    return false;
  }
  else if (city== "") {
    alert("Please provide a City")
    cityError.innerHTML="*City required*"
    return false;
  }
  else if (province == "") {
    alert("Please provide a Province")
    provinceError.innerHTML="*Province required*"
    return false;
  }
  else if (country == "") {
    alert("Please provide a Country")
    countryError.innerHTML="*Counrty required*"
    return false;
  }
  if(valid){
      alert("Thank you");
  }
};

function clear(){
  document.getElementById("resetBtn").addEventListener("click", function(){
    location.reload();
  });
};
clear()



// var module = (function(){
//
//   var valid = true
//
//   //All Input
//   var firstName = document.forms["profile"]["firstName"].value;
//   var lastName = document.forms["profile"]["lastName"].value;
//   var address = document.forms["profile"]["firstAddress"].value;
//   var city = document.forms["profile"]["city1"].value;
//   var province = document.forms["profile"]["province1"].value;
//   var country = document.forms["profile"]["country1"].value;
//
//   //ALL Errors
//   var firstNameError =document.getElementById("fnameError");
//   var lastNameError =document.getElementById("lnameError");
//   var addressError =document.getElementById("addressError");
//   var cityError =document.getElementById("cityError");
//   var provinceError =document.getElementById("provinceError");
//   var countryError =document.getElementById("countryError");
//
//   var valid = true
//
//   var validateProfile = function(){
//     //Validate function
//     if (firstName == ""){
//       alert("Please provide a First name")
//       firstNameError.innerHTML="*First name required*"
//       return false;
//     }
//     else if (lastName == "") {
//       alert("Please provide a Last name")
//       lastNameError.innerHTML="*Last name required*"
//       return false;
//     }
//     else if (address == "") {
//       alert("Please provide a Address")
//       addressError.innerHTML="*Address required*"
//       return false;
//     }
//     else if (city== "") {
//       alert("Please provide a City")
//       cityError.innerHTML="*City required*"
//       return false;
//     }
//     else if (province == "") {
//       alert("Please provide a Province")
//       provinceError.innerHTML="*Province required*"
//       return false;
//     }
//     else if (country == "") {
//       alert("Please provide a Country")
//       countryError.innerHTML="*Counrty required*"
//       return false;
//     }
//     if(valid){
//         alert("Thank you");
//     }
//   };
//
//   var reset = function(){
//     document.getElementById("resetBtn").addEventListener("click", function(){
//       location.reload();
//     });
//   };
//
//   return {
//     validateProfile:validateProfile(),
//     reset:reset()
//
//   }
//
// })();
