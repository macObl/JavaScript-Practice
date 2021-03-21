//form element events

// First Nanme Error Removal
document.getElementById("firstName").addEventListener("blur", function(){
  if(this.value !== ""){
      fnameError.innerHTML = "";
  }
});
// Last Name Error Removal
document.getElementById("lastName").addEventListener("blur", function(){
  if(this.value !== ""){
      lnameError.innerHTML = "";
  }
});
// First Address Error Removal
document.getElementById("firstAddress").addEventListener("blur", function(){
  if(this.value !== ""){
      addressError.innerHTML = "";
  }
});
// City Error Removal
document.getElementById("city1").addEventListener("blur", function(){
  if(this.value !== ""){
      cityError.innerHTML = "";
  }
});
// Province Error Removal
document.getElementById("province1").addEventListener("click", function(){
  if(profile.province1.options.selectedIndex!== ""){
    provinceError.innerHTML= "";
  }
});
// Country Error Removal
document.getElementById("country1").addEventListener("click", function(){
  if(profile.country1.options.selectedIndex!== ""){
    countryError.innerHTML= "";
  }
});
