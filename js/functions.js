// JavaScript Document

$(document).ready(function() {

// Functions

function totalReset() {



	// Resetting Stats
	health = 5;
	energy = 5;
	safety = 5;
	security = 5;
	document.getElementById("health-score").innerHTML = health;
	document.getElementById("energy-score").innerHTML = energy;
	document.getElementById("safety-score").innerHTML = safety;
	document.getElementById("security-score").innerHTML = security;
	document.getElementById("sit-rep").innerHTML = "More";
	sitRep = "hidden";

	
	// Location Stats
	mountain = 0;
	mountainA = "open";
	mountainB = "open";
	mountainC = "open";
	temple = 0;
	templeA = "open";
	templeB = "open";
	templeC = "open";
	forest = 0;
	forestA = "open";
	forestB = "open";
	forestC = "open";
	wrecks = 0;
	wrecksA = "open";
	wrecksB = "open";
	wrecksC = "open";
	
	// Shuttle Stats
	
	improveHealth = "possible";
	improveSafety = "possible";
	improveSecurity = "possible";
	improveEnergy = "possible";
	
			
	// Risk, Spend and Dismiss
	
	risk = "possible";
	spend = "possible";
	dismiss = "possible";
	
	// Crew Stats
	
	scientist = 3;
	priestess = 3;
	martian = 3;
	scientistKaput = false;
	priestessKaput = false;
	martianKaput = false;
	
	// Time Stats
	
	day = 1;
	time = "Night";
	
	yesClick();
	dayReset();
	$("#status-bar").fadeIn(2000);
	
// Re-Add vanish classes
	
$(".scientist-dead").addClass("vanish");		
$(".scientist-alive").addClass("vanish");
$(".priestess-dead").addClass("vanish");		
$(".priestess-alive").addClass("vanish");
$(".martian-dead").addClass("vanish");		
$(".martian-alive").addClass("vanish");
$(".health-low").addClass("vanish");		
$(".health-medium").addClass("vanish");
$(".health-great").addClass("vanish");		
$(".health-noway").addClass("vanish");
$(".energy-low").addClass("vanish");		
$(".energy-medium").addClass("vanish");
$(".energy-great").addClass("vanish");		
$(".energy-noway").addClass("vanish");
$(".safety-low").addClass("vanish");		
$(".safety-medium").addClass("vanish");
$(".safety-great").addClass("vanish");		
$(".safety-noway").addClass("vanish");
$(".security-low").addClass("vanish");		
$(".security-medium").addClass("vanish");
$(".security-great").addClass("vanish");		
$(".security-noway").addClass("vanish");
$(".temple-weak").addClass("vanish");
$(".temple-medium").addClass("vanish");	
$(".temple-strong").addClass("vanish");	
$(".temple-bad").addClass("vanish");	
$(".temple-finished").addClass("vanish");
$(".mountain-weak").addClass("vanish");
$(".mountain-medium").addClass("vanish");	
$(".mountain-strong").addClass("vanish");	
$(".mountain-bad").addClass("vanish");	
$(".mountain-finished").addClass("vanish");	
$(".forest-weak").addClass("vanish");
$(".forest-medium").addClass("vanish");	
$(".forest-strong").addClass("vanish");	
$(".forest-bad").addClass("vanish");	
$(".forest-finished").addClass("vanish");	
$(".wrecks-weak").addClass("vanish");
$(".wrecks-medium").addClass("vanish");	
$(".wrecks-strong").addClass("vanish");	
$(".wrecks-bad").addClass("vanish");	
$(".wrecks-finished").addClass("vanish");	
		
		

};

function dayReset() {	
			
	// Possible Contacts 
	
	if (scientist > 0) {
	contactScientist = "possible";
	}
	if (priestess > 0) {
	contactPriestess = "possible";
	}
	if (martian > 0) {
	contactMartian = "possible";
	}

	// Night Commands
	
	commandPriestess = "possible";
	commandScientist = "possible";
	commandMartian = "possible";
	
};

function yesClick() {
		
	$(".choice").removeClass("no-click");	
	
};


function timeCheck() {
	travel = "ready";
	order = "ready";
	contact = "ready";
	if (time == "Morning") {
		$("body").removeClass("night");
		$("body").addClass("morning");	
		$("#the-sky").fadeIn(1000);
		if (day == 1) {
			$("#morning-meeting-1").fadeIn(2000);	
		}
		else if (day == 2 && priestess == 0) {
			$("#morning-meeting-2-priestess-dead").fadeIn("2000");	
		}
		else if (day == 2 && scientist == 0) {
			$("#morning-meeting-2-scientist-dead").fadeIn("2000");	
		}
		else if (day == 2 && martian == 0) {
			$("#morning-meeting-2-martian-dead").fadeIn("2000");	
		}
		else if (day == 2 && martian > 0) {
			$("#morning-meeting-2-all-alive").fadeIn("2000");	
		}
		else if (day == 3) {
			if (priestess > 0 && health < 4) {
			$(".health-low").removeClass("vanish");
			}
			else if (priestess > 0 && health <= 6) {
				$(".health-medium").removeClass("vanish");
			}
			else if (priestess > 0 && health > 6) {
				$(".health-great").removeClass("vanish");
			}
			else if (priestess == 0) {
				$(".health-noway").removeClass("vanish");
			}
						if (martian > 0 && safety < 4) {
			$(".safety-low").removeClass("vanish");
			}
			else if (martian > 0 && safety <= 6) {
				$(".safety-medium").removeClass("vanish");
			}
			else if (martian > 0 && safety > 6) {
				$(".safety-great").removeClass("vanish");
			}
			else if (martian == 0) {
				$(".safety-noway").removeClass("vanish");
			}
			if (scientist > 0 && security < 4) {
			$(".security-low").removeClass("vanish");
			}
			else if (scientist > 0 && security <= 6) {
				$(".security-medium").removeClass("vanish");
			}
			else if (scientist > 0 && security > 6) {
				$(".security-great").removeClass("vanish");
			}
			else if (scientist == 0) {
				$(".security-noway").removeClass("vanish");
			}
			if (mountain < 5 && energy < 4) {
			$(".energy-low").removeClass("vanish");
			}
			else if (mountain < 5 && energy <= 6) {
				$(".energy-medium").removeClass("vanish");
			}
			else if (mountain < 5 && energy > 6) {
				$(".energy-great").removeClass("vanish");
			}
			else if (mountain == 5 || mountain == 6) {
				$(".energy-noway").removeClass("vanish");
			}
			
			$("#morning-meeting-3").fadeIn("2000");
			
			
		}
		else if (day == 4) {
			if (temple < 3) {
				$(".temple-weak").removeClass("vanish");
			}
			if (temple == 3) {
				$(".temple-medium").removeClass("vanish");
			}
			if (temple == 4) {
				$(".temple-strong").removeClass("vanish");
			}
			if (temple == 5) {
				$(".temple-bad").removeClass("vanish");
			}
			if (temple == 6) {
				$(".temple-finished").removeClass("vanish");
			}
						if (forest < 3) {
				$(".forest-weak").removeClass("vanish");
			}
			if (forest == 3) {
				$(".forest-medium").removeClass("vanish");
			}
			if (forest == 4) {
				$(".forest-strong").removeClass("vanish");
			}
			if (forest == 5) {
				$(".forest-bad").removeClass("vanish");
			}
			if (forest == 6) {
				$(".forest-finished").removeClass("vanish");
			}
						if (wrecks < 3) {
				$(".wrecks-weak").removeClass("vanish");
			}
			if (wrecks == 3) {
				$(".wrecks-medium").removeClass("vanish");
			}
			if (wrecks == 4) {
				$(".wrecks-strong").removeClass("vanish");
			}
			if (wrecks == 5) {
				$(".wrecks-bad").removeClass("vanish");
			}
			if (wrecks == 6) {
				$(".wrecks-finished").removeClass("vanish");
			}
						if (mountain < 3) {
				$(".mountain-weak").removeClass("vanish");
			}
			if (mountain == 3) {
				$(".mountain-medium").removeClass("vanish");
			}
			if (mountain == 4) {
				$(".mountain-strong").removeClass("vanish");
			}
			if (mountain == 5) {
				$(".mountain-bad").removeClass("vanish");
			}
			if (mountain == 6) {
				$(".mountain-finished").removeClass("vanish");
			}
			$("#morning-meeting-4").fadeIn("2000");
			
			
		}
		else if (day == 5) {
			$("#morning-meeting-5").fadeIn("2000");	
		}
		crewCheck();
	}
	else if (time == "Afternoon") {
		$("body").removeClass("morning");
		$("body").addClass("afternoon");	
		$("#the-sky").fadeIn(1000);
		$("#afternoon").fadeIn("2000");
		safetySecurityAfternoon();
	}
	else if (time == "Dusk") {
		$("body").removeClass("afternoon");
		$("body").addClass("dusk");	
		$("#the-sky").fadeIn(1000);
		$("#dusk").fadeIn("2000");	
		safetySecurityDusk();
	}
	else if (time == "Night") {
		$("body").removeClass("dusk");
		$("body").addClass("night");	
		if (day == 4) {
			finalNight();
			Return;
		}
		else {
		nightCheck();
		Return;
		}
	}
	travelCheck();
};

function safetySecurityAfternoon () {
			if (safety < 4) {
		document.getElementById("field-safety-afternoon").innerHTML = "very dangerous";
	}
	else if (safety > 3 && safety < 7) {
		document.getElementById("field-safety-afternoon").innerHTML = "dangerous";
	}
	else if (safety > 6) {
		document.getElementById("field-safety-afternoon").innerHTML = "reasonable";
	}
			if (security < 4) {
		document.getElementById("shuttle-security-afternoon").innerHTML = "very poor";
	}
	else if (security > 3 && security < 7) {
		document.getElementById("shuttle-security-afternoon").innerHTML = "poor";
	}
	else if (security > 6) {
		document.getElementById("shuttle-security-afternoon").innerHTML = "optimal";
	}
};

function safetySecurityDusk () {
			if (safety < 4) {
		document.getElementById("field-safety-dusk").innerHTML = "very dangerous";
	}
	else if (safety > 3 && safety < 7) {
		document.getElementById("field-safety-dusk").innerHTML = "dangerous";
	}
	else if (safety > 6) {
		document.getElementById("field-safety-dusk").innerHTML = "reasonable";
	}
			if (security < 4) {
		document.getElementById("shuttle-security-dusk").innerHTML = "very poor";
	}
	else if (security > 3 && security < 7) {
		document.getElementById("shuttle-security-dusk").innerHTML = "poor";
	}
	else if (security > 6) {
		document.getElementById("shuttle-security-dusk").innerHTML = "optimal";
	}
};


function crewCheck() {
if (priestess == 1) {
	$("#priestess-injured").fadeIn(2000);
	Return;
}
if (martian == 1) {
	$("#martian-injured").fadeIn(2000);
	if (priestess == "critical" || priestess == "resting") {
	$('html, body').animate({scrollTop: $("#martian-injured").offset().top}, 500);
	}
	Return;
}
if (scientist == 1) {
	$("#scientist-injured").fadeIn(2000);
	if (priestess == "critical" || priestess == "resting" || martian == "critical" || martian == "resting") {
	$('html, body').animate({scrollTop: $("#martian-injured").offset().top}, 500);
	}
	Return;
}
crewCheck2();
};

function crewCheck2() {
	if (scientist == "critical") {
		scientist = 1;
	}
		if (priestess == "critical") {
		priestess = 1;
	}
		if (martian == "critical") {
		martian = 1;
	}
travelCheck();
};

function travelCheck() {
	if (mountain > 4) {
		$("#travel-mountain").addClass("no-click");
	}
	if (temple > 4 || priestess == 0 || priestess == "resting") {
		$("#travel-temple").addClass("no-click");
	}
	if (forest > 4 || martian == 0 || martian == "resting") {
		$("#travel-forest").addClass("no-click");
	}
	if (wrecks > 4 || scientist == 0 || scientist == "resting") {
		$("#travel-wrecks").addClass("no-click");
	}
	$("#travel-options").fadeIn(2000);
		if (priestess == "critical" || priestess == "resting" || martian == "critical" || martian == "resting" || scientist == "critical" || scientist == "resting") {
	$('html, body').animate({scrollTop: $("#travel-options").offset().top}, 500);
	}
};

function statsUpdate() {
	if (health > 9) {
		health = 9;
	}
	if (energy > 9) {
		energy = 9;
	}
	if (safety > 9) {
		safety = 9;
	}
	if (security > 9) {
		security = 9;
	}
	if (energy < 0) {
		energy = 0;
	}
	if (safety < 0) {
		safety = 0;
	}
	if (security < 0) {
		security = 0;
	}
	document.getElementById("health-score").innerHTML = health;
	document.getElementById("energy-score").innerHTML = energy;
	document.getElementById("safety-score").innerHTML = safety;
	document.getElementById("security-score").innerHTML = security;	
	document.getElementById("security-score").innerHTML = security;
};

function encounterCheck() {
	$("#shuttle-interior").fadeIn(1000);
	$("#contact").fadeIn(2000);
	if (contactMartian == "impossible" && contactPriestess == "impossible" && contactScientist == "impossible") {
	$("#contact-intro-B").fadeIn(2000);

	if (time == "Dusk") {
		$("#contact-outro-B").fadeIn(2000);
	}
	else {
		$("#contact-outro-A").fadeIn(2000);
	}
	}
	else {
	$("#contact-intro-A").fadeIn(2000);
	$("#check-in").removeClass("vanish");
	}
	if (contactPriestess == "impossible") {
		$("#contact-priestess").addClass("no-click");
	}
	if (contactMartian == "impossible") {
		$("#contact-martian").addClass("no-click");
	}
	if (contactScientist == "impossible") {
		$("#contact-scientist").addClass("no-click");
	}
};


function riskCheck() {
	if (risk == "possible") {
	if (adventure == "mountain-A2" || adventure == "forest-A2" || adventure == "wrecks-A2") {
		if (health < 2) {
		$(".health-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-A3" || adventure == "forest-A3" || adventure == "wrecks-A3") {
		if (health < 3) {
		$(".health-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "temple-A1" || adventure == "forest-B1" || adventure == "wrecks-B1") {
		if (energy < 1) {
		$(".energy-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "temple-A2" || adventure == "forest-B2" || adventure == "wrecks-B2") {
		if (energy < 2) {
		$(".energy-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "temple-A3" || adventure == "forest-B3" || adventure == "wrecks-B3") {
		if (energy < 3) {
		$(".energy-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-B1" || adventure == "temple-B1" || adventure == "wrecks-C1") {
		if (safety < 1) {
		$(".safety-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-B2" || adventure == "temple-B2" || adventure == "wrecks-C2") {
		if (safety < 2) {
		$(".safety-error-risk").fadeIn("2000");
		Return;
		}
	}
	if (adventure == "mountain-B3" || adventure == "temple-B3" || adventure == "wrecks-C3") {
		if (safety < 3) {
		$(".safety-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-C1" || adventure == "temple-C1" || adventure == "forest-C1") {
		if (security < 1) {
		$(".security-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-C2" || adventure == "temple-C2" || adventure == "forest-C2") {
		if (security < 2) {
		$(".security-error-risk").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-C3" || adventure == "temple-C3" || adventure == "forest-C3") {
		if (security < 3) {
		$(".security-error-risk").addClass("error");
		Return;
		}
	}
	}
	else {
		Return;
	}
};

function spendCheck() {
	if (spend == "possible") {
	if (adventure == "mountain-A1" || adventure == "mountain-B1" || adventure == "mountain-C1" || adventure == "wrecks-A1" || adventure == "wrecks-B1" || adventure == "wrecks-C1") {
		if (health < 3) {
		$(".health-error-spend").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-A2" || adventure == "mountain-B2" || adventure == "mountain-C2" || adventure == "wrecks-A2" || adventure == "wrecks-B2" || adventure == "wrecks-C2") {
		if (health < 4) {
		$(".health-error-spend").addClass("error");
		Return;
		}
	}
	if (adventure == "mountain-A3" || adventure == "mountain-B3" || adventure == "mountain-C3" || adventure == "wrecks-A3" || adventure == "wrecks-B3" || adventure == "wrecks-C3") {
		if (health < 5) {
		$(".health-error-spend").addClass("error");
		Return;
		}
	}
	if (adventure == "temple-A1" || adventure == "temple-B1" || adventure == "temple-C1" || adventure == "forest-A1" || adventure == "forest-B1" || adventure == "forest-C1") {
		if (energy < 2) {
		$(".energy-error-spend").addClass("error");
		Return;
		}
	}
	if (adventure == "temple-A2" || adventure == "temple-B2" || adventure == "temple-C2" || adventure == "forest-A2" || adventure == "forest-B2" || adventure == "forest-C2") {
		if (energy < 3) {
		$(".energy-error-spend").addClass("error");
		Return;
		}
	}
	if (adventure == "temple-A3" || adventure == "temple-B3" || adventure == "temple-C3" || adventure == "forest-A3" || adventure == "forest-B3" || adventure == "forest-C3") {
		if (energy < 4) {
		$(".energy-error-spend").addClass("error");
		Return;
		}
	}}
	else {
		Return;
	}
};

function betrayalCheck() {
	if (adventure == "mountain-A1" || adventure == "mountain-A2"  || adventure == "mountain-A3" || adventure == "mountain-B1" || adventure == "mountain-B2"  || adventure == "mountain-B3" || adventure == "mountain-C1" || adventure == "mountain-C2" || adventure == "mountain-C3") {
	if (mountainA == "closed"  && mountainB == "closed"  && mountainC == "closed") {
		mountain = 5;
		$("#mountain-ending-bad").fadeIn("2000");
		}
}	
else if (adventure == "temple-A1" || adventure == "temple-A2"  || adventure == "temple-A3" || adventure == "temple-B1" || adventure == "temple-B2"  || adventure == "temple-B3" || adventure == "temple-C1" || adventure == "temple-C2" || adventure == "temple-C3") {
	if (templeA == "closed"  && templeB == "closed"  && templeC == "closed") {
		temple = 5;
		priestess = 0;
		contactPriestess = "impossible";
		$("#temple-ending-bad").fadeIn("2000");
		}
}
else if (adventure == "forest-A1" || adventure == "forest-A2"  || adventure == "forest-A3" || adventure == "forest-B1" || adventure == "forest-B2"  || adventure == "forest-B3" || adventure == "forest-C1" || adventure == "forest-C2" || adventure == "forest-C3") {
	if (forestA == "closed"  && forestB == "closed"  && forestC == "closed") {
		forest = 5;
		martian = 0;
		contactMartian = "impossible";
		$("#forest-ending-bad").fadeIn("2000");
		}
}
else if (adventure == "wrecks-A1" || adventure == "wrecks-A2"  || adventure == "wrecks-A3" || adventure == "wrecks-B1" || adventure == "wrecks-B2"  || adventure == "wrecks-B3" || adventure == "wrecks-C1" || adventure == "wrecks-C2" || adventure == "wrecks-C3") {
	if (wrecksA == "closed"  && wrecksB == "closed"  && wrecksC == "closed") {
		wrecks = 5;
		scientist = 0;
		contactScientist = "impossible";
		$("#wrecks-ending-bad").fadeIn("2000");
		}
}
		$("#wrap-up").fadeIn("2000");
			encounterCheck();	
};


function levelUp() {
	if (adventure == "mountain-A1" || adventure == "mountain-A2" || adventure == "mountain-B1" || adventure == "mountain-B2" || adventure == "mountain-C1" || adventure == "mountain-C2") {
		mountainA = "open";
		mountainB = "open";
		mountainC = "open";
		}
	else if (adventure == "temple-A1" || adventure == "temple-A2" || adventure == "temple-B1" || adventure == "temple-B2" || adventure == "temple-C1" || adventure == "temple-C2") {
		templeA = "open";
		templeB = "open";
		templeC = "open";
		}
		else if (adventure == "forest-A1" || adventure == "forest-A2" || adventure == "forest-B1" || adventure == "forest-B2" || adventure == "forest-C1" || adventure == "forest-C2") {
		forestA = "open";
		forestB = "open";
		forestC = "open";
		}
		else if (adventure == "wrecks-A1" || adventure == "wrecks-A2" || adventure == "wrecks-B1" || adventure == "wrecks-B2" || adventure == "wrecks-C1" || adventure == "wrecks-C2") {
		wrecksA = "open";
		wrecksB = "open";
		wrecksC = "open";
		}
};

function nightCheck() {
		assignee = "nobody";
		energyProtect = "unassigned";
		healthProtect = "unassigned";
		safetyProtect = "unassigned";
		securityProtect = "unassigned";
		if (priestess == "resting") {
			priestess = 3;	
		}
		if (martian == "resting") {
			martian = 3;	
		}
		if (scientist == "resting") {
			scientist = 3;	
		}
		$("#night").fadeIn(1000);
		$("#night-falls").fadeIn(2000);
		if(day == 1) {
		$("#night-intro-A").fadeIn(2000);
		}
		else if(day == 5) {
		$("#final-night").fadeIn(2000);
		Return;
		}
		else {
		$("#night-intro-B").fadeIn(2000);
		}
		if (priestess > 0) {
			$("#priestess-strategy").fadeIn(2000);
				if (priestess == 1) {
					document.getElementById("priestessHealth-strategy").innerHTML = "She's in rough shape.  If you send her out she may die.";
			}
			if (priestess == 2) {
					document.getElementById("priestessHealth-strategy").innerHTML = "She's shaken but willing to fight.";
			}
				if (priestess == 3) {
					document.getElementById("priestessHealth-strategy").innerHTML = "She is alert and ready.";
			}
			assignee="priestess";
		}
		else if (priestess == 0) {
			if (martian > 0) {
			$("#martian-strategy").fadeIn(2000);
				if (martian == 1) {
					document.getElementById("martianHealth-strategy").innerHTML = "She's badly injured.  The devils may well kill her this time.";
			}
			if (martian == 2) {
					document.getElementById("martianHealth-strategy").innerHTML = "She looks worse for wear but eager for blood.";
			}
				if (martian == 3) {
					document.getElementById("martiantHealth-strategy").innerHTML = "She is in peak health and raring to go.";
			};
			assignee="martian";
			}
			else if (martian == 0) {
			if (scientist >0) {
			$("#scientist-strategy").fadeIn(2000);
			if (scientist == 1) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He's hurt pretty bad, another hit might kill him.";
			}
			if (scientist == 2) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He's nursing an injury but still able to fight.";
			}
				if (scientist == 3) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He seems like he's in pretty good shape.";
			}
		assignee="scientist";
			}
			else if (scientist == 0) {
			$("#night-suicide").fadeIn(2000);
			}
		}
	}			   
};

function nightStrategy() {
	if (assignee == "priestess" && martian > 0) {
		assignee = "martian";
		if (healthProtect == "priestess") {
		$("#martian-health").addClass("no-click");	
		}
		else if (energyProtect == "priestess") {
		$("#martian-energy").addClass("no-click");	
		}
		else if (safetyProtect == "priestess") {
		$("#martian-safety").addClass("no-click");	
		}
		else if (securityProtect == "priestess") {
		$("#martian-security").addClass("no-click");	
		}
		$("#martian-strategy").fadeIn(2000);
					if (martian == 1) {
					document.getElementById("martianHealth-strategy").innerHTML = "She's badly injured.  The devils may well kill her this time.";
			}
			if (martian == 2) {
					document.getElementById("martianHealth-strategy").innerHTML = "She looks worse for wear but eager for blood.";
			}
				if (martian == 3) {
					document.getElementById("martianHealth-strategy").innerHTML = "She is in peak health and raring to go.";
			};
		$('html, body').animate({scrollTop: $("#martian-strategy").offset().top}, 500);

	}
	else if (assignee == "priestess" && martian == 0 && scientist > 0) {
			assignee = "scientist";
		if (healthProtect == "priestess" || healthProtect == "martian") {
		$("#scientist-health").addClass("no-click");	
		}
		if (energyProtect == "priestess" || energyProtect == "martian") {
		$("#scientist-energy").addClass("no-click");	
		}
		if (safetyProtect == "priestess"  || safetyProtect == "martian") {
		$("#scientist-safety").addClass("no-click");	
		}
		if (securityProtect == "priestess" || securityProtect == "martian") {
		$("#scientist-security").addClass("no-click");	
		}
		$("#scientist-strategy").fadeIn(2000);
		if (scientist == 1) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He's hurt pretty bad, another hit might kill him.";
			}
			if (scientist == 2) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He's nursing an injury but still able to fight.";
			}
				if (scientist == 3) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He seems like he's in pretty good shape.";
			}		$('html, body').animate({scrollTop: $("#scientist-strategy").offset().top}, 500);

	}
	else if (assignee == "priestess" && martian == 0 && scientist == 0) {
	nightCombat();
}
	else if (assignee == "martian" && scientist > 0) {
		assignee = "scientist";
		if (healthProtect == "priestess" || healthProtect == "martian") {
		$("#scientist-health").addClass("no-click");	
		}
		if (energyProtect == "priestess" || energyProtect == "martian") {
		$("#scientist-energy").addClass("no-click");	
		}
		if (safetyProtect == "priestess"  || safetyProtect == "martian") {
		$("#scientist-safety").addClass("no-click");	
		}
		if (securityProtect == "priestess" || securityProtect == "martian") {
		$("#scientist-security").addClass("no-click");	
		}
		$("#scientist-strategy").fadeIn(2000);
		if (scientist == 1) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He's hurt pretty bad, another hit might kill him.";
			}
			if (scientist == 2) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He's nursing an injury but still able to fight.";
			}
				if (scientist == 3) {
					document.getElementById("scientistHealth-strategy").innerHTML = "He seems like he's in pretty good shape.";
			}
			$('html, body').animate({scrollTop: $("#scientist-strategy").offset().top}, 500);

	}
	else if (assignee == "martian" && scientist == 0) {
		nightCombat();
	}
	else if (assignee == "scientist") {
		nightCombat();
	}
	else {
		Return;
	}
};

function nightCombat() {
	var readiness = security;
	$("#energy-attack").fadeIn(2000);
	if (energyProtect == "unassigned") {
	$("#energy-attack-damage").fadeIn(2000);
		if (readiness < 4) {
		$("#energy-attack-bad").fadeIn(2000);
		energy = energy -3;
		}
		else if (readiness < 7) {
		$("#energy-attack-regular").fadeIn(2000);
		energy = energy -2;
		}
		else if (readiness > 6) {
		$("#energy-attack-good").fadeIn(2000);
		energy = energy -1;
		}
	}
	else if (energyProtect == "priestess") {
		$("#energy-attack-priestess").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#energy-attack-priestess-fail").fadeIn(2000);	
			priestess = priestess -1;
			if (priestess == 0) {
				priestessKaput = true;
			}
			}
			else if (randomnumber == 1) {
				$("#energy-attack-priestess-success").fadeIn(2000);	
			}
	}
	else if (energyProtect == "martian") {
		$("#energy-attack-martian").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#energy-attack-martian-fail").fadeIn(2000);	
			martian = martian -1;
						if (martian == 0) {
				martianKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#energy-attack-martian-success").fadeIn(2000);	
			}
	}
	else if (energyProtect == "scientist") {
		$("#energy-attack-scientist").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#energy-attack-scientist-fail").fadeIn(2000);	
			scientist = scientist -1;
			if (scientist == 0) {
				scientistKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#energy-attack-scientist-success").fadeIn(2000);	
			}
	}
		$("#health-attack").fadeIn(2000);
	if (healthProtect == "unassigned") {
	$("#health-attack-damage").fadeIn(2000);
		if (readiness < 4) {
		$("#health-attack-bad").fadeIn(2000);
		health = health -3;
		}
		else if (readiness < 7) {
		$("#health-attack-regular").fadeIn(2000);
		health = health -2;
		}
		else if (readiness > 6) {
		$("#health-attack-good").fadeIn(2000);
		health = health -1;
		}
		if (health <= 0 ) {
		$("#night-death").fadeIn(2000);
		Return;
		}
	}
	else if (healthProtect == "priestess") {
		$("#health-attack-priestess").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#health-attack-priestess-fail").fadeIn(2000);	
			priestess = priestess -1;
						if (priestess == 0) {
				priestessKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#health-attack-priestess-success").fadeIn(2000);	
			}
	}
	else if (healthProtect == "martian") {
		$("#health-attack-martian").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#health-attack-martian-fail").fadeIn(2000);	
			martian = martian -1;
			if (martian == 0) {
				martianKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#health-attack-martian-success").fadeIn(2000);	
			}
	}
	else if (healthProtect == "scientist") {
		$("#health-attack-scientist").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#health-attack-scientist-fail").fadeIn(2000);	
			scientist = scientist -1;
						if (scientist == 0) {
				scientistKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#health-attack-scientist-success").fadeIn(2000);	
			}
	}
		$("#safety-attack").fadeIn(2000);
	if (safetyProtect == "unassigned") {
	$("#safety-attack-damage").fadeIn(2000);
		if (readiness < 4) {
		$("#safety-attack-bad").fadeIn(2000);
		safety = safety -3;
		}
		else if (readiness < 7) {
		$("#safety-attack-regular").fadeIn(2000);
		safety = safety -2;
		}
		else if (readiness > 6) {
		$("#safety-attack-good").fadeIn(2000);
		safety = safety -1;
		}
	}
	else if (safetyProtect == "priestess") {
		$("#safety-attack-priestess").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#safety-attack-priestess-fail").fadeIn(2000);	
			priestess = priestess -1;
			if (priestess == 0) {
				priestessKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#safety-attack-priestess-success").fadeIn(2000);	
			}
	}
	else if (safetyProtect == "martian") {
		$("#safety-attack-martian").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#safety-attack-martian-fail").fadeIn(2000);	
			martian = martian -1;
			if (martian == 0) {
				martianKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#safety-attack-martian-success").fadeIn(2000);	
			}
	}
	else if (safetyProtect == "scientist") {
		$("#safety-attack-scientist").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#safety-attack-scientist-fail").fadeIn(2000);	
			scientist = scientist -1;
						if (scientist == 0) {
				scientistKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#safety-attack-scientist-success").fadeIn(2000);	
			}
	}
		$("#security-attack").fadeIn(2000);
	if (securityProtect == "unassigned") {
	$("#security-attack-damage").fadeIn(2000);
		if (readiness < 4) {
		$("#security-attack-bad").fadeIn(2000);
		security = security -3;
		}
		else if (readiness < 7) {
		$("#security-attack-regular").fadeIn(2000);
		security = security -2;
		}
		else if (readiness > 6) {
		$("#security-attack-good").fadeIn(2000);
		security = security -1;
		}
	}
	else if (securityProtect == "priestess") {
		$("#security-attack-priestess").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#security-attack-priestess-fail").fadeIn(2000);	
			priestess = priestess -1;
			if (priestess == 0) {
				priestessKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#security-attack-priestess-success").fadeIn(2000);	
			}
	}
	else if (securityProtect == "martian") {
		$("#security-attack-martian").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#security-attack-martian-fail").fadeIn(2000);	
			martian = martian -1;
									if (martian == 0) {
				martianKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#security-attack-martian-success").fadeIn(2000);	
			}
	}
	else if (securityProtect == "scientist") {
		$("#security-attack-scientist").fadeIn(2000);
			var randomnumber=Math.floor(Math.random()*2);
			if (randomnumber == 0) {
			$("#security-attack-scientist-fail").fadeIn(2000);	
			scientist = scientist -1;
						if (scientist == 0) {
				scientistKaput = true;
			}
			}
			else if (randomnumber == 1) {
			$("#security-attack-scientist-success").fadeIn(2000);	
			}
	}
	if (martianKaput == true) {
	$("#martian-dead").fadeIn(2000);		
	}
	if (scientistKaput == true) {
	$("#scientist-dead").fadeIn(2000);		
	}
	if (priestessKaput == true) {
	$("#priestess-dead").fadeIn(2000);		
	}
	martianKaput = false;
	priestessKaput = false;
	scientistKaput = false;
	statsUpdate();
	$("#night-over").fadeIn(2000);
			$('html, body').animate({scrollTop: $("#energy-attack").offset().top}, 500);

	};

function hideAll() {
	$(".background").hide();
	$(".section").hide();
	$(".hide").hide();
};

function finalNight() {
		if (priestess == "resting") {
			priestess = 3;
		}
		if (scientist == "resting") {
			scientist = 3;
		}
		if (martian == "resting") {
			martian = 3;
		}
		zolianSupport = false;
		if (mountain == 6) {
			zolianSupport = true;
		}		
		$("#night").fadeIn(1000);
		$("#final-night").fadeIn(2000);
		if (priestess == 0 && scientist == 0 && martian == 0) {
			$("#final-night-suicide").fadeIn(2000);
		}
		else {
			if (priestess > 0) {
				$("#final-night-priestess").fadeIn(2000);
				if (temple == 6) {
				$("#final-night-priestess-success").fadeIn(2000);
				}
				else if (temple < 6) {
					if (zolianSupport == true) {
					$("#final-night-priestess-zolians").fadeIn(2000);
					zolianSupport = false;
					}
					else {
					$("#final-night-priestess-fail").fadeIn(2000);
					priestess = 0;
					}
				}		
		}
		if (martian > 0) {
				$("#final-night-martian").fadeIn(2000);
				if (forest == 6) {
				$("#final-night-martian-success").fadeIn(2000);
				}
				else if (forest < 6) {
					if (zolianSupport == true) {
					$("#final-night-martian-zolians").fadeIn(2000);
					zolianSupport = false;
					}
					else {
					$("#final-night-martian-fail").fadeIn(2000);
					martian = 0;
					}
				}		
		}
		if (scientist > 0) {
			$("#final-night-scientist").fadeIn(2000);
			if (wrecks == 6) {
				$("#final-night-scientist-success").fadeIn(2000);
			}
				else if (wrecks < 6) {
					if (zolianSupport == true) {
					$("#final-night-scientist-zolians").fadeIn(2000);
					zolianSupport = false;
					}
					else {
					$("#final-night-scientist-fail").fadeIn(2000);
					scientist = 0;
					}
				}	
		}
		if (scientist == 0) {
			$(".scientist-dead").removeClass("vanish");
		}
		else if (scientist > 0) {
			$(".scientist-alive").removeClass("vanish");
		}
				if (priestess == 0) {
			$(".priestess-dead").removeClass("vanish");
		}
		else if (priestess > 0) {
			$(".priestess-alive").removeClass("vanish");
		}
				if (martian == 0) {
			$(".martian-dead").removeClass("vanish");
		}
		else if (martian > 0) {
			$(".martian-alive").removeClass("vanish");
		}
		$("#final-night-success").fadeIn(2000);

		bigFinale();
		}};
		
		
function bigFinale() {
		$("#space2").fadeIn(1000);
		$("#wrap-up").fadeIn(2000);
		if (priestess == 0 && martian == 0 && scientist == 0) {
		$("#no-survivors").fadeIn(2000);
		Return;
		}			
		else if (priestess > 0 && martian == 0 && scientist == 0) {
		$("#one-survivor").fadeIn(2000);
		$("#priestess-survives").fadeIn(2000);
		Return;
		}
		else if (priestess == 0 && martian > 0 && scientist == 0) {
					$("#one-survivor").fadeIn(2000);
		$("#martian-survives").fadeIn(2000);
		Return;
		}
		else if (priestess == 0 && martian == 0 && scientist > 0) {
					$("#one-survivor").fadeIn(2000);
		$("#scientist-survives").fadeIn(2000);
		Return;
		}
		else {

			$("#multiple-survivors").fadeIn(2000);
		}
		if (wrecks == 6 && scientist > 0) {
			$("#scientist-ending").fadeIn(2000);
		}
		if (forest == 6 && martian > 0) {
			$("#martian-ending").fadeIn(2000);
		}
		if (temple == 6 && priestess > 0) {
			$("#priestess-ending").fadeIn(2000);
		}
		if (mountain == 6) {
			$("#you-ending").fadeIn(2000);
		}
		$("#final-ending").fadeIn(2000);
};
	
	


// Pressing Buttons

$(".begin").click(function() {
	$("#opening-sequence").hide();
	window.scrollTo(0,0);
	totalReset();
	timeCheck();
	$("#status-bar").fadeIn(2000);	
	}
);

$("#sit-rep").click(function(event) {
	event.preventDefault();
	if (sitRep == "hidden") {
	$(".overlay").show();
	$(".stats-panel").fadeIn("fast");
					document.getElementById("time-of-day").innerHTML = time;
										document.getElementById("day-number").innerHTML = day;


	if (health == 1) {
		$("#health-1").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "Be careful. One more injury will kill you.";
	}
	if (health == 2) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You can't even perform simple tasks.";
	}
		if (health == 3) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You will not be able to perform some tasks.";
	}
			if (health == 4) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
		$("#health-4").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You may not able to perform difficult tasks.";
	}
				if (health == 5) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
		$("#health-4").css("background-color", "#d20000");
		$("#health-5").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You feel a little worse for wear, but stable.";
	}
					if (health == 6) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
		$("#health-4").css("background-color", "#d20000");
		$("#health-5").css("background-color", "#d20000");
		$("#health-6").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You feel ready to handle physical tasks.";
	}
						if (health == 7) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
		$("#health-4").css("background-color", "#d20000");
		$("#health-5").css("background-color", "#d20000");
		$("#health-6").css("background-color", "#d20000");
		$("#health-7").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You feel eagerr to tackle challenges.";
	}
							if (health == 8) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
		$("#health-4").css("background-color", "#d20000");
		$("#health-5").css("background-color", "#d20000");
		$("#health-6").css("background-color", "#d20000");
		$("#health-7").css("background-color", "#d20000");
		$("#health-8").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You should help your less sturdy crewmen.";
	}
	
								if (health == 9) {
		$("#health-1").css("background-color", "#d20000");
		$("#health-2").css("background-color", "#d20000");
		$("#health-3").css("background-color", "#d20000");
		$("#health-4").css("background-color", "#d20000");
		$("#health-5").css("background-color", "#d20000");
		$("#health-6").css("background-color", "#d20000");
		$("#health-7").css("background-color", "#d20000");
		$("#health-8").css("background-color", "#d20000");
		$("#health-9").css("background-color", "#d20000");
				document.getElementById("health-description").innerHTML = "You are ready for any challenge.";
				
	}
				if (energy == 0) {
				document.getElementById("energy-description").innerHTML = "You are out of energy.";
	}
	
	if (energy == 1) {
		$("#energy-1").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "You have almost no energy left.";
	}
	if (energy == 2) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "Your energy supply is pretty pitiful.";
	}
		if (energy == 3) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "You don't have enough energy to use.";
	}
			if (energy == 4) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
		$("#energy-4").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "You don't have much, so spend it wisely.";
	}
				if (energy == 5) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
		$("#energy-4").css("background-color", "#ffa800");
		$("#energy-5").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "You have energy to spend, but not a lot.";
	}
					if (energy == 6) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
		$("#energy-4").css("background-color", "#ffa800");
		$("#energy-5").css("background-color", "#ffa800");
		$("#energy-6").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "Your energy supply is looking good.";
	}
						if (energy == 7) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
		$("#energy-4").css("background-color", "#ffa800");
		$("#energy-5").css("background-color", "#ffa800");
		$("#energy-6").css("background-color", "#ffa800");
		$("#energy-7").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "Spend this energy to overcome challenges.";
	}
							if (energy == 8) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
		$("#energy-4").css("background-color", "#ffa800");
		$("#energy-5").css("background-color", "#ffa800");
		$("#energy-6").css("background-color", "#ffa800");
		$("#energy-7").css("background-color", "#ffa800");
		$("#energy-8").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "Use your surplus to help your crewmen.";
	}
	
								if (energy == 9) {
		$("#energy-1").css("background-color", "#ffa800");
		$("#energy-2").css("background-color", "#ffa800");
		$("#energy-3").css("background-color", "#ffa800");
		$("#energy-4").css("background-color", "#ffa800");
		$("#energy-5").css("background-color", "#ffa800");
		$("#energy-6").css("background-color", "#ffa800");
		$("#energy-7").css("background-color", "#ffa800");
		$("#energy-8").css("background-color", "#ffa800");
		$("#energy-9").css("background-color", "#ffa800");
				document.getElementById("energy-description").innerHTML = "Your energy is maxed out.";
	}
				if (safety == 0) {
				document.getElementById("safety-description").innerHTML = "Your crewmen will definitely suffer attacks.";
	}
	if (safety == 1) {
		$("#safety-1").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Your crewmen will probably get attacked.";
	}
	if (safety == 2) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Crewmen will probably get attacked.";
	}
		if (safety == 3) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Crewmen are in constant danger.";
	}
			if (safety == 4) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
		$("#safety-4").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Your crewmen are somewhat safe.";
	}
				if (safety == 5) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
		$("#safety-4").css("background-color", "#00b20d");
		$("#safety-5").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Your crewmen are somewhat safe.";
	}
					if (safety == 6) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
		$("#safety-4").css("background-color", "#00b20d");
		$("#safety-5").css("background-color", "#00b20d");
		$("#safety-6").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Your crewmen are somewhat safe.";
	}
						if (safety == 7) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
		$("#safety-4").css("background-color", "#00b20d");
		$("#safety-5").css("background-color", "#00b20d");
		$("#safety-6").css("background-color", "#00b20d");
		$("#safety-7").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Crewmen will probably avoid attack.";
	}
							if (safety == 8) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
		$("#safety-4").css("background-color", "#00b20d");
		$("#safety-5").css("background-color", "#00b20d");
		$("#safety-6").css("background-color", "#00b20d");
		$("#safety-7").css("background-color", "#00b20d");
		$("#safety-8").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "Crewmen will probably avoid attack.";
	}
	
								if (safety == 9) {
		$("#safety-1").css("background-color", "#00b20d");
		$("#safety-2").css("background-color", "#00b20d");
		$("#safety-3").css("background-color", "#00b20d");
		$("#safety-4").css("background-color", "#00b20d");
		$("#safety-5").css("background-color", "#00b20d");
		$("#safety-6").css("background-color", "#00b20d");
		$("#safety-7").css("background-color", "#00b20d");
		$("#safety-8").css("background-color", "#00b20d");
		$("#safety-9").css("background-color", "#00b20d");
				document.getElementById("safety-description").innerHTML = "The field is almost secure.";
	}
	
			if (security == 0) {
				document.getElementById("security-description").innerHTML = "An attack at night will be devatasting.";
	}
	
		if (security == 1) {
		$("#security-1").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "You could not be less prepared for a night attack.";
	}
	if (security == 2) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "A night attack will do a lot of damage.";
	}
		if (security == 3) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "Improve or suffer a brutal night attack.";
	}
			if (security == 4) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
		$("#security-4").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "Night attacks could drop stats to critical levels.";
	}
				if (security == 5) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
		$("#security-4").css("background-color", "#006cff");
		$("#security-5").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "You are somewhat prepared for a night attack.";
	}
					if (security == 6) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
		$("#security-4").css("background-color", "#006cff");
		$("#security-5").css("background-color", "#006cff");
		$("#security-6").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "Optimize your defense against night attacks.";
	}
						if (security == 7) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
		$("#security-4").css("background-color", "#006cff");
		$("#security-5").css("background-color", "#006cff");
		$("#security-6").css("background-color", "#006cff");
		$("#security-7").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "You are reasonably prepared for a night attack.";
	}
							if (security == 8) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
		$("#security-4").css("background-color", "#006cff");
		$("#security-5").css("background-color", "#006cff");
		$("#security-6").css("background-color", "#006cff");
		$("#security-7").css("background-color", "#006cff");
		$("#security-8").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "A night attack will not do much harm.";
	}
	
								if (security == 9) {
		$("#security-1").css("background-color", "#006cff");
		$("#security-2").css("background-color", "#006cff");
		$("#security-3").css("background-color", "#006cff");
		$("#security-4").css("background-color", "#006cff");
		$("#security-5").css("background-color", "#006cff");
		$("#security-6").css("background-color", "#006cff");
		$("#security-7").css("background-color", "#006cff");
		$("#security-8").css("background-color", "#006cff");
		$("#security-9").css("background-color", "#006cff");
				document.getElementById("security-description").innerHTML = "You are equipped to handle night attacks.";
	}
		document.getElementById("sit-rep").innerHTML = "Hide";
		sitRep = "visible";
	
	}
	else if (sitRep == "visible") {
		$(".overlay").hide();
	$(".stats-panel").fadeOut("fast");
	sitRep = "hidden";
			document.getElementById("sit-rep").innerHTML = "More";
	}
	
	
	
	

 });

