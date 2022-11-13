import React from "react";
import { people } from "./dataList";

const NormalGroupBY = () => {
  var groups = ["lotNo"];
  const [grouped, setGrouped] = React.useState({});

  people.forEach(function (a) {
    groups
      .reduce(function (o, g, i) {
        o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {}); // or generate new obj, or
        return o[a[g]]; // at last, then an array
      }, grouped)
      .push(a);
  });
  return <div>index</div>;
};

export default NormalGroupBY;
