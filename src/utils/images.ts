const generateImageUrl = (prompt: string, size: 'square_hd' | 'square' | 'portrait_4_3' | 'portrait_16_9' | 'landscape_4_3' | 'landscape_16_9' = 'landscape_16_9') => {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
};

export const IMAGES = {
  GATE: generateImageUrl('Majestic antique South Asian double-door entry gate flanked by dark maroon drapes and lit floor lanterns, luxury wedding invitation, high detail, 8k, cinematic lighting', 'landscape_16_9'),
  LOCK_ENTRY_BG: generateImageUrl('Magnificent South Asian royal courtyard at night with palace arches, carved stone, candle warm lantern glow, deep maroon and antique gold palette, luxury wedding invitation atmosphere, cinematic, highly detailed', 'landscape_16_9'),
  REVEAL_HALL: generateImageUrl('Royal South Asian banquet hall interior with a majestic chandelier, maroon and gold theme, luxury wedding venue, architectural arches', 'landscape_16_9'),
  INVITATION_BG: generateImageUrl('Luxury velvet maroon background with ornate gold filigree borders and crimson roses, elegant wedding invitation background', 'portrait_4_3'),
  VENUE_BG: generateImageUrl('South Asian architectural arch silhouette with a warm sunset background, luxury palace details', 'portrait_4_3'),
  AMANAT_ALI_LOCAL: '/amanat-ali.jpg',
  PERFORMANCE_POSTER: generateImageUrl('Professional event poster frame for a famous South Asian male singer performing live, concert stage background, luxury gold trim', 'portrait_4_3'),
  RSVP_BG: generateImageUrl('Luxury frame layout with candle-lanterns and gold orchids on side panels, maroon velvet background', 'landscape_16_9'),
  GUESTBOOK_BG: generateImageUrl('Opulent maroon draped curtains framing a clean elegant message board container, gold accents', 'landscape_16_9'),
  COUNTDOWN_BG: generateImageUrl('Beautiful architectural columns framing both sides looking out into a starry twilight vista with temple silhouettes', 'landscape_16_9'),
  MONOGRAM_BG: generateImageUrl('Elegant interlocking AI monogram in shimmering gold on a luxury velvet maroon background', 'square_hd'),
  FAMILY_GATHERING: generateImageUrl('Warm family gathering celebration with loved ones together, elegant golden lighting, maroon and gold theme, wholesome atmosphere', 'portrait_4_3'),
};
