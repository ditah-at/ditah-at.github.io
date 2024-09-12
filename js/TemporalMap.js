var map = L.map('map', {
    center: [47.5162, 14.5501], // Centered on Austria
    zoom: 7,
    timeDimension: true,
    timeDimensionControl: true,
    timeDimensionControlOptions: {
        autoPlay: false,
        loopButton: true,
        timeSliderDragUpdate: true,
        playerOptions: {
            transitionTime: 1000,
            loop: true,
            startOver: true
        }
    }
});

var tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18
}).addTo(map);

var gamsicon = L.icon({
    iconUrl: 'images/GAMS-Logo.png', // Relative path to the custom icon
    iconSize: [48, 48], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
    className: 'custom-icon' // Custom class for styling
});

var InschriftenIcon = L.icon({
    iconUrl: 'images/KeltischeInschriften.jpg',
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-icon'
});

var DerlaIcon = L.icon({
    iconUrl: 'images/DerlaLogo.png',
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-icon'
});

var M3RIcon = L.icon({
    iconUrl: 'images/m3r-image.jpg',
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-icon'
});

var OenbIcon = L.icon({
    iconUrl: 'images/onblogo.png',
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-icon'
});

var LudwigFickerEditionIcon = L.icon({
    iconUrl: 'images/LudwigvFicker.jpg',
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-icon'
});

var PlusIcon = L.icon({
    iconUrl: 'images/pluslogo.png',
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-icon'
});


var projectData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [15.449470453464613, 47.07780812470205] // Universität Graz
            },
            "properties": {
                "time": "2020-02-01 0:00",
                "name": "Historisch-physikalische Sammlung",
                "icon": gamsicon,
                "url": "./hps.html"
            }
        },
                {
            "type": "Feature",
            "geometry": {
                "type": "Point", 
                "coordinates": [15.449470453464613, 47.07770812470205] // Universität Graz
            },
            "properties": {
                "time": "2021",
                "name": "Die keltischen Götternamen der germanischen Provinzen",
                "icon": InschriftenIcon,
                "url": "./inschriften.html"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [16.368419682344864, 48.198794021516605] // TU Wien
            },
            "properties": {
                "time": "2022-01-01 0:00",
                "name": "M3R-Multimodal Manuscript Representation",
                "icon": M3RIcon,
                "url": "./M3R.html"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [16.36760340088102, 48.20654330509171] // ÖNB Wien
            },
            "properties": {
                "time": "2023-05-01 0:00",
                "name": "Österreichische Nationalbibliothek - Annolyzer",
                "icon": OenbIcon,
                "url": "./annolyzer.html"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [15.452093878257065, 47.07344011420821] // Centrum für Jüdische Studien
            },
            "properties": {
                "time": "2022-06-01 0:00",
                "name": "Derla-Digitale Erinnerungslandschaft",
                "icon": DerlaIcon,
                "url": "./derla.html"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point", 
                "coordinates": [13.048050671135154, 47.7976412343851] // Universität Salzburg
            },
            "properties": {
                "time": "2022",
                "name": "Digital Humanities an der PLUS Salzburg",
                "icon": PlusIcon,
                "url": "./plus.html"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point", 
                "coordinates": [11.38382205532539, 47.26344882284828] // Universität Innsbruck
            },
            "properties": {
                "time": "2024-03-02 0:00",
                "name": "Ludwig von Ficker - Gesamtbriefwechsel Kommentierte Online-Edition",
                "icon": LudwigFickerEditionIcon,
                "url": "./LudwigvFicker.html"
            }
        }
    ]
};

var geojsonLayer = L.geoJson(projectData, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: feature.properties.icon });
    },
    onEachFeature: function (feature, layer) {
        var popupContent = '<a href="' + feature.properties.url + '" target="_blank">' + feature.properties.name + '</a>';
        layer.bindPopup(popupContent);
    }
});

var timeDimensionLayer = L.timeDimension.layer.geoJson(geojsonLayer, {
    updateTimeDimension: true,
    updateTimeDimensionMode: 'replace',
    addlastPoint: true
});

timeDimensionLayer.addTo(map);
