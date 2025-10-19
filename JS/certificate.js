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