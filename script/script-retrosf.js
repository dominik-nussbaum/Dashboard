document.getElementById("theme").setAttribute("href", "styles/retrosf/styles.min.css");

// Getting the dimensions of the client's viewport
var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

// set canvas sizes based on current viewport size

window.addEventListener("resize", resizeCanvas, false);

referenceWidth = 1920;
referenceHeight = 1080;

originalDimensions = {
	size: {
		width: "32%",
		height: "45%"
	},
	positions: [
		{
			top: "3%",
			left: "4%"
		},
		{
			top: "3%",
			left: "34.5%"
		},
		{
			top: "3%",
			left: "65%"
		},
		{
			top: "44%",
			left: "4%"
		},
		{
			top: "44%",
			left: "34.5%"
		},
		{
			top: "44%",
			left: "65%"
		}
	]
};

detailDimensions = {
	width: "93%",
	height: "86%",
	top: "3%",
	left: "4%",
};

outDimensions = {
	toprowTop: "-45%",
	bottomrowTop: "100%"
};

Array.from(document.getElementsByClassName("minichart")).forEach(function(current_value) {
	
	current_value.width = referenceWidth*0.25;
/*	if (current_value.id == "minichart-total") {
		current_value.height = document.documentElement.clientHeight*0.2;
	}
	else {*/
		current_value.height = referenceHeight*0.25;
//	}
});

Array.from(document.getElementsByClassName("detailchart")).forEach(function(current_value) {
/*	if (current_value.id == "detailchart-total") {
		current_value.width = referenceWidth*0.82;
	}
	else {*/
		current_value.width = referenceWidth*0.45;
//	}
	current_value.height = referenceHeight*0.45;
});
 
 
function resizeCanvas(e) {
	Array.from(document.getElementsByClassName("minichart")).forEach(function(current_value) {
		current_value.width = referenceWidth*0.25;
		if (current_value.id == "minichart-total") {
			current_value.height = referenceHeight*0.2;
		}
		else {
			current_value.height = referenceHeight*0.25;
		}
	});

	Array.from(document.getElementsByClassName("detailchart")).forEach(function(current_value) {
		if (current_value.id == "detailchart-total") {
			current_value.width = referenceWidth*0.82;
		}
		else {
			current_value.width = referenceWidth*0.45;
		}
		current_value.height = referenceHeight*0.45;
	});
	
//	drawChart("total",actualValuesTotal,targetValuesTotal);
	drawChart("trantor",actualValuesTrantor,targetValuesTrantor);
	drawChart("anacreon",actualValuesAnacreon,targetValuesAnacreon);
	drawChart("aurora",actualValuesAurora,targetValuesAurora);
	drawChart("terminus",actualValuesTerminus,targetValuesTerminus);
	drawChart("gaia",actualValuesGaia,targetValuesGaia);

	// Scale the main view so that it remains entirely visible no mather the cleint screen size

	var screenWidth = document.documentElement.clientWidth;
	var screenHeight = document.documentElement.clientHeight;

	if (screenWidth/screenHeight > 16/9) {
		var scaleFactor = screenHeight / referenceHeight;
		var offset = Math.abs(screenWidth - (document.getElementsByTagName("main")[0].offsetWidth * scaleFactor)) / 2;
		console.log(offset);
		document.getElementsByTagName("main")[0].style.top = "0";
		document.getElementsByTagName("main")[0].style.left = offset.toString() + "px";
	} else {
		var scaleFactor = screenWidth / referenceWidth;
		var offset = Math.abs(screenHeight - (document.getElementsByTagName("main")[0].offsetHeight * scaleFactor)) / 2;
		console.log(offset);
		document.getElementsByTagName("main")[0].style.top = offset.toString() + "px";
		document.getElementsByTagName("main")[0].style.left = "0";
	}

	document.getElementsByTagName("main")[0].style.transform = "scale("+scaleFactor+")";
}

// set canvas sizes based on current viewport size
/*
Array.from(document.getElementsByClassName("minichart")).forEach(function(current_value) {
	current_value.setAttribute("width", screenWidth*0.25);
	current_value.setAttribute("height", screenHeight*0.25);
});

Array.from(document.getElementsByClassName("detailchart")).forEach(function(current_value) {
	current_value.setAttribute("width", screenWidth*0.45);
	current_value.setAttribute("height", screenHeight*0.5);
});
*/

