document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=0');

// DATA PARSING: ACTUAL HOURS & BOTS

// parses the csv content (currently hard-coded in "data" tag inside index.html) into an array
actualValues = $.csv.toArrays(actualValues);

var i;

for (i = 1; i < actualValues.length; i++) {
	actualValues[i][2] = parseInt(actualValues[i][2]);
	actualValues[i][3] = parseInt(actualValues[i][3]);
}

// rendering the date entry of the data down to the relevant value

for (i = 0; i < actualValues.length; i++) {
	switch (actualValues[i][1].substring(5, 7)) { //the substring contains the two digits of the Month
		case "01":
			actualValues[i][1] = "Jan "+actualValues[i][1].substring(2, 4);
			break;
		case "02":
			actualValues[i][1] = "Feb "+actualValues[i][1].substring(2, 4);
			break;
		case "03":
			actualValues[i][1] = "Mar "+actualValues[i][1].substring(2, 4);
			break;
		case "04":
			actualValues[i][1] = "Apr "+actualValues[i][1].substring(2, 4);
			break;
		case "05":
			actualValues[i][1] = "May "+actualValues[i][1].substring(2, 4);
			break;
		case "06":
			actualValues[i][1] = "Jun "+actualValues[i][1].substring(2, 4);
			break;
		case "07":
			actualValues[i][1] = "Jul "+actualValues[i][1].substring(2, 4);
			break;
		case "08":
			actualValues[i][1] = "Aug "+actualValues[i][1].substring(2, 4);
			break;
		case "09":
			actualValues[i][1] = "Sep "+actualValues[i][1].substring(2, 4);
			break;
		case "10":
			actualValues[i][1] = "Oct "+actualValues[i][1].substring(2, 4);
			break;
		case "11":
			actualValues[i][1] = "Nov "+actualValues[i][1].substring(2, 4);
			break;
		case "12":
			actualValues[i][1] = "Dec "+actualValues[i][1].substring(2, 4);
			break;
	}
}

// Arays to only contain graph data for specific tile (makes it easier to give the data to the corresponding graphs later)
var actualValuesTotal = [[],[],[]];
var actualValuesTrantor = [[],[],[]];
var actualValuesAnacreon = [[],[],[]];
var actualValuesAurora = [[],[],[]];
var actualValuesTerminus = [[],[],[]];
var actualValuesGaia = [[],[],[]];

var targetValuesTotal = [[],[]];
var targetValuesTrantor = [[],[]];
var targetValuesAnacreon = [[],[]];
var targetValuesAurora = [[],[]];
var targetValuesTerminus = [[],[]];
var targetValuesGaia = [[],[]];

// Adds the values "Date" and "Automated hours"
for (i = 0; i < actualValues.length; i++) {
	switch (actualValues[i][0]) {
/*		case "Total":
			actualValuesTotal[0].push(actualValues[i][1]);
			actualValuesTotal[1].push(actualValues[i][2]);
			targetValuesTotal[0].push(actualValues[i][1]);
			targetValuesTotal[1].push(actualValues[i][3]);
			break;*/
		case "Trantor":
			actualValuesTrantor[0].push(actualValues[i][1]);
			actualValuesTrantor[1].push(actualValues[i][2]);
			targetValuesTrantor[0].push(actualValues[i][1]);
			targetValuesTrantor[1].push(actualValues[i][3]);
			break;
		case "Anacreon":
			actualValuesAnacreon[0].push(actualValues[i][1]);
			actualValuesAnacreon[1].push(actualValues[i][2]);
			targetValuesAnacreon[0].push(actualValues[i][1]);
			targetValuesAnacreon[1].push(actualValues[i][3]);
			break;
		case "Aurora":
			actualValuesAurora[0].push(actualValues[i][1]);
			actualValuesAurora[1].push(actualValues[i][2]);
			targetValuesAurora[0].push(actualValues[i][1]);
			targetValuesAurora[1].push(actualValues[i][3]);
			break;
		case "Terminus":
			actualValuesTerminus[0].push(actualValues[i][1]);
			actualValuesTerminus[1].push(actualValues[i][2]);
			targetValuesTerminus[0].push(actualValues[i][1]);
			targetValuesTerminus[1].push(actualValues[i][3]);
			break;
		case "Gaia":
			actualValuesGaia[0].push(actualValues[i][1]);
			actualValuesGaia[1].push(actualValues[i][2]);
			targetValuesGaia[0].push(actualValues[i][1]);
			targetValuesGaia[1].push(actualValues[i][3]);
			break;
	}
}

// Calculating the hours for ASIMOV as sum of the other factories' hours
for (i = 0; i < actualValuesTrantor[0].length; i++) {
	actualValuesTotal[0].push(actualValuesTrantor[0][i]);
	actualValuesTotal[1].push([	actualValuesTrantor[1][i]+
								actualValuesAnacreon[1][i]+
								actualValuesAurora[1][i]+
								actualValuesTerminus[1][i]+
								actualValuesGaia[1][i]]);
	targetValuesTotal[0].push(targetValuesTrantor[0][i]);
	targetValuesTotal[1].push([	targetValuesTrantor[1][i]+
								targetValuesAnacreon[1][i]+
								targetValuesAurora[1][i]+
								targetValuesTerminus[1][i]+
								targetValuesGaia[1][i]])
}