$(".overlay").click(function() {
		$(".overlay").hide();
	$(".stats-panel").fadeOut("fast");
	sitRep = "hidden";
			document.getElementById("sit-rep").innerHTML = "More";	
});

// Travel Destinations

$("#travel-shuttle").click(function() {
		if (travel == "finished") {
			Return;
		}
		else {
		travel = "finished";
	$("#travel-mountain").addClass("no-click");
	$("#travel-temple").addClass("no-click");
	$("#travel-forest").addClass("no-click");
	$("#travel-wrecks").addClass("no-click");
	if (improveHealth == "impossible") {
		$("#improve-health").addClass("no-click");
	}
	if (improveEnergy == "impossible") {
		$("#improve-energy").addClass("no-click");
	}
	if (improveSafety == "impossible") {
		$("#improve-safety").addClass("no-click");
	}
	if (improveSecurity == "impossible") {
		$("#improve-security").addClass("no-click");
	}
	$("#shuttle").fadeIn(1000);
	$("#general-conditions").fadeIn(2000);	
	$('html, body').animate({scrollTop: $("#shuttle").offset().top}, 500);
	}});

$("#travel-mountain").click(function() {
	if (travel == "finished" || mountain > 4) {
	Return;
	}
	else {
	travel = "finished";
	$("#travel-shuttle").addClass("no-click");
	shuttleTrip = "impossible";
	$("#travel-temple").addClass("no-click");
	templeTrip = "impossible";
	$("#travel-forest").addClass("no-click");
	forestTrip = "impossible";
	$("#travel-wrecks").addClass("no-click");
	wrecksTrip = "impossible";
	$("#mountain").fadeIn(1000);
	if (mountain == 0) {
	$("#mountain-intro").fadeIn("2000");
	 var randomnumber=Math.floor(Math.random()*3);
	 if (randomnumber == 0) {
	 $("#mountain-A1").fadeIn("2000");
		adventure = "mountain-A1";	 
	 }
	 else if (randomnumber == 1) {
	 $("#mountain-B1").fadeIn("2000");
		adventure = "mountain-B1";	 
	 }
	 else if (randomnumber == 2) {
	 $("#mountain-C1").fadeIn("2000");
		adventure = "mountain-C1";	 
	 }
	mountain = 1;
	}
	else if (mountain == 1) {
		if (mountainA == "open" && mountainB == "open"  && mountainC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-A1").fadeIn("2000");
		adventure = "mountain-A1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-B1").fadeIn("2000");
		adventure = "mountain-B1";	 
	 	}
		}
		else if (mountainA == "open" && mountainB == "closed"  && mountainC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-A1").fadeIn("2000");
		adventure = "mountain-A1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-C1").fadeIn("2000");
		adventure = "mountain-C1";	 
	 	}
		}
		else if (mountainA == "closed" && mountainB == "open"  && mountainC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-B1").fadeIn("2000");
		adventure = "mountain-B1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-C1").fadeIn("2000");
		adventure = "mountain-C1";	 
	 	}
		}
		else if (mountainA == "open" && mountainB == "closed"  && mountainC == "closed") {
	 	$("#mountain-A1").fadeIn("2000");
		adventure = "mountain-A1";	 
		}
		else if (mountainA == "closed" && mountainB == "open"  && mountainC == "closed") {
	 	$("#mountain-B1").fadeIn("2000");
		adventure = "mountain-B1";	 
		}
		else if (mountainA == "closed" && mountainB == "closed"  && mountainC == "open") {
	 	$("#mountain-C1").fadeIn("2000");
		adventure = "mountain-C1";	 
		}
	}
	else if (mountain == 2) {
		if (mountainA == "open" && mountainB == "open" && mountainC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	 	$("#mountain-A2").fadeIn("2000");
		adventure = "mountain-A2";	 
	 	}
	 	else if (randomnumber == 1) {
	 	$("#mountain-B2").fadeIn("2000");
		adventure = "mountain-B2";	 
	 	}
	 	else if (randomnumber == 2) {
	 	$("#mountain-C2").fadeIn("2000");
		adventure = "mountain-C2";	 
	 	}	
		}
		if (mountainA == "open" && mountainB == "open" && mountainC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-A2").fadeIn("2000");
		adventure = "mountain-A2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-B2").fadeIn("2000");
		adventure = "mountain-B2";	 
	 	}
		}
		else if (mountainA == "open" && mountainB == "closed"  && mountainC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-A2").fadeIn("2000");
		adventure = "mountain-A2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-C2").fadeIn("2000");
		adventure = "mountain-C2";	 
	 	}
		}
		else if (mountainA == "closed" && mountainB == "open"  && mountainC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-B2").fadeIn("2000");
		adventure = "mountain-B2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-C2").fadeIn("2000");
		adventure = "mountain-C2";	 
	 	}
		}
		else if (mountainA == "open" && mountainB == "closed"  && mountainC == "closed") {
	 	$("#mountain-A2").fadeIn("2000");
		adventure = "mountain-A2";	 
		}
		else if (mountainA == "closed" && mountainB == "open"  && mountainC == "closed") {
	 	$("#mountain-B2").fadeIn("2000");
		adventure = "mountain-B2";	 
		}
		else if (mountainA == "closed" && mountainB == "closed"  && mountainC == "open") {
	 	$("#mountain-C2").fadeIn("2000");
		adventure = "mountain-C2";	 
		}
	}
	else if (mountain == 3) {
		if (mountainA == "open" && mountainB == "open" && mountainC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	 	$("#mountain-A3").fadeIn("2000");
		adventure = "mountain-A3";	 
	 	}
	 	else if (randomnumber == 1) {
	 	$("#mountain-B3").fadeIn("2000");
		adventure = "mountain-B3";	 
	 	}
	 	else if (randomnumber == 2) {
	 	$("#mountain-C3").fadeIn("2000");
		adventure = "mountain-C3";	 
	 	}	
		}
		if (mountainA == "open" && mountainB == "open"  && mountainC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-A3").fadeIn("2000");
		adventure = "mountain-A3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-B3").fadeIn("2000");
		adventure = "mountain-B3";	 
	 	}
		}
		else if (mountainA == "open" && mountainB == "closed"  && mountainC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-A3").fadeIn("2000");
		adventure = "mountain-A3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-C3").fadeIn("2000");
		adventure = "mountain-C3";	 
	 	}
		}
		else if (mountainA == "closed" && mountainB == "open"  && mountainC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#mountain-B3").fadeIn("2000");
		adventure = "mountain-B3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#mountain-C3").fadeIn("2000");
		adventure = "mountain-C3";	 
	 	}
		}
		else if (mountainA == "open" && mountainB == "closed"  && mountainC == "closed") {
	 	$("#mountain-A3").fadeIn("2000");
		adventure = "mountain-A3";	 
		}
		else if (mountainA == "closed" && mountainB == "open"  && mountainC == "closed") {
	 	$("#mountain-B3").fadeIn("2000");
		adventure = "mountain-B3";	 
		}
		else if (mountainA == "closed" && mountainB == "closed"  && mountainC == "open") {
	 	$("#mountain-C3").fadeIn("2000");
		adventure = "mountain-C3";	 
		}
	}
	else if (mountain == 4) {
		$("#mountain-ending-good").fadeIn("2000");
		mountain = 6;
		encounterCheck();
	}
	$('html, body').animate({scrollTop: $("#mountain").offset().top}, 500);
	}
});


