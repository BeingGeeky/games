	var currentLoc = 0;
	var x=0;
	var name;
	var youTook="";
	var locations;
	var locText;
	var locScoreText=" ";
	var locScore;
	var totalItemPoints=0;

//Name collect
	function nameCollect(){
		var person = prompt("Please enter your name", "You");
		if (person != null) {
			name=person;
		}
	}

//Location prototype
	function Location(locId, locDesc,locDeath){
		this.id = locId;
		this.desc = locDesc;
		this.death = locDeath;
	}

//Location objects
	loc0 = new Location (0,"You move about and just see more and more parts of the wreck. Dead bodies EVERYWHERE! And worse, the things that eat them.\n","Half asleep, you feel something tickly your ear. You swat it away, but it stays there. As you awake, you realize that you feel that same tickle, well, everywhere. You look and you're COVERED with bugs. Large and small, you can hardly see or feel one spot that's doesn't have a bug. Then they *really* start to get to work. You are being devoured!...YOU'RE DEAD!");
	loc1 = new Location (1,"You look out and just see sand. Lots of sand. Why is the beach so expansive in this spot? As you take a few steps forward, you realize that the sand isn't normal. You step back, grab a big branch and throw it forward. Horrified, you watch the branch sink and disappear into the QUICKSAND!\n","Oh, good! You're back on the beach. No, wait, you're moving...sinking...You're on the QUICKSAND...\n\nYOU'RE DEAD!");
	loc2 = new Location (2,"You break through the trees here and HOLY CRAP! A RAFT!!! You lose it. You grab the raft and run out into the surf. You are OUT OF HERE!! \n","you're seated in the front car of the Raft and it's about to go through the terrifying series of loops. \n\nOnly problem, you're not belted in. You fall from the sky...\n\nYOU'RE DEAD!");
	loc3 = new Location (3,"Exploring this part of the island, you come across a shack. PEOPLE!! As you rush forward, a sound stops you. It sounds like...fabric rubbing together. It's so loud. As you get closer to the shack, you realize it's moving. The walls are COVERED in snakes. Large, small, all on top of each other. Thousands of them! You run as fast as you can.\n","A sound wakes you up. Like movement, something rubbing together... You open your eyes and see snakes. Before you can even registere that fact, you feel the first bite...\nYOU'RE DEAD!");
	loc4 = new Location (4,"You see a break ahead in the forest. You are faced with an wall of rock. No, wait, it's a mountain side. GREAT! You can get a better view! You start climbing. As you progress, it starts getting hotter and hotter. You finally climb a ledge and finally get a better view of what you're climbing. A VOLCANO!!! You quickly scramble back down!\n","You're falling. You wrench you're body in the wind and have 2 seconds to realize that you're falling into the volcano...YOU'RE DEAD!");
	loc5 = new Location (5,"You hear a sound. Drums! PEOPLE! Wait, what KIND of people. You quietly walk through the forest and peek through the trees. A small village is celebrating...something. But these aren't people. They appear to be made of...leaves?? These creatures are made of LEAVES! And branches and vines! WTF?? As you look around, you finally notice what they have cooking on the spit. Iroically, you remember that guy from the buffet.\n","You feel so warm. Like a hot bath. Still out of it, you snuggle down into the water. Wait, it's getting hot. VERY HOT! Sitting up, you realize you're in a huge pot. You're start to lose consciousness...YOU'RE DEAD!");
	loc6 = new Location (6,"There's nothing here. Literally, nothing. Whatever WAS here has fallen into a gigantic sink hole. You gaze over the edge and see....nothing...\n","You slam against a wall. But there's nothing to grab onto. You are falling into a sink hole! As you fall and fall and fall...YOU'RE DEAD!");
	loc7 = new Location (7,"This is the thickest part of the jungle. Vegitation is almost impassable, but you perservere.\n","you're in the middled of the thickest park of the jungle. And when you say 'middle,' you mean middle, as in you're dangling from vines precariously 100 feet in the air...YOU'RE DEAD!");
	loc8 = new Location (8,"As you break the tree line, you see a unbelieveable gorgeous lagoon. Crystal clear, glistening water, colorful fish just below the surface, sunshine arching over all, this place looks like paradise! Like a siren to a sailor, this water beckons you to enter it's depths. You're knee deep in the water, gazing at a clown fish, when a movement catches your eye. Coming towards you is a shadow. A very LARGE shadow. Terrified, you race back to shore, all the way to the trees, just as an enormous shark breaks the water and lands on the beach, right where you were. Almost in anger, the shark wrenches itself back into the water, but continues circling the lagoon. Waiting.\n","you're plunged into water. NOOO! You're in the lagoon! You break the surface and see a triangular fin. An ENORMOUS fin. \n\nHoly HELL! Make that finS...YOU'RE DEAD!");
	loc9 = new Location (9,"The northern most point of the island appears to be a peninsula. What's interesting is that rising from the waters surrounding this part of the island, on all three sides of the jut of land, are the remains of ships. Masts of all time period rise from the water like the dead rising from the grave. Pieces of hull, ancient wood and fiberglass alike, lay half buried in the sand. Shark fins dot the landscape, but nothing really explains the carnage. The reef doesn't extend this far north. Suddenly, the longest, darkest, slimiest looking thing snakes through the water. It's following a shark. Like lightning, an ENORMOUS tentacle rises from the water about 6 feet in the air, wraps around the shark and instantly pulls the shark under the dark waters!\n","you're laying on a piece of ancient wood half buried in the water around the peninsula. You're barely conscious when you realize something is wrapping itself around you AND the 5 feet wide piece of shipwreck. The tentacle shatters the wood and pulls you under. YOU'RE DEAD!");

