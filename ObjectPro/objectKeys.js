//return object keys / properties
const users = {
  Alan: { online: true },
  Jeff: { online: false },
  Gift: { online: true },
  Sarah: { online: false },
  Ryan: { online: true },
};

let keyGetter = (obj) => {
  return Object.keys(obj);
};
console.log(keyGetter(users));
