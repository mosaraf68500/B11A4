function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] === "number") {
      if (marks[i] >= 50) {
        passCount++;
      } else {
        failCount++;
      }
    } else {
      return "Invalid";
    }
  }

  if (passCount > failCount) {
    return true;
  } else {
    return false;
  }
}

const result = willSuccess({age:58 });
console.log(result);
