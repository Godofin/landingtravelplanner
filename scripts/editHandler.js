// editHandler.js

function setupEditButtons() {
    // Seleciona todos os botões de edição
    const editButtons = document.querySelectorAll('.edit-btn');

    // Adiciona o evento de clique para cada botão
    editButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Encontrar o ID do item a ser editado, que deve ser armazenado no botão ou em um elemento pai
            const cardElement = event.target.closest('.card');
            const itemId = cardElement.querySelector('.delete-btn').getAttribute('data-id');

            // Redireciona para a tela de cadastro com o ID como parâmetro
            window.location.href = `./list.html?id=${itemId}`;
        });
    });
}

// Agora chame esta função quando a página carregar ou quando novos cartões forem adicionados
document.addEventListener('DOMContentLoaded', setupEditButtons);
