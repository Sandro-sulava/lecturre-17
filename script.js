// let userName = "Giorgi";

// console.log(typeof userName);

// let age = 30;

// console.log(typeof age);

// let isStudent = false;

// console.log(typeof isStudent);

// let testOne = null;

// console.log(typeof testOne);

// let job;

// console.log(typeof job);

// todo obj -ის სახელი
let userProfile = {
  // todo Key:value
  id: 1234,
  userName: "Sulava",
  isStudent: false,
  email: "Sulava@gmail.com",
  recoverEmail: null,
  address: {
    coutry: "Georgia",
    city: "Tbilisi",
    street: "wereteli",
    homeId: 10,
  },
};

console.log(userProfile.address.coutry);

let keyWord = "userName";
console.log(userProfile[keyWord]);

console.log(userProfile["address"]["street"]);

let userArray = ["Sulava", 10, false, "Sulava@gmaii.com"];
console.log(userArray);

// userProfile.email;
// console.log("Hello World");

// console.log(userProfile.id);
// console.log(userProfile.userName);
// console.log(userProfile.isStudent);
// console.log(userProfile.email);
// console.log(userProfile.recoverEmail);
// console.log(userProfile.address);

// ?let userList = [
//  ? { userName: "Sandro", age: 16 },
//  ? { userName: "Saba", age: 15 },
// ?  { userName: "Salome", age: 9 },
//  ? { userName: "Sopo", age: 18, isStudent: false },
// ?];

// ?console.log(userList[0].userName);
// ?console.log(userList[1].age);
// ?console.log(userList[2].isStudent);

userArray.shift();
userArray.pop();

console.log(userArray.unshift);

console.log(userArray);
