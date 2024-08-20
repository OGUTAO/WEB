function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
   
    console.log(validaCPF(cpf));
}
function efetuarLogin(event){
    console.preventDefault();
    const inputEmail = document.querySelector('input[type= "email"]');
    if (!inputEmail.value) {
        const p = document.createElement('p');
        p.innerText = 'Email é obrigatório';
        inputEmail.parentElement.appendChild(erro);
        inputEmail.focus();
    }
    const inputSenha = document.querySelector('input[type="password"]');
    fetch('http://localhost/users/login', {
        method: 'POST', 
        body: {email: inputEmail,value, senha: inputSenha.value}
    });
    if (nome.trim() === '' || idade.trim() === ''|| idade.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }
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
   let soma = 0;
   for (let i = 0; i < 9; i++) {
       soma += parseInt(cpf.charAt(i)) * (10 - i);
   }
   let resto = soma % 11;
   if (resto < 2) {
       if (parseInt(cpf.charAt(9)) !== 0) {
           alert("CPF inválido!");
           return false;
       }
   } else {
       if (parseInt(cpf.charAt(9)) !== (11 - resto)) {
           alert("CPF inválido!");
           return false;
       }
   }
   soma = 0;
   for (let i = 0; i < 10; i++) {
       soma += parseInt(cpf.charAt(i)) * (11 - i);
   }
   resto = soma % 11;
   if (resto < 2) {
       if (parseInt(cpf.charAt(10)) !== 0) {
           alert("CPF inválido!");
           return false;
       }
   } else {
       if (parseInt(cpf.charAt(10)) !== (11 - resto)) {
           alert("CPF inválido!");
           return false;
       }
   }

   return true;
}
   
