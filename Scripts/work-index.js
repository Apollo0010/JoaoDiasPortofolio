/* ========================================
   SISTEMA DE EXIBIÇÃO DE IMAGENS NA PÁGINA DE TRABALHOS
   
   Este código faz com que as imagens apareçam do lado direito
   quando se passa o rato por cima dos nomes dos trabalhos
   ======================================== */

// Espera que a página termine de carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function() {

/* ========================================
   ENCONTRAR ELEMENTOS NA PÁGINA
   ======================================== */

// Encontra todos os links que têm a classe 'info-link'
// Estes são os nomes dos trabalhos na coluna da esquerda
const infoLinks = document.querySelectorAll('.info-link');

// Encontra o elemento onde as imagens vão aparecer (coluna da direita)
const imageDisplay = document.querySelector('.image-display');

/* ========================================
   CONFIGURAR O COMPORTAMENTO DE CADA LINK
   ======================================== */

// Para cada link de trabalho, adiciona comportamentos especiais
infoLinks.forEach(link => {
    
    /* ========================================
       QUANDO O RATO ENTRA (MOUSEOVER)
       ======================================== */
    
    // Adiciona um "ouvinte" que detecta quando o rato passa por cima do link
    link.addEventListener('mouseover', function() {
        
        // Obtém a lista de imagens do atributo 'data-images' do link
        // Por exemplo: se o HTML for <a data-images="img1.jpg,img2.jpg,img3.jpg">
        // O split(',') divide a string em: ['img1.jpg', 'img2.jpg', 'img3.jpg']
        const images = this.getAttribute('data-images').split(',');
        
        // Limpa todas as imagens que possam estar a ser mostradas
        imageDisplay.innerHTML = '';
        
        // Verifica se existem realmente imagens para mostrar
        // Se a primeira entrada não estiver vazia ("")
        if(images[0] !== "") {
            
            // Para cada imagem na lista
            images.forEach(image => {
                // Cria um novo elemento <img> em HTML
                const imgElement = document.createElement('img');
                
                // Define o caminho da imagem (src = source/origem)
                imgElement.src = image;
                
                // Adiciona a imagem ao container de exibição
                imageDisplay.appendChild(imgElement);
            });
        }
    });

    /* ========================================
       QUANDO O RATO SAI (MOUSEOUT)
       ======================================== */
    
    // Adiciona um "ouvinte" que detecta quando o rato sai de cima do link
    link.addEventListener('mouseout', function() {
        
        // Remove todas as imagens da área de exibição
        // Deixa a coluna da direita vazia novamente
        imageDisplay.innerHTML = '';
    });
});

});

/* ========================================
   RESUMO DO FUNCIONAMENTO:
   
   1. O código procura por todos os links com classe 'info-link'
   2. Quando se passa o rato por cima de um link:
      - Lê a lista de imagens do atributo 'data-images'
      - Divide a lista por vírgulas
      - Cria elementos <img> para cada imagem
      - Mostra as imagens na coluna da direita
   3. Quando o rato sai de cima do link:
      - Remove todas as imagens da coluna da direita
   
   EXEMPLO DE HTML QUE FUNCIONA COM ESTE CÓDIGO:
   <a href="#" class="info-link" data-images="foto1.jpg,foto2.jpg">
       Nome do Projecto
   </a>
   ======================================== */