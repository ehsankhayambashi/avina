export const nameOftype_id = (type_id: string, options: any): string => {
  let temp: string = "";
  options.forEach((type: { id: string; name: string }) => {
    if (type.id == type_id) {
      temp = type.name;
    }
  });
  return temp;
};
export const valueOfOption = (label: string, options: any): string => {
  let temp: string = "";
  options.forEach((name: { label: string; value: string | null }) => {
    if (name.label == label) {
      temp = name.label;
    }
  });
  return temp;
};
