// Define an array of image URLs
const imageUrls = [
    'images/image1.png',
    'images/image2.png',
    'images/image3.png',
    'images/image4.png',
    'images/image5.png',
    'images/image6.png',
    'images/image7.png',
    'images/image8.png',
    'images/image9.png',
    'images/image10.png',
    'images/image11.png',
    'images/image12.png',
    'images/image13.png',
    'images/image14.png',
    'images/image15.png',
    'images/image16.png',
    'images/image17.png',
    'images/image18.png',
    'images/image19.png',
    'images/image20.png',
    'images/image21.png',
    'images/image22.png',
    'images/image23.png',
    'images/image24.png',
    'images/image25.png',
    'images/image26.png',
    'images/image27.png',
    'images/image28.png',
    'images/image29.png',
    'images/image30.png',
    'images/image31.png',
    'images/image32.png',
    'images/image33.png',
    'images/image34.png',
    'images/image35.png',
    'images/image36.png',
    'images/image37.png',
    'images/image38.png',
    'images/image39.png',
    'images/image40.png',
    'images/image41.png',
    'images/image42.png',
    'images/image43.png',
    'images/image44.png',
    'images/image45.png',
    'images/image46.png',
    'images/image47.png',
    'images/image48.png',
    'images/image49.png',
    'images/image50.png',
    'images/image51.png',
    'images/image52.png',
    'images/image53.png',
    'images/image54.png',
    'images/image55.png',
    'images/image56.png',
    'images/image57.png',
    'images/image58.png',
    'images/image59.png',
    'images/image60.png',
    'images/image61.png',
    'images/image62.png',
    'images/image63.png',
    'images/image64.png',
    'images/image65.png'
    // Add more image URLs here
];

// Function to load a random image
function loadRandomImage() {
    // Get a random index within the array length
    const randomIndex1 = Math.floor(Math.random() * imageUrls.length);
    console.log(randomIndex1);
    
    const randomIndex2 = Math.floor(Math.random() * imageUrls.length);
    console.log(randomIndex2);
    const randomIndex3 = Math.floor(Math.random() * imageUrls.length);
    console.log(randomIndex3);
    const randomIndex4 = Math.floor(Math.random() * imageUrls.length);
    console.log(randomIndex4);

    // Get the random image URL
    const randomImageUrl1 = imageUrls[randomIndex1];
    const randomImageUrl2 = imageUrls[randomIndex2];
    const randomImageUrl3 = imageUrls[randomIndex3];
    const randomImageUrl4 = imageUrls[randomIndex4];

    // Set the random image URL as the src attribute of the <img> element
    document.getElementById('randomImage1').src = randomImageUrl1;
    document.getElementById('randomImage2').src = randomImageUrl2;
    document.getElementById('randomImage3').src = randomImageUrl3;
    document.getElementById('randomImage4').src = randomImageUrl4;
}

// Call the function to load a random image when the page loads
loadRandomImage();
