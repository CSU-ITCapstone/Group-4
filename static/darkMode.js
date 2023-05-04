// When the script is loaded, set the theme to the current theme in local storage
var theme = localStorage.getItem('theme');
if (!theme) { 
    setModeToTheme('light');
} else {        
    setModeToTheme(theme);
};


/**
 * Toggle the mode of the page between light and dark mode
 * @param {string} currentTheme The current theme of the page
 * @returns {void}
 */
function toggleMode() {

    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        setModeToTheme('dark');
    } else if (currentTheme === 'dark') {
        setModeToTheme('light');
    } else {                            
        setModeToTheme('light');
    };
};


/**
 * Set the mode of the page to the theme
 * @param {string} currentTheme The current theme of the page
 * @returns {void}
 */
function setModeToTheme(currentTheme) {
    localStorage.setItem('theme', currentTheme)

    let html = document.querySelector('html');
    if (currentTheme === 'dark') {
        html.setAttribute('theme', 'dark-mode');
    } else {
        html.removeAttribute('theme');
    }
}