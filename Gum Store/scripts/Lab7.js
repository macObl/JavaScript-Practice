

var module=(function(){
  document.getElementById("extra").addEventListener("click",function(){
    addPrice(0)
  });

  document.getElementById("trident").addEventListener("click",function(){
    addPrice(1);
  });

  document.getElementById("doubleMint").addEventListener("click",function(){
    addPrice(2);
  });

  document.getElementById("bubble").addEventListener("click",function(){
    addPrice(3);
  });

  var brands = [{brand : "extra",
                    price : 1.00 },
                    {brand : "trident",
                    price : 2.00},
                    {brand : "doubleMint",
                    price : 1.10},
                    {brand : "bubble",
                    price : 0.50}
                  ];
              for (i = 0; i < brands.length; i++)
              break;

  var total = [0];
  var row =document.getElementById("total");
  var secondCell = row.insertCell(1);

  var total2 = [0];
  var row2 = document.getElementById("items");
  var firstCell= row2.insertCell(1)

    function addPrice(i){
      if(brands[i].brand == "extra"){
        total.push(brands[i].price)
        total2.push(1)
        function sum2(a2,b2){
           return a2 + b2;
        }
        var answer2= total2.reduce(sum2);
        function sum(a,b){
           return a + b;
        }
        var answer= total.reduce(sum);
        firstCell.innerHTML=answer2;
        secondCell.innerHTML="$" + answer;
        console.log(brands[i].price)
        return;
      }
      else if(brands[i].brand == "trident"){
        total.push(brands[i].price)
        total2.push(1);
        function sum2(a2,b2){
           return a2 + b2;
        }
        var answer2= total2.reduce(sum2);
        function sum(a,b){
          return a + b;
        }
        var answer= total.reduce(sum);
        firstCell.innerHTML=answer2;
        secondCell.innerHTML="$" + answer;
        console.log( brands[i].price);
        return;
      }
      else if (brands[i].brand == "doubleMint") {
        total.push(brands[i].price)
        total2.push(1);
        function sum2(a2,b2){
           return a2 + b2;
        }
        var answer2= total2.reduce(sum2);
        function sum(a,b){
          return a + b;
        }
        var answer= total.reduce(sum);
        firstCell.innerHTML=answer2;
        secondCell.innerHTML="$" + answer;
        console.log( brands[i].price);
        return;
      }
      else if (brands[i].brand == "bubble") {
        total.push(brands[i].price)
        total2.push(1);
        function sum2(a2,b2){
           return a2 + b2;
        }
        var answer2= total2.reduce(sum2);
        function sum(a,b){
          return a + b;
        }
        var answer= total.reduce(sum);
        firstCell.innerHTML=answer2;
        secondCell.innerHTML="$" + answer;
        console.log( brands[i].price);
        return;
      }
    else{
        console.log("invalid")
      }
    };

    secondCell.innerHTML= "$" +total;
    firstCell.innerHTML=total2;


    function clear(){
      document.getElementById("clear").addEventListener("click", function(){
        location.reload();
      });
    };


  return{
    clear:clear(),
    addPrice:addPrice
  };


}());

console.log(module);





// document.getElementById("extra").addEventListener("click",function(){
//   addPrice(0)
// });
//
// document.getElementById("trident").addEventListener("click",function(){
//   addPrice(1);
// });
//
// document.getElementById("doubleMint").addEventListener("click",function(){
//   addPrice(2);
// });
//
// document.getElementById("bubble").addEventListener("click",function(){
//   addPrice(3);
// });
//
// var brands = [{brand : "extra",
//                   price : 1.00 },
//                   {brand : "trident",
//                   price : 2.00},
//                   {brand : "doubleMint",
//                   price : 1.10},
//                   {brand : "bubble",
//                   price : 0.50}
//                 ];
//             for (i = 0; i < brands.length; i++)
//             break;
//
// var total = [0];
// var row =document.getElementById("total");
// var x = row.insertCell(1);
//
// var total2 = [0];
// var row2 = document.getElementById("items");
// var x2 = row2.insertCell(1);
//
// function addPrice(i){
//   if(brands[i].brand == "extra"){
//     total.push(brands[i].price)
//     total2.push(1)
//     function sum2(a2,b2){
//        return a2 + b2;
//     }
//     var answer2= total2.reduce(sum2);
//     function sum(a,b){
//        return a + b;
//     }
//     var answer= total.reduce(sum);
//     x2.innerHTML=answer2;
//     x.innerHTML="$" + answer;
//     console.log(brands[i].price)
//     return;
//   }
//   else if(brands[i].brand == "trident"){
//     total.push(brands[i].price)
//     total2.push(1);
//     function sum2(a2,b2){
//        return a2 + b2;
//     }
//     var answer2= total2.reduce(sum2);
//     function sum(a,b){
//       return a + b;
//     }
//     var answer= total.reduce(sum);
//     x2.innerHTML=answer2;
//     x.innerHTML="$" + answer;
//     console.log( brands[i].price);
//     return;
//   }
//   else if (brands[i].brand == "doubleMint") {
//     total.push(brands[i].price)
//     total2.push(1);
//     function sum2(a2,b2){
//        return a2 + b2;
//     }
//     var answer2= total2.reduce(sum2);
//     function sum(a,b){
//       return a + b;
//     }
//     var answer= total.reduce(sum);
//     x2.innerHTML=answer2;
//     x.innerHTML="$" + answer;
//     console.log( brands[i].price);
//     return;
//   }
//   else if (brands[i].brand == "bubble") {
//     total.push(brands[i].price)
//     total2.push(1);
//     function sum2(a2,b2){
//        return a2 + b2;
//     }
//     var answer2= total2.reduce(sum2);
//     function sum(a,b){
//       return a + b;
//     }
//     var answer= total.reduce(sum);
//     x2.innerHTML=answer2;
//     x.innerHTML="$" + answer;
//     console.log( brands[i].price);
//     return;
//   }
// else{
//     console.log("invalid")
//   }
// };
//
//
// x.innerHTML= "$" +total;
// x2.innerHTML=total2;
//
//
// function reset(){
//   location.reload();
// };
