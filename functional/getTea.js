const getTea = () => "greanTea";

const serveTea = (cups) => {
  let teaCups = [];

  for (let i = 1; i <= cups; i++) {
    let teaCup = getTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const TeaForIkendu = serveTea(20);
console.log(TeaForIkendu);
