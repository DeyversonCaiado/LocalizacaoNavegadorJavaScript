// Verifica se o navegador suporta geolocalização
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Obtém as coordenadas
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Inicializa o mapa com Leaflet
            const map = L.map('map').setView([latitude, longitude], 13); // Zoom inicial

            // Adiciona o tile layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Adiciona um marcador na localização
            L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup('Você está aqui!')
                .openPopup();
        },
        function(error) {
            alert("Erro ao obter localização: " + error.message);
        }
    );

    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
            console.log("Precisão (em metros): " + position.coords.accuracy);
    
            if (position.coords.accuracy <= 20) {
                console.log("Provavelmente a localização veio de um GPS.");
            } else {
                console.log("Provavelmente a localização veio de Wi-Fi ou rede móvel.");
            }
        },
        function(error) {
            console.error("Erro ao obter a localização:", error.message);
        }
    );
    
} else {
    alert("Geolocalização não é suportada pelo seu navegador.");
}
