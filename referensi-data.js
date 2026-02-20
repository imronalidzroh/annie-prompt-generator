// ====================================================
// 📸 REFERENSI GAMBAR - ANNIE INFLUENCER
// ====================================================
// File ini berisi mapping referensi gambar untuk
// Annie Influencer Prompt Generator
// 
// 810+ foto referensi tersedia di folder: referensi/
// ====================================================

// Base path untuk gambar referensi
const REF_BASE_PATH = 'referensi/';

// Helper function untuk mendapatkan path gambar
// Usage: getRefImage('pose', 'P01') -> 'referensi/poses/P01.jpg'
function getRefImage(category, id) {
    const folderMap = {
        'P': 'poses',
        'A': 'angles', 
        'D': 'devices',
        'M': 'mood',
        'E': 'expressions',
        'MP': 'micro-poses',
        'H': 'hairstyles',
        'MK': 'makeup'
    };
    
    // Extract prefix (huruf) dari ID
    const prefix = id.match(/^[A-Z]+/);
    if (!prefix) return null;
    
    const folder = folderMap[prefix[0]];
    if (!folder) return null;
    
    return `${REF_BASE_PATH}${folder}/${id}.jpg`;
}

// Cosplay references (156 images)
// Files: cosplay (1).jpeg to cosplay (156).jpeg
function getCosplayRef(index) {
    if (index < 1 || index > 156) return null;
    return `${REF_BASE_PATH}cosplay/cosplay (${index}).jpeg`;
}

// Export functions
if (typeof module !== 'undefined') {
    module.exports = { getRefImage, getCosplayRef, REF_BASE_PATH };
}

console.log('✅ Reference image helpers loaded');
console.log(`   - Base path: ${REF_BASE_PATH}`);
console.log('   - Categories: poses, angles, devices, mood, expressions, micro-poses, hairstyles, makeup');
console.log('   - Cosplay: 156 images');
