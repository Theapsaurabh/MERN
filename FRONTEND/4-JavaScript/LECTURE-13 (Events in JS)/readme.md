# 📌 JavaScript Events Documentation

JavaScript allows you to make your web pages interactive by responding to user actions like clicks, keypresses, form submissions, and more. These user interactions are known as **events**.

---

## 🚀 What is an Event?

An **event** is an action or occurrence that happens in the browser — often triggered by the user or the browser itself. Common events include:

- `click`
- `mouseover`
- `keydown`
- `submit`
- `load`

JavaScript provides ways to detect and respond to these events.

---

## 🧠 Event Handlers

An **event handler** is a function that is executed when a specific event occurs on a specific element.

### ✅ Syntax:

```javascript
element.event = functionName;

## Example ->
- <button id="btn">Click Me</button>

<script>
  function showMessage() {
    alert("Button clicked!");
  }

  document.getElementById("btn").onclick = showMessage;
</script>

🔸 Notes:
	•	Only one handler can be assigned to a specific event type.
	•	Assigning a new handler will overwrite the previous one.

⸻


🔊 Event Listeners

An event listener is a more modern and flexible way to handle events. It allows you to add multiple listeners for the same event type on the same element.

✅ Syntax:
element.addEventListener("event", functionName);

✅ Example:

<button id="btn">Click Me</button>

<script>
  function greet() {
    alert("Hello!");
  }

  document.getElementById("btn").addEventListener("click", greet);
</script>

🔸 Features:
	•	Multiple listeners can be added.
	•	Listeners can be removed using removeEventListener.
	•	Supports event phases: capturing and bubbling.

⸻










🆚 Difference Between Event Handler and Event Listener

## 🔄 Difference Between Event Handler and Event Listener

| Feature                          | Event Handler                          | Event Listener (`addEventListener`)        |

| **Syntax**                       | `element.onclick = function`            | `element.addEventListener('click', fn)`    |
| **Multiple Functions Allowed**   | ❌ Not allowed (last one overrides)      | ✅ Allowed (multiple listeners work)        |
| **Can Be Removed Easily**        | ❌ Not easily                            | ✅ Yes, using `removeEventListener()`       |
| **Supports Event Phases**        | ❌ No (only bubbling)                    | ✅ Yes (bubbling and capturing)             |
| **Modern Usage**                 | ❌ Outdated                              | ✅ Recommended and widely used              |
| **Code Organization**            | ❌ Inline or attached function           | ✅ Clean and modular                        |
| **Overriding Issue**             | ✅ Gets overridden by new assignment     | ❌ Does not override other listeners        |


## 🌟 Additional Features of JavaScript Events

### 1. 📌 Event Object (`event`)
Every event handler receives an **event object** which contains useful information about the event.

javascript
document.getElementById('btn').addEventListener('click', function(event) {
  console.log(event.type); // "click"
  console.log(event.target); // element that was clicked
});
 
### 2. 🚀 Event Delegation

Instead of adding listeners to multiple child elements, you can add one listener to a common parent. Useful for dynamic elements.

- document.getElementById('list').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    alert('List item clicked: ' + e.target.textContent);
  }
});

3. 🧭 Event Bubbling and Capturing

Events propagate in two phases:
	•	Capturing phase: from the root to the target.
	•	Bubbling phase: from the target back to the root.

element.addEventListener('click', handler, true); // Capturing
element.addEventListener('click', handler, false); // Bubbling (default)

### 3. 🧭 Event Bubbling and Capturing

Events propagate in two phases:
	•	Capturing phase: from the root to the target.
	•	Bubbling phase: from the target back to the root.

element.addEventListener('click', handler, true); // Capturing
element.addEventListener('click', handler, false); // Bubbling (default)

4. ⛔ event.preventDefault()

Prevents the default behavior of an element (like form submission or link navigation).

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Stops form from submitting
  alert("Form blocked!");
});

5. ❌ event.stopPropagation()

Stops the event from bubbling up (or down) the DOM tree.

document.getElementById("child").addEventListener("click", function(e) {
  e.stopPropagation(); // Stops the event from reaching parent
});


6. 🔄 One-Time Events with { once: true }

Automatically removes the listener after it’s called once.

element.addEventListener('click', function() {
  console.log('Clicked once!');
}, { once: true });


-----------------------------------------------------------------

🎯 What is the Event Object in JavaScript?

The Event Object is a special object that is automatically passed to an event handler whenever an event occurs. It contains detailed information about the event — such as what type of event it was, which element triggered it, key pressed, mouse position, etc.

⸻
## 📦 Common Properties of the Event Object

| Property             | Description                                               |
|----------------------|-----------------------------------------------------------|
| `type`               | The type of event (e.g., `'click'`, `'keydown'`)          |
| `target`             | The element that triggered the event                      |
| `currentTarget`      | The element to which the event handler is attached        |
| `timeStamp`          | The time (in milliseconds) when the event was created     |
| `bubbles`            | `true` if the event bubbles up through the DOM            |
| `cancelable`         | `true` if the event’s default action can be prevented     |
| `defaultPrevented`   | `true` if `preventDefault()` was called on the event      |
| `isTrusted`          | `true` if the event was generated by a user action        |
| `eventPhase`         | The phase of event propagation (capturing, at target, bubbling) |


## ✨ Methods of the Event Object

| Method                      | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `preventDefault()`          | Cancels the default behavior of the event (e.g., prevents form submission)  |
| `stopPropagation()`         | Stops the event from bubbling up to parent elements                         |
| `stopImmediatePropagation()`| Stops the event and prevents any other listeners on the same element from running |
| `composedPath()`            | Returns the event’s path through the DOM                                    |
| `initEvent()`               | Initializes a custom event (mostly used in older code)                      |

---

## 🧠 Why is the Event Object Useful?

- 🧩 Detect **which key or mouse button** was pressed
- 🎯 Access the **element that triggered** the event
- 🛑 Cancel the **default behavior** of elements (like form submission or link navigation)
- ⛔ Stop events from bubbling or being passed to parent elements
- 🕵️ Get the **position of the mouse** or **details of a keypress**
- 📈 Control event flow and make decisions based on event data
- 🧼 Improve **performance and UX** by handling only required behaviors dynamically