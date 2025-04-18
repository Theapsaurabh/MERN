function fetchDataFromAPI(callback) {
    // You are giving control to this function
    setTimeout(() => {
        const data = { id: 1, name: "Pizza" };
        callback(data); // 🔁 It decides when your callback runs
    }, 2000);
}

function handleData(data) {
    console.log("Got data:", data);
}

fetchDataFromAPI(handleData); // 👈 You passed control