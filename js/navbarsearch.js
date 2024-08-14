    fetch('navbarsearch.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbarsearch').innerHTML = data;
        });