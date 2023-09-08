//  grade according to these rules:
// If the difference between the grade and the next multiple of 5 is less
//than 3, round  up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result
// will still be a failing grade.

const grading = (grades) => {
  let result = [];
  for (let grade of grades) {
    if (grade < 38) result.push(grade);
    else {
      let rm = grade % 5;
      let round = grade - rm + 5;
      if (round - grade < 3) result.push(round);
      else result.push(grade);
    }
  }
  return result;
};
console.log(grading([73, 67, 38, 33]));
