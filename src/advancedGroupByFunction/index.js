import React from "react";
import { people } from "../normalGroupBy/dataList";

const AdvancedGroup = () => {
  const arr = people;
  var groups = ["lotNo"];
  var grouped = { groupByLotNo: {} };
  let newArr = [];

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

  let group_By_headerContent = Object.entries(grouped.groupByLotNo);
  group_By_headerContent.forEach((item) => {
    let getLotNo = item[0];

    let get_header_Content_Name = ["doc", "maturityDate", "lotNo"];

    return item[1].slice(0, 1).forEach((itemName) => {
      let renObject = get_header_Content_Name.reduce(function (o, g, i) {
        let obj = { [g]: itemName[g] };
        return {
          ...o,
          ...obj,
        };
      }, {});
      newArr = newArr.concat({ [getLotNo]: [renObject] });
    });
  });
  console.log("********************");
  console.log(typeof newArr);
  console.log(newArr);

  return <div>Manish</div>;
};

export default AdvancedGroup;
