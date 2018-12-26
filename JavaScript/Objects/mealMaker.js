const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    drinks: []
  },
  get appetizers() {
    if (Object.keys(this._courses.appetizers).length !== 0) {
      return this._courses.appetizers;
    } else {
      return 'There are no appetizers on the menu.';
    }
  },
  set appetizers(appetizersIn) {
    this.appetizers = appetizersIn;
  },
  get mains() {
    if (Object.keys(this._courses.mains).length !== 0) {
      return this._courses.mains;
    } else {
      return 'There are no dishes on the main menu.';
    }
  },
  set mains(mainsIn) {
    this.mains = mainsIn;
  },
  get desserts() {
    if (Object.keys(this._courses.desserts).length !== 0) {
      return this._courses.desserts;
    } else {
      return 'There are no desserts on the menu.';
    }
  },
  set desserts(dessertsIn) {
    this.desserts = dessertsIn;
  },
  get drinks() {
    if (Object.keys(this._courses.drinks).length !== 0) {
      return this._courses.drinks;
    } else {
      return 'There are no drinks on the menu.';
    }
  },
  set drinks(drinksIn) {
    this.drinks = drinksIn;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      item: dishName,
      cost: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let numberOfDishes = this._courses[courseName].length;
    let randomDish = Math.floor(Math.random() * numberOfDishes);
    return this._courses[courseName][randomDish];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const drink = this.getRandomDishFromCourse('drinks');
    //Pre-tax
    let totalPrice = appetizer.cost + main.cost + dessert.cost + drink.cost;
    //Estimated total
    totalPrice *= 1.13;
    return `Side: ${appetizer.item} ($${appetizer.cost})\nMain: ${main.item} ($${main.cost})\nDessert: ${dessert.item} ($${dessert.cost})\nDrink: ${drink.item} ($${drink.cost})\nTotal cost: $${totalPrice}.`;
  }
};
//Sides
menu.addDishToCourse('appetizers', 'Herb & Garlic Seasoned Fries', 3.29);
menu.addDishToCourse('appetizers', 'French Fries', 1.69);
menu.addDishToCourse('appetizers', 'Hash Brown', 1.79);
menu.addDishToCourse('appetizers', 'Poutine', 4.49);
menu.addDishToCourse('appetizers', 'Hash Brown', 1.79);
menu.addDishToCourse('appetizers', 'Side Caesar Salad', 2.79);
menu.addDishToCourse('appetizers', 'Side Garden Salad', 2.79);
menu.addDishToCourse('appetizers', 'Ranch Chicken Snack Wrap w/Crispy Chicken', 2.49);
menu.addDishToCourse('appetizers', 'Ranch Chicken Snack Wrap w/Grilled Chicken', 2.49);
menu.addDishToCourse('appetizers', 'Chipotle Chicken Snack Wrap w/Crispy Chicken', 2.49);
menu.addDishToCourse('appetizers', 'Chipotle Chicken Snack Wrap w/Grilled Chicken', 2.49);
menu.addDishToCourse('appetizers', 'Plain Bagel w/Regular Cream Cheese', 2.29);
menu.addDishToCourse('appetizers', 'Plain Bagel w/Herb & Garlic Cream Cheese', 2.29);
menu.addDishToCourse('appetizers', 'Plain Bagel', 1.49);
menu.addDishToCourse('appetizers', 'Double Quarter Pounder w/Cheese', 2.39);
menu.addDishToCourse('appetizers', 'Double Hamburger', 1.99);
menu.addDishToCourse('appetizers', 'Cheeseburger', 1.79);
menu.addDishToCourse('appetizers', 'Hamburger', 1.59);
menu.addDishToCourse('appetizers', 'McDouble', 1.99);
menu.addDishToCourse('appetizers', 'Junior Chicken', 1.99);
menu.addDishToCourse('appetizers', '6 Chicken McNuggets', 5.79);
menu.addDishToCourse('appetizers', '10 Chicken McNuggets', 7.19);
menu.addDishToCourse('appetizers', '20 Chicken McNuggets', 10.49);
//Sandwiches, Wraps, & Salads
menu.addDishToCourse('mains', 'Caesar Entree Salad w/Crispy Chicken', 7.99);
menu.addDishToCourse('mains', 'Caesar Entree Salad w/Grilled Chicken', 7.99);
menu.addDishToCourse('mains', 'Greek Entree Salad w/Grilled Chicken', 7.99);
menu.addDishToCourse('mains', 'Greek Entree Salad w/Crispy Chicken', 7.99);
menu.addDishToCourse('mains', 'Greek Entree Salad', 5.99);
menu.addDishToCourse('mains', 'Caesar Entree Salad', 5.99);
menu.addDishToCourse('mains', 'Chicken & Bacon Signature McWrap w/Crispy Chicken', 5.99);
menu.addDishToCourse('mains', 'Chicken & Bacon Signature McWrap w/Grilled Chicken', 5.99);
menu.addDishToCourse('mains', 'Sweet Chili Signature McWrap w/Crispy Chicken', 5.99);
menu.addDishToCourse('mains', 'Sweet Chili Signature McWrap w/Grilled Chicken', 5.99);
menu.addDishToCourse('mains', 'Mighty Angus Original', 7.19);
menu.addDishToCourse('mains', 'Bacon and Cheddar Angus', 7.19);
menu.addDishToCourse('mains', 'Big Mac', 5.89);
menu.addDishToCourse('mains', 'Double Big Mac', 5.89);
menu.addDishToCourse('mains', 'Big Mac, No Meat', 4.39);
menu.addDishToCourse('mains', 'Quarter Pounder w/Cheese', 5.89);
menu.addDishToCourse('mains', 'Double Quarter Pounder w/Cheese', 7.29);
menu.addDishToCourse('mains', 'Quarter Pounder BLT', 6.29);
menu.addDishToCourse('mains', 'Double Quarter Pounder BLT', 7.69);
menu.addDishToCourse('mains', 'Quarter Pounder, No Cheese', 5.39);
menu.addDishToCourse('mains', 'Double Quarter Pounder, No Cheese', 6.79);
menu.addDishToCourse('mains', 'BLT w/Grilled Chicken', 7.19);
menu.addDishToCourse('mains', 'BLT w/Crispy Chicken', 7.19);
menu.addDishToCourse('mains', 'Tomato & Mozzarella w/Crispy Chicken', 7.19);
menu.addDishToCourse('mains', 'Tomato & Mozzarella w/Grilled Chicken', 7.19);
menu.addDishToCourse('mains', 'Asiago & Bacon Seriously Chicken - Crispy', 7.19);
menu.addDishToCourse('mains', 'Asiago & Bacon Seriously Chicken - Grilled', 7.19);
menu.addDishToCourse('mains', 'McChicken', 5.59);
menu.addDishToCourse('mains', 'Filet-O-Fish', 5.39);
menu.addDishToCourse('mains', 'Double Filet-O-Fish', 6.79);
//Snacks
menu.addDishToCourse('desserts', 'Mini Chocolatine', 0.89);
menu.addDishToCourse('desserts', 'Blueberry Cream Cheese Danish', 1.69);
menu.addDishToCourse('desserts', 'Salted Caramel Apple Danish', 1.69);
menu.addDishToCourse('desserts', 'Strawberry Cream Cheese Danish', 1.69);
menu.addDishToCourse('desserts', 'Banana Chocolate Chunk Muffin', 1.39);
menu.addDishToCourse('desserts', 'Blueberry Muffin', 1.39);
menu.addDishToCourse('desserts', 'Fruit & Fibre Muffin', 1.39);
menu.addDishToCourse('desserts', 'Carrot Muffin', 1.39);
menu.addDishToCourse('desserts', 'Cranberry Orange Muffin', 1.39);
menu.addDishToCourse('desserts', 'Applie Slices', 0.99);
//Drinks
menu.addDishToCourse('drinks', 'Americano', 1.99);
menu.addDishToCourse('drinks', 'Premium Roast Brewed Coffee', 1.49);
menu.addDishToCourse('drinks', 'Premium Roast Decaf Coffee', 1.49);
menu.addDishToCourse('drinks', 'Orange Pekoe Tea', 1.49);
menu.addDishToCourse('drinks', 'Early Grey Tea', 1.49);
menu.addDishToCourse('drinks', 'Green Tea', 1.49);
menu.addDishToCourse('drinks', 'Peppermint Tea', 1.49);
menu.addDishToCourse('drinks', 'Latte (2% Milk)', 2.49);
menu.addDishToCourse('drinks', 'Latte (Skim Milk)', 2.49);
menu.addDishToCourse('drinks', 'French Vanilla Latte (2% Milk)', 2.89);
menu.addDishToCourse('drinks', 'French Vanilla Latte (Skim Milk)', 2.89);
menu.addDishToCourse('drinks', 'Caramel Latte (Skim Milk)', 2.89);
menu.addDishToCourse('drinks', 'Sugar Free Vanilla Latte (2% Milk)', 2.89);
menu.addDishToCourse('drinks', 'Sugar Free Vanilla Latte (Skim Milk)', 2.89);
menu.addDishToCourse('drinks', 'Cappuccino (2% Milk)', 2.49);
menu.addDishToCourse('drinks', 'Cappuccino (Skim Milk)', 2.49);
menu.addDishToCourse('drinks', 'McCafe Mocha (2% Milk)', 2.99);
menu.addDishToCourse('drinks', 'McCafe Mocha (Skim Milk)', 2.99);
menu.addDishToCourse('drinks', 'Espresso', 1.39);
menu.addDishToCourse('drinks', 'Double Espresso', 1.99);
menu.addDishToCourse('drinks', 'Long Espresso', 1.39);
menu.addDishToCourse('drinks', 'Hot Chocolate (2% Milk)', 2.49);
menu.addDishToCourse('drinks', 'Hot Chocolate (Skim Milk)', 2.49);
menu.addDishToCourse('drinks', 'NESTEA Iced Tea', 1.29);
menu.addDishToCourse('drinks', 'Coca-Cola', 1.29);
menu.addDishToCourse('drinks', 'Coke Zero', 1.29);
menu.addDishToCourse('drinks', 'Diet Coke', 1.29);
menu.addDishToCourse('drinks', 'Barq\'s Root Beer', 1.29);
menu.addDishToCourse('drinks', 'Sprite', 1.29);
menu.addDishToCourse('drinks', 'Fruitopia Strawberry', 1.29);
menu.addDishToCourse('drinks', 'Fruitopia Orange', 1.29);
menu.addDishToCourse('drinks', 'Mango Pineapple Real Fruit Smoothie', 1.99);
menu.addDishToCourse('drinks', 'Blueberry Promegrante Real Fruit Smoothie', 1.99);
menu.addDishToCourse('drinks', 'Strawberry Banana Real Fruit Smoothie', 1.99);
menu.addDishToCourse('drinks', 'Strawberry Mango Pineapple Real Fruit Smoothie', 1.99);
menu.addDishToCourse('drinks', 'Iced Coffee', 1.89);



const meal = menu.generateRandomMeal();

console.log(meal);
