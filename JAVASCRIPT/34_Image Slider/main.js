const slider = document.querySelector('.slider');
      const slides = slider.querySelectorAll('img');
      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');
      let currentSlide = 0;

      function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
      }

      prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
      });

      nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
      });

      showSlide(currentSlide);