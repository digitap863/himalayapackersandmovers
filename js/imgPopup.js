const galleryImages = document.querySelectorAll(".gallery-contents img");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    popupImage.src = image.src;
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
