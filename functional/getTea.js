const greenTea = () => "greanTea";
const blackTea = () => "blackTea";

const serveTea = (teaType, cups) => {
  let teaCups = [];

  for (let i = 1; i <= cups; i++) {
    let teaCup = teaType();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const getGreenTea = serveTea(greenTea, 13);
const getBlackTea = serveTea(blackTea, 7);

console.log(getGreenTea, getBlackTea);