//Location array
	var locArr = [
		/*0 Wreck*/loc0,
		/*1 Sand*/loc1,
		/*2 Raft*/loc2,
		/*3 Shack*/loc3,
		/*4 Volcano*/loc4,
		/*5 Pygmies*/loc5,
		/*6 Hole*/loc6,
		/*7 Jungle*/loc7,
		/*8 Lagoon*/loc8,
		/*9 Octopus*/loc9,
	]
//Visited location array
	var locVisit = []

//Navigation variables
	var NORTH = 0;
	var SOUTH = 1;
	var EAST  = 2;
	var WEST  = 3;
//Navigation locations
	var nav = [ // N,S,E,W,
		/*Current Location*/
		/*0 Wreck*/ [4,1000,2,1],
    /*1 Sand*/ [3,1000,0,1000],
		/*2 Raft*/ [5,1000,1000,0],
		/*3 Shack*/ [6,1,4,1000],
		/*4 Volcano*/ [7,0,5,3],
		/*5 Pygmies*/ [8,2,1000,4],
		/*6 Hole*/ [1000,3,7,1000],
		/*7 Jungle*/ [9,4,8,6],
		/*8 Lagoon*/ [1000,5,1000,7],
		/*9 Octopus*/ [1000,7,1000,1000]
	]

// Directional Button Event Handlers
	function btnEast_click() {nextLoc(EAST);}
	function btnWest_click() {nextLoc(WEST);}
	function btnNorth_click() {nextLoc(NORTH);}
	function btnSouth_click() {nextLoc(SOUTH);}
	function nextLoc(dir) {
		var newLoc = nav[currentLoc][dir];
		currentLoc=newLoc;
		locations=locArr[currentLoc];
		if (currentLoc==1000){
			loseGame(1000);
			buttonDisable(1000);
		}
			else{
				var itemText;
				locText=locations.desc;
				firstVisit();
				buttonDisable();
				if (itemDesc[currentLoc]!=0){
					itemText=itemDesc[currentLoc];
					displayMessage(locText+"\nYou search, but, wait... "+itemText);
					totalGamePoints();
				}
					else{
						displayMessage(locText+"\nYou search, but can't find any clues to help.\n\n");
						totalGamePoints();
					}
			}
	}
//Items Objects
	function Item(itemId,itemDesc){
		this.id = itemId;
		this.desc = itemDesc;}

//Individual Items
	supplies = new Item ("the repair kit","On the edge of the tree line is a box half buried in the sand. It's a boat repair kit!!! With tools!!\n\n");
	rope = new Item ("the ropes","To the left, some ropes dangle from one of the trees. The long-dead skeleton of a parachuter hangs far above. You shudder but focus on the ropes.\n\n\n");
	compass = new Item ("the compass","You walk by the bushes and a glint of metal catches your eye. It's a compass!!!\n\n\n");
	boat = new Item ("the boat","Oh. My. God!! You moved forward a few steps and see a large hole in the ground off to your left. As you gaze down, you see, resting about 6 feet down is a small boat. It seems to have a small hole in the side, but BY GOD it's a BOAT! \n\n\n");

//Location Item Description Array
	var itemDesc = [
		/*0 Wreck*/0,
		/*1 Sand*/0,
		/*2 Raft*/compass.desc,
		/*3 Shack*/rope.desc,
		/*4 Confections*/0,
		/*5 Pygmies*/0,
		/*6 Children's*/0,
		/*7 Stadium*/0,
		/*8 Aquarium*/boat.desc,
		/*9 Zoo*/supplies.desc,
	]
