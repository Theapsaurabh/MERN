// let obj1= {a : 5};
// console.log(obj1)

// let obj2= Object.create(obj1);
// console.log(obj2.a)



// let obj1 = { a: 5};


// let c= {};

// let d= Object.create(obj1, {name: {value:"Saurabh Pandey"}});
// console.log(d)


function Category(category){
    this.category= category;
}

function Food(name,price,category){
    this.name=name;
    this.price=price;
    Category.call(this,category);
}