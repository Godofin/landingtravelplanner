// Função para formatar a data no formato "7 de novembro de 2023"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Função para buscar e exibir os itinerários
function fetchAndDisplayItineraries() {
    fetch('https://wonder-e7x9.onrender.com/itinerary')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let itineraries = data.map(it => {
                return {
                    date: new Date(it.start_date),
                    title: it.name
                };
            });

            // Ordena os itinerários do mais recente para o mais antigo
            itineraries.sort((a, b) => a.date - b.date);

            // Seleciona o contêiner onde os itinerários serão exibidos
            const itinerariesList = document.getElementById('itinerariesList');

            // Verifica se o elemento existe
            if (!itinerariesList) {
                console.error('Elemento #itinerariesList não encontrado!');
                return;
            }

            // Limpa o contêiner antes de adicionar novos elementos
            itinerariesList.innerHTML = '';

            // Itera sobre os itinerários ordenados e cria o HTML para cada um
            itineraries.forEach(itinerary => {
                const itineraryElement = document.createElement('div');
                itineraryElement.className = 'bg-green-50 p-6 rounded-xl mb-4';
                itineraryElement.innerHTML = `
                    <h3 class="font-bold">${formatDate(itinerary.date)}</h3>
                    <p class="text-gray-600 mt-2">${itinerary.title}</p>
                `;
                // Adiciona o itinerário ao contêiner
                itinerariesList.appendChild(itineraryElement);
            });
        })
        .catch(error => {
            console.error('There was an error fetching the itineraries:', error);
        });
}

// Inicia a função ao carregar a página
document.addEventListener('DOMContentLoaded', fetchAndDisplayItineraries);
