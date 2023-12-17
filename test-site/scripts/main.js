let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/20231115j9d2kg.png") {
    myImage.setAttribute("src", "images/逃离.png");
  } else {
    myImage.setAttribute("src", "images/20231115j9d2kg.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Azusa_Ke 酷毙了，" + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Azusa_Ke 酷毙了，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};