$("#travel-forest").click(function() {
	if (travel == "finished" || forest > 4) {
	Return;
	}
	else {
	travel = "finished";
	$("#travel-shuttle").addClass("no-click");
	shuttleTrip = "impossible";
	$("#travel-temple").addClass("no-click");
	templeTrip = "impossible";
	$("#travel-mountain").addClass("no-click");
	mountainTrip = "impossible";
	$("#travel-wrecks").addClass("no-click");
	wrecksTrip = "impossible";
	$("#forest").fadeIn(1000);
	if (forest == 0) {
	$("#forest-intro").fadeIn("2000");
	 var randomnumber=Math.floor(Math.random()*3);
	 if (randomnumber == 0) {
	 $("#forest-A1").fadeIn("2000");
		adventure = "forest-A1";	 
	 }
	 else if (randomnumber == 1) {
	 $("#forest-B1").fadeIn("2000");
		adventure = "forest-B1";	 
	 }
	 else if (randomnumber == 2) {
	 $("#forest-C1").fadeIn("2000");
		adventure = "forest-C1";	 
	 }
	forest = 1;
	}
	else if (forest == 1) {
		if (forestA == "open" && forestB == "open"  && forestC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-A1").fadeIn("2000");
		adventure = "forest-A1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-B1").fadeIn("2000");
		adventure = "forest-B1";	 
	 	}
		}
		else if (forestA == "open" && forestB == "closed"  && forestC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-A1").fadeIn("2000");
		adventure = "forest-A1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-C1").fadeIn("2000");
		adventure = "forest-C1";	 
	 	}
		}
		else if (forestA == "closed" && forestB == "open"  && forestC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-B1").fadeIn("2000");
		adventure = "forest-B1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-C1").fadeIn("2000");
		adventure = "forest-C1";	 
	 	}
		}
		else if (forestA == "open" && forestB == "closed"  && forestC == "closed") {
	 	$("#forest-A1").fadeIn("2000");
		adventure = "forest-A1";	 
		}
		else if (forestA == "closed" && forestB == "open"  && forestC == "closed") {
	 	$("#forest-B1").fadeIn("2000");
		adventure = "forest-B1";	 
		}
		else if (forestA == "closed" && forestB == "closed"  && forestC == "open") {
	 	$("#forest-C1").fadeIn("2000");
		adventure = "forest-C1";	 
		}
	}
	else if (forest == 2) {
		if (forestA == "open" && forestB == "open" && forestC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	 	$("#forest-A2").fadeIn("2000");
		adventure = "forest-A2";	 
	 	}
	 	else if (randomnumber == 1) {
	 	$("#forest-B2").fadeIn("2000");
		adventure = "forest-B2";	 
	 	}
	 	else if (randomnumber == 2) {
	 	$("#forest-C2").fadeIn("2000");
		adventure = "forest-C2";	 
	 	}	
		}
		if (forestA == "open" && forestB == "open" && forestC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-A2").fadeIn("2000");
		adventure = "forest-A2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-B2").fadeIn("2000");
		adventure = "forest-B2";	 
	 	}
		}
		else if (forestA == "open" && forestB == "closed"  && forestC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-A2").fadeIn("2000");
		adventure = "forest-A2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-C2").fadeIn("2000");
		adventure = "forest-C2";	 
	 	}
		}
		else if (forestA == "closed" && forestB == "open"  && forestC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-B2").fadeIn("2000");
		adventure = "forest-B2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-C2").fadeIn("2000");
		adventure = "forest-C2";	 
	 	}
		}
		else if (forestA == "open" && forestB == "closed"  && forestC == "closed") {
	 	$("#forest-A2").fadeIn("2000");
		adventure = "forest-A2";	 
		}
		else if (forestA == "closed" && forestB == "open"  && forestC == "closed") {
	 	$("#forest-B2").fadeIn("2000");
		adventure = "forest-B2";	 
		}
		else if (forestA == "closed" && forestB == "closed"  && forestC == "open") {
	 	$("#forest-C2").fadeIn("2000");
		adventure = "forest-C2";	 
		}
	}
	else if (forest == 3) {
		if (forestA == "open" && forestB == "open" && forestC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	 	$("#forest-A3").fadeIn("2000");
		adventure = "forest-A3";	 
	 	}
	 	else if (randomnumber == 1) {
	 	$("#forest-B3").fadeIn("2000");
		adventure = "forest-B3";	 
	 	}
	 	else if (randomnumber == 2) {
	 	$("#forest-C3").fadeIn("2000");
		adventure = "forest-C3";	 
	 	}	
		}
		if (forestA == "open" && forestB == "open"  && forestC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-A3").fadeIn("2000");
		adventure = "forest-A3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-B2").fadeIn("2000");
		adventure = "forest-B3";	 
	 	}
		}
		else if (forestA == "open" && forestB == "closed"  && forestC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-A3").fadeIn("2000");
		adventure = "forest-A3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-C3").fadeIn("2000");
		adventure = "forest-C3";	 
	 	}
		}
		else if (forestA == "closed" && forestB == "open"  && forestC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#forest-B3").fadeIn("2000");
		adventure = "forest-B3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#forest-C3").fadeIn("2000");
		adventure = "forest-C3";	 
	 	}
		}
		else if (forestA == "open" && forestB == "closed"  && forestC == "closed") {
	 	$("#forest-A3").fadeIn("2000");
		adventure = "forest-A3";	 
		}
		else if (forestA == "closed" && forestB == "open"  && forestC == "closed") {
	 	$("#forest-B3").fadeIn("2000");
		adventure = "forest-B3";	 
		}
		else if (forestA == "closed" && forestB == "closed"  && forestC == "open") {
	 	$("#forest-C3").fadeIn("2000");
		adventure = "forest-C3";	 
		}
	}
	else if (forest == 4) {
		$("#forest-ending-good").fadeIn("2000");
		forest = 6;
		encounterCheck();
	}
	$('html, body').animate({scrollTop: $("#forest").offset().top}, 500);
	}
});


