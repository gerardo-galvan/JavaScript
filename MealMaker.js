const menu = {
    _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers(){
    this._courses.appetizers;
  },
  get mains(){
    this._courses.mains;
  },
  get desserts(){
    this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get _course(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
  };
 
  return this._courses[courseName].push(dish); 
},

getRandomDishFromCourse (courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
  },

generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
 
    return `Your meal is ${appetizer.name}, ${main.name}, ... The price is ${totalPrice}.`;
}
}

menu.addDishToCourse('appetizers','salad',3);
menu.addDishToCourse('appetizers','wings',5);
menu.addDishToCourse('appetizers','fries',8);

menu.addDishToCourse('mains','stake',10);
menu.addDishToCourse('mains','salmon',5);
menu.addDishToCourse('mains','burger',8);

menu.addDishToCourse('desserts','ice cream',3);
menu.addDishToCourse('desserts','chocolate',5);
menu.addDishToCourse('desserts','candy',8);

let meal = menu.generateRandomMeal();
console.log(meal);