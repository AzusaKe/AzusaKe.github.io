let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/逃离.png");
  } else {
    myImage.setAttribute("src", "images/20231115j9d2kg.png");
  }
};
