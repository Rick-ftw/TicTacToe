export default function randomThemeName() {
  const themeContainer = [
    "night-fade",
    "warm-flame",
    "rainy-asheville",
    "winter-neva",
    "heavy-rain",
    "new-york",
    "polite-rumors",
    "magic-lake",
    "loon-crest",
    "dirty-beauty",
    "soft-cherish",
    "premium-dark",
    "cold-evening",
    "passionate-bed",
    "eternal-constance",
    "midnight-bloom",

  ];
  const randomNumber = Math.floor(Math.random() * themeContainer.length);
  const randomName = themeContainer[randomNumber];
  return randomName;
}
