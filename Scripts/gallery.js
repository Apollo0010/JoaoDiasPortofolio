/* ========================================
   SISTEMA DE GALERIA POP-UP (LIGHTBOX)
   ======================================== */

let currentIndex = 0;
let images = [];

// Função para pré-carregar todas as imagens da galeria
function preloadGalleryImages() {
    const imgs = document.querySelectorAll('.image img');
    imgs.forEach(img => {
        const preImg = new Image();
        preImg.src = img.src;
    });
}

// Quando a página termina de carregar
document.addEventListener('DOMContentLoaded', () => {
    // Pré-carrega todas as imagens da galeria
    preloadGalleryImages();

    // Seleciona todas as imagens da galeria
    images = Array.from(document.querySelectorAll('.image img'));

    // Pré-carrega todas as imagens
    images.forEach(img => {
        const preImg = new Image();
        preImg.src = img.src;
    });

    // Flag para evitar clique após swipe
    let justSwiped = false;

    // Adiciona clique para abrir o lightbox
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            if (justSwiped) {
                justSwiped = false;
                return;
            }
            openLightbox(index);
        });
    });

    // Adiciona suporte a swipe no lightbox para mobile
    const lightbox = document.getElementById('lightbox');
    let touchStartX = 0;
    let touchEndX = 0;

    if (lightbox) {
        lightbox.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
            }
        });
        lightbox.addEventListener('touchmove', function(e) {
            if (e.touches.length === 1) {
                touchEndX = e.touches[0].clientX;
            }
        });
        lightbox.addEventListener('touchend', function(e) {
            const deltaX = touchEndX - touchStartX;
            if (Math.abs(deltaX) > 50) { // Sensibilidade do swipe
                justSwiped = true;
                if (deltaX < 0) {
                    changeImage(1); // Swipe para a esquerda, próxima imagem
                } else {
                    changeImage(-1); // Swipe para a direita, imagem anterior
                }
            }
            // Reseta valores
            touchStartX = 0;
            touchEndX = 0;
        });
    }
});

/* ========================================
   FUNÇÃO PARA ABRIR O LIGHTBOX
   ======================================== */
function openLightbox(index) {
    currentIndex = index;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentIndex].src;
    document.getElementById('lightbox').style.display = 'block';
}

/* ========================================
   FUNÇÃO PARA FECHAR O LIGHTBOX
   ======================================== */
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

/* ========================================
   FUNÇÃO PARA NAVEGAR ENTRE IMAGENS
   ======================================== */
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

/* ========================================
   NAVEGAÇÃO POR TECLADO
   ======================================== */
document.addEventListener('keydown', event => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (event.key === 'ArrowRight') changeImage(1);
        else if (event.key === 'ArrowLeft') changeImage(-1);
        else if (event.key === 'Escape') closeLightbox();
    }
});
