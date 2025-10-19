function openPopup() {
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

//popup picture
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");
    const popupTriggers = document.querySelectorAll(".popup-trigger");
    const popupClose = document.querySelector(".popup-close");

    // click for open pic
    popupTriggers.forEach(img => {
        img.addEventListener("click", function() {
            popupImg.src = this.src;
            popup.classList.add("active");
        });
    });

    // click for close pic
    popupClose.addEventListener("click", function() {
        popup.classList.remove("active");
    });

    // click outsite for close pic
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });
});

//silder img
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
    },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
//silder img

//back to top btn
  const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};
toTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
//back to top btn

// const images = [
//   "/PIC/certificate/compitition/compi4.jpg",
//   "/PIC/certificate/compitition/compi2.jpg",
//   "/PIC/certificate/compitition/compi3.jpg",
//   "/PIC/certificate/compitition/compi1.jpg",
//   "/PIC/certificate/compitition/compi5.jpg",
//   "/PIC/certificate/compitition/compi6.jpg",
// ];

// let currentImageIndex = 0;
// const modal = document.getElementById("imageModal");
// const modalImg = document.getElementById("modalImage");

// function openModal(index) {
//   modal.style.display = "flex";
//   currentImageIndex = index;
//   modalImg.src = images[currentImageIndex];
// }

// function closeModal() {
//   modal.style.display = "none";
// }

// function changeImage(direction) {
//   currentImageIndex += direction;

//   if (currentImageIndex >= images.length) {
//     currentImageIndex = 0;
//   }
//   if (currentImageIndex < 0) {
//     currentImageIndex = images.length - 1;
//   }

//   modalImg.src = images[currentImageIndex];
// }
// // --------------------------------------------
// const images2 = [
//   "/PIC/use/compitition/microbit/pic1.jpg",
//   "/PIC/use/compitition/microbit/pic2.jpg",
//   "/PIC/use/compitition/microbit/pic3.jpg",
//   "/PIC/use/compitition/microbit/pic4.jpg",
//   "/PIC/use/compitition/microbit/pic5.jpg",
//   "/PIC/use/compitition/microbit/pic6.jpg",
//   "/PIC/use/compitition/microbit/pic7.jpg",
// ];

// let currentImageIndex2 = 0;
// const modal2 = document.getElementById("imageModal2");
// const modalImg2 = document.getElementById("modalImage2");

// function openModal2(index) {
//   modal2.style.display = "flex";
//   currentImageIndex2 = index;
//   modalImg2.src = images2[currentImageIndex2];
// }

// function closeModal2() {
//   modal2.style.display = "none";
// }

// function changeImage2(direction) {
//   currentImageIndex2 += direction;

//   if (currentImageIndex2 >= images2.length) {
//     currentImageIndex2 = 0;
//   }
//   if (currentImageIndex2 < 0) {
//     currentImageIndex2 = images2.length - 1;
//   }

//   modalImg2.src = images2[currentImageIndex2];
// }


























//close modal when click space place
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
//arrow on keyboard
document.addEventListener("keydown", function (event) {
  if (modal.style.display === "flex") {
    if (event.key === "ArrowLeft") {
      changeImage(-1);
    } else if (event.key === "ArrowRight") {
      changeImage(1);
    } else if (event.key === "Escape") {
      closeModal();
    }
  }
});
// ----------------navbarrespon---------------- //
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

// Fix for iOS vh issue
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});