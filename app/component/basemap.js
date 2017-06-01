import mapboxgl from 'mapbox-gl';

const token = "pk.eyJ1IjoidGVjaGZlIiwiYSI6ImNqMHVrMmt1cDA0Y2czMm10dWlsb3UzcmEifQ.B28sl4Ds0bQKD706bgdzUg";

mapboxgl.accessToken = token;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center:[104,30],
    zoom:4
});