$("#travel-temple").click(function() {
	if (travel == "finished" || temple > 4) {
	Return;
	}
	else {
	travel = "finished";
	$("#travel-shuttle").addClass("no-click");
	shuttleTrip = "impossible";
	$("#travel-forest").addClass("no-click");
	forestTrip = "impossible";
	$("#travel-mountain").addClass("no-click");
	mountainTrip = "impossible";
	$("#travel-wrecks").addClass("no-click");
	wrecksTrip = "impossible";
	$("#temple").fadeIn(1000);
	if (temple == 0) {
	$("#temple-intro").fadeIn("2000");
	 var randomnumber=Math.floor(Math.random()*3);
	 if (randomnumber == 0) {
	 $("#temple-A1").fadeIn("2000");
		adventure = "temple-A1";	 
	 }
	 else if (randomnumber == 1) {
	 $("#temple-B1").fadeIn("2000");
		adventure = "temple-B1";	 
	 }
	 else if (randomnumber == 2) {
	 $("#temple-C1").fadeIn("2000");
		adventure = "temple-C1";	 
	 }
	temple = 1;
	}
	else if (temple == 1) {
		if (templeA == "open" && templeB == "open"  && templeC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-A1").fadeIn("2000");
		adventure = "temple-A1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-B1").fadeIn("2000");
		adventure = "temple-B1";	 
	 	}
		}
		else if (templeA == "open" && templeB == "closed"  && templeC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-A1").fadeIn("2000");
		adventure = "temple-A1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-C1").fadeIn("2000");
		adventure = "temple-C1";	 
	 	}
		}
		else if (templeA == "closed" && templeB == "open"  && templeC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-B1").fadeIn("2000");
		adventure = "temple-B1";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-C1").fadeIn("2000");
		adventure = "temple-C1";	 
	 	}
		}
		else if (templeA == "open" && templeB == "closed"  && templeC == "closed") {
	 	$("#temple-A1").fadeIn("2000");
		adventure = "temple-A1";	 
		}
		else if (templeA == "closed" && templeB == "open"  && templeC == "closed") {
	 	$("#temple-B1").fadeIn("2000");
		adventure = "temple-B1";	 
		}
		else if (templeA == "closed" && templeB == "closed"  && templeC == "open") {
	 	$("#temple-C1").fadeIn("2000");
		adventure = "temple-C1";	 
		}
	}
	else if (temple == 2) {
		if (templeA == "open" && templeB == "open" && templeC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	 	$("#temple-A2").fadeIn("2000");
		adventure = "temple-A2";	 
	 	}
	 	else if (randomnumber == 1) {
	 	$("#temple-B2").fadeIn("2000");
		adventure = "temple-B2";	 
	 	}
	 	else if (randomnumber == 2) {
	 	$("#temple-C2").fadeIn("2000");
		adventure = "temple-C2";	 
	 	}	
		}
		if (templeA == "open" && templeB == "open" && templeC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-A2").fadeIn("2000");
		adventure = "temple-A2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-B2").fadeIn("2000");
		adventure = "temple-B2";	 
	 	}
		}
		else if (templeA == "open" && templeB == "closed"  && templeC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-A2").fadeIn("2000");
		adventure = "temple-A2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-C2").fadeIn("2000");
		adventure = "temple-C2";	 
	 	}
		}
		else if (templeA == "closed" && templeB == "open"  && templeC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-B2").fadeIn("2000");
		adventure = "temple-B2";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-C2").fadeIn("2000");
		adventure = "temple-C2";	 
	 	}
		}
		else if (templeA == "open" && templeB == "closed"  && templeC == "closed") {
	 	$("#temple-A2").fadeIn("2000");
		adventure = "temple-A2";	 
		}
		else if (templeA == "closed" && templeB == "open"  && templeC == "closed") {
	 	$("#temple-B2").fadeIn("2000");
		adventure = "temple-B2";	 
		}
		else if (templeA == "closed" && templeB == "closed"  && templeC == "open") {
	 	$("#temple-C2").fadeIn("2000");
		adventure = "temple-C2";	 
		}
	}
	else if (temple == 3) {
		if (templeA == "open" && templeB == "open" && templeC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	 	$("#temple-A3").fadeIn("2000");
		adventure = "temple-A3";	 
	 	}
	 	else if (randomnumber == 1) {
	 	$("#temple-B3").fadeIn("2000");
		adventure = "temple-B3";	 
	 	}
	 	else if (randomnumber == 2) {
	 	$("#temple-C3").fadeIn("2000");
		adventure = "temple-C3";	 
	 	}	
		}
		if (templeA == "open" && templeB == "open"  && templeC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-A3").fadeIn("2000");
		adventure = "temple-A3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-B2").fadeIn("2000");
		adventure = "temple-B3";	 
	 	}
		}
		else if (templeA == "open" && templeB == "closed"  && templeC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-A3").fadeIn("2000");
		adventure = "temple-A3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-C3").fadeIn("2000");
		adventure = "temple-C3";	 
	 	}
		}
		else if (templeA == "closed" && templeB == "open"  && templeC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#temple-B3").fadeIn("2000");
		adventure = "temple-B3";	 
		 }
	 	else if (randomnumber == 1) {
	 	$("#temple-C3").fadeIn("2000");
		adventure = "temple-C3";	 
	 	}
		}
		else if (templeA == "open" && templeB == "closed"  && templeC == "closed") {
	 	$("#temple-A3").fadeIn("2000");
		adventure = "temple-A3";	 
		}
		else if (templeA == "closed" && templeB == "open"  && templeC == "closed") {
	 	$("#temple-B3").fadeIn("2000");
		adventure = "temple-B3";	 
		}
		else if (templeA == "closed" && templeB == "closed"  && templeC == "open") {
	 	$("#temple-C3").fadeIn("2000");
		adventure = "temple-C3";	 
		}
	}
	else if (temple == 4) {
		$("#temple-ending-good").fadeIn("2000");
		temple = 6;
		encounterCheck();
	}
	$('html, body').animate({scrollTop: $("#temple").offset().top}, 500);
	}
});


