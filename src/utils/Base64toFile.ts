function DataURLtoFile(dataurl: string, filename: string) {
  if (typeof dataurl !== "string") return '';
  var arr: any[] = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
export default DataURLtoFile;

// Usage example:
// var file = DataURLtoFile("data:text/plain;base64,aGVsbG8=", "hello.txt");
// console.log(file);
