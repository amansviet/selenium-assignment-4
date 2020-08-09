originalValue = '';

function changePara1()
{
	if (originalValue == '') {
		originalValue = document.getElementById("para1").innerHTML;
	}
	document.getElementById("para1").innerHTML="New Text";

}

function changePara2()
{
	if (originalValue == '') {
		originalValue = document.getElementById("para1").innerHTML;
	}
	document.getElementById("para1").innerHTML= originalValue;
}

function insertCurrentDate()
{
	document.getElementById("datePara").innerHTML=Date();
}

function onHover(){
	document.getElementById("hoverpara").style.color = "#a4746d";
	document.getElementById("hoverpara").style.fontSize = "4em";
	document.getElementById("hoverpara").style.background = "#091718";
	document.getElementById("hoverpara").innerHTML = "Mouse has been moved to this element";
}

function onMouseAway(){
	document.getElementById("hoverpara").style.color = "#6b84a5";
	document.getElementById("hoverpara").style.background = "#413e46";
	document.getElementById("hoverpara").innerHTML = "Hover over this text";
}
