console.dir(document);

// Obsługa alertu
document.addEventListener('DOMContentLoaded', function (event) {
  let alert = document.querySelector('.alert');
  if (alert) {
    alert.addEventListener('click', function (event) {
      this.classList.add('dispel');
    });
  };
  if (alert) {
    setTimeout(function() {
      alert.classList.add('dispel');
    }, 5000);
  };

  let landingImages = document.querySelectorAll(".landing-img");
  let imgCounter = 0;
  setInterval(function() {
    landingImages.forEach(function (img, num) {
      if (imgCounter === num) {
        img.classList.remove('fadeout');
      } else {
        img.classList.add('fadeout');
      };
    });
    imgCounter += 1;
    if (imgCounter === 5) {
      imgCounter = 0;
    };
  }, 10000);
});