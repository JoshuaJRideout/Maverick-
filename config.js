// Cloudflare Images Configuration
const CLOUDFLARE_CONFIG = {
    accountHash: 'PTOr_s5zn8KwRmaOPqNskw',
    variant: 'public', // Options: 'public', 'thumbnail', 'original', etc.
};

// Add your uploaded image IDs here
// After uploading images via the upload script or Cloudflare dashboard,
// add their IDs to this array
const MAVERICK_PHOTOS = [
    // Example: 'abc123def456',
    // Example: 'xyz789ghi012',

    // Add your Maverick photo IDs below:
    // To upload images, use the upload-image.js script or upload via Cloudflare dashboard
    // Then paste the image IDs here
];

// Helper function to generate Cloudflare Images URL
function getImageUrl(imageId, variant = CLOUDFLARE_CONFIG.variant) {
    return `https://imagedelivery.net/${CLOUDFLARE_CONFIG.accountHash}/${imageId}/${variant}`;
}
