// var x = document.getElementsByName("body")[0];
// console.log("x=", x);

//1
var y = document.createElement("h1");
y.innerText = "ovo je nas header";

var div = document.getElementsByClassName("description")[0];

div.parentNode.insertBefore(y, div);

//2
var divInfo = document.createElement("div");
divInfo.className = "info";

var foot = document.getElementById("footer");

foot.parentNode.insertBefore(divInfo, foot);

//3
const footerNode = document.getElementById("footer");
const ul = footerNode.getElementsByTagName("ul")[0];

for( let i = 3; i <= 5; i++){
    let listVievItem = document.createElement("li");
    listVievItem.appendChild(document.createTextNode(i));
    ul.appendChild(listVievItem);
}