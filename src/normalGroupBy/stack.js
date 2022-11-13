import React from "react";

export function NormalGroup() {
  var people = [
    { name: "Pete", gender: "Male", age: 22 },
    { name: "Samantha", gender: "Female", age: 20 },
    { name: "Frank", gender: "Male", age: 22 },
    { name: "Gary", gender: "Male", age: 21 },
    { name: "Maria", gender: "Female", age: 20 },
    { name: "Hannah", gender: "Female", age: 21 },
    { name: "Pete", gender: "Male", age: 20 },
  ];
  var groups = ["gender", "age"];
  var grouped = {};

  people.forEach(function (a) {
    debugger;
    groups
      .reduce(function (o, g, i) {
        // take existing object,
        o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {}); // or generate new obj, or
        return o[a[g]]; // at last, then an array
      }, grouped)
      .push(a);
    console.log(grouped);
  });

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
