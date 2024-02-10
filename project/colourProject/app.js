const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.element[i].value  + "<br>";
}
document.getElementById("demo").innerHTML = text;