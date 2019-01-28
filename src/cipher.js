function cipherCode() {
  const frase = document.getElementById("frase").value;
  const deslocamento = document.getElementById("deslocamento").value;
  let fraseUp = frase.toUpperCase();

  const msgcrip = encode (fraseUp, deslocamento);

  document.getElementById("mensagem").innerHTML = msgcrip;
}

function encode (frase, offset) {
  let intDesloc = parseInt (offset);
  var fraseCriptografada = [];

  for (let i = 0; i <frase.length; i++) {
    if (frase[i] != ' ') {
      let code = frase[i].charCodeAt();
      let resultado = ((code - 65 + intDesloc) % 26) + 65;
      let msgCrip = String.fromCharCode(resultado);
      fraseCriptografada = fraseCriptografada + msgCrip;
      console.log(resultado);

    } else {
      fraseCriptografada = fraseCriptografada + " ";
      }
  }

  return fraseCriptografada;

}


function cipherDeCode() {
  const frase = document.getElementById("frase2").value;
  const deslocamento = document.getElementById("deslocamento2").value;
  let fraseUp = frase.toUpperCase();

  const msgcrip = decode (fraseUp, deslocamento);

  document.getElementById("mensagem2").innerHTML = msgcrip;
}

function decode (frase, offset) {
  let intDesloc = parseInt (offset);
  var fraseCriptografada = [];

  for (let i = 0; i <frase.length; i++) {
    if (frase[i] != ' ') {
      let code = frase[i].charCodeAt();
      let resultado = ((code + 65 - intDesloc) % 26) + 65;
      let msgCrip = String.fromCharCode(resultado);
      fraseCriptografada = fraseCriptografada + msgCrip;


    } else {
      fraseCriptografada = fraseCriptografada + " ";
    }
  }

  return fraseCriptografada;

}
