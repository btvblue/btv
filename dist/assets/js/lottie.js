document.addEventListener('DOMContentLoaded', () => {
  const lottieContainers = document.querySelectorAll('.lottie');

  if (lottieContainers.length > 0) {
    lottieContainers.forEach((container) => {
      const lottiePath = container.getAttribute('data-lottie');

      if (lottiePath) {
        try {
          const animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: lottiePath,
          });
        } catch (error) {
          console.error('Error loading Lottie animation:', error);
        }
      }
    });
  }
});
