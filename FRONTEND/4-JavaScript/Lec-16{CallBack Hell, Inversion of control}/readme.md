# ⚙️ Callback Hell & Inversion of Control (IoC) in JavaScript

---
## 📚 Table of Contents

- [What is a Callback?](#-what-is-a-callback)
- [What is Callback Hell?](#-what-is-callback-hell)
- [What is Inversion of Control (IoC)?](#-what-is-inversion-of-control-ioc)
- [Real-World Code Example](#-real-world-code-example)
- [Problems with Callback Hell & IoC](#-problems-with-callback-hell--ioc)
- [Solutions](#-solutions)
    - [✅ Named Functions](#-named-functions)
    - [✅ Promises](#-promises)
    - [✅ Async/Await](#-asyncawait)
- [Conclusion](#-conclusion)
- [Project Structure](#-project-structure)


---

## 🔁 What is a Callback?

A **callback** is a function that is passed as an argument to another function and executed later, usually after some asynchronous operation.

```js
function greet(name, callback) {
    console.log("Hi", name);
    callback();
}

greet("Alice", function() {
    console.log("Callback called!");
});



🔥 What is Callback Hell?

Callback Hell happens when multiple asynchronous functions are nested inside each other using callbacks. It makes the code:
	•	Hard to read 😵
	•	Hard to maintain 🛠️
	•	Error-prone 🐞

😨 Example:

searchFood("pizza", function(item, data) {
    orderFood(item, function(orderId) {
        payment(item, orderId, function(status) {
            console.log("Payment Status:", status);
        });
    });
});

This kind of deeply nested code structure is often called the “Pyramid of Doom”.

🧨 What is Inversion of Control (IoC)?

Inversion of Control means giving the control of part of your code to another function (like a callback). You tell it what to do — but you don’t decide when or how it’s done.

function fetchData(callback) {
    setTimeout(() => {
        const data = "some data";
        callback(data); // You don't control this call
    }, 2000);
}


😵 Why is it dangerous?
	•	Callback might be called twice
	•	Might never be called
	•	Difficult to manage errors
	•	You lose control over execution


    🍕 Real-World Code Example

    function searchFood(item, cb1) {
    setTimeout(() => {
        let data = `list of ${item}`;
        cb1(item, data);
    }, 3000);
}

function orderFood(item, cb2) {
    console.log("Select", item);
    setTimeout(() => {
        let id = Math.floor(Math.random() * 999999);
        console.log("Order created with ID", id);
        cb2(id);
    }, 4000);
}

function payment(item, id, cb3) {
    console.log(`Payment starting for ${item} with ID ${id}`);
    setTimeout(() => {
        cb3(true);
    }, 6000);
}

function afterSearch(item, data) {
    console.log(data);
    orderFood(item, afterOrder);
}

function afterOrder(orderId) {
    payment("pizza", orderId, afterPayment);
}

function afterPayment(status) {
    console.log("Payment successful:", status);
}

searchFood("pizza", afterSearch);


## ⚠️ Problems with Callback Hell & Inversion of Control

When you mix multiple callbacks and lose control over execution, you face these issues:

- 💢 **Hard to debug** – Tracing bugs through nested callbacks is painful
- 🧱 **Poor readability** – Code becomes deeply nested ("Pyramid of Doom")
- 🚫 **Logic isn't reusable** – Callback-specific logic can't be reused easily
- 🤯 **Messy error handling** – Try/catch doesn’t work well with nested async callbacks
- 👎 **You rely too much on external control** – You lose control over *when*, *how many times*, or even *if* your callback will run


## 📌 Conclusion: Callback Hell & Inversion of Control Summary

Here's a quick wrap-up of what we learned:

| Concept              | Description                                                       |
|----------------------|-------------------------------------------------------------------|
| Callback             | A function passed to another function to be executed later        |
| Callback Hell        | Deep nesting of callbacks that makes code unreadable & messy      |
| Inversion of Control | Giving away control of code execution to an external function     |
| Problems             | Debugging is hard, structure is messy, logic is tightly coupled   |
| Best Practices       | Use Named Functions, Promises, or Async/Await to write clean code |

✨ Use modern async patterns to avoid callback hell and take back control of your code!
```
