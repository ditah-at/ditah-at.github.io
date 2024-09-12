    fetch('infooverlay.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('infooverlay').innerHTML = data;
        });