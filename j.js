const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const imgAlt = item.querySelector('img').alt;
    const captionText = item.querySelector('.gallery-caption').textContent;

    lightboxImage.src = imgSrc;
    lightboxImage.alt = imgAlt;
    lightboxCaption.textContent = captionText;

    lightbox.style.display = 'block';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});