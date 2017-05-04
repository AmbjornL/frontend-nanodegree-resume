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
 var formattedName = HTMLheaderName.replace("%data%", "Ambj&#246;rn");
  var formattedRole = HTMLheaderRole.replace("%data%", "Programmerare");
 $("#header").prepend(formattedName);
 $("#header").prepend(formattedRole);
 