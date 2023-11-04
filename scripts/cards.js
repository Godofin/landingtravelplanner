// Função para buscar dados da API e renderizar os cards
function fetchAndDisplayItineraries() {
    fetch('https://wonder-e7x9.onrender.com/itinerary')
        .then(response => response.json())
        .then(data => renderItineraries(data))
        .catch(error => console.error('Erro ao buscar os dados:', error));
}

// Função para renderizar os itinerários
function renderItineraries(itineraries) {
    const container = document.querySelector('#card-container');
    container.innerHTML = ''; // Limpa o container antes de adicionar novos cards

    itineraries.forEach(item => {
        const cardHTML = createCardHTML(item);
        container.innerHTML += cardHTML;
    });

    attachDeleteEventListeners(); // Chama a função para adicionar os event listeners
}

// Função para criar o HTML de cada card
function createCardHTML(item) {
    console.log("Creating card with id:", item.ID);
    const endDateFormatted = formatDateToLongFormat(item.end_date);
    return `
    <div class="card m-auto px-5 md:px-20 pt-5 pb-5">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="./img/festival.png" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.name}</h5>
                </a>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${endDateFormatted}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
                <div class="flex -mx-2 mt-4">
                    <div class="flex-1 px-2">
                        <button class="edit-btn w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Editar
                        </button>
                    </div>
                    <div class="flex-1 px-2">
                        <button data-id="${item.ID}" class="delete-btn w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Deletar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// Função para adicionar event listeners nos botões de deletar
function attachDeleteEventListeners() {
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            const id = event.target.getAttribute('data-id');
            deleteItem(id, event.target);
        });
    });
}

// Função para deletar um item específico
function deleteItem(id, element) {
    fetch(`https://wonder-e7x9.onrender.com/itinerary/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro no status: ${response.status}`);
        }
        element.closest('.card').remove();
        // opcional: refetch e renderize os itinerários para atualizar a lista sem recarregar a página
        // fetchAndDisplayItineraries();
    })
    .catch(error => console.error('Erro ao deletar o item:', error));
}

// Função auxiliar para formatar datas
function formatDateToLongFormat(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear();
    return `${day} de ${month}, ${year}`;
}

// Iniciar o carregamento dos dados quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', fetchAndDisplayItineraries);
