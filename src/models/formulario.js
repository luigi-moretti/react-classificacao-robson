/*function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}*/

function validarSenha(senha) {
    if (senha.length <4 || senha.length>72) {
        return { valido: false, texto: "Este campo deve ter entre 4 e 72 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF === "00000000000") return { valido: false, texto: "CPF inválido." };

  for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) ) return { valido: false, texto: "CPF inválido." };

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return { valido: false, texto: "CPF inválido." };
    return { valido: true, texto: "" };
}

export {validarSenha, testaCPF};