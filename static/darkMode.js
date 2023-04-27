// toggleMode() toggles the mode of the page between light and dark mode
// setModeToTheme(currentTheme) sets the mode of the page to the theme

// When the script is loaded, set the theme to the current theme in local storage
const theme = localStorage.getItem('theme');
if (!theme) {   // If the current theme in local storage is null, set it to light by default
    setModeToTheme('light');
} else {        // Else, set the theme to the current theme in local storage (dark or light)
    setModeToTheme(theme);
};


/**
 * Toggle the mode of the page between light and dark mode
 * @param {string} currentTheme The current theme of the page
 * @returns {void}
 */
function toggleMode() {
    // Get the current theme in local storage
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {     // If the current theme is light, set it to dark and set theme to dark
        setModeToTheme('dark');
    } else if (currentTheme === 'dark') {// Else, set it to light and set theme to light
        setModeToTheme('light');
    } else {                            // If the current theme in local storage is not dark or light, default to light
        setModeToTheme('light');
    };
};


/**
 * Set the mode of the page to the theme
 * @param {string} currentTheme The current theme of the page
 * @returns {void}
 */
function setModeToTheme(currentTheme) {
    // Set the current theme in local storage
    localStorage.setItem('theme', currentTheme)

    // add tag to <HTML> to change theme, theme='dark-mode'
    const html = document.querySelector('html');
    if (currentTheme === 'dark') {
        html.setAttribute('theme', 'dark-mode');
    } else {
        html.removeAttribute('theme');
    }
}