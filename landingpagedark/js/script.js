const changeThemeBtn = document.querySelector("#change-theme");

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Load Light or Dark Mode
function loadTheme() {
    const DarkMode = localStorage.getItem("dark")

    if(DarkMode) {
        toggleDarkMode();
    }
}

loadTheme()

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode()

    // Save or Remove Dark Mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    } 
})