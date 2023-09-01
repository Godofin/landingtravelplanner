function gerarNomes() {
    var servico = document.getElementById("servico").value;
    var branch = document.getElementById("branch").value;
    var type = document.getElementById("type").value;
    var explicacao = document.getElementById("explicacao").value;

    var tituloPr = `[TECHOPS] [${servico}] - ${explicacao}`;
    var nomeBranch = `${branch}/${type}-${servico.replace(/\s+/g, '-').toLowerCase()}-${explicacao.replace(/\s+/g, '-').toLowerCase()}`;

    var tituloPrElement = document.getElementById("tituloPr");
    var nomeBranchElement = document.getElementById("nomeBranch");

    tituloPrElement.innerText = tituloPr;
    nomeBranchElement.innerText = nomeBranch;

    // Remova a classe 'texto-padrao' para que a cor do texto volte ao normal
    tituloPrElement.classList.remove("texto-padrao");
    nomeBranchElement.classList.remove("texto-padrao");

    // Salvar no Local Storage
    localStorage.setItem("servico", servico);
    localStorage.setItem("branch", branch);
    localStorage.setItem("type", type);
    localStorage.setItem("explicacao", explicacao);
}

function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).innerText;
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

window.onload = function() {
    // Recuperar dados do Local Storage
    var servico = localStorage.getItem("servico");
    var branch = localStorage.getItem("branch");
    var type = localStorage.getItem("type");
    var explicacao = localStorage.getItem("explicacao");

    if(servico && branch && type && explicacao) {
        document.getElementById("servico").value = servico;
        document.getElementById("branch").value = branch;
        document.getElementById("type").value = type;
        document.getElementById("explicacao").value = explicacao;
    }

    var tituloPrElement = document.getElementById("tituloPr");
    var nomeBranchElement = document.getElementById("nomeBranch");

    if (!tituloPrElement.innerText) {
        tituloPrElement.classList.add("texto-padrao");
    }

    if (!nomeBranchElement.innerText) {
        nomeBranchElement.classList.add("texto-padrao");
    }
};

const menuToggle = document.querySelector('#menu-toggle');
const navbarHamburger = document.querySelector('#navbar-hamburger');

menuToggle.addEventListener('click', function() {
  navbarHamburger.classList.toggle('hidden');
});
document.addEventListener('DOMContentLoaded', (event) => {

    // Referência para o botão que mostra a navegação
    const showNavigationButton = document.querySelector('[data-drawer-show="drawer-navigation"]');

    // Referência para o botão que oculta a navegação
    const hideNavigationButton = document.querySelector('[data-drawer-hide="drawer-navigation"]');

    // Referência para o drawer de navegação
    const navigationDrawer = document.querySelector('#drawer-navigation');

    // Definindo o estado inicial da barra lateral para "fechado"
    navigationDrawer.style.transform = 'translateX(-100%)';

    // Referência para o conteúdo da página
    const mainContent = document.querySelector('#main-content'); // Alterado para #main-content

    // Largura da navegação
    const navigationWidth = navigationDrawer.offsetWidth;

    // Evento de clique para mostrar a navegação
    showNavigationButton.addEventListener('click', function() {
        navigationDrawer.style.transform = 'translateX(0)';
        mainContent.style.transform = `translateX(${navigationWidth}px)`; // Aplica a transformação no mainContent
    });

    // Evento de clique para ocultar a navegação
    hideNavigationButton.addEventListener('click', function() {
        navigationDrawer.style.transform = 'translateX(-100%)';
        mainContent.style.transform = 'translateX(0)'; // Retira a transformação do mainContent
    });
});



