//return the number maximum and minimum breaking scores

function breaking(scores) {
  // Write your code here
  let result = [];
  let result2 = [];
  result.push(scores[0]);
  result2.push(scores[0]);
  for (let i = 0; i < scores.length; i++) {
    let ab = scores[0];
    if (scores[i] > ab && scores[i] > result[result.length - 1]) {
      result.push(scores[i]);
    }
    if (scores[i] < ab && scores[i] < result[result2.length - 1]) {
      result2.push(scores[i]);
    }
  }
  console.log(result.slice(1), result2.slice(1));

  return [result.length - 1, result2.length - 1];
}
console.log(breaking([3, 10, 21, 36, 10, 2, 28, 35, 1, 5, 24, 42]));

//OR

const breaking2 = (scores) => {
  let maxcount = 0;
  let mincount = 0;
  let max = scores[0];
  let min = scores[0];

  for (let score of scores) {
    if (score > max) {
      max = score;
      maxcount++;
    }
    if (score < min) {
      min = score;
      mincount++;
    }
  }
  return [maxcount, mincount];
};
console.log(breaking2([3, 10, 21, 36, 10, 2, 28, 35, 1, 5, 24, 42]));
