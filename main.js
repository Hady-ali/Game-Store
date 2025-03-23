const games = [
    { name: "Cyber Warrior", price: "$29.99", image: "./image/OIP.jpg", category: "Action" },
    { name: "Space Explorer", price: "$19.99", image: "./image/2.jpg", category: "Adventure" },
    { name: "Zombie Attack", price: "$24.99", image: "./image/3.jpg", category: "Action" },
    { name: "Football Stars", price: "$14.99", image: "./image/4.jpg", category: "Sports" }
];

function displayGames(filter = "", category = "All") {
    let gameList = document.getElementById("game-list");
    gameList.innerHTML = "";
    games.filter(game => game.name.toLowerCase().includes(filter.toLowerCase()) && (category === "All" || game.category === category))
        .forEach(game => {
            gameList.innerHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="${game.image}" class="card-img-top" alt="${game.name}">
                        <div class="card-body">
                            <h5 class="card-title">${game.name}</h5>
                            <p class="card-text">Price: ${game.price}</p>
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            `;
        });
}

document.getElementById("search").addEventListener("input", (e) => {
    displayGames(e.target.value);
});

function filterCategory(category) {
    displayGames(document.getElementById("search").value, category);
}

document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("bg-light");
    document.body.classList.toggle("text-dark");
    let icon = document.getElementById("toggleMode");
    icon.textContent = document.body.classList.contains("bg-light") ? "☀️" : "🌙";
});

displayGames();
