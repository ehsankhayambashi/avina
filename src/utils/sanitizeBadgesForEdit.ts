export const setBadgesForEdit = (badgeList: any) => {
  let list: any = [];
  badgeList.map((item: any) => {
    if (item.id) {
      list.push(String(item.id));
    }
  });
  return list;
};

export const setArrayObjForEdit = (arrayObj: any) => {
  let list: any = [];
  arrayObj.map((item: any) => {
    if (item.id) {
      list.push(String(item.id));
    }
  });
  return list;
};