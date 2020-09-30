const root = document.documentElement;
const time = document.querySelector("#time");
const toggle = document.querySelector(".Mode");
const hour24 = document.querySelector(".Hour24");
const hour12 = document.querySelector(".Hour12");
toggle.addEventListener("click", () => {
  if (toggle.value === "Light") {
    toggle.value = "Dark";
    root.style.setProperty("--txt-clr", "#ffffff");
    root.style.setProperty("--back-clr", "#202020");
    root.style.setProperty(
      "--boxShadow-out",
      "  4px 4px 6px #171717, -4px -4px 6px #292929"
    );
    root.style.setProperty(
      "--boxShadow-in",
      " inset 5px 5px 7px #191919,  inset -5px -5px 7px #272727"
    );
  } else {
    toggle.value = "Light";
    root.style.setProperty("--txt-clr", "#272341");
    root.style.setProperty("--back-clr", "#e5e5e5");
    root.style.setProperty(
      "--boxShadow-out",
      "  -3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288)"
    );
    root.style.setProperty(
      "--boxShadow-in",
      " inset -3px -3px 7px #ffffff73,inset 2px 2px 5px rgba(94, 104, 121, 0.288"
    );
  }
});
function first() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours >= 12) {
    hour12.style.setProperty("box-shadow", "var(--boxShadow-out)");
    hour24.style.setProperty("box-shadow", "var(--boxShadow-in)");
    hour24.style.setProperty("color", "var(--txt-fcs");
    hour12.style.setProperty("color", "var(--txt-clr)");
  } else {
    hour24.style.setProperty("box-shadow", "var(--boxShadow-out)");
    hour12.style.setProperty("box-shadow", "var(--boxShadow-in)");
    hour12.style.setProperty("color", "var(--txt-fcs");
    hour24.style.setProperty("color", "var(--txt-clr)");
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  time.textContent = `${hours}:${minutes}:${seconds}`;
  setTimeout(first, 1000);
}
first();
