export function randomThemeName() {
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

export function changeLineColor() {
  const randomColor = ["white", "black", "grey"];
  const randomNumber = Math.floor( Math.random() * randomColor.length);
  const r = document.querySelector(":root");
  const rootVars = getComputedStyle(r);
  console.log("The value of --lineColor is: " + rootVars.getPropertyValue('--lineColor'));
  r.style.setProperty('--lineColor', randomColor[randomNumber]);
}