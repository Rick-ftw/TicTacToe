export async function randomThemeName() {
  const themeContainer = [
    "warm-flame",         //light
    "rainy-asheville",    //light
    "winter-neva",        //light
    "heavy-rain",         //light
    "new-york",           //light
    "magic-lake",         //light
    "dirty-beauty",       //light
    "night-fade",         //light-dark
    "loon-crest",         //light-dark
    "soft-cherish",       //dark
    "premium-dark",       //dark
    "cold-evening",       //dark
    "polite-rumors",      //dark
    "passionate-bed",     //dark
    "eternal-constance",  //dark
    "midnight-bloom",     //dark

  ];
  const randomNumber = Math.floor(Math.random() * themeContainer.length);
  const randomName = themeContainer[randomNumber];
  return [randomName, randomNumber];
}

export function changeLineColor(themeNumber) {
  const colors = ["black", "grey", "white"];
  const r = document.querySelector(":root");
  // const rootVars = getComputedStyle(r);
  // console.log("The value of --secondary-color is: " + rootVars.getPropertyValue('--lineColor'));
  if (themeNumber < 7) {
    r.style.setProperty('--secondary-color', colors[0]);
  } else if (themeNumber > 6 && themeNumber < 9) {
    r.style.setProperty('--secondary-color', colors[1]);
  } else {
    r.style.setProperty('--secondary-color', colors[2]);
  }
}