function sideMenuToggle() {
  document.querySelector(".sideBar").classList.toggle("sideBarShow");
}

// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// change value
let value = document.getElementById("value");
let value2 = document.getElementById("value2");
let result;
function leftChange() {
  result = value.innerText;
  result = result.trim();
  if (result === "50,000") {
    value.innerText = "25,000";
  }
  if (result === "100,000") {
    value.innerText = "50,000";
  }
}
function rightChange() {
  result = value.innerText;
  result = result.trim();
  if (result === "25,000") {
    value.innerText = "50,000";
  }
  if (result === "50,000") {
    value.innerText = "100,000";
  }
}
function leftChange2() {
  result = value2.innerText;
  result = result.trim();
  if (result === "50,000") {
    value2.innerText = "25,000";
  }
  if (result === "100,000") {
    value2.innerText = "50,000";
  }
}
function rightChange2() {
  result = value2.innerText;
  result = result.trim();
  if (result === "25,000") {
    value2.innerText = "50,000";
  }
  if (result === "50,000") {
    value2.innerText = "100,000";
  }
}
