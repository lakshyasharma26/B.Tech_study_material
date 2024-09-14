function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("open"); // Toggle the class that triggers animations

    if (sidebar.style.width === "140px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "140px";
    }
}

