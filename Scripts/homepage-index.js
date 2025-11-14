/* ========================================
   SISTEMA DE NAVEGAÇÃO DE IMAGENS PARA A HOMEPAGE
   
   Este código permite navegar por várias imagens de fundo
   clicando em qualquer lugar da página, usando as setas do teclado
   ou automaticamente a cada 3 segundos
   ======================================== */

// Espera que a página termine de carregar antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================================
       LISTA DE TODAS AS IMAGENS DISPONÍVEIS
       ======================================== */
    
    // Array (lista) com todos os caminhos das imagens
    // Cada string representa o caminho para uma imagem
    const images = [
        'https://joaosilvestredias.com/Images/homepage/1.jpg',    // Primeira imagem
        'https://joaosilvestredias.com/Images/homepage/2.jpg',    // Segunda imagem
        'https://joaosilvestredias.com/Images/homepage/3.jpg',    // E assim por diante...
        'https://joaosilvestredias.com/Images/homepage/4.jpg',
        'https://joaosilvestredias.com/Images/homepage/5.jpg',
        'https://joaosilvestredias.com/Images/homepage/6.jpg',
        'https://joaosilvestredias.com/Images/homepage/7.jpg',
        'https://joaosilvestredias.com/Images/homepage/8.jpg',
        'https://joaosilvestredias.com/Images/homepage/9.jpg',
        'https://joaosilvestredias.com/Images/homepage/10.JPG',   // Nota: algumas têm extensão .JPG (maiúscula)
        'https://joaosilvestredias.com/Images/homepage/11.jpg',
        'https://joaosilvestredias.com/Images/homepage/12.jpg',
        'https://joaosilvestredias.com/Images/homepage/13.jpg',
        'https://joaosilvestredias.com/Images/homepage/14.jpg',
        'https://joaosilvestredias.com/Images/homepage/15.JPG',
        'https://joaosilvestredias.com/Images/homepage/16.jpg',
        'https://joaosilvestredias.com/Images/homepage/17.JPG',
        'https://joaosilvestredias.com/Images/homepage/18.jpg',
        'https://joaosilvestredias.com/Images/homepage/19.jpg',
        'https://joaosilvestredias.com/Images/homepage/20.jpg',
        'https://joaosilvestredias.com/Images/homepage/21.jpg',
        'https://joaosilvestredias.com/Images/homepage/22.jpg',
        'https://joaosilvestredias.com/Images/homepage/23.jpg',
        'https://joaosilvestredias.com/Images/homepage/24.JPG',
        'https://joaosilvestredias.com/Images/homepage/25.jpg',
        'https://joaosilvestredias.com/Images/homepage/26.jpg',
        'https://joaosilvestredias.com/Images/homepage/27.JPG',
        'https://joaosilvestredias.com/Images/homepage/28.jpg',
        'https://joaosilvestredias.com/Images/homepage/29.jpg',
        'https://joaosilvestredias.com/Images/homepage/30.jpg',
        'https://joaosilvestredias.com/Images/homepage/31.jpg',
        'https://joaosilvestredias.com/Images/homepage/32.jpg',
        'https://joaosilvestredias.com/Images/homepage/33.jpg',
        'https://joaosilvestredias.com/Images/homepage/34.jpg',
        'https://joaosilvestredias.com/Images/homepage/35.jpg',
        'https://joaosilvestredias.com/Images/homepage/36.jpg',
        'https://joaosilvestredias.com/Images/homepage/37.jpg',
        'https://joaosilvestredias.com/Images/homepage/38.jpg',
        'https://joaosilvestredias.com/Images/homepage/39.jpg',
        'https://joaosilvestredias.com/Images/homepage/40.jpg',
        'https://joaosilvestredias.com/Images/homepage/41.jpg',
        'https://joaosilvestredias.com/Images/homepage/42.jpg',
        'https://joaosilvestredias.com/Images/homepage/43.jpg',
        'https://joaosilvestredias.com/Images/homepage/44.jpg',
        'https://joaosilvestredias.com/Images/homepage/45.jpg',
        'https://joaosilvestredias.com/Images/homepage/46.jpg'   // Última imagem (total: 46 imagens)
    ];

          // Pré-carregar todas as imagens
      const preloaded = [];
      images.forEach((src) => {
         const img = new Image();
         img.src = src;
         preloaded.push(img);
      });
    
    /* ========================================
       CONFIGURAÇÃO INICIAL
       ======================================== */
    
    // Encontra o elemento HTML que contém a imagem de fundo
    const bgImage = document.querySelector('.background-image');
    
    // Variável que guarda qual imagem está actualmente a ser mostrada
    // Começa em 0 (primeira imagem da lista)
    let currentIndex = 0;
    
    // Variável para controlar o timer automático
    let autoplayTimer;
    
    // Define a primeira imagem como fundo (sem transição)
    // Usa template literals (``) para inserir o caminho da imagem
    bgImage.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    /* ========================================
       FUNÇÃO PARA AVANÇAR IMAGEM
       ======================================== */
    
    function nextImage() {
        // Avança para a próxima imagem
        // O operador % (módulo) faz com que volte ao início quando chegar ao fim
        currentIndex = (currentIndex + 1) % images.length;
        
        // Actualiza a imagem de fundo com a nova imagem
        bgImage.style.backgroundImage = `url('${images[currentIndex]}')`;
    }
    
    /* ========================================
       FUNÇÃO PARA VOLTAR IMAGEM
       ======================================== */
    
    function previousImage() {
        // Volta para a imagem anterior
        // Adiciona images.length antes de subtrair para evitar números negativos
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        bgImage.style.backgroundImage = `url('${images[currentIndex]}')`;
    }
    
    /* ========================================
       FUNÇÃO PARA REINICIAR O TIMER AUTOMÁTICO
       ======================================== */
    
    function restartAutoplay() {
        // Limpa o timer anterior (se existir)
        clearInterval(autoplayTimer);
        
        // Inicia um novo timer que muda a imagem a cada 3 segundos (3000ms)
        autoplayTimer = setInterval(nextImage, 3000);
    }
    
    /* ========================================
       INICIAR AUTO-PLAY
       ======================================== */
    
    // Inicia o auto-play quando a página carrega
    restartAutoplay();
    
    /* ========================================
       NAVEGAÇÃO POR CLIQUE
       ======================================== */
    
    // Adiciona um "ouvinte" que detecta cliques em qualquer lugar da página
    document.addEventListener('click', function() {
        nextImage();
        // Reinicia o timer para que não haja sobreposição
        restartAutoplay();
    });
    
    /* ========================================
       NAVEGAÇÃO POR TECLADO (SETAS)
       ======================================== */
    
    // Adiciona um "ouvinte" que detecta quando uma tecla é pressionada
    document.addEventListener('keydown', function(e) {
        
        // Verifica se a tecla pressionada foi a seta direita
        if (e.key === 'ArrowRight') {
            nextImage();
            // Reinicia o timer
            restartAutoplay();
            
        // Verifica se a tecla pressionada foi a seta esquerda    
        } else if (e.key === 'ArrowLeft') {
            previousImage();
            // Reinicia o timer
            restartAutoplay();
        }
    });
});

/* ========================================
   RESUMO DO FUNCIONAMENTO:
   
   1. Quando a página carrega, mostra a primeira imagem
   2. As imagens mudam automaticamente a cada 3 segundos
   3. Clicar em qualquer lugar = próxima imagem + reinicia timer
   4. Seta direita (→) = próxima imagem + reinicia timer
   5. Seta esquerda (←) = imagem anterior + reinicia timer
   6. Quando chegar ao fim, volta ao início automaticamente
   7. O timer é sempre reiniciado após interacção manual
   ======================================== */