document.addEventListener('DOMContentLoaded', function() {
    // Esta função coleta os dados do formulário
    function getFormData() {
      return {
        name: document.getElementById('itinerary-name').value,
        description: document.getElementById('description').value,
        start_date: formatDate(document.getElementById('start-date').value),
        end_date: formatDate(document.getElementById('end-date').value),
        destination: document.getElementById('destination').value, // Presumindo que não seja uma data
        activities: document.getElementById('activities').value, // Presumindo que não seja uma data
        user_id: "1" // Este valor deve ser obtido de acordo com sua lógica de aplicação
      };
    }
  
    // Função para formatar a data
    function formatDate(dateString) {
      if (!dateString) return ''; // Retorna uma string vazia se a data não for fornecida
      const date = new Date(dateString);
      if (isNaN(date)) throw new Error('Invalid date: ' + dateString);
      return date.toISOString().replace(/T.*$/, 'T00:00:00Z');
    }
  
    // Esta função faz a solicitação POST
    function submitForm(formData) {
      fetch('https://wonder-e7x9.onrender.com/itinerary', { // Substitua pela URL correta do seu servidor
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Sucesso:', data);
        // Redireciona para a tela de listagem após o sucesso da requisição
        window.location.href = './list.html'; // Substitua './list.html' pelo caminho correto da sua página de listagem
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
    }
  
    // Adicionando o evento de clique ao botão
    document.getElementById('mainActionButton').addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão do formulário
      const formData = getFormData();
      submitForm(formData);
    });
  });