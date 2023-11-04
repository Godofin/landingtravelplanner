// Função para formatar a data no formato YYYY-MM-DD
function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

// Função para calcular a diferença entre datas
function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
fetch('https://wonder-e7x9.onrender.com/itinerary')
  .then(response => response.json())
  .then(data => {
      // Supondo que a data vem como uma string no formato YYYY-MM-DD
      let itineraries = data.map(it => {
          return {
              date: new Date(it.start_date), 
              title: it.name 
          };
      });

      // Encontre o itinerário mais próximo da data atual
      let today = new Date();
      itineraries.sort((a, b) => a.date - b.date); // Ordem crescente de data
      let upcomingItinerary = itineraries.find(it => it.date >= today);

      // Calcule a diferença de dias e atualize o HTML
      if (upcomingItinerary) {
          let daysDiff = dateDiffInDays(today, upcomingItinerary.date);
          document.querySelector('.countdown-days').textContent = daysDiff;
          document.querySelector('.itinerary-title').textContent = upcomingItinerary.title;
      }
  })
  .catch(error => {
      console.error('There was an error!', error);
  });
