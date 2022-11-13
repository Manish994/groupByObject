import React from "react";
import { people } from "../normalGroupBy/dataList";

const AdvancedGroup = () => {
  const arr = people;
  var groups = ["lotNo"];
  var grouped = { groupByLotNo: {} };

  //********************************************************************
  //GROUPS BY LOTNO
  //*********************************************************************/
  arr.forEach(function (a) {
    groups
      .reduce(function (o, g, i) {
        o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {});
        return o[a[g]]; // at last, then an array
      }, grouped.groupByLotNo)
      .push(a);
  });

  //********************************************************************
  //GROUPS BY LOTNO
  //*********************************************************************/

  //********************************************************************
  //GROUPS BY HEADER CONTENT (ISSUEED DATAE, EXPIRED DATE, LOTNO)
  //*********************************************************************/

  console.log(grouped.groupByLotNo);
  console.log(Object.entries(grouped.groupByLotNo));

  return <div>Manish</div>;
};

export default AdvancedGroup;
