/* Change "Today's Favorites" */

const menu = [
    {
        name: "Tiramisu",
        description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone",
        image: "images/menu/tiramisu.jpg",
    },
    {
        name: "Trilece",
        description: "A delicious cake soaked in three types of milk and topped with a caramel glaze, popular in the Balkans",
        image: "images/menu/trilece.jpg",
    },
    {
        name: "Baklava",
        description: "A flaky dessert made with layers of phyllo dough, chopped walnuts, and a sweet honey syrup",
        image: "images/menu/baklava.jpg",
    },
    {
        name: "Cinammon Roll",
        description: "A soft, buttery roll made with cinnamon sugar and topped with a creamy glaze",
        image: "images/menu/cinnamon_roll.webp",
    },
    {
        name: "Cannoli",
        description: "A crunchy shell filled with creamy ricotta filling",
        image: "images/menu/cannoli.webp",
    },
    {
        name: "Chocolate Chip Cookie",
        description: "Fresh, soft cookies filled with gooey dark chocolate chips",
        image: "images/menu/chocolate_chip.jpg",
    },
    {
        name: "Shendetlie",
        description: "A traditional Albanian honey cake made with walnuts and syrup",
        image: "images/menu/shendetlie.jpg",
    }
];

const day = new Date().getDay();

const dailyFaves = [
    menu[(day * 2) % menu.length],
    menu[(day * 2 + 1) % menu.length],
];

document.getElementById("item-1-name").innerText = dailyFaves[0].name;
document.getElementById("item-1-description").innerText = dailyFaves[0].description;
document.getElementById("item-1").querySelector("img").src = dailyFaves[0].image;

document.getElementById("item-2-name").innerText = dailyFaves[1].name;
document.getElementById("item-2-description").innerText = dailyFaves[1].description;
document.getElementById("item-2").querySelector("img").src = dailyFaves[1].image;


/* Changing the quote */
function changeQuote() {
    let quote;
    const myQuotes = [
        "Life is uncertain. Eat dessert first. --Ernestine Ulmer",
        "A balanced diet is a cookie in each hand. --Barbara Johnson",
        "Stressed is desserts spelled backwards. --Unknown",
        "There is nothing better thean a friend, unless it is a friend with chocolate. --Linda Grayson"
    ];
    let randomInt = Math.floor(Math.random() * 20) + 1;
    if (randomInt < 5) {
        quote = myQuotes[0];
    } else if (randomInt < 10) {
        quote = myQuotes[1];
    } else if (randomInt < 15) {
        quote = myQuotes[2];
    } else {
        quote = myQuotes[3];
    }

    let block = document.getElementById("quote");
    block.textContent = quote;
}