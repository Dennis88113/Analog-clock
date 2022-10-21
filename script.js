const deg = 6;
const hr = document.querySelector("#hr");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

const month = document.querySelector(".month");
const date = document.querySelector(".date");
console.log(month);
let current = new Date();
const currentMonthOptions = {
  month: "long",
};
const currentDateOptions = {
  day: "numeric",
};

date.innerHTML = current.toLocaleString("ru", currentDateOptions);
month.innerHTML = current
  .toLocaleString("en", currentMonthOptions)
  .split("")
  .map((e, i) => `<span style="--rot:${i * 13}deg">${e}</span>`)
  .join("");
