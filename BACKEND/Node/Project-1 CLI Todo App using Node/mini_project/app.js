import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n 1: Add a Task");
    console.log(" 2: View Tasks");
    console.log(" 3: Exit");
    rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter the task: ", (task) => {
            todos.push(task);
            console.log("✅ Task Added:", task);
            showMenu(); // ✅ Show menu again after adding
        });
    } else if (option === "2") {
        console.log("\n📋 Your Todo List:");
        if (todos.length === 0) {
            console.log("No tasks added yet.");
        } else {
            todos.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        showMenu(); // ✅ Show menu again after viewing
    } else if (option === "3") {
        console.log("👋 Goodbye!");
        rl.close();
    } else {
        console.log("❌ Invalid option. Please enter a valid one.");
        showMenu();
    }
};

showMenu();
