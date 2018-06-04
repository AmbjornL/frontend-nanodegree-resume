var work = {};

work.employer = "IAR Systems";
work.position = "Senior System Developer";
work.years = 19;
work.city = "Uppsala";
/*
var edu = {};
edu["name"] = "Uppsala Universitet";
edu["years"] = 19;
edu["city"] = "Uppsala";
*/
var edu = {
	"schools": [
		{
			"name":"Uppsala Universitet",
			"city":"Uppsala",
			"graduation_year":1994
		} ,
		{
			"name":"Katedralskolan",
			"city":"Uppsala",
			"graduation_year":1988
		}
	],
	"onlineCourses" : [
		{
			"name":"Java Script",
			"city":"Uppsala",
			"graduation_year":1988
		}
	]
}

$("#main").append(work["position"]);
$("#main").append("<br />");
$("#main").append(edu.name);

/*var bio = {
	"name":"Ambjörn Lundgren",
	"role":"Software Developer",
	"contacts": {
		"street":"Svartbäcksgatan 121", 
		"town":"Uppsala",
		"country":"Sweden"
		},
	"welcomeMessage":"To whom it may concern",
	"picture":"images/Ambjörn.jpg",
	"skills":["C++", "UX"]
};
$("#main").append(bio.name);
$("#main").append("<br />");
$("#main").append(bio.role);
$("#main").append("<br />");
$("#main").append(bio.contacts.street);
$("#main").append("<br />");
$("#main").append(bio.contacts.town);
$("#main").append("<br />");
$("#main").append(bio.contacts.country);
$("#main").append("<br />");
var imageUrl = HTMLprojectImage.replace("%data%", bio.picture);
$("#main").append("<br />");
$("#main").append(imageUrl);
$("#main").append("<br />");
$("#main").append(bio.welcomeMessage);
$("#main").append("<br />");
$("#main").append(bio.skills);
*/

/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

    // Your code goes here!
    var spaceIndex = oldName.indexOf(" ");
	if (spaceIndex != -1)
	{
		var firstName = oldName.slice(0, spaceIndex);
		var sirName = oldName.slice(spaceIndex + 1);
		firstName = firstName.toLocaleLowerCase();
		firstName = firstName[0].toLocaleUpperCase() + firstName.slice(1);
		sirName = sirName.toLocaleUpperCase();
		
		finalName = firstName + " " + sirName;
	}

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
*/
/*var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.slice(3);
	s = "Ud" + s;
    
    return s;
};

// Did your code work? The line below will tell you!
//console.log(udacityizer(s));

//var skills = 
//["Awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills.length);

var nums = [2,3,4];
console.log(nums);
var last = nums.pop();
last = last + 1;
nums.push(last);
console.log(nums);


var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array.slice(0);
    var last = newArray.pop();
    last = last + 1;
    newArray.push(last);
    console.log(_array)
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
*/

/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 /*$("#main").append("Ambjorn");
 var firstName = "james";
 var age = 32;
 console.log(firstName);*/
 /*var awesomeThoughts = "I am Ambjorn and I am AWESOME";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 console.log(funThoughts);
 */
 /*
 var email = "ambjorn.lundgren@iar.com";
 var newEmail = email.replace("iar", "outlook");
 console.log(email);
 console.log(newEmail);*/
 //$("#main").append(funThoughts);
 /*var formattedName = HTMLheaderName.replace("%data%", "Ambj&#246;rn");
  var formattedRole = HTMLheaderRole.replace("%data%", "Programmerare");
 $("#header").prepend(formattedName);
 $("#header").prepend(formattedRole);
 */