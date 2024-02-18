let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};
//adding to the abject of an array
const modify = (userDeails, friend) => {
  userDeails.data.friends.push(friend);
  return userDeails.data.friends;
};
console.log(modify(user, "Marthins"));
