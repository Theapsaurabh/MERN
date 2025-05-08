## 📦 Flexbox in CSS – Complete Guide

**Flexbox (Flexible Box Layout)** is a one-dimensional layout method for arranging items in rows or columns, and distributing space efficiently—even when their size is dynamic or unknown.

---


### 🔁 Flexbox: Main Axis vs Cross Axis

Understanding the **Main Axis** and **Cross Axis** is key to mastering Flexbox layout behavior.

---

### 🧭 Definitions

| Term         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| **Main Axis**| The **primary direction** in which flex items are laid out                 |
| **Cross Axis**| The **perpendicular direction** to the main axis                          |

---

### 📐 Direction Based on `flex-direction`

| `flex-direction` Value | Main Axis Direction | Cross Axis Direction |
|------------------------|---------------------|-----------------------|
| `row` (default)        | Horizontal (left ➡️ right) | Vertical (top ⬇️ bottom) |
| `row-reverse`          | Horizontal (right ➡️ left) | Vertical (top ⬇️ bottom) |
| `column`               | Vertical (top ⬇️ bottom)   | Horizontal (left ➡️ right) |
| `column-reverse`       | Vertical (bottom ➡️ top)   | Horizontal (left ➡️ right) |

---

### 🧱 Axis in Action

- Properties that align on the **Main Axis**:
  - `justify-content`
- Properties that align on the **Cross Axis**:
  - `align-items`
  - `align-self`
  - `align-content` (for multiple lines)

---


Main Axis ➡️ ➡️ ➡️

| Item 1 | Item 2 | Item 3 |

⬆️ Cross Axis
⬇️


---

🔑 **Tip**:  
- Think of **Main Axis** as the “layout flow” of items  
- Think of **Cross Axis** as how items are **aligned perpendicular** to that flow



### 🎯 Visual Hint (for `flex-direction: row`)

### 🔹 Basic Syntax

```css
.flex-container {
  display: flex;
}

Once display: flex is applied to a container, all its direct children become flex items.


### 🔧 Flex Container Properties

| Property             | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `display: flex`      | Enables flexbox layout for the container                                    |
| `flex-direction`     | Defines the direction of items: `row`, `row-reverse`, `column`, `column-reverse` |
| `justify-content`    | Aligns items on the **main axis**: `flex-start`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-items`        | Aligns items on the **cross axis**: `stretch`, `center`, `flex-start`, `flex-end`, `baseline` |
| `align-content`      | Aligns multiple lines (rows or columns) on the cross axis (only works if items wrap) |
| `flex-wrap`          | Controls wrapping: `nowrap` (default), `wrap`, `wrap-reverse`               |
| `gap`                | Adds spacing between items: `row-gap`, `column-gap`, or shorthand `gap`     |


### 🔸 Flex Item Properties

| Property        | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `flex-grow`     | Specifies how much the item will grow relative to others (default is `0`)   |
| `flex-shrink`   | Specifies how much the item will shrink relative to others (default is `1`) |
| `flex-basis`    | Sets the initial size of the item before space is distributed               |
| `flex`          | Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` (`flex: 1 1 0%`) |
| `align-self`    | Overrides `align-items` for this specific item                              |
| `order`         | Defines the order of items in the container (default is `0`)                |


### 🔸 Flex Item Properties with Examples

#### 1. `flex-grow`
Controls how much a flex item will grow relative to others **when there is extra space**.

```css
.item {
  flex-grow: 1;
}

🧠 Example: If three items have flex-grow: 1, they will share space equally.
If one has flex-grow: 2, it gets twice as much space.

2. flex-shrink

Controls how much an item shrinks when there isn’t enough space.

.item {
  flex-shrink: 1;
}
🧠 Example: An item with flex-shrink: 0 won’t shrink even when there’s no space left.


3. flex-basis

Sets the initial size of an item before flex-grow or flex-shrink is applied.



.item {
  flex-basis: 200px;
}

🧠 Tip: Use auto, 0, or specific sizes (50%, 100px) depending on layout needs.


5. align-self

Overrides align-items for a specific item.
🧠 Values: auto, flex-start, flex-end, center, baseline, stretch


6. order

Changes the visual order of items (without affecting the HTML order).
.item {
  order: 2;
}


### 🔍 Summary Table: `justify-content` Spacing

| Value            | Space at Start/End | Space Between Items | Visual Hint                         |
|------------------|---------------------|----------------------|-------------------------------------|
| `space-between`  | ❌ None              | ✅ Equal              | `|Item|    |Item|    |Item|`        |
| `space-around`   | 🌓 Half               | ✅ Equal              | ` |Item|   |Item|   |Item| `        |
| `space-evenly`   | ✅ Equal              | ✅ Equal              | `|  Item  |  Item  |  Item  |`      |


### 📏 Summary Table: `align-items` (Single Line)

| Value         | Behavior on Cross Axis              | Common Use Case                            | Visual Hint                  |
|---------------|-------------------------------------|---------------------------------------------|------------------------------|
| `flex-start`  | Items align to the top (start)      | Align all items at the start                | ⬆️ All items start at top     |
| `flex-end`    | Items align to the bottom (end)     | Align all items at the end                  | ⬇️ All items stick to bottom  |
| `center`      | Items centered vertically           | Center content regardless of height         | ⬍ Centered vertically         |
| `baseline`    | Align text baselines of items       | Text alignment when items have text         | 📏 Based on text baseline     |
| `stretch`     | Items stretch to fill container     | Default; fills height if no fixed height    | ↕️ Items stretch in height    |