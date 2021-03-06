// on click, new color will be generated
//select new color and then select background color and and post to background color
//add text under button to show new color

const bodyColor = document.querySelector("body");
bodyColor.style.backgroundColor = "gray";

const button = document.querySelector("button");
button.style.backgroundColor = "#696969";

button.addEventListener("click", function () {
  console.log("button clicked");
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.querySelector("body").style.backgroundColor = newColor;
  document.querySelector("button").style.backgroundColor = newColor;

  if (r < 90 || g < 90 || b < 90) {
    button.style.color = "white";
  } else {
    button.style.color = "black";
  }
  button.innerText = `rgb(${r}, ${g}, ${b})`;
});
