let loader = document.getElementById("preloader");

for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  loader.appendChild(div);
}

let loaderChild = document.querySelectorAll("#preloader div");

for (let i = 0; i < loaderChild.length; i++) {
  let x;
  if (i % 2 === 0) {
    x = 0;
  } else {
    x = 1;
  }
  for (let j = 0; j < loaderChild.length + 1; j++) {
    let div = document.createElement("div");
    div.style.left = j * 10 - x * 5 + "%";
    div.classList.add("loaderItem");
    loaderChild[i].appendChild(div);
  }
}

let loaderItem = document.getElementsByClassName("loaderItem");

window.addEventListener("load", () => {
  for (let i = 0; i < loaderItem.length; i++) {
    loaderItem[i].style.width = "0%";
    loaderItem[i].style.transitionDelay = Math.random() * 1 + "s";
  }
  setTimeout(() => {
    for (let i = 0; i < loaderChild.length; i++) {
      if (i % 2 === 0) {
        loaderChild[i].style.marginLeft = "100%";
      } else {
        loaderChild[i].style.marginLeft = "-100%";
      }
    }
  }, 1500);
  setTimeout(() => {
    loader.style.opacity = "0";
  }, 2000);
  setTimeout(() => {
    loader.style.transform = "scale(0)";
  }, 2500);
});

let home0 = document.getElementById("home");
let about0 = document.getElementById("about");
let portfolio0 = document.getElementById("portfolio");
let contact0 = document.getElementById("contact");
let skills0 = document.getElementById("skills");
let active = "home";

function home() {
  home0.style.marginLeft = "0%";
  home0.style.marginTop = "0%";
  about0.style.marginLeft = "-100%";
  about0.style.marginTop = "-100%";
  portfolio0.style.marginLeft = "-100%";
  portfolio0.style.marginTop = "-100%";
  contact0.style.marginLeft = "-100%";
  contact0.style.marginTop = "-100%";
  skills0.style.marginLeft = "-100%";
  skills0.style.marginTop = "-100%";
  active = "home";
}

function about() {
  home0.style.marginLeft = "-100%";
  home0.style.marginTop = "-100%";
  about0.style.marginLeft = "0%";
  about0.style.marginTop = "0%";
  portfolio0.style.marginLeft = "-100%";
  portfolio0.style.marginTop = "-100%";
  contact0.style.marginLeft = "-100%";
  contact0.style.marginTop = "-100%";
  skills0.style.marginLeft = "-100%";
  skills0.style.marginTop = "-100%";
  active = "about";
}

function skills() {
  home0.style.marginLeft = "-100%";
  home0.style.marginTop = "-100%";
  about0.style.marginLeft = "-100%";
  about0.style.marginTop = "-100%";
  skills0.style.marginLeft = "0%";
  skills0.style.marginTop = "0%";
  portfolio0.style.marginLeft = "-100%";
  portfolio0.style.marginTop = "-100%";
  contact0.style.marginLeft = "-100%";
  contact0.style.marginTop = "-100%";
  active = "skills";
}

function portfolio() {
  home0.style.marginLeft = "-100%";
  home0.style.marginTop = "-100%";
  about0.style.marginLeft = "-100%";
  about0.style.marginTop = "-100%";
  portfolio0.style.marginLeft = "0%";
  portfolio0.style.marginTop = "0%";
  contact0.style.marginLeft = "-100%";
  contact0.style.marginTop = "-100%";
  skills0.style.marginLeft = "-100%";
  skills0.style.marginTop = "-100%";
  active = "portfolio";
}

function contact() {
  home0.style.marginLeft = "-100%";
  home0.style.marginTop = "-100%";
  about0.style.marginLeft = "-100%";
  about0.style.marginTop = "-100%";
  portfolio0.style.marginLeft = "-100%";
  portfolio0.style.marginTop = "-100%";
  contact0.style.marginLeft = "0%";
  contact0.style.marginTop = "0%";
  skills0.style.marginLeft = "-100%";
  skills0.style.marginTop = "-100%";
  active = "contact";
}

let homeBG = document.querySelector("#home video");

function scaleBackground(event) {
  let x = event.clientX;
  let y = event.clientY;
  let percentageX = (x / window.innerWidth) * 10;
  let percentageY = (y / window.innerHeight) * 10;
  homeBG.style.width = 100 + percentageX + percentageY + "%";
  homeBG.style.height = 100 + percentageX + percentageY + "%";
}

let menu = document.getElementById("menu");
let menuContainer = document.getElementById("menu-container");
let menuChecker = "closed";
function toggleMenu() {
  if (menuChecker === "closed") {
    menuContainer.style.transform = "rotate(0deg)";
    menuContainer.style.marginLeft = "0";
    menuContainer.style.borderRadius = "0";
    setTimeout(() => {
      for (let i = 0; i < menuContainer.children.length; i++) {
        menuContainer.children[i].style.margin = "0";
      }
    }, 1000);
    //change menu icon
    menu.classList.remove("hover");
    menu.classList.add("clicked");

    menuChecker = "opened";
  } else {
    setTimeout(() => {
      menuContainer.style.transform = "rotate(-90deg)";
      menuContainer.style.marginLeft = "100%";
      menuContainer.style.borderRadius = "100%";
    }, 500);
    for (let i = 0; i < menuContainer.children.length; i++) {
      if (i % 2 === 0) {
        menuContainer.children[i].style.marginLeft = "-150%";
      } else {
        menuContainer.children[i].style.marginRight = "-150%";
      }
    }
    //change menu icon
    menu.classList.remove("clicked");
    menu.classList.add("hover");

    menuChecker = "closed";
  }
}

let aboutText = document.querySelector("#about p").innerText;

document.querySelector("#about p").innerText = "";

for (let i = 0; i < aboutText.length; i++) {
  let span = document.createElement("span");
  span.innerText = aboutText.charAt(i);
  document.querySelector("#about p").appendChild(span);
}

let letters = document.querySelectorAll("#about p span");

for (let i = 0; i < letters.length; i++) {
  letters[i].style.transform = "scale(30)";
}

window.addEventListener("mousewheel", (event) => {
  if (event.wheelDelta < 0) {
    if (active === "home") {
      about();
    } else if (active === "about") {
      skills();
    } else if (active === "skills") {
      portfolio();
    } else if (active === "portfolio") {
      contact();
    } else {
      home();
    }
  } else {
    if (active === "contact") {
      portfolio();
    } else if (active === "portfolio") {
      skills();
    } else if (active === "skills") {
      about();
    } else if (active === "about") {
      home();
    } else {
      contact();
    }
  }
});
