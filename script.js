function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("open"); // Toggle the class that triggers animations

    if (sidebar.style.width === "140px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "140px";
    }
}


function clearHighlights() {
    // Remove previous highlights
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(function(span) {
        // Replace highlight spans with their text content
        span.replaceWith(span.textContent);
    });
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const query = document.getElementById("searchInput").value.trim().toLowerCase(); // Get the search query
    if (query === "") {
        alert("Please enter a search query.");
        return;
    }

    clearHighlights(); // Clear previous highlights

    const elements = document.querySelectorAll('.content *'); // Select all elements inside the content

    // Highlight new search terms
    elements.forEach(function(element) {
        if (element.children.length === 0) { // Only modify elements that do not have children (text-only)
            const text = element.innerHTML;
            const regex = new RegExp(`(${query})`, 'gi'); // Case-insensitive match
            if (regex.test(text)) {
                element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
            }
        }
    });
});

// Add some basic CSS for the highlight
const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