$("#travel-wrecks").click(function() {
	if (travel == "finished" || wrecks > 4) {
	Return;
	}
	else {
	travel = "finished";
	$("#travel-shuttle").addClass("no-click");
	shuttleTrip = "impossible";
	$("#travel-forest").addClass("no-click");
	forestTrip = "impossible";
	$("#travel-mountain").addClass("no-click");
	mountainTrip = "impossible";
	$("#travel-temple").addClass("no-click");
	templeTrip = "impossible";
	$("#wrecks").fadeIn(1000);
	if (wrecks == 0) {
	$("#wrecks-intro").fadeIn("2000");
	 var randomnumber=Math.floor(Math.random()*3);
	 if (randomnumber == 0) {
	  $("#wrecks").addClass("wrecks-mountain");
	 $("#wrecks-A1").fadeIn("2000");
		adventure = "wrecks-A1";	 
	 }
	 else if (randomnumber == 1) {
		 	  $("#wrecks").addClass("wrecks-temple");

	 $("#wrecks-B1").fadeIn("2000");
		adventure = "wrecks-B1";	 
	 }
	 else if (randomnumber == 2) {
		 	  $("#wrecks").addClass("wrecks-forest");
	 $("#wrecks-C1").fadeIn("2000");
		adventure = "wrecks-C1";	 
	 }
	wrecks = 1;
	}
	else if (wrecks == 1) {
		if (wrecksA == "open" && wrecksB == "open"  && wrecksC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A1").fadeIn("2000");
		adventure = "wrecks-A1";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B1").fadeIn("2000");
		adventure = "wrecks-B1";	 
	 	}
		}
		else if (wrecksA == "open" && wrecksB == "closed"  && wrecksC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
			    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A1").fadeIn("2000");
		adventure = "wrecks-A1";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C1").fadeIn("2000");
		adventure = "wrecks-C1";	 
	 	}
		}
		else if (wrecksA == "closed" && wrecksB == "open"  && wrecksC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B1").fadeIn("2000");
		adventure = "wrecks-B1";	 
		 }
	 	else if (randomnumber == 1) {
						$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C1").fadeIn("2000");
		adventure = "wrecks-C1";	 
	 	}
		}
		else if (wrecksA == "open" && wrecksB == "closed"  && wrecksC == "closed") {
			    $("#wrecks").addClass("wrecks-mountain");

	 	$("#wrecks-A1").fadeIn("2000");
		adventure = "wrecks-A1";	 
		}
		else if (wrecksA == "closed" && wrecksB == "open"  && wrecksC == "closed") {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B1").fadeIn("2000");
		adventure = "wrecks-B1";	 
		}
		else if (wrecksA == "closed" && wrecksB == "closed"  && wrecksC == "open") {
						$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C1").fadeIn("2000");
		adventure = "wrecks-C1";	 
		}
	}
	else if (wrecks == 2) {
		if (wrecksA == "open" && wrecksB == "open" && wrecksC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
				    $("#wrecks").addClass("wrecks-mountain");

	 	$("#wrecks-A2").fadeIn("2000");
		adventure = "wrecks-A2";	 
	 	}
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B2").fadeIn("2000");
		adventure = "wrecks-B2";	 
	 	}
	 	else if (randomnumber == 2) {
						$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C2").fadeIn("2000");
		adventure = "wrecks-C2";	 
	 	}	
		}
		if (wrecksA == "open" && wrecksB == "open" && wrecksC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
				    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A2").fadeIn("2000");
		adventure = "wrecks-A2";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B2").fadeIn("2000");
		adventure = "wrecks-B2";	 
	 	}
		}
		else if (wrecksA == "open" && wrecksB == "closed"  && wrecksC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
				    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A2").fadeIn("2000");
		adventure = "wrecks-A2";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C2").fadeIn("2000");
		adventure = "wrecks-C2";	 
	 	}
		}
		else if (wrecksA == "closed" && wrecksB == "open"  && wrecksC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B2").fadeIn("2000");
		adventure = "wrecks-B2";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C2").fadeIn("2000");
		adventure = "wrecks-C2";	 
	 	}
		}
		else if (wrecksA == "open" && wrecksB == "closed"  && wrecksC == "closed") {
		    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A2").fadeIn("2000");
		adventure = "wrecks-A2";	 
		}
		else if (wrecksA == "closed" && wrecksB == "open"  && wrecksC == "closed") {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B2").fadeIn("2000");
		adventure = "wrecks-B2";	 
		}
		else if (wrecksA == "closed" && wrecksB == "closed"  && wrecksC == "open") {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C2").fadeIn("2000");
		adventure = "wrecks-C2";	 
		}
	}
	else if (wrecks == 3) {
		if (wrecksA == "open" && wrecksB == "open" && wrecksC == "open") {	
		var randomnumber=Math.floor(Math.random()*3);
	 	if (randomnumber == 0) {
	    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A3").fadeIn("2000");
		adventure = "wrecks-A3";	 
	 	}
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B3").fadeIn("2000");
		adventure = "wrecks-B3";	 
	 	}
	 	else if (randomnumber == 2) {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C3").fadeIn("2000");
		adventure = "wrecks-C3";	 
	 	}	
		}
		if (wrecksA == "open" && wrecksB == "open"  && wrecksC == "closed") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	    $("#wrecks").addClass("wrecks-mountain");

	 	$("#wrecks-A3").fadeIn("2000");
		adventure = "wrecks-A3";	 
		 }
	 	else if (randomnumber == 1) {
		$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B3").fadeIn("2000");
		adventure = "wrecks-B3";	 
	 	}
		}
		else if (wrecksA == "open" && wrecksB == "closed"  && wrecksC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
		    $("#wrecks").addClass("wrecks-mountain");
	 	$("#wrecks-A3").fadeIn("2000");
		adventure = "wrecks-A3";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C3").fadeIn("2000");
		adventure = "wrecks-C3";	 
	 	}
		}
		else if (wrecksA == "closed" && wrecksB == "open"  && wrecksC == "open") {
	 	var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
		$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B3").fadeIn("2000");
		adventure = "wrecks-B3";	 
		 }
	 	else if (randomnumber == 1) {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C3").fadeIn("2000");
		adventure = "wrecks-C3";	 
	 	}
		}
		else if (wrecksA == "open" && wrecksB == "closed"  && wrecksC == "closed") {
	 	$("#wrecks").addClass("wrecks-mountain");
		$("#wrecks-A3").fadeIn("2000");
		adventure = "wrecks-A3";	 
		}
		else if (wrecksA == "closed" && wrecksB == "open"  && wrecksC == "closed") {
		$("#wrecks").addClass("wrecks-temple");
	 	$("#wrecks-B3").fadeIn("2000");
		adventure = "wrecks-B3";	 
		}
		else if (wrecksA == "closed" && wrecksB == "closed"  && wrecksC == "open") {
			$("#wrecks").addClass("wrecks-forest");
	 	$("#wrecks-C3").fadeIn("2000");
		adventure = "wrecks-C3";	 
		}
	}
	else if (wrecks == 4) {
		$("#wrecks-ending-good").fadeIn("2000");
		wrecks = 6;
		encounterCheck();
	}
	$('html, body').animate({scrollTop: $("#wrecks").offset().top}, 500);
	}
});


