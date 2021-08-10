// Column Switcher
const columnswitcher = document.getElementById("columns-switcher");
var demo1 = document.querySelector(".columns-container");


columnswitcher.addEventListener("change", (evt) => {
    demo1.style.gridTemplateColumns = evt.target.value;
});
// Column Switcher

// Row Switcher
const rowswitcher = document.getElementById("rows-switcher");
var demo2 = document.querySelector(".row-container");


rowswitcher.addEventListener("change", (evt) => {
    demo2.style.gridTemplateRows = evt.target.value;
});
// Row Switcher

// Content Switcher
const contentswitcher = document.getElementById("content-switcher");
var demo3 = document.querySelector(".content-container");


contentswitcher.addEventListener("change", (evt) => {
    demo3.style.gridTemplateColumns= evt.target.value;
});
// Content Switcher


// fr switcher
const frswitcher = document.getElementById("fr-switcher");
var demo4 = document.querySelector(".fr-container");

frswitcher.addEventListener("change", (evt) => {
    demo4.style.gridTemplateColumns= evt.target.value;
});
// fr Switcher

// Auto Fill and Auto Fit
const autoswitcher = document.getElementById("auto-switcher");
var demo5 = document.querySelector(".auto-container");

autoswitcher.addEventListener("change", (evt) => {
    demo5.style.gridTemplateColumns= evt.target.value;
});
//AUto fill and AUto Fit

//Auto Flow
const autoflowswitcher = document.getElementById("autoflow-switcher");
var demo6 = document.querySelector(".autoflow-container");

autoflowswitcher.addEventListener("change", (evt) => {
    demo6.style.gridAutoFlow= evt.target.value;
});
// Auto Flow