var ravenCatch = require('./ravenCatch')
var userMessages = require('./config/userMessages');
var localStorage = require('./localStorage');
var API = require('./API');
var deviceData = require('./deviceData');
var pageLayout = require('./pageLayout');
var keys = require('./config/appID');
var events = require('./events');
        
var myVariables = {
	
	variables	: {input_1,select,input_2,input_4,input_5,result},
             
	document.getElementById("button_submit").addEventListener("click", submit);
	document.getElementById("button_reset").addEventListener("click", reset);	
    
	submit: function(){
		input_1=document.getElementById("input_1").value;
		select=document.getElementById("select").value;
		input_2=document.getElementById("input_2").value;
		document.getElementById('input_3').value=input_1+select+input_2;
		},

	reset: function(){
        document.getElementById("input_1").value = "";
        document.getElementById("select").value = "";
        document.getElementById("input_2").value = "";
        document.getElementById("input_3").value = "";
        },

	calculate: function(){
        if (select == "+"){
        result = + input_4 + + input_5;
                document.getElementById('input_6').value = result;
        }
        else if (select == "-"){
        result = + input_4 - + input_5;
                document.getElementById('input_6').value = result;
        }
        else if (select == "*"){
        result = + input_4 * + input_5;
                document.getElementById('input_6').value = result;
        }
        else if (select == "/"){
        result = + input_4 / + input_5;
                document.getElementById('input_6').value = result;
        }
        else
        {
        alert("Please choose operand");
        }
        },

        reset_calculate: function() {
        document.getElementById("input_4").value = "";
                document.getElementById("select_calculate").value = "";
                document.getElementById("input_5").value = "";
                document.getElementById("input_6").value = "";
        },
        }
module.exports = myVariables;