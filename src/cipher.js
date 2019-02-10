function cipherCode() {
  const phrase = document.getElementById("frase").value;
  const number = parseInt(document.getElementById("deslocamento").value);
  const msgcrip = encode(phrase, number);
  document.getElementById("mensagem").innerHTML = msgcrip;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function encode(phrase, offset) {
  let phraseCrip = "";

  for (let i = 0; i < phrase.length; i++) {
    let code = phrase.charCodeAt(i);
    if ((code >= 65) && (code <= 90)) {
      phraseUp = mod((code - 65 + offset), 26) + 65;
      phraseCrip += String.fromCharCode(phraseUp);
    } else if ((code >= 97) && (code <= 122)) {
      phraseDown = mod((code - 97 + offset), 26) + 97;
      phraseCrip += String.fromCharCode(phraseDown);
    } else {
      phraseCrip += String.fromCharCode(code);
    }
  }
  return phraseCrip;
}

function cipherDeCode() {
  const phrase = document.getElementById("frase2").value;
  const number = parseInt(document.getElementById("deslocamento2").value);
  const msgcrip = decode(phrase, number);
  document.getElementById("mensagem2").innerHTML = msgcrip;
}

function decode(phrase, offset) {
  let phraseCrip = "";

  for (let i = 0; i < phrase.length; i++) {
    let code = phrase.charCodeAt(i);
    if ((code >= 65) && (code <= 90)) {
      phraseUp = mod((code - 65 - offset), 26) + 65;
      phraseCrip += String.fromCharCode(phraseUp);
    } else if ((code >= 97) && (code <= 122)) {
      phraseDown = mod((code - 97 - offset), 26) + 97;
      phraseCrip += String.fromCharCode(phraseDown);
    } else {
      phraseCrip += String.fromCharCode(code);
    }
  }

  return phraseCrip;
}