//Location Item ID array
	var itemArr =[
		/*0 Wreck*/0,
		/*1 Sand*/0,
		/*2 Raft*/compass.id,
		/*3 Shack*/rope.id,
		/*4 Confections*/0,
		/*5 Pygmies*/0,
		/*6 Children's*/0,
		/*7 Stadium*/0,
		/*8 Aquarium*/boat.id,
		/*9 Zoo*/supplies.id,
	]
//Bag of Holding
	var itemBag=["a knife","a flashlight", "coconuts, bananas, mangos",]
	function btnInventory(){
		var bagContents = itemBag.toString();
		var bagPrint = "You've brought or found: " + bagContents;
		displayMessage(bagPrint);
	}
//take button
	function btnTake(){
		var item = itemArr[currentLoc];
		if (item!=0){
			youTook = ("You've pick up the " + item + " and bring it back to camp.");
			itemBag.push(item);
			var itemRemove=itemDesc.splice(currentLoc,1,0);
			var itemDescReplace=itemDesc.splice(currentLoc,1,0);
			var itemArrReplace=itemArr.splice(currentLoc,1,0);
			totalItemPoints = 54 + totalItemPoints;
			displayMessage(youTook +" You've earned 100 points");
		}
			else{
			youTook=("There is nothing to take here. Keep looking.");
			}
		totalGamePoints();
		winGame();
	}

// Display message function
	function displayMessage(msg) {
		var target = document.getElementById("taMain");
		target.value = msg + "\n\n" + target.value;
    }

//Win function
	function winGame(){
		if (itemBag.length==6){
			displayMessage("THIS IS IT!! THIS IS WHAT YOU NEEDED!! Using the ropes, you pull out the boat and use the repair kit to fix the hole. You fill it with some of you carved spears, fresh water-filled coconuts, coconuts, bananas, and pretty much everything edible you could find. You grab the compass, head to the north side of the island, and, once low tide hits, you push off! It gets a little dicey around the coral reef, but you MAKE IT!! After almost a week of drifting, you see a flash in the distance. It's a boat!!! Good thing you thought to bring fire making supplies, too. You quickly light a torch and hail the ship. HERE IT COMES! YOU'RE SAVED!! You arrive safely home.")
		}
	}
//Location once
	locScore=0;
	var locScoreAdd;
	var locVisitTest;
	var locationsID=locations.id;
	function firstVisit(){
		locVisitTest=locVisit.indexOf(locations,0);
		if (locVisitTest<0){
			locVisitTest=locVisit.push(locations);
			locScore=locScore+50;
		}
	}

//Totals all game points and prints to screen
	var gamePoints;
	function totalGamePoints(){
		gamePoints=totalItemPoints + locScore;
		document.getElementById("scoreSpot").innerHTML=("Total Points: "+gamePoints);
	}

//Lose Game function. You can lose the game by either going out of the park or visiting too many sites without collecting all the objects. A player can only go outside the park when they are using text entries to navigate. Ignoring a warning in the navigation error box is punishable by death. :)
	var deathChoice
	var dead
	function loseGame(){
			deathChoice = Math.floor(Math.random() * 10);
			dead=locArr[deathChoice];
			displayMessage("Wait. What's going on? You suddenly feel SUPER weird. You black out for a second. When you come to, "+dead.death);
	}


//Onload function
	function init(){
		buttonDisable(0);
		nameCollect();
		displayMessage("'Boring "+name+" ' That's what you feel like. Every day it's go to work, go home, watch tv, eat, sleep, repeat. Even as you think this you're sitting in front of the tv like a LUMP! You need some adventure in your life. When you flick the channel for the 43rd time, an advertisement catches your eye: 'WANT ADVENTURE! TIRED OF SITTING IN FRONT OF THE TV EVERY NIGHT?! Then take a cruise! YOLO Cruise lines travel through the most gorgeous and exclusive islands in the Caribbean. Half off!!' YES! Without every thinking about you, you are ON THAT CRUISE! \n\nFive days in, you're having the time of your life! Food, sun, and relaxation. As you take dose on the deck chaise (4 daiquiris before 10 a.m. will make anyone sleepy), a cruise staff member, stress evident on his face, jostles you awake. 'Sir, please come inside immediately. There's a, um, slight storm coming our way.' 'Yeah, okay' but as soon as he walks away, you settle back in for your afternoon dose. \n\nYou realize the error in that plan when you are suddenly thrown from your chaise into the railing. 'WTF?!' STORM??? As you look, a huge 10 foot waves crashes into the railing where you are standing, flinging you into the wall behind you. As you try to get your bearings, you realize that was the baby. Looming 40 feet ABOVE you, the deck, and the tiny cruise ship is the biggest wave you've ever seen!\n\n***SMASH****\n\nYou wake up face down in the sand. After coming to, you realize you're on an island. Behind you, floating on the water are the remains of both the boat....and...passengers. 'OHMYGODOHMYGOD! I need to get off the island! OKAYOKAYOKAY DON'T PANIC! Just see what's around you, " + name + ", and get to work...'");
	}

