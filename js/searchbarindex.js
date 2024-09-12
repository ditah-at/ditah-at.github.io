let documents = [];

// Fetch the search index JSON file
fetch('searchindex.json')
    .then(response => response.json())
    .then(data => {
        documents = data;
        initializeLunr(); // Initialize Lunr with the fetched documents
    })
    .catch(error => console.error('Error fetching the JSON:', error));

let idx;

// Function to normalize strings by removing diacritical marks and converting to lowercase
function normalizeString(str) {
  return str.normalize('NFD');
}

// Initialize Lunr.js index
function initializeLunr() {
    idx = lunr(function () {
        this.ref('id'); // Reference field for documents
        this.field('title'); // Field to index document titles
        this.field('content'); // Field to index document content

        documents.forEach(function (doc) {
            // Normalize the title and content before adding to Lunr index
            doc.title = normalizeString(doc.title);
            doc.content = normalizeString(doc.content);
            this.add(doc); // Add document to Lunr index
        }, this);
    });
}

// Function to perform a search
function search() {
    const query = document.getElementById('searchBox').value.trim(); // Get the search query from input box
    
    if (query === "") {
        // Do not show modal if the search query is empty
        return;
    }

    // Normalize the search query
    const normalizedQuery = normalizeString(query);
    const results = idx.search(normalizedQuery); // Perform the search with the normalized query
    displayResults(results); // Display the search results
}

// Function to display search results
function displayResults(results) {
    const resultsDiv = document.getElementById('results'); // Get the results container element
    resultsDiv.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>Keine Ergebnisse gefunden</p>'; // Display message if no results found
    } else {
        results.forEach(result => {
            const item = documents.find(doc => doc.id == result.ref); // Find the document by id
            const truncatedContent = item.content.length > 200 ? item.content.substring(0, 200) + '...' : item.content; // Truncate content to 200 characters
            const div = document.createElement('div'); // Create a div for each result
            div.classList.add('result-item', 'mb-3'); // Add CSS classes to the div
            div.innerHTML = `<h4><a href="${item.url}" target="_blank">${item.title}</a></h4><p><a href="${item.url}" target="_blank">Zum Projekt</a></p><p>${truncatedContent}</p>`; // Set the inner HTML of the div
            resultsDiv.appendChild(div); // Append the div to the results container
        });
    }

    $('#resultsModal').modal('show'); // Show the results modal
}


// Add event listener for the Enter key
document.getElementById('searchBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search(); // Perform search on Enter key press
    }
});