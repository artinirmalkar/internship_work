console.log("fdwfdsa");
country = [
  { cName: "india", cCode: +91 },
  { cName: "a", cCode: +62 },
  { cName: "pak", cCode: +92 },
  { cName: "usa", cCode: +226 },
];

country.map((item, i) => {
  console.log("countryName==", item.cName, "Code========", item.cCode);
});
