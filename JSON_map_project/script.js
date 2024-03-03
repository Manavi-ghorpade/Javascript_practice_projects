//making map and tiles
const url ='https://api.wheretheiss.at/v1/satellites/25544'
const map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//making marker with custom icon
const myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

const marker= L.marker([0,0],{icon:myIcon}).addTo(map);
async function getISS(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.longitude);
    console.log(data.latitude);
    const{latitude, longitude} = data;
    marker.setLatLng([latitude, longitude]);
    document.getElementById("demo").innerHTML=data.longitude;
    document.getElementById("demo1").innerHTML=data.latitude;
}

getISS();