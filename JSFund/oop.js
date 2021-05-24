// Food
class Dish {
    constructor(name, type, ingredients, calories) {
        this.name = name;
        this.type = type;
        this.ingredients = [...ingredients];
        this.calories = calories;
    }
    listIngredients(){

        for(let i=0; i< this.ingredients.length; i++){
            console.log(this.ingredients[i]);
        }
    }
    displayCalories(){
        console.log(this.calories)
    }
}

class Dessert extends Dish {
    constructor(name, type, ingredients, calories, isVegan){
        super(name, type, ingredients, calories)
        this.isVegan = isVegan;
    }
    listIngredients(){
        super.listIngredients();
        console.log("This is a Vegan dish: " + this.isVegan);
    }
}
var soup = new Dish("Cream of Mushroom", "Side Dish", ["Cream", "Mushrooms", "salt", "pepper", "butter", "flour"], 300)
var iceCream = new Dessert("Vanilla Bean Ice Cream", "Dessert", ["Cream", "Sugar", "Vanilla", "Eggs", "Ice", "Salt"], 500, false)
soup.listIngredients()
soup.displayCalories()
iceCream.listIngredients()
iceCream.displayCalories()