document.getElementById("backgroundVideo").innerHTML = "<source src=\"styles/retrosf/stars.mp4\" type=\"video/mp4\">";
document.getElementById("legend-backdrop").innerHTML = "<video autoplay muted loop id=\"legend-backdrop-video\"><source src=\"styles/retrosf/stars.mp4\" type=\"video/mp4\"></video>";
document.getElementById("quote-backdrop").innerHTML = "<video autoplay muted loop id=\"quote-backdrop-video\"><source src=\"styles/retrosf/stars.mp4\" type=\"video/mp4\"></video>";

// Create decoration
var light1 = document.createElement("div");
var light2 = document.createElement("div");
var light3 = document.createElement("div");

light1.setAttribute("class", "light");
light2.setAttribute("class", "light");
light3.setAttribute("class", "light")

light1.setAttribute("id", "light1");
light2.setAttribute("id", "light2");
light3.setAttribute("id", "light3");

document.getElementById('quote-frame').appendChild(light1);
document.getElementById('quote-frame').appendChild(light2);
document.getElementById('quote-frame').appendChild(light3);

//  Make numbers more readable by adding thousands seperator

neatUpNumbers("minihours");
neatUpNumbers("minibots");
neatUpNumbers("minicash");
neatUpNumbers("detailhours");
neatUpNumbers("detailbots");
neatUpNumbers("detailcash");

function neatUpNumbers(current_class) {
	Array.from(document.getElementsByClassName(current_class)).forEach(function(current_value) {
		try {
			current_value.firstChild.innerHTML = numberSeperator(current_value.firstChild.innerHTML);
		}
		catch(e) {}
	});
}

Array.from(document.getElementsByClassName("botlist-hours")).forEach(function(current_value) {
	try {
		current_value.innerHTML = numberSeperator(current_value.innerHTML);
	}
	catch(e) {}
});

function numberSeperator(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}


if (getQueryString("interactive") != "false"){
	document.getElementsByTagName("body")[0].style.cursor = "default";
}

// STYLING CHARTS
	
Chart.defaults.global.responsive = false;

Chart.defaults.global.legend.display = false;
Chart.defaults.scale.gridLines.display = false;

Chart.defaults.global.defaultFontFamily = "'Monaco', monospace";
Chart.defaults.global.defaultFontSize = "14";
Chart.defaults.global.defaultFontColor = "rgba(0, 255, 0, 1)";

Chart.defaults.global.animation.duration = 0;

Chart.defaults.global.elements.line.borderColor = "rgba(0, 255, 0, 1)";
Chart.defaults.global.elements.line.borderWidth = 5;
Chart.defaults.global.elements.line.backgroundColor = "rgba(0, 0, 0, 0)";
Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.elements.line.borderCapStyle = "square";
Chart.defaults.global.elements.line.borderJoinStyle = "miter";
Chart.defaults.global.elements.line.pointHoverRadius = 0;
Chart.defaults.global.elements.line.pointRadius = 0;
Chart.defaults.global.elements.line.pointHitRadius = 0;

Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.point.hitRadius = 0;
Chart.defaults.global.elements.point.hoverRadius = 0;

Chart.defaults.line.spanGaps = true;


// Quotes
window.addEventListener('load', function(event) {
    setQuote();
	resizeCanvas();
}); 

// hide splash screen
setTimeout(function(){
//	document.getElementById("splashVideo").style.opacity = "0";
	setTimeout(function(){
		document.getElementById("splash").style.opacity = "0";
		setTimeout(function(){
			document.getElementById("splash").style.display = "none";
		}, 1000);
	}, 1000);
}, 1000);

setTimeout(function(){
	document.getElementById("splash").style.display = "none";
}, 7500);

// ANIMATION FOR SWITCHING VIEWS

// Each of the six tiles is assigned to a variable		
var tile0 = document.getElementById("tile-total");
var tile1 = document.getElementById("tile-trantor");
var tile2 = document.getElementById("tile-anacreon");
var tile3 = document.getElementById("tile-aurora");
var tile4 = document.getElementById("tile-terminus");
var tile5 = document.getElementById("tile-gaia");

