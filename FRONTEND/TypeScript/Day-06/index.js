// TODO: JAVASCRIPT Function : Invocation Decleration and & return type
function greet(name, id) {
    console.log("welcome, ".concat(name, " and your id id ").concat(id));
}
greet("Saurabh", 1);
// Arrow Function ->
var greeta = function (name, id) {
    console.log("welcome, ".concat(name, " and your id id ").concat(id));
};
greeta("Saurabh", 1);
// Function return type
function greetR(name, id) {
    return ("welcome, ".concat(name, " and your id id ").concat(id));
}
console.log(greetR("Saurabh", 1));
