const changeColor = () => {
  let color1 = Math.floor(Math.random() * 100 + 1);
  let color2 = Math.floor(Math.random() * 100 + 1);
  let color3 = Math.floor(Math.random() * 100 + 1);
  //   let transparency = Math.floor(Math.round() * 1 + 1);
  document.querySelector(
    "body"
  ).style.backgroundColor = `rgb(${color1},${color2},${color3})`;
};

var setIntervalId;

document.querySelector("#start").addEventListener("click", () => {
    setIntervalId=setInterval(() => {
        changeColor();
      }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(setIntervalId);
});
