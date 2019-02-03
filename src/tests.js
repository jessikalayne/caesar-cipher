var resultadoEncode = encode("abc", 3);

if(resultadoEncode === "def"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoEncode + "," + "def");
}

resultadoEncode = encode("Jéssika", 300);

if(resultadoEncode === "Xéggwyo"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoEncode + "," + "Xéggwyo");
}

resultadoEncode = encode("Boa Noite!", -5250);

if(resultadoEncode === "Dqc Pqkvg!"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoEncode + "," + "Dqc Pqkvg!");
}

resultadoEncode = encode("Olá, hoje é o aniversário da minha mãe, e eu gostaria de convidá-lo(a) para uma festa surpresa que irei realizar hoje ás 22 em nossa casa. Como ela é super curiosa, estou utilizando o Criptografe. Responda-me se pode comparecer utilizando também o Criptografe para codificar sua mensagem. Abraços!! =D", 7680);

if(resultadoEncode === "Yvá, ryto é y kxsfobcábsy nk wsxrk wão, o oe qycdkbsk no myxfsná-vy(k) zkbk ewk pocdk cebzbock aeo sbos bokvsjkb ryto ác 22 ow xycck mkck. Mywy ovk é cezob mebsyck, ocdye edsvsjkxny y Mbszdyqbkpo. Boczyxnk-wo co zyno mywzkbomob edsvsjkxny dkwléw y Mbszdyqbkpo zkbk mynspsmkb cek woxckqow. Klbkçyc!! =N"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoEncode + "," + "Yvá, ryto é y kxsfobcábsy nk wsxrk wão, o oe qycdkbsk no myxfsná-vy(k) zkbk ewk pocdk cebzbock aeo sbos bokvsjkb ryto ác 22 ow xycck mkck. Mywy ovk é cezob mebsyck, ocdye edsvsjkxny y Mbszdyqbkpo. Boczyxnk-wo co zyno mywzkbomob edsvsjkxny dkwléw y Mbszdyqbkpo zkbk mynspsmkb cek woxckqow. Klbkçyc!! =N");
}


var resultadoDecode = decode("def", 3);

if (resultadoDecode === "abc"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoDecode + "," + "abc");
}

resultadoDecode = decode("Xéggwyo", 300);

if (resultadoDecode === "Jéssika"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoDecode + "," + "Jéssika");
}

resultadoDecode = decode("Dqc Pqkvg!", -5250);

if (resultadoDecode === "Boa Noite!"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoDecode + "," + "Boa Noite!");
}



resultadoDecode = decode("Yvá, ryto é y kxsfobcábsy nk wsxrk wão, o oe qycdkbsk no myxfsná-vy(k) zkbk ewk pocdk cebzbock aeo sbos bokvsjkb ryto ác 22 ow xycck mkck. Mywy ovk é cezob mebsyck, ocdye edsvsjkxny y Mbszdyqbkpo. Boczyxnk-wo co zyno mywzkbomob edsvsjkxny dkwléw y Mbszdyqbkpo zkbk mynspsmkb cek woxckqow. Klbkçyc!! =N", 7680);

if (resultadoDecode === "Olá, hoje é o aniversário da minha mãe, e eu gostaria de convidá-lo(a) para uma festa surpresa que irei realizar hoje ás 22 em nossa casa. Como ela é super curiosa, estou utilizando o Criptografe. Responda-me se pode comparecer utilizando também o Criptografe para codificar sua mensagem. Abraços!! =D"){
   console.log("certo");
}  else {
   console.log("deu pau", + resultadoDecode + "," + "Olá, hoje é o aniversário da minha mãe, e eu gostaria de convidá-lo(a) para uma festa surpresa que irei realizar hoje ás 22 em nossa casa. Como ela é super curiosa, estou utilizando o Criptografe. Responda-me se pode comparecer utilizando também o Criptografe para codificar sua mensagem. Abraços!! =D");
}