let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const closeBtn = document.querySelector(".close-btn");
const currTime = document.querySelector(".currTime");
const Age = document.getElementById("age");
var today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString("en-US")}`;
currTime.innerText = `Today's Time is : ${today.toLocaleTimeString("en-US")}`;

//The fuction below is to close displayAge section
closeBtn.addEventListener("click", () => {
  displayAge.style.visibility = "hidden";
});

// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());

/// the expression below is to calculate the Age of the user input value
CalcAge.addEventListener("click", () => {
  var birthDate = new Date(dateOfBirth.value);

  var age = today.getFullYear() - birthDate.getFullYear();

  var m = today.getMonth() - birthDate.getMonth();
  // console.log(m);
  // console.log(today.getUTCDay());
  // console.log(birthDate.getMonth());
  // console.log(today.getMonth());
  // console.log(birthDate.getDate());

  // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //   // age = age - 1;
  // }
  displayAge.style.visibility = "visible";
  Age.innerText = `You are ${age} years old.`;
});
