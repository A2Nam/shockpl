// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        alert("Hello from JS!");
    });
});

// "Fake routing" by switching content
function showPage(page) {
    const container = document.querySelector(".container");

    if (page === "home") {
        container.innerHTML = `
            <h1>Home Page</h1>
            <p>Welcome to ShockPL!</p>
            <button onclick="showPage('about')">Go to About</button>
        `;
    } else if (page === "about") {
        container.innerHTML = `
            <h1>About Page</h1>
            <p>This is a demo of JS "routing".</p>
            <button onclick="showPage('home')">Go to Home</button>
        `;
    }
}
