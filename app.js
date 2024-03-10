// Obtén las referencias a los elementos textarea
let txtaNoEncriptado = document.getElementById("textonoencriptado");
let txtaEncriptado = document.getElementById("textoencriptado");

// Variables for UI elements
let imgMuneco = document.getElementById("muneco");
let divAviso = document.getElementById("ningunmsg");
let btnCopiar = document.getElementById("copiarbtn");
let textoenccont = document.getElementById("textoenccont");

// Altura máxima
let heightLimit = window.innerWidth >= 900 ? 1080 : 525;

// Event listeners
// txtaNoEncriptado.addEventListener("input", handleInput);
btnCopiar.addEventListener("click", copiar);

//valores iniciales
textoenccont.style.display = "none";

function handleInput() {
  if (txtaNoEncriptado.value === "") {
    mostrarOcultar("limpiar");
  } else {
    let textoCifrado = encriptar(txtaNoEncriptado.value);
    mostrarTextoCifrado(textoCifrado);
  }
}

function btnencriptar() {
  if (txtaNoEncriptado.value === "") {
    mostrarOcultar("limpiar");
  } else {
    let textoCifrado = encriptar(txtaNoEncriptado.value);
    mostrarTextoCifrado(textoCifrado);
  }
}
function btndesencriptar() {
  if (txtaNoEncriptado.value === "") {
    mostrarOcultar("limpiar");
  } else {
    let textoCifrado = desencriptar(txtaNoEncriptado.value);
    mostrarTextoCifrado(textoCifrado);
  }
}
function encriptar(texto) {
  return texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
}

async function copiar() {
  try {
    await navigator.clipboard.writeText(txtaEncriptado.value);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    alert("No se pudo copiar el texto: ", err);
  }
}

function verificarTexto(texto) {
  // La regex /^[a-z]+$/ verifica si la cadena contiene solo letras minúsculas sin acentos
  return !/^[ ]+$/.test(texto) && /^[a-zñ\s.,]+$/.test(texto);
}

function mostrarTextoCifrado(textoCifrado) {
  if (verificarTexto(textoCifrado)) {
    mostrarOcultar("mostrar");
    txtaEncriptado.value = textoCifrado;
  } else {
    alert(
      "El texto no debe contener: solo espacios, mayusculas ni acentos; verifique el contenido y vuelva a intentarlo"
    );
    mostrarOcultar("limpiar");
  }
}

function mostrarOcultar(orden) {
  if (orden === "mostrar") {
    divAviso.style.display = "none";
    textoenccont.style.display = window.innerWidth >= 900 ? "grid" : "flex";
  } else if (orden === "limpiar") {
    divAviso.style.display = "flex";
    textoenccont.style.display = "none";
    txtaEncriptado.value = "";
    txtaNoEncriptado.value = "";
  }
}