// This array containing all the tiles is used to make changes to all tiles at once
var tiles = [tile0, tile1, tile2, tile3, tile4, tile5];

// Trigger animation on click
if (getQueryString("interactive") != "false"){
	tiles.forEach(function(current_value) {
		current_value.onclick = function() {zoomUp(current_value)};
		current_value.style.cursor = "pointer";
	});
}

var nextTile = 1;
var detailView = false;

// Trigger Animation every 35 Seconds
if (getQueryString("interactive") == "false"){
	setInterval(
		function(){
			switch(nextTile) {
				case 1:
					if (detailView == false){
						zoomUp(tile1);
					} else {
						zoomDown(tile1);
						nextTile = 2;
					}
					break;
				case 2:
					if (detailView == false){
						zoomUp(tile2);
					} else {
						zoomDown(tile2);
						nextTile = 3;
					}
					break;
				case 3:
					if (detailView == false){
						zoomUp(tile3);
					} else {
						zoomDown(tile3);
						nextTile = 4;
					}
					break;
				case 4:
					if (detailView == false){
						zoomUp(tile4);
					} else {
						zoomDown(tile4);
						nextTile = 5;
					}
					break;
				case 5:
					if (detailView == false){
						zoomUp(tile5);
					} else {
						zoomDown(tile5);
						nextTile = 1;
					}
					break;
			}
					
		},
	35000);
}

function zoomUp(focusTile) {
	
	// The tiles not in focus are hidden
	// first, the "display shutdown" animation is initiated
	tiles.forEach(function(current_value) {
		current_value.onclick = null;
		if (current_value != focusTile) {
			current_value.getElementsByClassName("minicontent")[0].style.animation = "pulseglow 2s alternate infinite, shutoff 1s alternate 1 forwards";
			current_value.getElementsByClassName("frontdrop")[0].style.animation = "flicker linear 5s infinite";
			current_value.getElementsByClassName("backdrop")[0].style.background = "rgba(0, 0, 0, 0.9)";
		}
	});
	
	// second, the tiles move out of view
	setTimeout(function(){
		tiles.forEach(function(current_value) {
			if (current_value != focusTile) {
				if (current_value.classList.contains("tile-top")) {
					current_value.style.top = outDimensions.toprowTop; //parseInt(window.getComputedStyle(current_value).getPropertyValue("top"))-document.documentElement.clientWidth*0.3+"px";
				}
				else {
					current_value.style.top = outDimensions.bottomrowTop; //parseInt(window.getComputedStyle(current_value).getPropertyValue("top"))+document.documentElement.clientWidth*0.4+"px";
				}
				document.getElementById("legend").style.bottom = "-650px";
			}
		});
	}, 1000);
	
	// The overview content of the focus tile is also hidden (to make room for the detail content)
	setTimeout(function(){
		focusTile.getElementsByClassName("minicontent")[0].style.animation = "pulseglow 2s alternate infinite, flickerout 0.5s 1 forwards";
	}, 500);
	
	// After all the hiding is done (1.2 seconds), the tile in focus is zoomed up
	
	
	setTimeout(function(){
		
		focusTile.style.width = detailDimensions.width;
		focusTile.style.height = detailDimensions.height;
		focusTile.style.top = detailDimensions.top;
		focusTile.style.left = detailDimensions.left;
		
		setQuote();
		
		setTimeout(function(){
			
			focusTile.getElementsByClassName("detailcontent")[0].style.animation = "pulseglow 2s alternate infinite, flickerin 0.5s 1 forwards";
			document.getElementById("legend").style.bottom = "0";
			
			//	Following line activates the ZoomDown function by clicking on tile
			if (getQueryString("interactive") != "false"){
				setTimeout(function(){
					focusTile.onclick = function() {zoomDown(focusTile)};
				}, 1700);
			}
			
		}, 1700);
		
	}, 2000);
	
	detailView = true;
}

