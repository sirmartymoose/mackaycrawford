$(document).ready(function(){

// Start Story Metadata
	
	protaganists = [
					'Judy',
					'Sally', 
					'Mary', 
					'Ann', 
					'Janet', 
					'Gwen', 
					'Linda', 
					'Natalie', 
					'Ilene', 
					'Angelina', 
					'Lisa', 
					'Meagan'
					]
					
	actresses  = [
	
			"dame Judy Dench", 
			"Angelina Jolie", 
			"Charlize Theron", 
			"Kylie Minogue", 
			"Nikki Minaj", 
			"Katherine Perry", 
			"Katherine Heigl" , 
			"that red headed chick from the 70's show", 
			"Meryl Streep", 
			"Diane Keaton", 
			"Amy Adams", 
			"Jody Foster", 
			"Meg Ryan", 
			"Geena Davis", 
			"Anne Hathaway", 
			"Helen Hunt", 
			"Scarlett Johansson", 
			"Nicole Kidman", 
			"Kiera Knightley", 
			"Lark Voorhies (Lisa from from Saved By The Bell)", 
			"Yasmine Bleeth", 
			"Julia Stiles",
			"Sarah Michelle Gellar",
			"Topenga",
			"Betty White",
			"Paula Abdul",
			"Angela Lansbury",
			"Cybill Shepherd",
			"Lisa Kudrow",
			"Vivica A. Fox",
			"Patricia Heaton",
			
			
			
	
	
	]
					
					
	antagonistSingle = [
		// her
		['Hunky Drifter', 'Drifter'],
		['coworker', 'Work'],
		['employee', 'Boss'],
		['love interest she met online', 'Love'],
		['high school flame', 'Flame'],
		['ex boyfriend', 'Ex' ],
		['second cousin', 'Family'],
		['second husband', 'Man' ],
		['detective', 'Cop'], 
		['wise Janitor', 'Janitor'], 
		['plastic surgeoon', 'Doc' ], 
		['grandmother', 'Mama']
		

		
	]
	
	antagonistMarried = [
		// her 
		['husband', 'Hubby'],
		['mother', "Mom" ], 
		['daughter', "Little Girl"] ,
		['sister', "Sissy"],
		['ex boyfriend', "Boy"],
		['old high school friend', "BFF"],
		['second cousin', "Family" ],
		['best friend', "BFF" ], 
		['professor', 'Professor' ], 
		['second husband', 'Hubby' ], 
		['realtor', 'Realtor' ], 
		['doctor', 'Doctor' ], 
		['father', 'Father' ], 
		['detective', 'Cop']
	
	]
					
					
	professionSuite = [
	
	{profession: "lawyer", payScale : 10, activities: [["interrogating a witness", "Witness"], ["filing a motion", "Jury"],[ "waiting for a trial to start", "Lawyer" ]]}, 
	{profession: "doctor", payScale : 10, activities: [["performing a checkup", "Doctor"], ["scrubbing up for surgery", "Checkup"]]}, 
	{profession: "fast food worker", payScale : 10, activities: [["Taking a smoke break", "Smoker"], ["working the window", "Fast Food"]]}, 
	{profession: "electrician", payScale : 10, activities: [["Fixing some faulty wires", "Wired"], ["on a routine checkup", "Checkup"]]},
	{profession: "pilot", payScale : 10, activities: [["stuck on a layover in Provo, utah", "Layover"], ["landing a plane", "Landing"]]},
	{profession: "yoga instructor", payScale : 10, activities: [["teaching a class", "Yoga"], ["bending over", "Yoga"]]},
	{profession: "stay at home mom", payScale : 10, activities: [["taking her kids to practice", "Mom"], ["cleaning the house", "Mom"]]},
	{profession: "prostitute", payScale : 10, activities: [["Servicing a local", "Hooker"], ["getting beat up by her pimp", "Pimp"]]},
	{profession: "sniper", payScale : 10, activities: [["on her second tour in Iraq", "Sniper"], ["reloading her rifle", "Shooter"]]},
	{profession: "artist", payScale : 10, activities: [["taking out a second student loan", "Artist"], ["buying painbrushes", "Painter"]]},
	{profession: "singer / songwriter", payScale : 10, activities: [["playing her music in front of millions of people", "Rock Star"], ["refueling the tour bus", "Tour Bus"]]},
	{profession: "TV personality", payScale : 10, activities: [["filming for the show", "Star"], ["Putting on makeup before the show", "TV"]]},
	
	]
				
				
	adjectivesDescribingPeople = [
	
			'good', 
			'great', 
			'little', 
			'old', 
			'short', 
			'bad', 
			'different', 
			'smart', 
			'slow', 
			'fat', 
			'overweight', 
			'dull', 
			'dumb', 
			'smelly', 
			'ugly', 
			'beautiful', 
			'sexy', 
			'scandalous', 
			'horny'
	
	]
	
	genericActivities = [
		// while .....
		["walking in the park", "Park"], 
		["eating a taco",  "Taco"], 
		["trying to fall asleep", "Sleepy" ],
		["eating breakfast taco's", "Breakfast"],
		["pretending to workout", "Gym"],
		["eating lunch", "Lunch"],
		["enjoying a juicy cheesesteak", "Food"], 
		["renting a movie from blockbuster", "Blockbuster"], 
		["Renting a houseboat for spring break", "Spring Break"], 
		['breaking a board with her fists for Karate class', "Karate"], 
		['moping around the house on a lazy saturday', "Weekend"],
		['camping in the woods with her brothers second wife', "Camp"],
		['skiing down a hill without a helmet', "Ski Bunny"], 
		['running in the park with her slightly heavier friend', "Runner"],
		['Swimming in the local lake. Not the clean one, the dirtier one', "Swim"], 
		['interviewing someone overqualified for her job', "Workhorse"], 
		['baking a shitty cake', "Bad Baker"], 
		['traveling home from work late', "Worker Bee"], 
		['saying the phrase "Preachign to the choire" while everyone rolled their eyes', "Annoying"], 
		['placing second in a bake off', "Bake Off"], 
		['reading buzzfeed.com at work', "Buzzfeed"], 
		['watching gossip girl on netflix', "Netflix"], 
		['shopping for a pregnancy test', "Pregnancy"], 
		['cooking kraft mac and chees for dinner', "Cooking"], 
		['traveling from NYC to chicago for business', "Travel"]
		
	
	]
	

	vices = [
	// with
		["a gambling problem", "Casino"  ],
		["a hatred of animals", "Woof Woof" ],
		["a bad smoking habit", "Smoking" ],
		["a love of animals", "Purr"],
		["an intense addiction to cocaine", "Drugged Up"],
		["a ridiculously innappropriate sense of humor", "Funny" ],
		["a hording addiction", "Piled Up"],
		["an anorexia issue", "Starving"],
		["a love of horses", "Horse"],
		['an absurd sense of self worth', "Self Centered"],
		['a foot odor problem', "Stinky"],
		['no self esteem', "Poor"],
		['a tendancy to be dramatic', "Drama"], 
		['only nine fingers', "Finger"],
		['a hatred for bees', "Bees"], 
		['no desire to find love', "Lonely"], 
		['a 2nd grade education', "Dumb"], 
		['a bladder infeciton', "Peeing"]
		
	
	]
	 
	 
	 
	 plotTwist = [
	 
	 // her ____ 
	 ["confessed to committing mass murder", "Murder" ],
	 ["started stalking her", "Stalker"  ],
	 ["fell asleep on a boat while it was sinking", "Sinking"  ],
	 ["ate too much pizza and died",   "Pizza"],
	 ["passed out while smoking a cigarrette and set the house on fire", "Fire"  ],
	 ["starting taking money out of her bank account",  "Stealer" ],
	 ["stole her personal information and started using it to buy porn",  "Porn" ],
	 ["started stealing random things from her purse",  "Theif"  ],
	[ "lied ot her about having the newest iPhone",  "iphone" ],
	 ["lied to her and told her that there was an inheritance when there wasn't",  "Liar" ],
	[ "pretended to be dead to collect on insurance",  "Dead" ],
	[ "died in a plane crash because the pilot fell asleep", "Sleepy"  ],
	[ "went to jail because of rape",  "Jailbait" ],
	[ "was raped in prison" ,  "Prison" ], 
	["was cat fished online by a group of 5th graders", "Online"],
		["sneezed and pooped her pants", "Dirty" ],
		["was mauled to death by a kitten", "Kitty"],
		["Ate too much Chinese food and went into a food coma, but never woke up", "Coma"],
		["Ate the wrong Mushrooms and never came back to reality", "Drugged"],
		["Bought a mail order bride, that turned out to be a killer Monkey", "Killer Monkey" ],
		["Slipped on a banana peel and sprained her ankle", "Banana Ankle"],
		["Had her first beer, and died instantly", "Drinking" ],
		["Got hazed at a Sorority and lost half a nipple", "Sisters"],
		["Feel asleep next to a loaf of bread outside and was eating by a group of ducks", "Quacked"],
		["Could not stop stealing soap from hotel rooms", "Steal" ],
		["dated multiple guys from FarmersOnly.com for their free crops", "Farming" ],
		["could only get sexually arroused when Mmmm bop was on the radio", "Pop Music" ], 
		["is a closet satanist with an avid ChristianMingle profile", "Christain Flingle"], 
		["accidentally cooked all the pets in the town", "Killer Cook"],
		["husband was cheating on her with the dad maid", "Dead Maid Walking"],
		["was a surrogate and secretly gave the baby up for adoption", "Secret Adoption"],
		["was pregnant with amnesia and doesn't know who the father is", "Baby Headache"],
		["babysitter loses her baby and finds a suitable replacement in a koala bear", "Bear my Child"],
		["winery turns into a crime scene for a brutal murder ", "Grapes of Wrath"],
		["cupcake store has to close down because nobody wants to pay 8 dollars for a cupcake", "For Goodness Cake"],
		["travels to syria and joins the ISIS ranks", ""],
		["dies in a freak frozen yogurt accident", "Soft Serve"],
		["runs a 5-k and doesn't finish", "5-Kant"],
		["gets caught growing marijuana in Texas", "Drug Dealz"],
		["moves to Kansas to start a avacado farm", "The Good Fat"],
		["starts a blog and nobody reads it", "Bloghurt"],
		["thought her husband was gay but turned out to be cheating... and gay", "Tell to hole truth"],
		["tells her hair person about the hidden bodies", "Snip Snip"],
["keeps seeing her husbands ghost everytime she yells at her kids", ""]
		

	 
	 
	 ]

	
	
// End Story Metadata

// Start Reusable Functions	
				
	chooseItem = function(arrayOfOptions, removeFlag, randomFlag){
		randomIndex = Math.floor(Math.random()*arrayOfOptions.length)
		finalVal = arrayOfOptions[randomIndex]
		console.log(randomIndex)
		console.log(arrayOfOptions)
		
		if(removeFlag == 1){
			removeItemFromList(arrayOfOptions, randomIndex)
		}
		
		if (randomFlag == 1){
			if(randomChance(3) == true){
				return ""
			}
		}
		
		return finalVal;
	}
	
	chooseActivity = function(professionObject){
		
		if(randomChance(2) == true){
			activityList = professionObject['activities']
			return chooseItem(activityList, 1, 0)
		} else {
			return chooseItem(genericActivities, 1,0)
		}
		
	}
	
	
	
	removeItemFromList = function(arrayOfOptions, indexNum){
		arrayOfOptions.splice(indexNum, 1)
	}
	
	randomChance = function(oneAndWhat){
		firstItem = Math.floor(Math.random()*oneAndWhat)
		console.log("FIRST ITEM CHOSEN = " + firstItem)
		secondItem = Math.floor(Math.random()*oneAndWhat)
		console.log("SECOND ITEM CHOSEN = " + secondItem)
		if (firstItem == secondItem){
			return true
		} else{
			return false
		}
	}
	
		pickAntagonist = function(){
		if(isSingle == true){
			return chooseItem(antagonistSingle)
		} else {
			return chooseItem(antagonistMarried)
		}
	}
	
	
	
// End Reusable functions

// Build Profile
	isSingle = randomChance(2)

	
	


// End Profile 


// Start Picking Items
				
	
				
	protagonist = chooseItem(protaganists, 1, 0)
	actress = chooseItem(actresses,1, 0)
	proAdjective = chooseItem(adjectivesDescribingPeople, 1, 1)
	profession = chooseItem(professionSuite, 1, 0)
	vice = chooseItem(vices, 1,0)
	job = profession['profession']
	activity = chooseActivity(profession)
	antagonist = pickAntagonist()
	pTwist = chooseItem(plotTwist)
	

// End Picking items

// Start Constructing Story

	sampleOutput = "Jane was a smelly doctor who spent her free time gambling on horse racing. She had no time for love, so imagine her surprise when a handsom man showed up at her door. Everything was perfect until she realized his mother was her bookie. Can she keep her life together?"
	// Intro(protaganist name + profession + quirky hobby). Problem(what the person is striving for but can't currently achive)
	
	// Protaganist
		// What do they do for a living? 
		// What do they do on their free time? 
		// On a sunday night they are probably? 
		// On a friday night they are probably? 
		// Favorite food? 
		// If they had 100 dollars that they had to spend they would 
		// Do they have close family? 
		// Who is the most important person to them? 
		// If they got a call on their cell phone... it would probably be....
		// How clean is their house? 
		// Dream vacation destination
		// Dream wedding venue
		// Favorite band
		// Where do they want to be in 5 years?
		// Where do they want to be in 1 year?
		// Where do they want to be tomorrow
		// What is the one thing they want to do better? (If asked publicly) 
		// What is the one thing they want to do better? (if they were honest with themself)
		
storyTitleArray = []

storyTitleArray.push(activity[1]) 
storyTitleArray.push(vice[1]) 
storyTitleArray.push(pTwist[1]) 
storyTitleArray.push(antagonist[1]) 

title1 = chooseItem(storyTitleArray, 1, 0) 
title2 = chooseItem(storyTitleArray, 1, 0)
storyTitle = "<h4>" + "The " + title1 + " " + title2 + "</h4> <br>"; 



storyIntro = protagonist + " (" + actress + ")" + " was a " + proAdjective + " " + job + " with " + vice[0] + ". "; 
	storySetup = "While " + activity[0]; 	
	introduceAntagonist = ", " + "her " + antagonist[0] + " "
	storyPlotTwist = pTwist[0]
	story = storyTitle + storyIntro + storySetup + introduceAntagonist + storyPlotTwist

// End Constructing Story


// Start Debug

	
	console.log(story)
	
	$("#story").html(story)
	
// End Debug

// Display Story

// End Display 
	
	
	
	
	
	
})