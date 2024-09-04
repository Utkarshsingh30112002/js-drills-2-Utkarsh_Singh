import {intrestInVideoGames,inGermany,withMasters,groupUsers} from "./solution.js";
const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}





// // Q1 Find all users who are interested in playing video games.
const ans = intrestInVideoGames(users);
//  intrestInVideoGames();
//  intrestInVideoGames();
 console.log("These users are intrested in playing video games :-");
 console.log(ans);
// // Q2 Find all users staying in Germany.
console.log("These are the users Staying in Germany :-");
 console.log(inGermany(users));
// inGermany();
// inGermany();
 
// // Q3 Find all users with masters Degree.
console.log("These are the users having masters Degree :-");
 console.log(withMasters(users));
// withMasters();
// withMasters();

// // Q4 Group users based on their Programming language mentioned in their designation.
console.log("Users based on programming language :-");
  console.log(groupUsers(users));
  console.log(groupUsers([]));
  console.log(groupUsers({a:{}}));
  console.log(groupUsers());
//  groupUsers();
//  groupUsers();

