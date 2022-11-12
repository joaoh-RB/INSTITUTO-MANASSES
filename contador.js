$(document).ready(function(){
  numero1()    
  numero2()
  numero3() 

});

function numero1() {
var numero = document.getElementById('numero1');
var min = 1;
var max = 19570;


for (var i = min; i <= max; i++) {
  setTimeout(function(nr) {
    numero.innerHTML = nr;
  }, i * 1 / max, i);
}
};

$("#voltarValor").click(function() {
$("#numero").text("1");
});

function numero2() {
  var numero = document.getElementById('numero2');
  var min = 1;
  var max = 12;


  for (var i = min; i <= max; i++) {
    setTimeout(function(nr) {
      numero.innerHTML = nr;
    }, i * 1 / max, i);
  }
};

$("#voltarValor").click(function() {
  $("#numero").text("1");
});


function numero3() {
  var numero = document.getElementById('numero3');
  var min = 1;
  var max = 15;


  for (var i = min; i <= max; i++) {
    setTimeout(function(nr) {
      numero.innerHTML = nr;
    }, i * 1 / max, i);
  }
};

$("#voltarValor").click(function() {
  $("#numero").text("1");
});


