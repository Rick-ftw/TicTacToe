export default function randomThemeName(e) {
  const themeContainer = [
    "night-fade", "warm-flame", "rainy-ashvile", 
    "winter-neva", "heavy-rain", "new-york", "polite-rumors", 
    "magic-lake"
  ];
  const randomNumber = Math.floor(Math.random() * themeContainer.length);
  const randomName = themeContainer[randomNumber];
  return randomName;
}