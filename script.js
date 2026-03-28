const firebaseConfig = {
    apiKey: "AIzaSyCnRxlxUEezki8byWyLa9FljWzskEJNfDk",
    authDomain: "skyline-logistics.firebaseapp.com",
    databaseURL: "https://skyline-logistics-default-rtdb.firebaseio.com",
    projectId: "skyline-logistics"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let map, marker;

// NAVIGATION
window.showPage = function(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) {
        target.classList.add('active');
        window.scrollTo(0,0);
    }
}

// TRACKING LOGIC
window.handleVerify = function() {
    const idInput = document.getElementById('manifestID');
    const id = idInput.value.trim();
    if(!id) return alert("Enter ID");

    database.ref('shipments/' + id).on('value', (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            window.showPage('dashboard');
            
            // Update Text
            document.getElementById('resLoc').innerText = data.location;
            document.getElementById('resStat').innerText = data.status;
            document.getElementById('resTime').innerText = data.updatedAt;

            // Update Map
            const pos = [data.lat, data.lng];
            if (!map) {
                map = L.map('map').setView(pos, 10);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                marker = L.marker(pos).addTo(map);
                // Force map resize fix
                setTimeout(() => { map.invalidateSize(); }, 500);
            } else {
                marker.setLatLng(pos);
                map.panTo(pos);
            }
        } else {
            alert("ID not recognized.");
        }
    });
}

// TICKER
window.onload = function() {
    const track = document.getElementById('tickerTrack');
    if(!track) return;
    const hubs = [{n:"LONDON", f:"🇬🇧"}, {n:"DUBAI", f:"🇦🇪"}, {n:"NY", f:"🇺🇸"}, {n:"SINGAPORE", f:"🇸🇬"}];
    const fullList = Array(20).fill(hubs).flat();
    fullList.forEach(h => {
        const div = document.createElement('div');
        div.className = 'ticker-item';
        div.innerHTML = `<span>${h.f}</span><b>${h.n} HUB / SECURE</b>`;
        track.appendChild(div);
    });
}