$("#improve-health").click(function() {
		if (order == "finished" || improveHealth == "impossible") {
			Return;
		}
		else {					
		$("#improve-energy").addClass("no-click");
		$("#improve-safety").addClass("no-click");
		$("#improve-security").addClass("no-click");
		$(".suicide").addClass("no-click");				
		var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#health-fail").fadeIn(500); 
				$('html, body').animate({scrollTop: $("#health-fail").offset().top}, 500);

		 }
	 	else if (randomnumber == 1) {
		health = health +1;
	 	$("#health-success").fadeIn(500);
				$('html, body').animate({scrollTop: $("#health-success").offset().top}, 500);

		statsUpdate();
	 	}
		order = false;
		improveHealth = "impossible";
		encounterCheck();
		}
});

$("#improve-energy").click(function() {
		if (order == "finished" || improveEnergy == "impossible") {
			Return;
		}
		else {					
		$("#improve-health").addClass("no-click");
		$("#improve-safety").addClass("no-click");
		$("#improve-security").addClass("no-click");
		$(".suicide").addClass("no-click");				
		var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#energy-fail").fadeIn(500); 
				$('html, body').animate({scrollTop: $("#energy-fail").offset().top}, 500);

		 }
	 	else if (randomnumber == 1) {
		energy = energy +1;
	 	$("#energy-success").fadeIn(500);
				$('html, body').animate({scrollTop: $("#energy-success").offset().top}, 500);

		statsUpdate();
	 	}
		order = "finished";
		improveEnergy = "impossible";
		encounterCheck();
		}
});

$("#improve-safety").click(function() {
		if (order == "finished" || improveSafety == "impossible") {
			Return;
		}
		else {					
		$("#improve-health").addClass("no-click");
		$("#improve-energy").addClass("no-click");
		$("#improve-security").addClass("no-click");
		$(".suicide").addClass("no-click");				
		var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#safety-fail").fadeIn(500);
		$('html, body').animate({scrollTop: $("#safety-fail").offset().top}, 500);
		 }
	 	else if (randomnumber == 1) {
		safety = safety +1;
	 	$("#safety-success").fadeIn(500);
				$('html, body').animate({scrollTop: $("#safety-success").offset().top}, 500);

		statsUpdate();
	 	}
		order = "finished";
		improveSafety = "impossible";
		encounterCheck();
		}
});

$("#improve-security").click(function() {
		if (order == "finished" || improveSecurity == "impossible") {
			Return;
		}
		else {					
		$("#improve-health").addClass("no-click");
		$("#improve-energy").addClass("no-click");
		$("#improve-safety").addClass("no-click");
		$(".suicide").addClass("no-click");				
		var randomnumber=Math.floor(Math.random()*2);
	 	if (randomnumber == 0) {
	 	$("#security-fail").fadeIn(500);
				$('html, body').animate({scrollTop: $("#security-fail").offset().top}, 500);

		 }
	 	else if (randomnumber == 1) {
		security = security +1;
	 	$("#security-success").fadeIn(500);
				$('html, body').animate({scrollTop: $("#security-success").offset().top}, 500);

		statsUpdate();
	 	}
		order = "finished";
		improveSecurity = "impossible";
		encounterCheck();
		}
});

$(".suicide").click(function() {
$("#status-bar").hide();	
hideAll();
window.scrollTo(0,0);
$("body").removeClass("morning");
$("body").removeClass("afternoon");
$("body").removeClass("dusk");
$("body").addClass("night");
$("#opening-sequence").fadeIn(2000);
$("#welcome-back").fadeIn(2000);
 });

$(".ready").click(function() {
	hideAll();
	window.scrollTo(0,0);
	$(".health-error-spend").removeClass("error");
	$(".health-error-risk").removeClass("error");
	$(".energy-error-spend").removeClass("error");
	$(".energy-error-risk").removeClass("error");
	$(".safety-error-risk").removeClass("error");
	$(".security-error-risk").removeClass("error");
	$("#wrecks").removeClass("wrecks-mountain");
	$("#wrecks").removeClass("wrecks-temple");
	$("#wrecks").removeClass("wrecks-forest");
	$(".risk").removeClass("no-click");
	$(".dismiss").removeClass("no-click");
	$(".spend").removeClass("no-click");
	$("#check-in").addClass("vanish");

			
	// Risk, Spend and Dismiss
	
	risk = "possible";
	spend = "possible";
	dismiss = "possible";
	
	if (time == "Morning") {
		time = "Afternoon";
	}
	else if (time == "Afternoon") {
		time = "Dusk";
	}
	else if (time == "Dusk") {
		time = "Night";
	}
	yesClick();
	timeCheck();
	});


$(".sleep").click(function() {
	hideAll();
	window.scrollTo(0,0);
	yesClick();
	day = day +1;
	$("body").removeClass("dusk");
	time = "Morning";
	dayReset();
	timeCheck();
	});

// Risk, Spend, Dismiss

