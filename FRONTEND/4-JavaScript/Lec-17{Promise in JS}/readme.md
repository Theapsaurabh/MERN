
# 📘 JavaScript Promises – Complete Guide

A **Promise** in JavaScript is a powerful object used to handle asynchronous operations more effectively, avoiding "callback hell" and improving code readability.

---

## 🧠 What is a Promise?

A **Promise** is an object that represents the eventual **completion** (resolve) or **failure** (reject) of an asynchronous operation.

---

## 📦 Promise States

1. **Pending** – Initial state, neither fulfilled nor rejected.
2. **Fulfilled** – Operation completed successfully.
3. **Rejected** – Operation failed.

---

## 🛠️ Basic Syntax

```js
const myPromise = new Promise((resolve, reject) => {
  // async operation
  if (/* success */) {
    resolve("Success value");
  } else {
    reject("Error value");
  }
});
```

---

## ✅ Handling a Promise

```js
myPromise
  .then(result => {
    console.log("Resolved:", result);
  })
  .catch(error => {
    console.error("Rejected:", error);
  });
```

---

## ⏳ Simulating Asynchronous Behavior

```js
const wait = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done waiting!");
  }, 2000);
});

wait.then(msg => console.log(msg));
```

---

## 🔁 Chaining Promises

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then(result => {
    console.log(result); // 1
    return result * 2;
  })
  .then(result => {
    console.log(result); // 2
    return result * 2;
  })
  .then(result => {
    console.log(result); // 4
  });
```

---

## 🚫 Error Handling

```js
new Promise((resolve, reject) => {
  reject("Something went wrong");
})
  .then(res => console.log(res))  // Skipped
  .catch(err => console.error("Error:", err));  // Catches the error
```

---

## 🧱 `.finally()`

The `.finally()` method runs regardless of whether the promise was fulfilled or rejected.

```js
new Promise((resolve, reject) => {
  resolve("All good");
})
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Cleanup or logging done"));
```

---

## 🧰 Built-in Promise Utility Methods

### 🔹 `Promise.resolve(value)`

Creates a promise that resolves with the given value.

```js
Promise.resolve("Resolved immediately").then(console.log);
```

### 🔹 `Promise.reject(error)`

Creates a promise that rejects with the given error.

```js
Promise.reject("Rejected immediately").catch(console.error);
```

### 🔹 `Promise.all([p1, p2, p3])`

Waits for **all** promises to resolve, or rejects if **any** fails.

```js
Promise.all([
  Promise.resolve("One"),
  Promise.resolve("Two")
]).then(console.log); // ["One", "Two"]
```

### 🔹 `Promise.race([p1, p2, p3])`

Resolves/rejects with the **first settled** promise (fastest one wins).

```js
Promise.race([
  new Promise(res => setTimeout(() => res("First"), 500)),
  new Promise(res => setTimeout(() => res("Second"), 1000))
]).then(console.log); // "First"
```

### 🔹 `Promise.allSettled([p1, p2, p3])`
🔍 What does Promise.allSettled do?
Promise.allSettled takes an array of promises and returns a new promise that resolves when all the input promises have settled (either fulfilled or rejected). Unlike Promise.all, it never rejects — it always resolves with an array of results.

Waits for **all** to settle (resolve or reject), and returns status+value for each.

```js
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
]).then(console.log);
```

### 🔹 `Promise.any([p1, p2, p3])`

Resolves with the **first fulfilled** promise. Ignores rejections. Fails only if **all** promises reject.

```js
Promise.any([
  Promise.reject("Oops"),
  Promise.resolve("Finally worked")
]).then(console.log); // "Finally worked"
```

---

## 🔄 Promisify a Callback Function

Turn a callback-style function into a Promise-based one:

```js
const fs = require("fs");

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFile("example.txt")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 🧪 Custom Utility: Delay Function

```js
const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

delay(1000).then(() => console.log("1 second passed"));
```

---

## 📌 Key Takeaways

- Promises handle asynchronous behavior.
- Use `.then()`, `.catch()`, and `.finally()` to manage flow.
- Use built-in methods like `Promise.all()` and `Promise.race()` for advanced control.
- Promises are the foundation for modern async patterns.

---

> 🚀 Mastering Promises will make you a better JavaScript developer — especially when building modern apps with APIs, timers, and async logic.
