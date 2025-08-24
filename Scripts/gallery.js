/* ========================================
   SISTEMA DE GALERIA POP-UP (LIGHTBOX)
   ======================================== */

let currentIndex = 0;
let images = [];

// Pré-carregar todas as imagens da galeria
document.addEventListener('DOMContentLoaded', () => {
    images = Array.from(document.querySelectorAll('.image img'));
    
    // Pré-carregar
    images.forEach(img => {
        const preImg = new Image();
        preImg.src = img.src;
    });

    // Adiciona clique para abrir lightbox
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });
});

function openLightbox(index) {
    currentIndex = index;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentIndex].src;
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

// Navegação por teclado
document.addEventListener('keydown', event => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (event.key === 'ArrowRight') changeImage(1);
        else if (event.key === 'ArrowLeft') changeImage(-1);
        else if (event.key === 'Escape') closeLightbox();
    }
});
