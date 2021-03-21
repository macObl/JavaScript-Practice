$(document).ready(function( ) {
  // Question 2
  $("h1").text("Lab9");
  // Question 3
  $("#header").html("<h3>Working with jQuery.</h3>");
  //Question 4
  $(":button").each(function(){
    $("input").addClass("btn-background");
  });
  // Question 5
  $("#buttons").addClass("red-border");
  //Question 6
  $("p").each(function(){
    $("p").addClass("blue");
  });
  //Question 7
  $("#first").on("click", function(){
    $("#para1").addClass("green-border");
  });
  //Question 8
  $("#last").on("click", function(){
    $("#para5").addClass("orange-border");
  });
  //Question 9
  $("#prev").on("click", function(){
    $("#para3").prev().addClass("purple-border");
  });
  //Question 10
  $("#next").on("click", function(){
    $("#para2").next().addClass("yellow-border");
  });
  //Question 11
  $("#remove").on("click", function(){
    $("#footer").remove();
  });

});
