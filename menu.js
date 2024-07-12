const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#right");

const catagory = document.querySelector(".drinks");
const items = document.querySelectorAll(".items");

console.log(items);
let catagoryItems = [
  "COFFEE",
  "SPECIALITY DRINK",
  "BOBA",
  "HOT BITES",
  "SANDWICHES & SALADS",
  "SEASONAL MENU",
  "BEER & WINE",
];
let currentIndex = 0;

leftbtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + catagoryItems.length) % catagoryItems.length;
  catagory.textContent = catagoryItems[currentIndex];
});

rightbtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % catagoryItems.length;
  catagory.textContent = catagoryItems[currentIndex];
});
let coffee = [
  ["LATTE", "$4.75(H)/$5.25(C)"],
  ["CORTADO", "$4.25(H)/$4.75(C)"],
  ["DRIP COFFEE", "Small: $3(H)/$3.50(C)Medium: $3.50(H)Large: $4(H)/$4.25(C)"],
  ["CAFE AU LAIT", "$3.25(H)"],
  ["CAPPUCINO", "$4.50(H)"],
  ["MOCHA", "$5.75(H)/$6.25(C)"],
  ["RED EYE", "$4.50(H)/$4.75(C)"],
];

let speciallityDrinks = [
  ["MATCHA LATTE", "$5.25(H)/$5.75(C)"],
  ["HOT CHOCOLATE", "$4.50(H)"],
  ["S'mores", "$5.50"],
  ["NUTELLA LATTE", "$5.25(H)/$5.75(C)"],
  ["CHAI", "$4.50(H)/$5.00(C)"],
  ["DIRTY CHAI", "$5.00(H)/$5.50(C)"],
  ["LAVENDER LATTE", "$5.25(H)/$5.75(C)"],
  ["ROSE LATTE", "$5.25(H)/$5.75(C)"],
  ["BUMBLEBEE LATTE", "  $5.25(H)/$5.75(C)"],
  ["BROWN SUGAR LATEE", "$5.25(H)/$5.75(C)"],
  // Add more items and prices as needed
];
let boba = [
  ["THE OG", "Medium: $4.25 Large: $5.25 Hot: $5.25"],
  ["BROWN SUGAR BOBAA", "Medium: $4.25 Large: $5.25 Hot: $5.25"],
  ["TARO BOBA COCONUT BOBA", "Medium: $4.25 Large: $5.25 Hot: $5.25"],
  ["FRIUT GREEN/BLACK TEA", "Medium: $4.25 Large: $5.25 Hot: $5.25"],
  ["MILK TEA", "Medium: $4.25 Large: $5.25 Hot: $5.25"],
  ["JASMINE GREEN TEA", "Medium: $4.25 Large: $5.25 Hot: $5.25"],
];

let hotBites = [
  ["AVOCADO TOAST", " $6.50"],
  ["MOZZ STICKS", "$6.50"],
  ["CHICKEN TENDERS", "$6.50"],
  ["FRIES", "$4.50"],
  ["ONION RINGS", "$4.50"],
  ["GARLIC FRIES", "$5.50"],
  ["SWEET POTATO FRIES", "$5.50"],
  ["CHICKEN WINGS", "$6.50"],
  ["MAC N CHEESE", "$6.50"],
  ["CHICKEN QUESADILLA", "$6.50"],
];

let sandwichesSalads = [
  ["CHICKEN CAESAR SALAD", "$8.50"],
  ["GREEK SALAD", "$8.50"],
  ["CAPRESE SANDWICH", "$8.50"],
  ["TURKEY SANDWICH", "$8.50"],
  ["HAM SANDWICH", "$8.50"],
  ["ROAST BEEF SANDWICH", "$8.50"],
  ["VEGGIE SANDWICH", "$8.50"],
  ["CHICKEN SANDWICH", "$8.50"],
  ["TUNA SANDWICH", "$8.50"],
  ["BLT", "$8.50"],
];
let seasonalMenu = [
  ["PUMPKIN SPICE LATTE", "$5.25(H)/$5.75(C)"],
  ["PEPPERMINT MOCHA", "$5.25(H)/$5.75(C)"],
  ["EGGNOG LATTE", "$5.25(H)/$5.75(C)"],
  ["GINGERBREAD LATTE", "$5.25(H)/$5.75(C)"],
  ["CANDY CANE LATTE", "$5.25(H)/$5.75(C)"],
  ["HOT APPLE CIDER", "$4.50(H)"],
];

let beerWine = [
  "BARBIE ROSE",
  "ARCHER ROOSE WHITE/RED",
  "KONA LAGER",
  "BLUE POINT",
  "JUNESHINE",
  "WHITE CLAW",
  "BUD LIGHT",
  "CORONA",
  "HEINEKEN",
  "STELLA ARTOIS",
];

let price = document.querySelectorAll(".price");

function displayItems(catagoryName) {
  let itemsList = [];
  let pricesList = [];

  switch (catagoryName) {
    case "COFFEE":
      itemsList = coffee.map((item) => item[0]);
      pricesList = coffee.map((item) => item[1]);
      break;
    case "SPECIALITY DRINK":
      itemsList = speciallityDrinks.map((item) => item[0]);
      pricesList = speciallityDrinks.map((item) => item[1]);
      break;
    case "BOBA":
      itemsList = boba.map((item) => item[0]);
      pricesList = boba.map((item) => item[1]);
      break;
    case "HOT BITES":
      itemsList = hotBites.map((item) => item[0]);
      pricesList = hotBites.map((item) => item[1]);
      break;
    case "SANDWICHES & SALADS":
      itemsList = sandwichesSalads.map((item) => item[0]);
      pricesList = sandwichesSalads.map((item) => item[1]);
      break;
    case "SEASONAL MENU":
      itemsList = seasonalMenu.map((item) => item[0]);
      pricesList = seasonalMenu.map((item) => item[1]);

      break;
    case "BEER & WINE":
      itemsList = beerWine;
      pricesList = beerWine.map(() => "$5.00"); // Assuming a fixed price for demonstration
      break;
    default:
      break;
  }

  // Display the items and prices
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = itemsList[i] || "";
    price[i].textContent = pricesList[i] || "";
  }
}

leftbtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + catagoryItems.length) % catagoryItems.length;
  catagory.textContent = catagoryItems[currentIndex];
  price.textContent = price[currentIndex];
  displayItems(catagoryItems[currentIndex]);
  console.log(catagoryItems[currentIndex]);
});

rightbtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % catagoryItems.length;
  catagory.textContent = catagoryItems[currentIndex];
  price.textContent = price[currentIndex];
  displayItems(catagoryItems[currentIndex]);
  console.log(price);
    console.log(catagoryItems[currentIndex].outerText);
});
