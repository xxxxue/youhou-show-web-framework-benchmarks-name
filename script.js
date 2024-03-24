// ==UserScript==
// @name         Web框架测评网站显示框架的编程语言名称
// @namespace    http://tampermonkey.net/
// @version      2024-03-24
// @description  try to take over the world!
// @author       You
// @match        https://www.techempower.com/benchmarks/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=techempower.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  function Run() {
    let allSpan = document.querySelectorAll("span[title]");
    for (const item of allSpan) {
      let title = item.getAttribute("title");
      title = title.replace("Language: ", "");

      let bgColor = "white";
      if (title == "JavaScript") {
        title = "JS";
        bgColor = "lawngreen";
      } else if (title == "typescript") {
        title = "TS";
        bgColor = "lawngreen";
      } else if (title == "Java") {
        bgColor = "yellow";
      } else if (title == "C#") {
        bgColor = "orange";
      } else if (title == "PHP") {
        bgColor = "powderblue";
      } else if (title == "Go") {
        bgColor = "lightgray";
      } else if (title == "Python") {
        bgColor = "#00ffd7";
      }

      item.innerText = title;
      item.style = `
      position: absolute;
      left: -30px;
      border: 1px solid red;
      background-color: ${bgColor};
      display: block;
      width: fit-content;
      height: fit-content;
      padding: 0px 2px;
      `;
    }
  }

  let btn = document.createElement("button");

  btn.innerText = "显示编程语言名称";
  btn.onclick = () => Run();
  btn.style = `
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99999;
   `;
  document.body.appendChild(btn);
  // Your code here...
})();
