function toPascalCase(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

function generateBranches() {
    var country = document.getElementById('country').value;
    var system = document.getElementById('system').value;
    var tool = document.getElementById('tool').value;
    var subdomain = document.getElementById('subdomain').value;
    var dataset = toPascalCase(document.getElementById('dataset').value);

    // Salvando os valores no Local Storage
    localStorage.setItem('country', country);
    localStorage.setItem('system', system);
    localStorage.setItem('tool', tool);
    localStorage.setItem('subdomain', subdomain);
    localStorage.setItem('dataset', dataset);

    var prelandingzone = 'prelandingzone/' + country + '/' + system + '/' + tool + '/' + dataset;
    var historyzone = 'historyzone/' + country + '/' + system + '/' + tool + '/' + dataset;
    var consumezone = 'consumezone/' + country + '/' + system + '/' + subdomain + '/' + tool + '/' + dataset;

    document.getElementById('results').innerHTML =
    '<div class="copy-wrapper mt-8 flex items-center">' +
    '<p id="prelandingzone" class="texto-padrao w-full h-10 px-2 py-2 border-none rounded-lg bg-gray-700 text-white text-lg mb-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">' +
    prelandingzone +
    '</p>' +
    '<i class="fas fa-copy text-white hover:text-gray-700 cursor-pointer" onclick="copyToClipboard(\'prelandingzone\')"></i>' +
    '</div>' +
    '<div class="copy-wrapper mt-8 flex items-center">' +
    '<p id="historyzone" class="texto-padrao w-full h-10 px-2 py-2 border-none rounded-lg bg-gray-700 text-white text-lg mb-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">' +
    historyzone +
    '</p>' +
    '<i class="fas fa-copy text-white hover:text-gray-700 cursor-pointer" onclick="copyToClipboard(\'historyzone\')"></i>' +
    '</div>' +
    '<div class="copy-wrapper mt-8 flex items-center">' +
    '<p id="consumezone" class="texto-padrao w-full h-10 px-2 py-2 border-none rounded-lg bg-gray-700 text-white text-lg mb-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">' +
    consumezone +
    '</p>' +
    '<i class="fas fa-copy text-white hover:text-gray-700 cursor-pointer" onclick="copyToClipboard(\'consumezone\')"></i>' +
    '</div>';

}

window.onload = function() {
    // Recuperar dados do Local Storage
    var country = localStorage.getItem('country');
    var system = localStorage.getItem('system');
    var tool = localStorage.getItem('tool');
    var subdomain = localStorage.getItem('subdomain');
    var dataset = localStorage.getItem('dataset');

    if(country && system && tool && subdomain && dataset) {
        document.getElementById('country').value = country;
        document.getElementById('system').value = system;
        document.getElementById('tool').value = tool;
        document.getElementById('subdomain').value = subdomain;
        document.getElementById('dataset').value = dataset;
    }
};