$(".dismiss").click(function() {
	if (dismiss == "possible") {
	$(".risk").addClass("no-click");
	$(".spend").addClass("no-click");
	if (adventure == "mountain-A1") {
	mountainA = "closed";
	$("#mountain-A1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-A1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-B1") {
	mountainB = "closed";
	$("#mountain-B1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-B1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-C1") {
	mountainC = "closed";
	$("#mountain-C1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-C1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-A2") {
	mountainA = "closed";
	$("#mountain-A2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-A2-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-B2") {
	mountainB = "closed";
	$("#mountain-B2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-B2-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-C2") {
	mountainC = "closed";
	$("#mountain-C2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-C2-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-A3") {
	mountainA = "closed";
	$("#mountain-A3-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-A3-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-B3") {
	mountainB = "closed";
	$("#mountain-B3-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-B3-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "mountain-C3") {
	mountainC = "closed";
	$("#mountain-C3-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-C3-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-A1") {
	templeA = "closed";
	$("#temple-A1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-A1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-B1") {
	templeB = "closed";
	$("#temple-B1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-B1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-C1") {
	templeC = "closed";
	$("#temple-C1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-C1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-A2") {
	templeA = "closed";
	$("#temple-A2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-A2-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-B2") {
	templeB = "closed";
	$("#temple-B2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-B2-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-C2") {
	templeC = "closed";
	$("#temple-C2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-C2-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-A3") {
	templeA = "closed";
	$("#temple-A3-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-A3-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-B3") {
	templeB = "closed";
	$("#temple-B3-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-B3-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "temple-C3") {
	templeC = "closed";
	$("#temple-C3-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-C3-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "forest-A1") {
	forestA = "closed";
	$("#forest-A1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#forest-A1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "forest-B1") {
	forestB = "closed";
	$("#forest-B1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#forest-B1-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "forest-C1") {
	forestC = "closed";
	$("#forest-C1-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#forest-C1-dismiss").offset().top -15}, 500);
	}
	else if (adventure == "forest-A2") {
	forestA = "closed";
	$("#forest-A2-dismiss").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#forest-A2-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "forest-B2") {
	forestB = "closed";
	$("#forest-B2-dismiss").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-B2-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "forest-C2") {
	forestC = "closed";
	$("#forest-C2-dismiss").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-C2-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "forest-A3") {
	forestA = "closed";
	$("#forest-A3-dismiss").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-A3-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "forest-B3") {
	forestB = "closed";
	$("#forest-B3-dismiss").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-B3-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "forest-C3") {
	forestC = "closed";
	$("#forest-C3-dismiss").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-C3-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-A1") {
	wrecksA = "closed";
	$("#wrecks-A1-dismiss").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#wrecks-A1-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-B1") {
	wrecksB = "closed";
	$("#wrecks-B1-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-B1-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-C1") {
	wrecksC = "closed";
	$("#wrecks-C1-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-C1-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-A2") {
	wrecksA = "closed";
	$("#wrecks-A2-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-A2-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-B2") {
	wrecksB = "closed";
	$("#wrecks-B2-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-B2-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-C2") {
	wrecksC = "closed";
	$("#wrecks-C2-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-C2-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-A3") {
	wrecksA = "closed";
	$("#wrecks-A3-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-A3-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-B3") {
	wrecksB = "closed";
	$("#wrecks-B3-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-B3-dismiss").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-C3") {
	wrecksC = "closed";
	$("#wrecks-C3-dismiss").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-C3-dismiss").offset().top -15}, 500);

	}
	betrayalCheck();
	} else {
		Return;
	}
				dismiss = "impossible";
			risk = "impossible";
			spend = "impossible";
});

$(".risk").click(function() {
	riskCheck();
		$(".dismiss").addClass("no-click");
	$(".spend").addClass("no-click");
	var randomnumber=Math.floor(Math.random()*2);
	if (adventure == "mountain-A1") {
		$("#mountain-A1-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#mountain-A1-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				health = health - 1;
				mountainA = "closed";
				if (health == 0) {
					$("#death").fadeIn("1000");
					$("#you-died").fadeIn("2000");
					Return;
				}
				else {
				$("#mountain-A1-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				energy = energy + 1;
				mountain = 2;
				levelUp();
				$("#mountain-A1-success").fadeIn("2000");
				$("#mountain-A1-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-B1") {
		$("#mountain-B1-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-B1-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				safety = safety - 1;
				mountainB = "closed";
				$("#mountain-B1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				energy = energy + 1;
				mountain = 2;
				levelUp();
				$("#mountain-B1-success").fadeIn("2000");
				$("#mountain-B1-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-C1") {
		$("#mountain-C1-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-C1-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				security = security - 1;
				patrol = "lost";
				mountainC = "closed";
				$("#mountain-C1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				energy = energy + 1;
				mountain = 2;
				levelUp();
				$("#mountain-C1-success").fadeIn("2000");
				$("#mountain-C1-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-A2") {
		$("#mountain-A2-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-A2-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				health = health - 2;
				mountainA = "closed";
				if (health == 0) {
					$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
					Return;
				}
				else {
				$("#mountain-A2-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				energy = energy + 2;
				mountain = 3;
				levelUp();
				$("#mountain-A2-success").fadeIn("2000");
				$("#mountain-A2-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-B2") {
		$("#mountain-B2-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-B2-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				safety = safety - 2;
				mountainB = "closed";
				$("#mountain-B2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				energy = energy + 2;
				mountain = 3;
				levelUp();
				$("#mountain-B2-success").fadeIn("2000");
				$("#mountain-B2-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-C2") {
		$("#mountain-C2-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-C2-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				security = security - 2;
				mountainC = "closed";
				patrol = "lost";
				$("#mountain-C2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				energy = energy + 2;
				mountain = 3;
				levelUp();
				$("#mountain-C2-success").fadeIn("2000");
				$("#mountain-C2-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-A3") {
		$("#mountain-A3-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-A3-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				health = health - 3;
				mountainA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#mountain-A3-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				energy = energy + 3;
				mountain = 4;
				$("#mountain-A3-success").fadeIn("2000");
				$("#mountain-A3-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-B3") {
		$("#mountain-B3-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-B3-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				safety = safety - 3;
				mountainB = "closed";
				$("#mountain-B3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				energy = energy + 3;
				mountain = 4;
				$("#mountain-B3-success").fadeIn("2000");
				$("#mountain-B3-result").fadeIn("2000");
			}
		}
	else if (adventure == "mountain-C3") {
		$("#mountain-C3-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#mountain-C3-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				security = security - 3;
				mountainC = "closed";
				patrol = "lost";
				$("#mountain-C3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				energy = energy + 3;
				mountain = 4;
				$("#mountain-C3-success").fadeIn("2000");
				$("#mountain-C3-result").fadeIn("2000");
			}
		}
if (adventure == "temple-A1") {
		$("#temple-A1-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#temple-A1-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				energy = energy - 1;
				templeA = "closed";
				$("#temple-A1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 1;
				temple = 2;
				levelUp();
				$("#temple-A1-success").fadeIn("2000");
				$("#temple-A1-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-B1") {
		$("#temple-B1-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-B1-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				safety = safety - 1;
				templeB = "closed";
				$("#temple-B1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 1;
				temple = 2;
				levelUp();
				$("#temple-B1-success").fadeIn("2000");
				$("#temple-B1-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-C1") {
		$("#temple-C1-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-C1-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				security = security - 1;
				templeC = "closed";
				patrol = "lost";
				$("#temple-C1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 1;
				temple = 2;
				levelUp();
				$("#temple-C1-success").fadeIn("2000");
				$("#temple-C1-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-A2") {
		$("#temple-A2-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-A2-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				energy = energy - 2;
				templeA = "closed";
				$("#temple-A2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 2;
				temple = 3;
				levelUp();
				$("#temple-A2-success").fadeIn("2000");
				$("#temple-A2-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-B2") {
		$("#temple-B2-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-B2-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				safety = safety - 2;
				templeB = "closed";
				$("#temple-B2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 2;
				temple = 3;
				levelUp();
				$("#temple-B2-success").fadeIn("2000");
				$("#temple-B2-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-C2") {
		$("#temple-C2-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-C2-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				security = security - 2;
				templeC = "closed";
				patrol = "lost";
				$("#temple-C2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 2;
				temple = 3;
				levelUp();
				$("#temple-C2-success").fadeIn("2000");
				$("#temple-C2-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-A3") {
		$("#temple-A3-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-A3-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				energy = energy - 3;
				templeA = "closed";
				$("#temple-A3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 3;
				temple = 4;
				$("#temple-A3-success").fadeIn("2000");
				$("#temple-A3-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-B3") {
		$("#temple-B3-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-B3-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				safety = safety - 3;
				templeB = "closed";
				$("#temple-B3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 3;
				temple = 4;
				$("#temple-B3-success").fadeIn("2000");
				$("#temple-B3-result").fadeIn("2000");
			}
		}
	else if (adventure == "temple-C3") {
		$("#temple-C3-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-C3-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				security = security - 3;
				templeC = "closed";
				patrol = "lost";
				$("#temple-C3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				health = health + 3;
				temple = 4;
				$("#temple-C3-success").fadeIn("2000");
				$("#temple-C3-result").fadeIn("2000");
			}
		}
if (adventure == "forest-A1") {
		$("#forest-A1-risk").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-A1-risk").offset().top -15}, 500);
			if (randomnumber == 0) {
				health = health - 1;
				forestA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#forest-A1-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				safety = safety + 1;
				forest = 2;
				levelUp();
				$("#forest-A1-success").fadeIn("2000");
				$("#forest-A1-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-B1") {
		$("#forest-B1-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-B1-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				energy = energy - 1;
				forestB = "closed";
				$("#forest-B1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				safety = safety + 1;
				forest = 2;
				levelUp();
				$("#forest-B1-success").fadeIn("2000");
				$("#forest-B1-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-C1") {
		$("#forest-C1-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-C1-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				security = security - 1;
				forestC = "closed";
				patrol = "lost";
				$("#forest-C1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				safety = safety + 1;
				forest = 2;
				levelUp();
				$("#forest-C1-success").fadeIn("2000");
				$("#forest-C1-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-A2") {
		$("#forest-A2-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-A2-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				health = health - 2;
				forestA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#forest-A2-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				safety = safety + 2;
				forest = 3;
				levelUp();
				$("#forest-A2-success").fadeIn("2000");
				$("#forest-A2-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-B2") {
		$("#forest-B2-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-B2-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				energy = energy - 2;
				forestB = "closed";
				$("#forest-B2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				safety = safety + 2;
				forest = 3;
				levelUp();
				$("#forest-B2-success").fadeIn("2000");
				$("#forest-B2-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-C2") {
		$("#forest-C2-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-C2-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				security = security - 2;
				forestC = "closed";
				patrol = "lost";
				$("#forest-C2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				safety = safety + 2;
				forest = 3;
				levelUp();
				$("#forest-C2-success").fadeIn("2000");
				$("#forest-C2-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-A3") {
		$("#forest-A3-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-A3-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				health = health - 3;
				forestA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#forest-A3-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				safety = safety + 3;
				forest = 4;
				$("#forest-A3-success").fadeIn("2000");
				$("#forest-A3-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-B3") {
		$("#forest-B3-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-B3-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				energy = energy - 3;
				forestB = "closed";
				$("#forest-B3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				safety = safety + 3;
				forest = 4;
				$("#forest-B3-success").fadeIn("2000");
				$("#forest-B3-result").fadeIn("2000");
			}
		}
	else if (adventure == "forest-C3") {
		$("#forest-C3-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#forest-C3-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				security = security - 3;
				forestC = "closed";
				patrol = "lost";
				$("#forest-C3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				safety = safety + 3;
				forest = 4;
				$("#forest-C3-success").fadeIn("2000");
				$("#forest-C3-result").fadeIn("2000");
			}
		}
if (adventure == "wrecks-A1") {
		$("#wrecks-A1-risk").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-A1-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				health = health - 1;
				wrecksA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#wrecks-A1-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				security = security + 1;
				wrecks = 2;
				levelUp();
				$("#wrecks-A1-success").fadeIn("2000");
				$("#wrecks-A1-result").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-B1") {
		$("#wrecks-B1-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-B1-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				energy = energy - 1;
				wrecksB = "closed";
				$("#wrecks-B1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				security = security + 1;
				wrecks = 2;
				levelUp();
				$("#wrecks-B1-success").fadeIn("2000");
				$("#wrecks-B1-result").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-C1") {
		$("#wrecks-C1-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-C1-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				safety = safety - 1;
				wrecksC = "closed";
				$("#wrecks-C1-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				security = security + 1;
				wrecks = 2;
				levelUp();
				$("#wrecks-C1-success").fadeIn("2000");
				$("#wrecks-C1-result").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-A2") {
		$("#wrecks-A2-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-A2-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				health = health - 2;
				wrecksA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#wrecks-A2-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				security = security + 2;
				wrecks = 3;
				levelUp();
				$("#wrecks-A2-success").fadeIn("2000");
				$("#wrecks-A2-result").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-B2") {
		$("#wrecks-B2-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-B2-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				energy = energy - 2;
				wrecksB = "closed";
				$("#wrecks-B2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				security = security + 2;
				wrecks = 3;
				levelUp();
				$("#wrecks-B2-success").fadeIn("2000");
				$("#wrecks-B2-result").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-C2") {
		$("#wrecks-C2-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-C2-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				safety = safety - 2;
				wrecksC = "closed";
				$("#wrecks-C2-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				security = security + 2;
				wrecks = 3;
				levelUp();
				$("#wrecks-C2-success").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-A3") {
		$("#wrecks-A3-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-A3-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				health = health - 3;
				wrecksA = "closed";
				if (health == 0) {
				$("#death").fadeIn("1000");
$("#you-died").fadeIn("2000");
				Return;
				}
				else {
				$("#wrecks-A3-fail").fadeIn("2000");
				}
			}
			else if (randomnumber == 1) {
				security = security + 3;
				wrecks = 4;
				$("#wrecks-A3-success").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-B3") {
		$("#wrecks-B3-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-B3-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				energy = energy - 3;
				wrecksB = "closed";
				$("#wrecks-B3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				security = security + 3;
				wrecks = 4;
				$("#wrecks-B3-success").fadeIn("2000");
			}
		}
	else if (adventure == "wrecks-C3") {
		$("#wrecks-C3-risk").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#wrecks-C3-risk").offset().top -15}, 500);

			if (randomnumber == 0) {
				safety = safety - 3;
				wrecksC = "closed";
				$("#wrecks-C3-fail").fadeIn("2000");
			}
			else if (randomnumber == 1) {
				security = security + 3;
				wrecks = 4;
				$("#wrecks-C3-success").fadeIn("2000");
			}
		}
		statsUpdate();
		betrayalCheck();
					dismiss = "impossible";
			risk = "impossible";
			spend = "impossible";
});

$(".spend").click(function() {
	spendCheck();
			$(".dismiss").addClass("no-click");
	$(".risk").addClass("no-click");
	if (adventure == "mountain-A1") {
	mountain = 2;
	levelUp();
	health = health - 2;
	energy = energy + 1;
	$("#mountain-A1-spend").fadeIn("2000");
	$("#mountain-A1-risk").fadeIn("2000");
	$("#mountain-A1-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-A1-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-B1") {
	mountain = 2;
	levelUp();
	health = health - 2;
	energy = energy + 1;
	$("#mountain-B1-spend").fadeIn("2000");
	$("#mountain-B1-risk").fadeIn("2000");
	$("#mountain-B1-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-B1-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-C1") {
	mountain = 2;
	levelUp();
	health = health - 2;
	energy = energy + 1;
	$("#mountain-C1-spend").fadeIn("2000");
	$("#mountain-C1-risk").fadeIn("2000");
	$("#mountain-C1-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-C1-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-A2") {
	mountain = 3;
	levelUp();
	health = health - 3;
	energy = energy + 2;
	$("#mountain-A2-spend").fadeIn("2000");
	$("#mountain-A2-risk").fadeIn("2000");
	$("#mountain-A2-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-A2-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-B2") {
	mountain = 3;
	levelUp();
	health = health - 3;
	energy = energy + 2;
	$("#mountain-B2-spend").fadeIn("2000");
	$("#mountain-B2-risk").fadeIn("2000");
	$("#mountain-B2-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-B2-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-C2") {
	mountain = 3;
	levelUp();
	health = health - 3;
	energy = energy + 2;
	$("#mountain-C2-spend").fadeIn("2000");
	$("#mountain-C2-risk").fadeIn("2000");
	$("#mountain-C2-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-C2-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-A3") {
	mountain = 4;
	health = health - 4;
	energy = energy + 3;
	$("#mountain-A3-spend").fadeIn("2000");
	$("#mountain-A3-risk").fadeIn("2000");
	$("#mountain-A3-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-A3-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-B3") {
	mountain = 4;
	health = health - 4;
	energy = energy + 3;
	$("#mountain-B3-spend").fadeIn("2000");
	$("#mountain-B3-risk").fadeIn("2000");
	$("#mountain-B3-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-B3-spend").offset().top -15}, 500);
	}
	else if (adventure == "mountain-C3") {
	mountain = 4;
	health = health - 4;
	energy = energy + 3;
	$("#mountain-C3-spend").fadeIn("2000");
	$("#mountain-C3-risk").fadeIn("2000");
	$("#mountain-C3-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#mountain-C3-spend").offset().top -15}, 500);
	}
	else if (adventure == "temple-A1") {
	temple = 2;
	levelUp();
	energy = energy - 2;
	health = health + 1;
	$("#temple-A1-spend").fadeIn("2000");
	$("#temple-A1-risk").fadeIn("2000");
	$("#temple-A1-success").fadeIn("2000");
	$('html, body').animate({scrollTop: $("#temple-A1-spend").offset().top -15}, 500);
	}
	else if (adventure == "temple-B1") {
	temple = 2;
	energy = energy - 2;
	health = health + 1;
	$("#temple-B1-spend").fadeIn("2000");
	$("#temple-B1-risk").fadeIn("2000");
	$("#temple-B1-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-B1-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-C1") {
	temple = 2;
	levelUp();
	energy = energy - 2;
	health = health + 1;
	$("#temple-C1-spend").fadeIn("2000");
	$("#temple-C1-risk").fadeIn("2000");
	$("#temple-C1-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-C1-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-A2") {
	temple = 3;
	levelUp();
	energy = energy - 3;
	health = health + 2;
	$("#temple-A2-spend").fadeIn("2000");
	$("#temple-A2-risk").fadeIn("2000");
	$("#temple-A2-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-A2-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-B2") {
	temple = 3;
	levelUp();
	energy = energy - 3;
	health = health + 2;
	$("#temple-B2-spend").fadeIn("2000");
	$("#temple-B2-risk").fadeIn("2000");
	$("#temple-B2-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-B2-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-C2") {
	temple = 3;
	levelUp();
	energy = energy - 3;
	health = health + 2;
	$("#temple-C2-spend").fadeIn("2000");
	$("#temple-C2-risk").fadeIn("2000");
	$("#temple-C2-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-C2-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-A3") {
	temple = 4;
	energy = energy - 4;
	health = health + 3;
	$("#temple-A3-spend").fadeIn("2000");
	$("#temple-A3-risk").fadeIn("2000");
	$("#temple-A3-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-A3-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-B3") {
	temple = 4;
	energy = energy - 4;
	health = health + 3;
	$("#temple-B3-spend").fadeIn("2000");
	$("#temple-B3-risk").fadeIn("2000");
	$("#temple-B3-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-B3-spend").offset().top -15}, 500);

	}
	else if (adventure == "temple-C3") {
	temple = 4;
	energy = energy - 4;
	health = health + 3;
	$("#temple-C3-spend").fadeIn("2000");
	$("#temple-C3-risk").fadeIn("2000");
	$("#temple-C3-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#temple-C3-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-A1") {
	forest = 2;
	levelUp();
	energy = energy - 2;
	safety = safety + 1;
	$("#forest-A1-spend").fadeIn("2000");
	$("#forest-A1-risk").fadeIn("2000");
	$("#forest-A1-success").fadeIn("2000");
		$('html, body').animate({scrollTop: $("#forest-A1-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-B1") {
	forest = 2;
	levelUp();
	energy = energy - 2;
	safety = safety + 1;
	$("#forest-B1-spend").fadeIn("2000");
	$("#forest-B1-risk").fadeIn("2000");
	$("#forest-B1-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-B1-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-C1") {
	forest = 2;
	levelUp();
	energy = energy - 2;
	safety = safety + 1;
	$("#forest-C1-spend").fadeIn("2000");
	$("#forest-C1-risk").fadeIn("2000");
	$("#forest-C1-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-C1-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-A2") {
	forest = 3;
	levelUp();
	energy = energy - 3;
	safety = safety + 2;
	$("#forest-A2-spend").fadeIn("2000");
	$("#forest-A2-risk").fadeIn("2000");
	$("#forest-A2-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-A2-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-B2") {
	forest = 3;
	levelUp();
	energy = energy - 3;
	safety = safety + 2;
	$("#forest-B2-spend").fadeIn("2000");
	$("#forest-B2-risk").fadeIn("2000");
	$("#forest-B2-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-B2-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-C2") {
	forest = 3;
	levelUp();
	energy = energy - 3;
	safety = safety + 2;
	$("#forest-C2-spend").fadeIn("2000");
	$("#forest-C2-risk").fadeIn("2000");
	$("#forest-C2-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-C2-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-A3") {
	forest = 4;
	energy = energy - 4;
	safety = safety + 3;
	$("#forest-A3-spend").fadeIn("2000");
		$("#forest-A3-risk").fadeIn("2000");
	$("#forest-A3-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-A3-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-B3") {
	forest = 4;
	energy = energy - 4;
	safety = safety + 3;
	$("#forest-B3-spend").fadeIn("2000");
	$("#forest-B3-risk").fadeIn("2000");
	$("#forest-B3-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-B3-spend").offset().top -15}, 500);

	}
	else if (adventure == "forest-C3") {
	forest = 4;
	energy = energy - 4;
	safety = safety + 3;
	$("#forest-C3-spend").fadeIn("2000");
	$("#forest-C3-risk").fadeIn("2000");
	$("#forest-C3-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#forest-C3-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-A1") {
	wrecks = 2;
	levelUp();
	health = health - 2;
	security = security + 1;
	$("#wrecks-A1-spend").fadeIn("2000");
	$("#wrecks-A1-risk").fadeIn("2000");
	$("#wrecks-A1-success").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#wrecks-A1-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-B1") {
	wrecks = 2;
	levelUp();
	health = health - 2;
	security = security + 1;
	$("#wrecks-B1-spend").fadeIn("2000");
	$("#wrecks-B1-risk").fadeIn("2000");
	$("#wrecks-B1-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-B1-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-C1") {
	wrecks = 2;
	levelUp();
	health = health - 2;
	security = security + 1;
	$("#wrecks-C1-spend").fadeIn("2000");
	$("#wrecks-C1-risk").fadeIn("2000");
	$("#wrecks-C1-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-C1-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-A2") {
	wrecks = 3;
	levelUp();
	health = health - 3;
	security = security + 2;
	$("#wrecks-A2-spend").fadeIn("2000");
	$("#wrecks-A2-risk").fadeIn("2000");
	$("#wrecks-A2-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-A2-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-B2") {
	wrecks = 3;
	levelUp();
	health = health - 3;
	security = security + 2;
	$("#wrecks-B2-spend").fadeIn("2000");
	$("#wrecks-B2-risk").fadeIn("2000");
	$("#wrecks-B2-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-B2-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-C2") {
	wrecks = 3;
	levelUp();
	health = health - 3;
	security = security + 2;
	$("#wrecks-C2-spend").fadeIn("2000");
	$("#wrecks-C2-risk").fadeIn("2000");
	$("#wrecks-C2-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-C2-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-A3") {
	wrecks = 4;
	health = health - 4;
	security = security + 3;
	$("#wrecks-A3-spend").fadeIn("2000");
	$("#wrecks-A3-risk").fadeIn("2000");
	$("#wrecks-A3-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-A3-spend").offset().top -15}, 500);

	}
	else if (adventure == "wrecks-B3") {
	wrecks = 4;
	health = health - 4;
	security = security + 3;
	$("#wrecks-B3-spend").fadeIn("2000");
	$("#wrecks-B3-risk").fadeIn("2000");
	$("#wrecks-B3-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-B3-spend").offset().top -15}, 500);

	}
	
	else if (adventure == "wrecks-C3") {
	wrecks = 4;
	health = health - 4;
	security = security + 3;
	$("#wrecks-C3-spend").fadeIn("2000");
	$("#wrecks-C3-risk").fadeIn("2000");
	$("#wrecks-C3-success").fadeIn("2000");
				$('html, body').animate({scrollTop: $("#wrecks-C3-spend").offset().top -15}, 500);

	}
			statsUpdate();
		$("#wrap-up").fadeIn("2000");
		encounterCheck();
			dismiss = "impossible";
			risk = "impossible";
			spend = "impossible";
});




// Contact Buttons

$("#contact-scientist").click(function() {
		if (contact == "finished" || contactScientist == "impossible")  {
			Return;
		}
		else {
		contact = "finished";
		$("#contact-priestess").addClass("no-click");
		$("#contact-martian").addClass("no-click");
	contactScientist = "impossible";
	var randomnumber=Math.floor(Math.random()*3);
	if (randomnumber == 2) {
    if (safety == 1 || safety == 2 || safety == 3) {
       randomnumber = 0;
    }
    else if (safety == 4 || safety == 5 || safety == 6) {
     var randomnumber=Math.floor(Math.random()*2);   
    }
    else if (safety == 7 || safety == 8 || safety == 9) {
       randomnumber = 1;
    }
	}
	if (randomnumber == 1) {
		security ++;
		statsUpdate();
		if (day == "1") {
			$("#scientist-encounter-day-one").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-day-one").offset().top -15}, 500);

		}
		if (day == "2") {
			$("#scientist-encounter-day-two").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-day-two").offset().top -15}, 500);
		}
		if (day == "3") {
			$("#scientist-encounter-day-three").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-day-three").offset().top -15}, 500);
		}
		if (day == "4") {
			$("#scientist-encounter-day-four").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-day-four").offset().top -15}, 500);
		}	
		if (day == "5") {
			$("#scientist-encounter-day-five").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-day-five").offset().top -15}, 500);
		}
	}
	if (randomnumber == 0) {
		if (scientist == 3) {
			scientist = 2;
			$("#scientist-encounter-injured").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-injured").offset().top -15}, 500);
		}
		else if (scientist == 2) {
			scientist = 1;
			$("#scientist-encounter-critical").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-critical").offset().top -15}, 500);
		}
		else if (scientist == 1) {
			scientist = 0;
			wrecks = 5;
			$("#scientist-encounter-dead").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#scientist-encounter-dead").offset().top -15}, 500);
		}
	}

		if (time == "Dusk") {
		$("#contact-outro-B").fadeIn(2000);
	}
	else {
		$("#contact-outro-A").fadeIn(2000);
	}


 }}
);

$("#contact-priestess").click(function() {
		if (contact == "finished" || contactPriestess == "impossible")  {
			Return;
		}
		else {
		contact = "finished";
		$("#contact-scientist").addClass("no-click");
		$("#contact-martian").addClass("no-click");

	contactPriestess = "impossible";
	var randomnumber=Math.floor(Math.random()*3);
	if (randomnumber == 2) {
    if (safety == 1 || safety == 2 || safety == 3) {
       randomnumber = 0;
    }
    else if (safety == 4 || safety == 5 || safety == 6) {
     var randomnumber=Math.floor(Math.random()*2);   
    }
    else if (safety == 7 || safety == 8 || safety == 9) {
       randomnumber = 1;
    }
	}
	if (randomnumber == 1) {
		health ++;
		statsUpdate();
		if (day == "1") {
			$("#priestess-encounter-day-one").fadeIn("2000");
			$('html, body').animate({scrollTop: $("#priestess-encounter-day-one").offset().top -15}, 500);
		}
		if (day == "2") {
			$("#priestess-encounter-day-two").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-day-two").offset().top -15}, 500);

		}
		if (day == "3") {
			$("#priestess-encounter-day-three").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-day-three").offset().top -15}, 500);

		}
		if (day == "4") {
			$("#priestess-encounter-day-four").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-day-four").offset().top -15}, 500);

		}	
		if (day == "5") {
			$("#priestess-encounter-day-five").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-day-five").offset().top -15}, 500);

		}
	}
	if (randomnumber == 0) {
		if (priestess == 3) {
			priestess = 2;
			$("#priestess-encounter-injured").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-injured").offset().top -15}, 500);

		}
		else if (priestess == 2) {
			priestess = 1;
			$("#priestess-encounter-critical").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-critical").offset().top -15}, 500);

		}
		else if (priestess == 1) {
			priestess = 0;
			temple = 5;
			$("#priestess-encounter-dead").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#priestess-encounter-dead").offset().top -15}, 500);

		}
	}

		if (time == "Dusk") {
		$("#contact-outro-B").fadeIn(2000);
	}
	else {
		$("#contact-outro-A").fadeIn(2000);
	}


 }}
);

$("#contact-martian").click(function() {
		if (contact == "finished" || contactMartian == "impossible")  {
			Return;
		}
		else {
		contact = "finished";
		$("#contact-scientist").addClass("no-click");
		$("#contact-priestess").addClass("no-click");

	contactMartian = "impossible";
	var randomnumber=Math.floor(Math.random()*3);
	if (randomnumber == 2) {
    if (safety == 1 || safety == 2 || safety == 3) {
       randomnumber = 0;
    }
    else if (safety == 4 || safety == 5 || safety == 6) {
     var randomnumber=Math.floor(Math.random()*2);   
    }
    else if (safety == 7 || safety == 8 || safety == 9) {
       randomnumber = 1;
    }
	}
	if (randomnumber == 1) {
		safety++;
		statsUpdate();
		if (day == "1") {
			$("#martian-encounter-day-one").fadeIn("2000");
						$('html, body').animate({scrollTop: $("#martian-encounter-day-one").offset().top -15}, 500);

		}
		if (day == "2") {
			$("#martian-encounter-day-two").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-day-two").offset().top -15}, 500);

		}
		if (day == "3") {
			$("#martian-encounter-day-three").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-day-three").offset().top -15}, 500);

		}
		if (day == "4") {
			$("#martian-encounter-day-four").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-day-four").offset().top -15}, 500);

		}	
		if (day == "5") {
			$("#martian-encounter-day-five").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-day-five").offset().top -15}, 500);

		}
		if (safety > 9) {
			safety = 9;
		}
	}
	if (randomnumber == 0) {
		if (martian == 3) {
			martian = 2;
			$("#martian-encounter-injured").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-injured").offset().top -15}, 500);

		}
		else if (martian == 2) {
			martian = 1;
			$("#martian-encounter-critical").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-critical").offset().top -15}, 500);

		}
		else if (martian == 1) {
			martian = 0;
			forest = 5;
			$("#martian-encounter-dead").fadeIn("2000");
									$('html, body').animate({scrollTop: $("#martian-encounter-dead").offset().top-15}, 500);

		}
	}

		if (time == "Dusk") {
		$("#contact-outro-B").fadeIn(2000);
	}
	else {
		$("#contact-outro-A").fadeIn(2000);
	}

 }}
);




// Night Strategy Buttons

$("#priestess-stay").click(function() {
		if (commandPriestess == "possible") {
		$("#priestess-health").addClass("no-click");
		$("#priestess-energy").addClass("no-click");
		$("#priestess-safety").addClass("no-click");
		$("#priestess-security").addClass("no-click");
		commandPriestess = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#priestess-health").click(function() {
		if (commandPriestess == "possible") {
		$("#priestess-stay").addClass("no-click");
		$("#priestess-energy").addClass("no-click");
		$("#priestess-safety").addClass("no-click");
		$("#priestess-security").addClass("no-click");
		healthProtect = "priestess";
		commandPriestess = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#priestess-energy").click(function() {
		if (commandPriestess == "possible") {
		$("#priestess-stay").addClass("no-click");
		$("#priestess-health").addClass("no-click");
		$("#priestess-safety").addClass("no-click");
		$("#priestess-security").addClass("no-click");
		energyProtect = "priestess";
		commandPriestess = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#priestess-safety").click(function() {
		if (commandPriestess == "possible") {
		$("#priestess-stay").addClass("no-click");
		$("#priestess-health").addClass("no-click");
		$("#priestess-energy").addClass("no-click");
		$("#priestess-security").addClass("no-click");
		safetyProtect = "priestess";
		commandPriestess = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#priestess-security").click(function() {
		if (commandPriestess == "possible") {
		$("#priestess-stay").addClass("no-click");
		$("#priestess-health").addClass("no-click");
		$("#priestess-energy").addClass("no-click");
		$("#priestess-safety").addClass("no-click");
		securityProtect = "priestess";
		commandPriestess = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#martian-stay").click(function() {
		if (commandMartian == "possible") {
		$("#martian-health").addClass("no-click");
		$("#martian-energy").addClass("no-click");
		$("#martian-safety").addClass("no-click");
		$("#martian-security").addClass("no-click");
		commandMartian = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#martian-health").click(function() {
		if (commandMartian == "possible" && healthProtect == "unassigned") {
		$("#martian-stay").addClass("no-click");
		$("#martian-energy").addClass("no-click");
		$("#martian-safety").addClass("no-click");
		$("#martian-security").addClass("no-click");
		healthProtect = "martian";
		commandMartian = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});


$("#martian-energy").click(function() {
		if (commandMartian == "possible" && energyProtect == "unassigned") {
		$("#martian-stay").addClass("no-click");
		$("#martian-health").addClass("no-click");
		$("#martian-safety").addClass("no-click");
		$("#martian-security").addClass("no-click");
		energyProtect = "martian";
		commandMartian = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#martian-safety").click(function() {
		if (commandMartian == "possible" && safetyProtect == "unassigned") {
		$("#martian-stay").addClass("no-click");
		$("#martian-health").addClass("no-click");
		$("#martian-energy").addClass("no-click");
		$("#martian-security").addClass("no-click");
		safetyProtect = "martian";
		commandMartian = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#martian-security").click(function() {
		if (commandMartian == "possible" && securityProtect == "unassigned") {
		$("#martian-stay").addClass("no-click");
		$("#martian-health").addClass("no-click");
		$("#martian-energy").addClass("no-click");
		$("#martian-safety").addClass("no-click");
		securityProtect = "martian";
		commandMartian = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#scientist-stay").click(function() {
		if (commandScientist == "possible") {
		$("#scientist-health").addClass("no-click");
		$("#scientist-energy").addClass("no-click");
		$("#scientist-safety").addClass("no-click");
		$("#scientist-security").addClass("no-click");
		commandScientist = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#scientist-health").click(function() {
		if (commandScientist == "possible" && healthProtect == "unassigned") {
		$("#scientist-stay").addClass("no-click");
		$("#scientist-energy").addClass("no-click");
		$("#scientist-safety").addClass("no-click");
		$("#scientist-security").addClass("no-click");
		healthProtect = "scientist";
		commandScientist = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#scientist-energy").click(function() {
		if (commandScientist == "possible" && energyProtect == "unassigned") {
		$("#scientist-stay").addClass("no-click");
		$("#scientist-health").addClass("no-click");
		$("#scientist-safety").addClass("no-click");
		$("#scientist-security").addClass("no-click");
		energyProtect = "scientist";
		commandScientist = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#scientist-safety").click(function() {
		if (commandScientist == "possible" && safetyProtect == "unassigned") {
		$("#scientist-stay").addClass("no-click");
		$("#scientist-health").addClass("no-click");
		$("#scientist-energy").addClass("no-click");
		$("#scientist-security").addClass("no-click");
		safetyProtect = "scientist";
		commandScientist = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

$("#scientist-security").click(function() {
		if (commandScientist == "possible" && securityProtect == "unassigned") {
		$("#scientist-stay").addClass("no-click");
		$("#scientist-health").addClass("no-click");
		$("#scientist-energy").addClass("no-click");
		$("#scientist-safety").addClass("no-click");
		securityProtect = "scientist";
		commandScientist = "impossible";
		nightStrategy();
		}
		else {
			Return;
		}
	});

// Crew Check Buttons 

$("#priestess-rest").click(function() {
	 if ($('#priestess-rest').hasClass('no-click')) {
		 Return;
	 }
	 else {
		contactPriestess = "impossible";
		$("#priestess-continue").addClass("no-click");
		$("#travel-temple").addClass("no-click");
		priestess = "resting";
		crewCheck();
	 }
});

$("#priestess-continue").click(function() {
	 if ($('#priestess-continue').hasClass('no-click')) {
		 Return;
	 }
	 else {
	$("#priestess-rest").addClass("no-click");
	priestess = "critical";
	crewCheck();
	
	 }
});

$("#martian-rest").click(function() {
	 if ($('#martian-rest').hasClass('no-click')) {
		 Return;
	 }
	 else {
		contactMartian = "impossible";
		$("#martian-continue").addClass("no-click");
		$("#travel-forest").addClass("no-click");
		martian = "resting";
		crewCheck();
	 }
});

$("#martian-continue").click(function() {
	 if ($('#martian-continue').hasClass('no-click')) {
		 Return;
	 }
	 else {
	$("#martian-rest").addClass("no-click");
	martian = "critical";
	crewCheck();
	 }
});

$("#scientist-rest").click(function() {
	 if ($('#scientist-rest').hasClass('no-click')) {
		 Return;
	 }
	 else {
		contactScientist = "impossible";
		$("#scientist-continue").addClass("no-click");
		$("#travel-wrecks").addClass("no-click");
		scientist = "resting";
		crewCheck();		
	 }
});

$("#scientist-continue").click(function() {
	 if ($('#scientist-continue').hasClass('no-click')) {
		 Return;
	 }
	 else {
	$("#scientist-rest").addClass("no-click");
	scientist = "critical";
	crewCheck();
	 }
});

	

//ClOSING STATEMENT

});

// old code