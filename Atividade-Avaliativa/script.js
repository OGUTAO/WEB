document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    
    // Obtém os valores do formulário
    var nome = document.getElementById('nome').value;
    var descricao = document.getElementById('descricao').value;
  
    // Validação simples
    if (nome.trim() === '' || descricao.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Cria um novo item na lista
    var newItem = document.createElement('li');
    newItem.innerHTML = '<strong>' + nome + '</strong>: ' + descricao;
  
    // Adiciona o novo item à lista
    document.getElementById('itens-lista').appendChild(newItem);
  
    // Limpa os campos do formulário após a submissão
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
  });
  
