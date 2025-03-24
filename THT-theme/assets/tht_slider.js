<script>

  document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slider-item');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  // Function to show a specific slide
  function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    
    // Slide the slider-wrapper to the correct position
    document.querySelector('.slider-wrapper').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === currentIndex) {
        dot.classList.add('active');
      }
    });
  }

  // Automatic slide every 5 seconds
  setInterval(function () {
    showSlide(currentIndex + 1);
  }, 5000); // Change slide every 5 seconds

  // Click event for dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function () {
      showSlide(i);
    });
  });

  // Initial load
  showSlide(currentIndex);
});

  
</script>