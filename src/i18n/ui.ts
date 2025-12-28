/**
 * UI Translation Dictionary
 * Contains all user-facing strings for English and Punjabi
 */

export const languages = {
  en: 'EN',
  pa: 'PA',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.howItWorks': 'How It Works',

    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',

    // CTAs
    'cta.getCode': 'Get Your Code',
    'cta.signUp': 'Sign Up Now',
    'cta.learnMore': 'Learn More',
    'cta.readMore': 'Read More',

    // Blog
    'blog.relatedPosts': 'Related Articles',
    'blog.postedOn': 'Posted on',
    'blog.by': 'by',
    'blog.minRead': 'min read',
    'blog.categories': 'Categories',
    'blog.tags': 'Tags',

    // Common
    'common.lastUpdated': 'Last Updated',
    'common.shareOn': 'Share on',
  },
  pa: {
    // Navigation
    'nav.home': 'ਹੋਮ',
    'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
    'nav.blog': 'ਬਲੌਗ',
    'nav.howItWorks': 'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',

    // Footer
    'footer.privacy': 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ',
    'footer.terms': 'ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ',
    'footer.about': 'ਸਾਡੇ ਬਾਰੇ',
    'footer.contact': 'ਸੰਪਰਕ',

    // CTAs
    'cta.getCode': 'ਆਪਣਾ ਕੋਡ ਪ੍ਰਾਪਤ ਕਰੋ',
    'cta.signUp': 'ਹੁਣੇ ਸਾਈਨ ਅੱਪ ਕਰੋ',
    'cta.learnMore': 'ਹੋਰ ਜਾਣੋ',
    'cta.readMore': 'ਹੋਰ ਪੜ੍ਹੋ',

    // Blog
    'blog.relatedPosts': 'ਸੰਬੰਧਿਤ ਲੇਖ',
    'blog.postedOn': 'ਪੋਸਟ ਕੀਤਾ',
    'blog.by': 'ਦੁਆਰਾ',
    'blog.minRead': 'ਮਿੰਟ ਪੜ੍ਹੋ',
    'blog.categories': 'ਸ਼੍ਰੇਣੀਆਂ',
    'blog.tags': 'ਟੈਗ',

    // Common
    'common.lastUpdated': 'ਆਖਰੀ ਅੱਪਡੇਟ',
    'common.shareOn': 'ਸਾਂਝਾ ਕਰੋ',
  },
} as const;

export type UiKey = keyof typeof ui.en;
