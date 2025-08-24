document.addEventListener('DOMContentLoaded', function() {

    const infoLinks = document.querySelectorAll('.info-link');
    const imageDisplay = document.querySelector('.image-display');

    // ===============================
    // Pré-carregar todas as imagens
    // ===============================
    infoLinks.forEach(link => {
        const images = link.getAttribute('data-images').split(',');
        images.forEach(src => {
            if(src && src.trim() !== "") {
                const img = new Image();
                img.src = src; // força o preload
            }
        });
    });

    // ===============================
    // Comportamento do mouse
    // ===============================
    infoLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const images = this.getAttribute('data-images').split(',');
            imageDisplay.innerHTML = '';
            images.forEach(image => {
                if(image && image.trim() !== "") {
                    const imgElement = document.createElement('img');
                    imgElement.src = image;
                    imageDisplay.appendChild(imgElement);
                }
            });
        });

        link.addEventListener('mouseout', function() {
            imageDisplay.innerHTML = '';
        });
    });

});
