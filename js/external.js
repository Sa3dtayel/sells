//nav list
document.addEventListener('DOMContentLoaded', () => {
    const logoNav = document.querySelector('.logo-nav');
    const ulNav = document.querySelector('.ul-list');

    logoNav.addEventListener('click', () => {
        ulNav.classList.toggle('active');
    });
});


//move image
document.addEventListener("DOMContentLoaded", function () {
  const imageWrapper = document.querySelector(".image-wrapper");
  const images = imageWrapper.querySelectorAll("img");
  const totalImages = images.length / 1; 
  let currentIndex = 0;

  function showNextImage() {
      currentIndex++;
      if (currentIndex >= totalImages) {
         
          imageWrapper.style.transition = 'none'; 
          imageWrapper.style.transform = 'translateX(0)';
          currentIndex = 0;
          setTimeout(() => {
              imageWrapper.style.transition = 'transform 1s linear'; 
              showNextImage();
          }, 50); 
      } else {
          imageWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
  }

  setInterval(showNextImage, 5000); 
});
// press button add cart 
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', function() {
      
      const productName = this.getAttribute('data-product');
      
      const priceElement = this.previousElementSibling.querySelector('h4');
      const price = priceElement ? priceElement.textContent : 'Price not found';
      
      
      console.log(`Product: ${productName}, Price: ${price}`);

      // Change the button text to "Done"
      this.textContent = "Done";
      this.style.backgroundColor = '#4A5C6A'; 
        this.style.color = '#fff';
  });
});

//favorite
document.addEventListener("DOMContentLoaded", function () {
 
  const heartElements = document.querySelectorAll(".hart");

 
  heartElements.forEach(heart => {
      heart.addEventListener("click", function () {
         
          console.log("favorite");

          
          const card = heart.closest(".card-seller");

         
          const productName = card.querySelector("h3");

          
          if (productName) {
              console.log(productName.textContent);
          }
      });
  });
});

//scrol 
document.addEventListener('DOMContentLoaded', () => {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const boxsTow = document.querySelector('.boxs-tow');

    arrowLeft.addEventListener('click', () => {
        boxsTow.scrollBy({
            left: -200, // Adjust this value as needed
            behavior: 'smooth'
        });
    });

    arrowRight.addEventListener('click', () => {
        boxsTow.scrollBy({
            left: 200, // Adjust this value as needed
            behavior: 'smooth'
        });
    });
});
var i
