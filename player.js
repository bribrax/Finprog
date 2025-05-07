// Tableau des joueurs avec leurs scores
const players = [
    { name: "ShadowFox", score: 553 },
    { name: "LunaStar", score: 534 },
    { name: "IronWolf", score: 527 },
    { name: "CrystalDusk", score: 519 },
    { name: "SkyBlazer", score: 518 },
    { name: "PixelQueen", score: 502 },
    { name: "DarkPhoenix", score: 490 },
    { name: "TurboGamer", score: 485 },
    { name: "SilentStorm", score: 479 },
    { name: "SilverArrow", score: 468 },
    { name: "QuantumHawk", score: 462 },
    { name: "NeoDragon", score: 455 },
    { name: "BlazeRider", score: 450 },
    { name: "CosmicFury", score: 440 },
    { name: "ShadowHunter", score: 433 },
    { name: "FireFrost", score: 427 },
    { name: "ZetaStrike", score: 422 },
    { name: "PixelNinja", score: 415 },
    { name: "SolarEclipse", score: 410 },
    { name: "ThunderPulse", score: 405 },
    { name: "SteelVortex", score: 400 },
    { name: "MysticFalcon", score: 392 },
    { name: "NovaBlitz", score: 385 },
    { name: "RavenClaw", score: 379 },
    { name: "AlphaBlade", score: 370 },
    { name: "FrostBite", score: 360 },
    { name: "VenomShadow", score: 355 },
    { name: "TurboLynx", score: 350 },
    { name: "GhostRider", score: 345 }
];


// Fonction pour générer le tableau de classement
function generateRankingTable() {
    const rankingTableBody = document.querySelector("#ranking-table tbody");
    rankingTableBody.innerHTML = ""; // Effacer le contenu précédent

    players.sort((a, b) => b.score - a.score); // Trier les joueurs par score décroissant

    players.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        rankingTableBody.appendChild(row);
    });
}

// Appeler la fonction pour générer le tableau au chargement de la page
generateRankingTable();