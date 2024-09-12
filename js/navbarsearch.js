fetch('navbarsearch.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbarsearch').innerHTML = data;

        // Now attach the event listener after the content is loaded
        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
            searchBox.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    search();
                }
            });
        } else {
            console.error('SearchBox element not found after loading navbarsearch.html');
        }
    })
    .catch(error => console.error('Error loading navbarsearch.html:', error));
