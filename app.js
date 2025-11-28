// Gallery and Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentImageIndex = 0;

    // Initialize gallery
    function initGallery() {
        if (MAVERICK_PHOTOS.length === 0) {
            gallery.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <h2 style="color: #555; margin-bottom: 20px;">No photos yet!</h2>
                    <p style="color: #777; font-size: 1.1rem;">Add some photos of Maverick to get started.</p>
                    <p style="color: #777; margin-top: 15px;">
                        Put your photos in the <code>images</code> folder and add the filenames to <code>config.js</code>
                    </p>
                </div>
            `;
            return;
        }

        MAVERICK_PHOTOS.forEach((filename, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.dataset.index = index;

            const img = document.createElement('img');
            img.src = `images/${filename}`;
            img.alt = `Maverick photo ${index + 1}`;
            img.loading = 'lazy';

            // Add loading state
            item.classList.add('loading');
            img.onload = () => item.classList.remove('loading');
            img.onerror = () => {
                item.classList.remove('loading');
                item.innerHTML = '<div style="padding: 20px; color: #999;">Image not found</div>';
            };

            item.appendChild(img);
            item.addEventListener('click', () => openLightbox(index));
            gallery.appendChild(item);
        });
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Update lightbox image
    function updateLightboxImage() {
        const filename = MAVERICK_PHOTOS[currentImageIndex];
        lightboxImage.src = `images/${filename}`;
    }

    // Navigate to previous image
    function previousImage() {
        currentImageIndex = (currentImageIndex - 1 + MAVERICK_PHOTOS.length) % MAVERICK_PHOTOS.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % MAVERICK_PHOTOS.length;
        updateLightboxImage();
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', previousImage);
    lightboxNext.addEventListener('click', nextImage);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });

    // Initialize the gallery
    initGallery();
});
