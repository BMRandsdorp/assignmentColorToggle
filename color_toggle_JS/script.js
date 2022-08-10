// menu show / hide
const toggler =  document.querySelector(`.toggleMenu`);

/*  display instead of visibility (harder to use when combined with transtions)
function showMenu() {
  const menuToggle = document.querySelector(".menu-list");
  if (menuToggle.style.display === "block") {
    menuToggle.style.display = "none";
  } else {
    menuToggle.style.display = "block";
  };
  console.log("menu toggled");
}; */

function toggleMenu(){ 
  const menuToggle = document.querySelector(".menu-list");
  if (menuToggle.style.visibility === `visible`){ 
    menuToggle.style.visibility = 'hidden';
    menuToggle.style.opacity = `0`;
  } else {
    menuToggle.style.visibility = 'visible';
    menuToggle.style.opacity = `1`;
  };
  console.log("toggle menu");
}; 

toggler.addEventListener("click" , toggleMenu);

// show menu on hover 
function hideMenu() { 
  const menuFade = document.querySelector(".menu-list"); 
  menuFade.style.visibility = 'hidden';
  menuFade.style.opacity = `0`;
};

function showMenu(){
  const menuShow = document.querySelector(".menu-list");
  menuShow.style.visibility = 'visible';
  menuShow.style.opacity = `1`;
}; 

toggler.addEventListener("mouseenter" , showMenu);
toggler.addEventListener("mouseleave" , hideMenu); 

// color toggle (added text replacement js to show picked color)
const colorText = document.querySelector(".picked-color");

// added radio buttons
const homeCheck = document.getElementById('baseRadio');
const redCheck = document.getElementById('redRadio');
const purpleCheck = document.getElementById('purpleRadio');
const greenCheck = document.getElementById('greenRadio');
const blueCheck = document.getElementById('blueRadio');

const selectBase = document.querySelector("#baseBg");
function toggleBase() {
  const bodyElement = document.body;
  if (bodyElement.classList = `red-bg`) { 
  bodyElement.classList.replace(`red-bg`, `base-bg`);} 
  else if (bodyElement.classList = `purple-bg`) { 
    bodyElement.classList.replace(`purple-bg`, `base-bg`);}
  else if (bodyElement.classList = `green-bg`) { 
    bodyElement.classList.replace(`green-bg`, `base-bg`);} 
  else if (bodyElement.classList = `blue-bg`) { 
    bodyElement.classList.replace(`blue-bg`, `base-bg`);} 
  else bodyElement.classList.add(`base-bg`);   
};
selectBase.addEventListener("click" , function(){
  toggleBase();
  colorText.innerHTML = `The chosen color is lightgrey`;
  homeCheck.checked = true;
  //toggleMenu(); no more use thanks to hover and bigger wrapper
}); 

const selectRed = document.querySelector("#redBg");
function toggleRed() {
  const bodyElement = document.body;
  if (bodyElement.classList = `base-bg`) { 
  bodyElement.classList.replace(`base-bg`, `red-bg`);} 
  else if (bodyElement.classList = `purple-bg`) { 
    bodyElement.classList.replace(`purple-bg`, `red-bg`);}
  else if (bodyElement.classList = `green-bg`) { 
    bodyElement.classList.replace(`green-bg`, `red-bg`);} 
  else if (bodyElement.classList = `blue-bg`) { 
    bodyElement.classList.replace(`blue-bg`, `red-bg`);} 
  else bodyElement.classList.add(`red-bg`); 
}; 
selectRed.addEventListener("click" , function(){
  toggleRed();
  colorText.innerHTML = `The chosen color is red`;
  redCheck.checked = true;
}); 

const selectPurple = document.querySelector("#purpleBg");
function togglePurple() {
  const bodyElement = document.body;
  if (bodyElement.classList = `base-bg`) { 
  bodyElement.classList.replace(`base-bg`, `purple-bg` );} 
  else if (bodyElement.classList = `red-bg`) { 
    bodyElement.classList.replace(`red-bg`, `purple-bg`);}
  else if (bodyElement.classList = `green-bg`) { 
    bodyElement.classList.replace(`green-bg`, `purple-bg`);} 
  else if (bodyElement.classList = `blue-bg`) { 
    bodyElement.classList.replace(`blue-bg`, `purple-bg`);} 
  else bodyElement.classList.add(`purple-bg`);   
};
selectPurple.addEventListener("click" , function(){
  togglePurple();
  colorText.innerHTML = `The chosen color is purple`;
  purpleCheck.checked = true;
 // toggleMenu();
}); 

const selectGreen = document.querySelector("#greenBg");
function toggleGreen() {
  const bodyElement = document.body;
  if (bodyElement.classList = `base-bg`) { 
  bodyElement.classList.replace(`base-bg`, `green-bg` );} 
  else if (bodyElement.classList = `red-bg`) { 
    bodyElement.classList.replace(`red-bg`, `green-bg`);}
  else if (bodyElement.classList = `purple-bg`) { 
    bodyElement.classList.replace(`purple-bg`, `green-bg`);} 
  else if (bodyElement.classList = `blue-bg`) { 
    bodyElement.classList.replace(`blue-bg`, `green-bg`);} 
  else bodyElement.classList.add(`green-bg`);   
};
selectGreen.addEventListener("click" , function(){
  toggleGreen();
  colorText.innerHTML = `The chosen color is green`;
  greenCheck.checked = true;
  //toggleMenu();
}); 

const selectBlue = document.querySelector("#blueBg");
function toggleBlue() {
  const bodyElement = document.body;
  if (bodyElement.classList = `base-bg`) { 
  bodyElement.classList.replace(`base-bg`, `blue-bg` );} 
  else if (bodyElement.classList = `red-bg`) { 
    bodyElement.classList.replace(`red-bg`, `blue-bg`);}
  else if (bodyElement.classList = `purple-bg`) { 
    bodyElement.classList.replace(`purple-bg`, `blue-bg`);} 
  else if (bodyElement.classList = `green-bg` ) { 
    bodyElement.classList.replace(`green-bg` , `blue-bg`);} 
  else bodyElement.classList.add(`blue-bg`);   
};
selectBlue.addEventListener("click" , function(){
  toggleBlue();
  colorText.innerHTML = `The chosen color is blue`;
  blueCheck.checked = true;
  //toggleMenu();
}); 

// select colors pressing keys 1-5
document.addEventListener('keydown', (event) => {
  if (event.key == "1") {toggleBase(); colorText.innerHTML = `The chosen color is lightgrey`; homeCheck.checked = true; }
  else if (event.key == "2") {toggleRed(); colorText.innerHTML = `The chosen color is red`; redCheck.checked = true;}
  else if (event.key == "3") {togglePurple(); colorText.innerHTML = `The chosen color is purple`; purpleCheck.checked = true;}
  else if (event.key == "4") {toggleGreen(); colorText.innerHTML = `The chosen color is green`; greenCheck.checked = true;}
  else if (event.key == "5") {toggleBlue(); colorText.innerHTML = `The chosen color is blue`; blueCheck.checked = true;}});  