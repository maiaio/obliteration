// Initialize the current image index
let currentImageIndex = 1;
const totalImages = 4;

function showNextImage() {
    // Hide the current image
    const currentImage = document.getElementById(`image${currentImageIndex}`);
    currentImage.classList.remove('active');

    // Increment the image index
    currentImageIndex = (currentImageIndex % totalImages) + 1;

    // Show the next image
    const nextImage = document.getElementById(`image${currentImageIndex}`);
    nextImage.classList.add('active');
}

// Automatically show the first image on page load
window.onload = () => {
    document.getElementById('image1').classList.add('active');
};