// Setting the display value for hours and bots
Array.from(document.getElementsByClassName("hourvalue-total")).forEach(function(currentValue){currentValue.innerHTML = actualValuesTotal[1][actualValuesTotal[1].length-1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");;});
Array.from(document.getElementsByClassName("hourvalue-trantor")).forEach(function(currentValue){currentValue.innerHTML = actualValuesTrantor[1][actualValuesTrantor[1].length-1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");;});
Array.from(document.getElementsByClassName("hourvalue-anacreon")).forEach(function(currentValue){currentValue.innerHTML = actualValuesAnacreon[1][actualValuesAnacreon[1].length-1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");;});
Array.from(document.getElementsByClassName("hourvalue-aurora")).forEach(function(currentValue){currentValue.innerHTML = actualValuesAurora[1][actualValuesAnacreon[1].length-1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");;});
Array.from(document.getElementsByClassName("hourvalue-terminus")).forEach(function(currentValue){currentValue.innerHTML = actualValuesTerminus[1][actualValuesTerminus[1].length-1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");;});
Array.from(document.getElementsByClassName("hourvalue-gaia")).forEach(function(currentValue){currentValue.innerHTML = actualValuesGaia[1][actualValuesGaia[1].length-1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");;});
/*
 document.getElementById("detailhours-total").innerHTML = document.getElementById("minihours-total").innerHTML = "<h2>"+actualValuesTotal[1][actualValuesTotal[1].length-1]+"</h2><h3>hours<automated</h3>";
 document.getElementById("detailhours-trantor").innerHTML = document.getElementById("minihours-trantor").innerHTML = "<h2>"+actualValuesTrantor[1][actualValuesTrantor[1].length-1]+"</h2><h3>hours automated</h3>";
 document.getElementById("detailhours-anacreon").innerHTML = document.getElementById("minihours-anacreon").innerHTML = "<h2>"+actualValuesAnacreon[1][actualValuesAnacreon[1].length-1]+"</h2><h3>hours automated</h3>";
 document.getElementById("detailhours-aurora").innerHTML = document.getElementById("minihours-aurora").innerHTML = "<h2>"+actualValuesAurora[1][actualValuesAurora[1].length-1]+"</h2><h3>hours automated</h3>";
 document.getElementById("detailhours-terminus").innerHTML = document.getElementById("minihours-terminus").innerHTML = "<h2>"+actualValuesTerminus[1][actualValuesTerminus[1].length-1]+"</h2><h3>hours automated</h3>";
 document.getElementById("detailhours-gaia").innerHTML = document.getElementById("minihours-gaia").innerHTML = "<h2>"+actualValuesGaia[1][actualValuesGaia[1].length-1]+"</h2><h3>hours automated</h3>";
/* 
 document.getElementById("detailbots-total").innerHTML = document.getElementById("minibots-total").innerHTML = "<h2>"+actualValuesTotal[2][actualValuesTotal[1].length-1]+"</h2><h3>bots in use</h3>";
 document.getElementById("detailbots-trantor").innerHTML = document.getElementById("minibots-trantor").innerHTML = "<h2>"+actualValuesTrantor[2][actualValuesTrantor[2].length-1]+"</h2><h3>bots in use</h3>";
 document.getElementById("detailbots-anacreon").innerHTML = document.getElementById("minibots-anacreon").innerHTML = "<h2>"+actualValuesAnacreon[2][actualValuesAnacreon[1].length-1]+"</h2><h3>bots in use</h3>";
 document.getElementById("detailbots-aurora").innerHTML = document.getElementById("minibots-aurora").innerHTML = "<h2>"+actualValuesAurora[2][actualValuesAurora[1].length-1]+"</h2><h3>bots in use</h3>";
 document.getElementById("detailbots-terminus").innerHTML = document.getElementById("minibots-terminus").innerHTML = "<h2>"+actualValuesTerminus[2][actualValuesTerminus[1].length-1]+"</h2><h3>bots in use</h3>";
 document.getElementById("detailbots-gaia").innerHTML = document.getElementById("minibots-gaia").innerHTML = "<h2>"+actualValuesGaia[2][actualValuesGaia[1].length-1]+"</h2><h3>RPAs in use</h3>";
*/


// DATA PARSING: BOTLIST
botList = $.csv.toArrays(botList);

// convert "hour" value to int
for (i = 1; i < botList.length; i++) {
	botList[i][3] = parseInt(botList[i][3]);
}

var botListTotal = [];
var botListTrantor = [];
var botListAnacreon = [];
var botListAurora = [];
var botListTerminus = [];
var botListGaia = [];

for (i = 0; i < botList.length; i++) {
	switch (botList[i][0]) {
		case "Total":
			botListTotal.push(botList[i].slice(1));
			break;
		case "Trantor":
			botListTrantor.push(botList[i].slice(1));
			break;
		case "Anacreon":
			botListAnacreon.push(botList[i].slice(1));
			break;
		case "Aurora":
			botListAurora.push(botList[i].slice(1));
			break;
		case "Terminus":
			botListTerminus.push(botList[i].slice(1));
			break;
		case "Gaia":
			botListGaia.push(botList[i].slice(1));
			break;
	}
}
/*
for (i = 0; i < botListTrantor.length && i < 5; i++) {
	document.getElementById("botlist-total").innerHTML = document.getElementById("botlist-total").innerHTML + "<tr><td class=\"botlist-key\">"+botListTotal[i][0]+"</td><td class=\"botlist-name\">"+botListTotal[i][1]+"</td><td class=\"botlist-hours\">"+botListTotal[i][2]+" h</td></tr>";
}*/
for (i = 0; i < botListTrantor.length && i < 5; i++) {
	document.getElementById("botlist-trantor").innerHTML = document.getElementById("botlist-trantor").innerHTML + "<tr><td class=\"botlist-key\">"+botListTrantor[i][0]+"</td><td class=\"botlist-name\">"+botListTrantor[i][1]+"</td><td class=\"botlist-hours\">"+botListTrantor[i][2]+" h</td></tr>";
}
for (i = 0; i < botListAnacreon.length && i < 5; i++) {
	document.getElementById("botlist-anacreon").innerHTML = document.getElementById("botlist-anacreon").innerHTML + "<tr><td class=\"botlist-key\">"+botListAnacreon[i][0]+"</td><td class=\"botlist-name\">"+botListAnacreon[i][1]+"</td><td class=\"botlist-hours\">"+botListAnacreon[i][2]+" h</td></tr>";
}
for (i = 0; i < botListAurora.length && i < 5; i++) {
	document.getElementById("botlist-aurora").innerHTML = document.getElementById("botlist-aurora").innerHTML + "<tr><td class=\"botlist-key\">"+botListAurora[i][0]+"</td><td class=\"botlist-name\">"+botListAurora[i][1]+"</td><td class=\"botlist-hours\">"+botListAurora[i][2]+" h</td></tr>";
}
for (i = 0; i < botListTerminus.length && i < 5; i++) {
	document.getElementById("botlist-terminus").innerHTML = document.getElementById("botlist-terminus").innerHTML + "<tr><td class=\"botlist-key\">"+botListTerminus[i][0]+"</td><td class=\"botlist-name\">"+botListTerminus[i][1]+"</td><td class=\"botlist-hours\">"+botListTerminus[i][2]+" h</td></tr>";
}
for (i = 0; i < botListGaia.length && i < 5; i++) {
	document.getElementById("botlist-gaia").innerHTML = document.getElementById("botlist-gaia").innerHTML + "<tr><td class=\"botlist-key\">"+botListGaia[i][0]+"</td><td class=\"botlist-name\">"+botListGaia[i][1]+"</td><td class=\"botlist-hours\">"+botListGaia[i][2]+" h</td></tr>";
}


//drawChart("total",actualValuesTotal,targetValuesTotal);
drawChart("trantor",actualValuesTrantor,targetValuesTrantor);
drawChart("anacreon",actualValuesAnacreon,targetValuesAnacreon);
drawChart("aurora",actualValuesAurora,targetValuesAurora);
drawChart("terminus",actualValuesTerminus,targetValuesTerminus);
drawChart("gaia",actualValuesGaia,targetValuesGaia);

function drawChart(chartId, actualValues, targetValues) {
	var MiniChart = new Chart(document.getElementById("minichart-"+chartId).getContext("2d"), {
		type: "line",
		data: {
			labels: actualValues[0],
			datasets: [{
				data: actualValues[1],
				backgroundColor: "rgba(0, 255, 0, 0.1)"
			},
			{
				data: targetValues[1],
				backgroundColor: "rgba(0, 255, 0, 0.2)",
				
				borderCapStyle: "round",
				borderDash: [0,10],
				borderDashOffset: 6,
			}
			]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						maxRotation: 0,
						minRotation: 0,
						labelOffset: -10,
						autoSkipPadding: 20
					}
				}],
				yAxes: [{
					ticks: {
						min: 0,
						maxRotation: 0,
						minRotation: 0
					}
				}]
			}
		}
	});
	
	var DetailChart = new Chart(document.getElementById("detailchart-"+chartId).getContext("2d"), {
		
		type: "line",
		data: {
			labels: actualValues[0],
			datasets: [{
				label: "actual hours",
			data: actualValues[1],
				backgroundColor: "rgba(0, 255, 0, 0.1)",
				borderWidth: 10
			},
			{
				label: "target hours",
				data: targetValues[1],
				backgroundColor: "rgba(0, 255, 0, 0.2)",
				
				borderWidth: 10,
				borderCapStyle: "round",
				borderDash: [0,20],
				borderDashOffset: 6,
			}
			]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						fontSize: 20,
						maxRotation: 0,
						minRotation: 0,
						autoSkipPadding: 20
					}
				}],
				yAxes: [{
					ticks: {
						min: 0,
						fontSize: 20,
						maxRotation: 0,
						minRotation: 0
					}
				}]
			}
		}
	});
}
