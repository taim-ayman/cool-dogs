// script.js
const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.querySelector('img').getAttribute('src');
        const altText = image.querySelector('img').getAttribute('alt');
        const lightbox = document.createElement('div');
        lightbox.innerHTML = `<div class="lightbox-content"><img src="${th.jpg}" alt="${altText}"></div>`;
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
