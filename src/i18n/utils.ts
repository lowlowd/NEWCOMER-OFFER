/**
 * i18n Utility Functions
 * Helpers for language detection and translation
 */

import { ui, defaultLang, type UiKey } from './ui';
import { CATEGORY_TRANSLATIONS, TAG_TRANSLATIONS } from '~/utils/category-tag-translations';

export type Lang = keyof typeof ui;

/**
 * Route mapping between English and Punjabi pages
 */
const routeMap: Record<string, string> = {
  // English -> Punjabi slug mapping
  '/': '/pa',
  '/how-it-works': '/pa/kidaan-kaam-karda-hai',
  '/about': '/pa/saade-baare',
  '/contact': '/pa/sampark',
  '/privacy': '/pa/gopniyata',
  '/terms': '/pa/shartaan',
  '/blog': '/pa/blog',
};

// Blog post slug mapping (English -> Punjabi) - Update these as you create content
const blogPostMap: Record<string, string> = {
  // Add your mappings here, e.g.:
  // 'english-post-slug': 'punjabi-post-slug',
};

// Create reverse blog mapping (Punjabi slug -> English slug)
const reverseBlogPostMap: Record<string, string> = {};
Object.entries(blogPostMap).forEach(([en, pa]) => {
  reverseBlogPostMap[pa] = en;
});

// Category slug mapping (English -> Punjabi)
const categoryMap: Record<string, string> = {};
const reverseCategoryMap: Record<string, string> = {};
Object.entries(CATEGORY_TRANSLATIONS).forEach(([enSlug, { slug: paSlug }]) => {
  categoryMap[enSlug] = paSlug;
  reverseCategoryMap[paSlug] = enSlug;
});

// Tag slug mapping (English -> Punjabi)
const tagMap: Record<string, string> = {};
const reverseTagMap: Record<string, string> = {};
Object.entries(TAG_TRANSLATIONS).forEach(([enSlug, { slug: paSlug }]) => {
  tagMap[enSlug] = paSlug;
  reverseTagMap[paSlug] = enSlug;
});

// Create reverse mapping (Punjabi -> English)
const reverseRouteMap: Record<string, string> = {};
Object.entries(routeMap).forEach(([en, pa]) => {
  reverseRouteMap[pa] = en;
});

/**
 * Get the current language from the URL
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'pa') return 'pa';
  return defaultLang;
}

/**
 * Get a translation function for the given language
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Get the alternate language URL (for language switcher)
 */
export function getAlternateUrl(url: URL): string {
  const currentLang = getLangFromUrl(url);
  const pathname = url.pathname;

  if (currentLang === 'en') {
    // Switch to Punjabi
    if (routeMap[pathname]) {
      return routeMap[pathname];
    }
    const blogPageMatch = pathname.match(/^\/blog\/(\d+)$/);
    if (blogPageMatch) {
      return `/pa/blog/${blogPageMatch[1]}`;
    }
    const enBlogPostMatch = pathname.match(/^\/blog\/(.+)$/);
    if (enBlogPostMatch) {
      const enSlug = enBlogPostMatch[1];
      const paSlug = blogPostMap[enSlug];
      if (paSlug) {
        return `/pa/blog/${paSlug}`;
      }
      return pathname;
    }
    const enCategoryMatch = pathname.match(/^\/category\/(.+)$/);
    if (enCategoryMatch) {
      const enSlug = enCategoryMatch[1];
      const paSlug = categoryMap[enSlug];
      if (paSlug) {
        return `/pa/category/${paSlug}`;
      }
      return pathname;
    }
    const enTagMatch = pathname.match(/^\/tag\/(.+)$/);
    if (enTagMatch) {
      const enSlug = enTagMatch[1];
      const paSlug = tagMap[enSlug];
      if (paSlug) {
        return `/pa/tag/${paSlug}`;
      }
      return pathname;
    }
    if (pathname === '/') {
      return '/pa';
    }
    return `/pa${pathname}`;
  } else {
    // Switch to English
    if (reverseRouteMap[pathname]) {
      return reverseRouteMap[pathname];
    }
    const paBlogPageMatch = pathname.match(/^\/pa\/blog\/(\d+)$/);
    if (paBlogPageMatch) {
      return `/blog/${paBlogPageMatch[1]}`;
    }
    const paBlogPostMatch = pathname.match(/^\/pa\/blog\/(.+)$/);
    if (paBlogPostMatch) {
      const paSlug = paBlogPostMatch[1];
      const enSlug = reverseBlogPostMap[paSlug];
      if (enSlug) {
        return `/blog/${enSlug}`;
      }
      return pathname;
    }
    const paCategoryMatch = pathname.match(/^\/pa\/category\/(.+)$/);
    if (paCategoryMatch) {
      const paSlug = paCategoryMatch[1];
      const enSlug = reverseCategoryMap[paSlug];
      if (enSlug) {
        return `/category/${enSlug}`;
      }
      return pathname;
    }
    const paTagMatch = pathname.match(/^\/pa\/tag\/(.+)$/);
    if (paTagMatch) {
      const paSlug = paTagMatch[1];
      const enSlug = reverseTagMap[paSlug];
      if (enSlug) {
        return `/tag/${enSlug}`;
      }
      return pathname;
    }
    return pathname.replace(/^\/pa/, '') || '/';
  }
}

/**
 * Get the alternate language code
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'pa' : 'en';
}
