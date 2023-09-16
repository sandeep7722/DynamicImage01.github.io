// Define an array of image URLs
const imageUrls = [
    'images/image1.png',
    'images/image2.png',
    'images/image3.png',
    // Add more image URLs here
];

// Function to load a random image
function loadRandomImage() {
    // Get a random index within the array length
    const randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Get the random image URL
    const randomImageUrl = imageUrls[randomIndex];

    // Set the random image URL as the src attribute of the <img> element
    document.getElementById('randomImage').src = randomImageUrl;
}

// Call the function to load a random image when the page loads
loadRandomImage();