//Returns an error message if user enters text that is not NSEW
	function wrongDir(){
		document.getElementById("navError").innerHTML = "Oops! Try that again. N, S, E, or W."
	}

//Changes data entered into all lowercase
//Launches appropriate button function based on NSEW text entered
	function btnGo(){
		dir = document.getElementById("box").value;
		dir = dir.toLowerCase();
		document.getElementById("navError").innerHTML = " ";
		switch(dir){
			case "n":
			case "north": btnNorth_click();
				break;
			case "w":
			case "west": btnWest_click();
				break;
			case "e":
			case "east": btnEast_click();
				break;
			case "s":
			case "south": btnSouth_click();
				break;
			case "take":
			case "t": btnTake();
				break;
			case "inventory":
			case "i": btnInventory();
				break;
			default: wrongDir();
		}
	}
//Disables buttons that are not applicable based on current location
	function buttonDisable(){
		switch (currentLoc){
		//South off
			case 0: document.getElementById("btnN").disabled = false;
					document.getElementById("btnS").disabled = true;
					document.getElementById("btnE").disabled = false;
					document.getElementById("btnW").disabled = false;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go SOUTH..."
				break;
		//South West off
			case 1: document.getElementById("btnN").disabled = false;
					document.getElementById("btnS").disabled = true;
					document.getElementById("btnE").disabled = false;
					document.getElementById("btnW").disabled = true;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go SOUTH or WEST..."
				break;
		//South East off
			case 2: document.getElementById("btnN").disabled = false;
					document.getElementById("btnS").disabled = true;
					document.getElementById("btnE").disabled = true;
					document.getElementById("btnW").disabled = false;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go SOUTH or EAST..."
				break;
		//East off
			case 5: document.getElementById("btnN").disabled = false;
					document.getElementById("btnS").disabled = false;
					document.getElementById("btnE").disabled = true;
					document.getElementById("btnW").disabled = false;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go EAST..."
				break;
		//West off
			case 3: document.getElementById("btnN").disabled = false;
					document.getElementById("btnS").disabled = false;
					document.getElementById("btnE").disabled = false;
					document.getElementById("btnW").disabled = true;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go WEST..."
				break;
		//East West North off
			case 9: document.getElementById("btnN").disabled = true;
					document.getElementById("btnS").disabled = false;
					document.getElementById("btnE").disabled = true;
					document.getElementById("btnW").disabled = true;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go NORTH, EAST, or WEST..."
				break;
		//West North off
			case 6: document.getElementById("btnN").disabled = true;
					document.getElementById("btnS").disabled = false;
					document.getElementById("btnE").disabled = false;
					document.getElementById("btnW").disabled = true;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go NORTH or WEST..."
				break;
		//East North off
			case 8: document.getElementById("btnN").disabled = true;
					document.getElementById("btnS").disabled = false;
					document.getElementById("btnE").disabled = true;
					document.getElementById("btnW").disabled = false;
					document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the island. Don't try to go NORTH, EAST, or WEST..."
				break;
			case 1000: document.getElementById("btnN").disabled = true;
					document.getElementById("btnS").disabled = true;
					document.getElementById("btnE").disabled = true;
					document.getElementById("btnW").disabled = true;
					document.getElementById("btnTake").disabled = true;
					document.getElementById("btnInventory").disabled = true;
					document.getElementById("btnGo").disabled = true;
				break;
			default: document.getElementById("btnN").disabled = false;
					document.getElementById("btnS").disabled = false;
					document.getElementById("btnE").disabled = false;
					document.getElementById("btnW").disabled = false;
		}
	}

//Help function
	function helpMe(){
		var help = "Click an active direction to move or enter a compass direction into the text box below and click GO. To pick up an item, click the TAKE button or enter Take into the text box below and click GO. Any questions or problems with the game, click the CONTACT link."
		displayMessage(help);
	}
