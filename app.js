const gallery = document.querySelector('.gallery');
const galleryWidth = gallery.offsetWidth;
const images = gallery.querySelectorAll('img');
let totalWidth = 0;

images.forEach(image => {
  totalWidth += image.offsetWidth;
  image.addEventListener('load', () => {
    totalWidth += image.offsetWidth;
    if (totalWidth > galleryWidth) {
      gallery.style.width = totalWidth + 'px';
    }
  });
});
