import React from "react";
import { people } from "../normalGroupBy/dataList";

const AdvancedGroup = () => {
  const arr = people;
  var groups = ["lotNo"];
  var grouped = { groupByLotNo: {} };
  let headerContentArr = [];
  let getPremiumSubtoal = [];

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
      // headerContentArr = headerContentArr.concat({ [getLotNo]: [renObject] });
      headerContentArr.push({ [getLotNo]: [renObject] });
    });
  });

  grouped = Object.assign(grouped, { groupByHeaderContent: headerContentArr });
  // console.log("********************");
  // console.log(grouped);

  //********************************************************************
  //GROUPS BY SUBTOTAL
  //*********************************************************************/

  group_By_headerContent.forEach(function (item) {
    let getLotNo = item[0];

    let return_Subtotal = item[1].reduce(function (o, g, i) {
      return o + Math.round(g["premium"]);
    }, 0);

    // getPremiumSubtoal = getPremiumSubtoal.concat({
    //   [getLotNo]: [return_Subtotal],
    // });
    getPremiumSubtoal.push({ [getLotNo]: [return_Subtotal] });
  });
  Object.assign(grouped, { getPremiumSubtoal: getPremiumSubtoal });
  console.log(grouped);

  //********************************************************************
  //CALCULATION TOTAL FROM SUB_TOTAL
  //*********************************************************************/
  let calc_total = Object.entries(grouped.getPremiumSubtoal);
  calc_total.forEach(function (item) {
    debugger;
    console.log(item[1]);
  });

  return <div>Manish</div>;
};

export default AdvancedGroup;
