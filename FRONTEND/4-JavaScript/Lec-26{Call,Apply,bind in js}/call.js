function Category(category){
    this.category=category;
}
function Food(name,price,category){
    Category(category);
    this.name=name;
    this.price=price;
}

let newFood= new Food("pizza", 123, "fast-food")
console.log(newFood);