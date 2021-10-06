//1 dir si esta buit
function esta_vacio(a) {
  if (a == "") {
    document.getElementById("demo").innerHTML = a + " esta vacio";
  } else {
    document.getElementById("demo").innerHTML = a + " no esta vacio";
  }
}
//2 invertir string
function invertir(a) {
  document.getElementById("demo").innerHTML = a.split("").reverse().join("");
}
//3 contar sa lletra a
function contar(a) {
  let contador = 0;
  let llista = a.split("");
  for (let index = 0; index < a.length; index++) {
    if (llista[index] == "a") {
      contador++;
    }
  }
  return contador;
}

//4

//5
function primera_darrera(a) {
  let primer = a.indexOf("a");
  let ultim = a.lastIndexOf("a");

  return console.log(primer + " " + ultim);
}
