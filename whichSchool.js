/* if age < 13, school = Elementary School
elif age < 18, school = Secondary School
else, school = Lighthouse Labs */

function whichSchool(age){
  var age = age;
  if(age < 13){
    return "Elementary School";
  } else if(age < 18){
    return "Secondary School";
  } else {
    return "Lighthouse Labs"
  }
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
