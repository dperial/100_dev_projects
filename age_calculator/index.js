/* const myBirth = document.getElementById("start");
const today = new Date();
const myAge = document.getElementById("age");

function calculateAge() {

    let birthday = new Date(myBirth.value);
    console.log(new Number((today.getTime() - birthday.getTime()) / 31536000000).toFixed(0));
    myAge.innerHTML = " Your age is " + new Number((today.getTime() - birthday.getTime()) / 31536000000).toFixed(0) + " years old.";

} */

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);