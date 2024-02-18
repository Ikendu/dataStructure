const greenTea = () => "green tea Cup";
const blackTea = () => "black tea Cup";

const getTea = (teaType, quantity) => {
  let teaCups = [];

  for (let i = 1; i <= quantity; i++) {
    let teacup = teaType();
    teaCups.push(teacup);
  }
  return teaCups;
};

let teaGetter1 = getTea(greenTea, 20);
let teaGetter2 = getTea(blackTea, 10);

console.log(teaGetter1, teaGetter2);
