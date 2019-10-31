whatCanIDrink = function(age) {
	if (age < 0) {
		return "Sorry. I can’t tell what drink because that age is incorrect!";
	}
	else if (age < 14) {
		return "Drink Toddy";
	}
	else if (age < 18 && age >=14) {
		return "Drink Coke";
	}
	else if (age < 21 && age >=18) {
		return "Drink Beer";
	}
	else if (age < 130) {
		return "Drink Whisky";
	}
	else {
		return "Sorry. I can’t tell what drink because that age is incorrect!"
	}
};


// function whatCanIDrink (age){
//     if (age < 0) {
//         alert("Sorry. I can't tell what drink because that age is incorrec!");
// }   else if
//         (age < 14) {
//             let message = "Drink Toddy";
// }   else if
//         (age < 18) {
//             let message = "Drink Coke"
// }   else if
//         (age < 21) {
//             let message = "Drink Beer"
// }   else if
//         (age < 130) {
//             let message = "Drink FizzyWhisky"
// }
// result = console.log (message);
// }
