/**
 * Category and Tag Translations (English -> Punjabi)
 *
 * Update these mappings for your site content
 */

// Category translations (English slug -> Punjabi slug + name)
export const CATEGORY_TRANSLATIONS: Record<string, { slug: string; name: string }> = {
  // Example categories - customize for your content:
  guides: { slug: 'guides', name: 'ਗਾਈਡਾਂ' },
  news: { slug: 'khabaran', name: 'ਖ਼ਬਰਾਂ' },
  tips: { slug: 'tips', name: 'ਟਿਪਸ' },
  resources: { slug: 'saadhan', name: 'ਸਾਧਨ' },
};

// Tag translations (English slug -> Punjabi slug + name)
export const TAG_TRANSLATIONS: Record<string, { slug: string; name: string }> = {
  // Example tags - customize for your content:
  'getting-started': { slug: 'shuruat', name: 'ਸ਼ੁਰੂਆਤ' },
  tutorial: { slug: 'tutorial', name: 'ਟਿਊਟੋਰੀਅਲ' },
  beginner: { slug: 'nava', name: 'ਨਵਾਂ' },
  advanced: { slug: 'ucha', name: 'ਉੱਚਾ' },
};
