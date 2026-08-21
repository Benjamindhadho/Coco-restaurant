/**
 * Central image registry.
 * All photos are served from Unsplash's CDN (free to hotlink, no API key needed).
 * `u()` builds an optimized URL: auto format, center crop, explicit width, q80 quality.
 */
const u = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  // Home page
  heroDish: u('photo-1414235077428-338989a2e8c0', 1400), // elegant plated seafood dish
  galleryMain: u('photo-1504674900247-0877df9cc836', 1000), // coastal spread on a table
  galleryThumb1: u('photo-1559339352-11d035aa65de', 600), // plated dish
  galleryThumb2: u('photo-1432139555190-58524dae6a55', 600), // gourmet plating
  galleryThumb3: u('photo-1555939594-58d7cb561ad1', 600), // grilled skewers
  bannerBackground: u('photo-1552566626-52f8b828add9', 1920), // warm restaurant interior

  // Testimonial
  reviewerAvatar: u('photo-1494790108377-be9c29b29330', 200), // portrait of Amina
  testimonialDish: u('photo-1565557623262-b51c2513a641', 1200), // coconut curry bowl

  // Our Story page
  storyInterior: u('photo-1517248135467-4c7edcad34c4', 900), // dining room
  storyPlated: u('photo-1414235077428-338989a2e8c0', 700), // chef's plating

  // Menu dishes
  dishes: {
    samakiKupaka: u('photo-1467003909585-2f8a72700288', 800), // grilled fish w/ herbs
    kukuPaka: u('photo-1565557623262-b51c2513a641', 800), // creamy curry
    pilauNyama: u('photo-1512058564366-18510be2db19', 800), // spiced rice bowl
    mishkaki: u('photo-1555939594-58d7cb561ad1', 800), // char-grilled skewers
    waliNazi: u('photo-1432139555190-58524dae6a55', 800), // rice plating
    viaziKarai: u('photo-1601050690597-df0568f70950', 800), // golden fried bites
    pwezaNazi: u('photo-1476224203421-9ac39bcb3327', 800), // seafood in pan
    chaiTangawizi: u('photo-1544787219-7f47ccb76574', 800), // spiced tea
    kahawaMombasa: u('photo-1509042239860-f550ce710b93', 800), // coffee cup
    madafuBreeze: u('photo-1551538827-9c037cb4f32a', 800), // tropical cocktail
    tamarindCooler: u('photo-1536935338788-846bb9981813', 800), // citrus cocktail
    mahamri: u('photo-1504674900247-0877df9cc836', 800), // sweet fried bread basket
    kaimati: u('photo-1578985545062-69928b1d9587', 800), // sweet dumplings/dessert
    vitumbua: u('photo-1504754524776-8f4f37790ca0', 800), // round rice cakes
  },
}
