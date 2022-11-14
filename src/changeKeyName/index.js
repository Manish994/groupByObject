/*****************************************
 *   CHANGE _ ARRAY _ OBJECT _ KEY _ NAME *
 *****************************************/
function get_Modified_Object(payloadKeysMap, payload) {
  let final_Result = [];

  payload.forEach(function (item) {
    let get_Item_To_Arr = Object.keys(item);

    let rename_Object = get_Item_To_Arr.reduce((o, g, i) => {
      const renKeys = {
        [payloadKeysMap[g] || ["name"]]: item[g],
      };

      return {
        ...o,
        ...renKeys,
      };
    }, {});
    final_Result.push(rename_Object);
  });

  replaceValue(final_Result, payloadKeysMap.name);
  return final_Result;
}

function replaceValue(final_Result, replaceObject) {
  final_Result.forEach(function (item) {
    if (item.hasOwnProperty("name")) item.name = replaceObject;
  });
  return final_Result;
}
/*****************************************
 *****************************************/

export { get_Modified_Object };