function zoomDown(focusTile) {
	
	focusTile.onclick = null;
	
	focusTile.getElementsByClassName("detailcontent")[0].style.animation = "pulseglow 2s alternate infinite, flickerout 0.5s 1 forwards";
	document.getElementById("legend").style.bottom = "-650px";
	
	setTimeout(function(){
		
		focusTile.style.width = originalDimensions.size.width;
		focusTile.style.height = originalDimensions.size.height;
		focusTile.style.top = originalDimensions.positions[tiles.indexOf(focusTile)].top;
		focusTile.style.left = originalDimensions.positions[tiles.indexOf(focusTile)].left;
		
		setQuote();
		
		setTimeout(function(){
		
			tiles.forEach(function(current_value) {
				if (current_value != focusTile) {
					current_value.style.top = originalDimensions.positions[tiles.indexOf(current_value)].top;
				}
				
				document.getElementById("legend").style.bottom = "0";
				
				setTimeout(function(){
					//	Following line re-activates the ZoomUp function by clicking on tile	
					if (getQueryString("interactive") != "false"){
						tiles.forEach(function(current_value) {
							current_value.onclick = function() {zoomUp(current_value)};
							current_value.style.cursor = "pointer";
						});
					}
				}, 1500);
			});

			focusTile.getElementsByClassName("minicontent")[0].style.animation = "pulseglow 2s alternate infinite, flickerin 0.5s 1 forwards";
			
			document.getElementById("legend").style.bottom = "0";
			

			
		}, 1700);
	}, 1200);
	
	tiles.forEach(function(current_value) {
		if (current_value != focusTile) {
			current_value.getElementsByClassName("minicontent")[0].style.animation = "pulseglow 2s alternate infinite";
			current_value.getElementsByClassName("frontdrop")[0].style.animation = "flicker linear 5s infinite";
			current_value.getElementsByClassName("backdrop")[0].style.background = "rgba(0, 0, 0, 0.5)";
		}
	});

	detailView = false;
	
}

// Quote setter

function setQuote() {
	if ( (Math.floor(Math.random() * 10) ) > 2.5) {		// Bias so Quote No. 0 gets displayed more often (Asimov's Laws of Robotics)
		var quoteIndex = Math.floor(Math.random() * (quotes.length));
	}
	else {
		var quoteIndex = 0;
	}
	

	document.getElementById("quote").innerHTML = quotes[quoteIndex].quote;
	var author = quotes[quoteIndex].author;
	
	if (quotes[quoteIndex].work.length > 0){
		author += ": <i>" + quotes[quoteIndex].work + "</i>";
	}
	
	if (quotes[quoteIndex].year.length > 0){
		author += " (" + quotes[quoteIndex].year + ")";
	}
	
	document.getElementById("author").innerHTML = author;
	
	if (quoteIndex == 0) {
		document.getElementById("quote").style.width = "95%";
	}
	else {
		document.getElementById("quote").style.width = "auto";
	}
	
	if (quotes[quoteIndex].quote.length > 220) {
		document.getElementById("quote").style.fontSize = "8pt";
	}
	else {
		document.getElementById("quote").style.fontSize = "10pt";
	}
	
	if (quotes[quoteIndex].quote.length > 200) {
		document.getElementById("quote-wrap").style.alignItems = "flex-start";
	}
	else {
		document.getElementById("quote-wrap").style.alignItems = "center";
	}
	
	var lightChecker = 0;
	
	setlight("light1");
	setlight("light2");
	setlight("light3");
	
	while (lightChecker == 3)
	{
		var lightChecker = 0;
		setlight("light1");
		setlight("light2");
		setlight("light3");
	}
	
	function setlight(element) {
		var lightIndex = Math.floor(Math.random() * 3);
		switch (lightIndex) {
			case 0:
				document.getElementById(element).style.backgroundImage = "url(\"styles/retrosf/img/light-yellow.png\")";
				lightChecker = 0;
				break;
			case 1:
				document.getElementById(element).style.backgroundImage = "url(\"styles/retrosf/img/light-red.png\")";
				lightChecker = lightChecker + 1;
				break;
			case 2:
				document.getElementById(element).style.backgroundImage = "url(\"styles/retrosf/img/light-blue.png\")";
				lightChecker = 0;
				break;
		
		}
	}
}

// Set if interactive or not
/*function getQueryString( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};*/