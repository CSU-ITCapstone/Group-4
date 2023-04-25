/*!
 * Gets the current theme from local storage and sets the mode of the page to the theme
 * On first load, the theme is set to light by default
 * 
 */

// Get current theme from local storage
const theme = localStorage.getItem('theme');

// If the current theme in local storage is null, set it to light by default and set theme to light
// Else, set the theme to the current theme in local storage (dark or light)
// If the current theme in local storage is not dark or light, set it to light by default and set theme to light
if (!theme || theme === 'light') {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('mode', 'light')
} else if (theme === 'dark') {
    document.documentElement.setAttribute('mode', 'dark')   
} else {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('mode', 'light')
}

/**
 * Toggle the mode of the page between light and dark mode
 * 
 * @returns {void}
 */
function toggleMode() {
    // Get the current theme from local storage
    const currentTheme = localStorage.getItem('theme');

    // If the current theme is light, set it to dark and set theme to dark
    if (currentTheme === 'light') {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('mode', 'dark')
    } else {
        // If the current theme is dark, set it to light and set theme to light
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('mode', 'light')
    }
};