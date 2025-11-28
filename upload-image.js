#!/usr/bin/env node

/**
 * Cloudflare Images Upload Script
 *
 * This script helps you upload images to Cloudflare Images via their API.
 *
 * Usage:
 *   node upload-image.js <path-to-image>
 *
 * Prerequisites:
 *   1. Set your Cloudflare API Token as an environment variable:
 *      export CLOUDFLARE_API_TOKEN="your-api-token-here"
 *
 *   2. Make sure you have your Account ID (already configured in this script)
 *
 * Getting an API Token:
 *   1. Go to https://dash.cloudflare.com/profile/api-tokens
 *   2. Click "Create Token"
 *   3. Use the "Edit Cloudflare Images" template or create custom token with:
 *      - Permissions: Account > Cloudflare Images > Edit
 *   4. Copy the token and set it as CLOUDFLARE_API_TOKEN environment variable
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const ACCOUNT_ID = '9f9fcbb3e4b19d0e0e3f2731c423c04f';
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

// Validate inputs
if (!API_TOKEN) {
    console.error('❌ Error: CLOUDFLARE_API_TOKEN environment variable is not set.');
    console.error('\nTo set it, run:');
    console.error('  export CLOUDFLARE_API_TOKEN="your-api-token-here"\n');
    console.error('Get your API token from: https://dash.cloudflare.com/profile/api-tokens');
    process.exit(1);
}

const imagePath = process.argv[2];
if (!imagePath) {
    console.error('❌ Error: No image path provided.');
    console.error('\nUsage: node upload-image.js <path-to-image>\n');
    process.exit(1);
}

if (!fs.existsSync(imagePath)) {
    console.error(`❌ Error: File not found: ${imagePath}`);
    process.exit(1);
}

// Upload image
async function uploadImage(filePath) {
    const fileName = path.basename(filePath);
    const fileContent = fs.readFileSync(filePath);

    console.log(`📤 Uploading ${fileName}...`);

    // Create form data boundary
    const boundary = `----FormBoundary${Date.now()}`;

    // Build multipart form data
    const formData = [
        `--${boundary}`,
        `Content-Disposition: form-data; name="file"; filename="${fileName}"`,
        'Content-Type: application/octet-stream',
        '',
        fileContent.toString('binary'),
        `--${boundary}--`
    ].join('\r\n');

    const options = {
        hostname: 'api.cloudflare.com',
        port: 443,
        path: `/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
            'Content-Length': Buffer.byteLength(formData, 'binary')
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(data);

                    if (response.success) {
                        const imageId = response.result.id;
                        console.log('✅ Upload successful!');
                        console.log(`\n📋 Image ID: ${imageId}`);
                        console.log('\n📝 Add this ID to config.js:');
                        console.log(`   '${imageId}',`);
                        console.log(`\n🔗 Image URL: ${response.result.variants[0]}\n`);
                        resolve(response);
                    } else {
                        console.error('❌ Upload failed:', response.errors);
                        reject(new Error(JSON.stringify(response.errors)));
                    }
                } catch (error) {
                    console.error('❌ Error parsing response:', error);
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            console.error('❌ Request failed:', error);
            reject(error);
        });

        req.write(formData, 'binary');
        req.end();
    });
}

// Run upload
uploadImage(imagePath).catch(error => {
    console.error('Upload failed:', error.message);
    process.exit(1);
});
