/* ========================================
   SISTEMA DE GALERIA POP-UP (LIGHTBOX)
   
   Este código permite clicar numa imagem pequena e vê-la grande
   numa janela pop-up, com navegação entre imagens
   ======================================== */

/* ========================================
   VARIÁVEIS GLOBAIS
   ======================================== */

// Guarda qual imagem está actualmente a ser mostrada no pop-up
let currentIndex = 0;

// Guarda a lista de todas as imagens da galeria
let images = [];



/* ========================================
   FUNÇÃO PARA ABRIR O LIGHTBOX (POP-UP)
   ======================================== */

// Função que é chamada quando se clica numa imagem
function openLightbox(index) {
    
    // Encontra todas as imagens da galeria na página
    // Converte a lista HTML numa lista JavaScript normal
    images = Array.from(document.querySelectorAll('.image img'));
    
    // Define qual imagem vai ser mostrada primeiro
    currentIndex = index;
    
    // Encontra o elemento da imagem grande no lightbox e define o seu caminho
    document.getElementById('lightbox-img').src = images[currentIndex].src;
    
    // Torna o lightbox visível (muda display de 'none' para 'block')
    document.getElementById('lightbox').style.display = 'block';
}

   // Pré-carregar todas as imagens
   const preloaded = [];
   images.forEach((src) => {
      const img = new Image();
      img.src = src;
      preloaded.push(img);
   });

/* ========================================
   FUNÇÃO PARA FECHAR O LIGHTBOX
   ======================================== */

// Função que esconde o pop-up
function closeLightbox() {
    // Esconde o lightbox (muda display para 'none')
    document.getElementById('lightbox').style.display = 'none';
}

/* ========================================
   FUNÇÃO PARA NAVEGAR ENTRE IMAGENS
   ======================================== */

// Função que muda de imagem dentro do lightbox
function changeImage(direction) {
    
    // Altera o índice da imagem actual
    // direction pode ser +1 (próxima) ou -1 (anterior)
    currentIndex += direction;
    
    // Se foi para trás da primeira imagem, vai para a última
    if (currentIndex < 0) currentIndex = images.length - 1;
    
    // Se passou da última imagem, volta para a primeira
    if (currentIndex >= images.length) currentIndex = 0;
    
    // Actualiza a imagem mostrada no lightbox
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

/* ========================================
   CONFIGURAÇÃO INICIAL
   ======================================== */

// Quando a página terminar de carregar
window.onload = function() {
    
    // Encontra todas as imagens pequenas da galeria
    const imgs = document.querySelectorAll('.image img');
    
    // Para cada imagem pequena
    imgs.forEach((img, index) => {
        
        // Adiciona um "ouvinte" de clique
        // Quando clicarem nesta imagem, abre o lightbox com ela
        img.addEventListener('click', () => openLightbox(index));
    });
};

/* ========================================
   NAVEGAÇÃO POR TECLADO
   ======================================== */

// Detecta quando uma tecla é pressionada
document.addEventListener('keydown', function(event) {
    
    // Verifica se o lightbox está aberto
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        
        // Se a seta direita (→) foi pressionada
        if (event.key === 'ArrowRight') {
            changeImage(1);  // Próxima imagem
            
        // Se a seta esquerda (←) foi pressionada    
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1); // Imagem anterior
            
        // Se a tecla Escape foi pressionada    
        } else if (event.key === 'Escape') {
            closeLightbox(); // Fecha o lightbox
        }
    }
});

/* ========================================
   RESUMO DO FUNCIONAMENTO:
   
   1. Quando a página carrega:
      - Adiciona clique a todas as imagens pequenas
   
   2. Quando se clica numa imagem pequena:
      - Abre o lightbox (pop-up)
      - Mostra a imagem em tamanho grande
   
   3. No lightbox pode-se:
      - Clicar nas setas para navegar
      - Usar setas do teclado (← →) para navegar
      - Pressionar Escape para fechar
      - Clicar no "X" para fechar
   
   4. A navegação é circular:
      - Depois da última imagem, volta à primeira
      - Antes da primeira imagem, vai para a última
   ======================================== */