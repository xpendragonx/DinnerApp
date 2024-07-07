const soupsBtnElement = document.getElementById('soupsBtn')
const tacosBtnElement = document.getElementById('tacosBtn')
const classicsBtnElement = document.getElementById('classicsBtn')
const especialesBtnElement = document.getElementById('especialesBtn')
const easyMealsBtnElement = document.getElementById('easyMealsBtn')
const snacksBtnElement = document.querySelector("#snacksBtn")

const demoElement = document.querySelector("#demo")

const soups = [
  "White Bean Chili",

  "Turkey Chili",

  "Abondigas",

  "Posole",

  "Clam Chowder",

  "Tortellini",

  "Beef Stew",

  "Chicken and White Bean",

  "Potato Soup",
  
  "Corn Chowder",
  
  "Italian Sausage Soup", 
];

const tacos = [
  "Ghetto Fish", 
  
  "Turkey", 
  
  "Dr Pepper Pork", 
  
  "Carne Asada",
  
  "Chicken",
];

const classics = [
  "Beef Stroke-me-off",

  "Spaghetti",

  "Shrimp with Mango Salsa",

  "Stinky Steak",

  "BBQ Chicken",

  "Crispy Chicken",

  "Cuban Chicken",

  "Tuna Casserole",

  "Shepherds Pie",

  "Sloppy Joes",

  "Chicken and Biscuits",

  "Chicken and Broccoli Pasta",

  "Pork Chops",
  
  "Salmon Bowls",
  
  "Butter Chicken",
  
  "Broccoli Beef",
  
  "Goulash",
  
  "Burgers",
  
  "Breakfast",
];

const especiales = [
  "Lasagna",

  "Mushroom Lasagna",

  "Shrimp Cocktail",

  "Salmon",

  "Baked Hot Wings",

  "Seafood Boil",

  "Chicken Tawook",
  
  "Turkey Dinner",
  
  "Chicken and Dumplings",
  
  "BBQ Chicken Pizza",
  
  "Chicken Parmainiana",
  
  "Ribs", 
];

const easyMeals = [
  "Stuffed Baked Potatoes",

  "Grilled Cheese with Tomato Soup",

  "TJs Orange Chicken",

  "TJs Potstickers",

  "TJs Pizza",
  
  "MAXX Chicken Bowls",
  
  "Turkey Wraps",
  
  "BLTs"
];

const snacks = [
  "Beef Jerky",

  "Cheese Ball",

  "Bean Dip",

  "Nachos",

  "Spam Masube",

  "Chive and Onion Dip",
  
  "Chicken Salad",
  
  "Charcuterie",
  
  "Pop Corn",
  
  "Potato Skins",
];

soupsBtnElement.addEventListener('click', function shuffleList() {
  soups.sort(() => 0.5 -Math.random())
  const myTimeout = setTimeout(function() {
    demoElement.innerHTML = soups[0] + ", " + soups[1] + ", " + soups[2]
  }, 500)  
})

tacosBtnElement.addEventListener('click', function shuffleList() {
  tacos.sort(() => 0.5 -Math.random())
  const myTimeout = setTimeout(function() {
    demoElement.innerHTML = tacos[0] + ", " + tacos[1] + ", " + tacos[2]
  }, 500)  
})

classicsBtnElement.addEventListener('click', function shuffleList() {
  classics.sort(() => 0.5 -Math.random())
  const myTimeout = setTimeout(function() {
    demoElement.innerHTML = classics[0] + ", " + classics[1] + ", " + classics[2]
  }, 500)  
})

especialesBtnElement.addEventListener('click', function shuffleList() {
  especiales.sort(() => 0.5 -Math.random())
  const myTimeout = setTimeout(function() {
    demoElement.innerHTML = especiales[0] + ", " + especiales[1] + ", " + especiales[2]
  }, 500)  
})

easyMealsBtnElement.addEventListener('click', function shuffleList() {
  easyMeals.sort(() => 0.5 -Math.random())
  const myTimeout = setTimeout(function() {
    demoElement.innerHTML = easyMeals[0] + ", " + easyMeals[1] + ", " + easyMeals[2]
  }, 500)  
})

snacksBtnElement.addEventListener('click', function shuffleList() {
  snacks.sort(() => 0.5 -Math.random())
  const myTimeout = setTimeout(testingSnacks, 500)  
})

function testingSnacks() {
  demoElement.innerHTML = snacks[0] + ", " + snacks[1] + ", " + snacks[2]
}
