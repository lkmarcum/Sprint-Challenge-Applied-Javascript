class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftBtn = document.querySelector(".left-button");
    this.rightBtn = document.querySelector(".right-button");
    this.images = document.querySelectorAll(".carousel img");
    this.images[0].style.display = "block";
    this.currentIndex = 0;
    this.leftBtn.addEventListener("click", () => this.leftClick());
    this.rightBtn.addEventListener("click", () => this.rightClick());
  }
  leftClick() {
    if (this.currentIndex === 0) {
      this.images[this.currentIndex].style.display = "none";
      this.images[this.images.length - 1].style.display = "block";
      this.currentIndex = this.images.length - 1;
    } else {
      this.images[this.currentIndex].style.display = "none";
      this.images[this.currentIndex - 1].style.display = "block";
      this.currentIndex -= 1;
    }
  }
  rightClick() {
    if (this.currentIndex === this.images.length - 1) {
      this.images[this.currentIndex].style.display = "none";
      this.images[0].style.display = "block";
      this.currentIndex = 0;
    } else {
      this.images[this.currentIndex].style.display = "none";
      this.images[this.currentIndex + 1].style.display = "block";
      this.currentIndex += 1;
    }
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
