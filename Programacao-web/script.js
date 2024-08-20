//let titulo = document.getElementById("titulo").value;
//console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
   
    //console.log(cpf);
    console.log(validaCPF(cpf));
}

function validaCPF(cpf) {

    if(cpf == "") {
        alert("Campo CPF não pode ser vazio");
        return false;
    }

    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras");
        return false;
    }

   if(!/^[\d.-]+$/.test(cpf)) {
    
    alert("CPF só pode ter números, '.' ou '-'");
    return false;

   }

   if(cpf.length != 11 && cpf.length != 14) {
    alert("Formato inválido");
    return false;

   }

   let soma = 0
   for (let i = 0; i < 9; i++){
    console.log(cpf.charAt(i-1));
    soma = soma + (cpf.charAt(i-1) * (10 - (i-1)));
   }
   console.log(soma);
   let resto = soma % 11;

   

   // Iterar 9 primeiros digitos, repositando a seguinte regra:
   // digito1 = 10 + digito2 = 9 + digito3 = 8 + ... + digito9 + 2 = resultado
   // Dividir resultado por 11
   // Recuperar o RESTO da divisão por 11
   // Calcular (11 - RESTO)
   // O resultado de (11 - RESTO) deve ser o primeiro digito verificado do CPF (10º)
   // Caso o RESTO seja 0 ou 1, o digito verificador deve ser ZERO

    return true;
}