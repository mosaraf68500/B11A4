function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    !person1 ||
    !person2 ||
    Array.isArray(person1) ||
    Array.isArray(person2) ||
    typeof person1.gender !== "string" ||
    typeof person2.gender !== "string" ||
    typeof person1.age !== "number" ||
    typeof person2.age !== "number"
  ) {
    return "Invalid";
  }

  if (person1.gender === person2.gender) {
    return false;
  }

  if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }

  return true;
}

const result = validProposal(
    { name: "toya", gender: 90, age: 20 },

    { name: "kader", gender: "male", age: 25 } 
    
    
);
console.log(result);
