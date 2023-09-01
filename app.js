import React from "react";
import ReactDOM from "react-dom/client";

// /*
// <div id="parent">
//     <div id="child">
//         <h1>I'm a h1 tag</h1>
//     </div>
// </div>
// */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm a h1 tag")
//   )
// );

/*
<div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [ React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag"),
    ]
    )
  );

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
console.log(heading); //This is an object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //This render method converts the h1 object to the h1 tag

root.render(parent);
