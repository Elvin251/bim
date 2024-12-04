let a = 0;
let b = 0;

function para() {
 a=+document.getElementById("a").value;
 b=+document.getElementById("b").value
if (a>b){
  document.getElementById("x").value= a-b;
} else {
    document.getElementById("x").value= b-a;
}
}
  