const galleryContainer = document.getElementById("gallery-container");
let scrollAmount = 0;
let scrollInterval;

function startScroll() {
  scrollInterval = setInterval(function() {
    galleryContainer.scrollLeft = scrollAmount;
    scrollAmount += 5;
    if(scrollAmount >= galleryContainer.scrollWidth - galleryContainer.offsetWidth) {
      window.clearInterval(scrollInterval);
    }
  }, 20);
}

galleryContainer.addEventListener("mouseenter", function() {
  window.clearInterval(scrollInterval);
});

galleryContainer.addEventListener("mouseleave", function() {
  startScroll();
});

startScroll();
