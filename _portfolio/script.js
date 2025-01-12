// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scroll to the gallery section when the scroll arrow is clicked
function scrollToGallery() {
    const gallerySection = document.querySelector('#work');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
}

// Apply dynamic glow color based on image edge colors
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.gallery-item-wrapper').forEach(wrapper => {
        const img = wrapper.querySelector('img');
        
        // Ensure the image is loaded before processing
        img.onload = function () {
            const color = extractEdgeColor(img);
            wrapper.style.setProperty('--glow-color', color);
        };
        
        // Trigger image load event if the image is cached
        if (img.complete) img.onload();
    });
});

// Function to extract the average color from the edges of an image
function extractEdgeColor(img) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Log if image dimensions are correct
    console.log(`Image dimensions: ${img.naturalWidth}x${img.naturalHeight}`);

    // Draw the image to canvas
    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

    let r = 0, g = 0, b = 0, count = 0;
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // Sample pixels from the edge (top, bottom, left, right)
    for (let x = 0; x < img.naturalWidth; x++) {
        for (let y of [0, img.naturalHeight - 1]) {
            const index = (y * img.naturalWidth + x) * 4;
            r += imageData[index];
            g += imageData[index + 1];
            b += imageData[index + 2];
            count++;
        }
    }
    for (let y = 0; y < img.naturalHeight; y++) {
        for (let x of [0, img.naturalWidth - 1]) {
            const index = (y * img.naturalWidth + x) * 4;
            r += imageData[index];
            g += imageData[index + 1];
            b += imageData[index + 2];
            count++;
        }
    }

    // Calculate average color
    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    // Log the extracted RGB values
    console.log(`Extracted color for ${img.src}: rgb(${r}, ${g}, ${b})`);

    // Return the color with transparency
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

// JavaScript for photo maximization
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".masonry-item img");
    const maximizedView = document.createElement("div");
    const closeButton = document.createElement("button");
    const maximizedImage = document.createElement("img");

    // Set up maximized view structure
    maximizedView.classList.add("maximized-view");
    closeButton.classList.add("close-btn");
    closeButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
    maximizedView.appendChild(closeButton);
    maximizedView.appendChild(maximizedImage);
    document.body.appendChild(maximizedView);

    // Handle escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && maximizedView.classList.contains("visible")) {
            closeMaximizedView();
        }
    });

    // Open maximized view
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            maximizedImage.src = item.src;
            document.body.style.overflow = "hidden"; // Prevent scrolling
            maximizedView.classList.add("visible");
            maximizedImage.classList.add("fade-in");
        });
    });

    // Close maximized view
    function closeMaximizedView() {
        maximizedView.classList.remove("visible");
        document.body.style.overflow = ""; // Restore scrolling
        maximizedImage.classList.remove("fade-in");
    }

    closeButton.addEventListener("click", closeMaximizedView);

    // Close on outside click
    maximizedView.addEventListener("click", (e) => {
        if (e.target === maximizedView) {
            closeMaximizedView();
        }
    });
});