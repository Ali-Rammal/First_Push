(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function submit() {
  var input_1=document.getElementById("input_1").value;
  var select=document.getElementById("select").value;
  var input_2=document.getElementById("input_2").value;
  document.getElementById('input_3').value=input_1+select+input_2;
}
function reset() {
  document.getElementById("input_1").value="";
  document.getElementById("select").value="";
  document.getElementById("input_2").value="";
  document.getElementById("input_3").value="";
}

function calculate() {
  var input_4=document.getElementById("input_4").value;
  var select=document.getElementById("select_calculate").value;
  var input_5=document.getElementById("input_5").value;
  var result;
  if(select=="+"){
    result=+input_4 + +input_5;
    document.getElementById('input_6').value=result;
  }
  else if(select=="-"){
    result=+input_4 - +input_5;
    document.getElementById('input_6').value=result;
  }
else if(select=="*"){
    result=+input_4 * +input_5;
    document.getElementById('input_6').value=result;
  }
  else if(select=="/"){
    result=+input_4 / +input_5;
    document.getElementById('input_6').value=result;
  }
  else
    {
      alert("Please choose operand");
  }

}

function reset_calculate() {
  document.getElementById("input_4").value="";
  document.getElementById("select_calculate").value="";
  document.getElementById("input_5").value="";
  document.getElementById("input_6").value="";
}

},{}]},{},[1]);
