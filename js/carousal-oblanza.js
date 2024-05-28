const nextBtn = document.querySelector(".next_satu");
const prevBtn = document.querySelector(".prev_satu");
const track = document.querySelector(".track_satu");
const dots = document.querySelectorAll(".dot");

// You can also calculate this dynamically by calling querySelectorAll(".slide")
// and then using the length property.
const NUM_SLIDES = 3;

// The current slide that's being displayed
let currSlide = 0;

// Slide the track onto the current slide
function slideTrack() {
  track.style.transform = `translateX(${-currSlide * 100}%)`;
}

// Go to the next slide. Loop back to the first slide if you overflow.
nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
  updateDots();
});

// Go to the previous slide. Loop to the last slide if you overflow.
prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
  updateDots();
});

// Update dots to show current slide
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// AutoPlay feature
let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    currSlide = (currSlide + 1) % NUM_SLIDES;
    slideTrack();
    updateDots();
  }, 6000); // Change this value to adjust autoPlay speed
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

// Pause autoPlay when mouse enters carousel
document.querySelector(".carousel_satu").addEventListener("mouseenter", stopAutoPlay);

// Resume autoPlay when mouse leaves carousel
document.querySelector(".carousel_satu").addEventListener("mouseleave", startAutoPlay);

// Handle dot click event
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currSlide = index;
    slideTrack();
    updateDots();
  });
});




