class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

let warmMeal = new Breakfast("bacon", "juice");
let warmLunch = new Lunch("caesar", "tomato", "soda");
let warmDinner = new Dinner("chicken", "noodle", "steak", "brownies");

warmMeal;
warmLunch;
warmDinner;