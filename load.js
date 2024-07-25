/**
 * Usage in HTML:
 * <head>
 * ...
 * <meta name="style" content="/static/css/main.css">
 * <meta name="style" content="/static/css/first.css">
 * <meta name="style" content="/static/css/another.css">
 * <meta name="script" content="/static/js/main.js">
 * <meta name="script" content="/static/js/first.js">
 * <meta name="script" content="/static/js/another.js">
 * <script defer src="/path-to-js/load.js"></script> <!-- Replace 'path-to-js' with the actual path to your JS folder -->
 * </head>
 */

let eventStatus = false;

// Function to get content from all meta tags with the specified name
function getMetaContents(name) {
    return [...document.querySelectorAll(`meta[name="${name}"]`)]
        .map(meta => meta.content);
}

// Get styles and scripts from the respective meta tags
const lazy_styles = getMetaContents('style');
const lazy_scripts = getMetaContents('script');

// Add event listeners for user interactions
['mouseover', 'click', 'scroll'].forEach(event =>
    window.addEventListener(event, () => {
        if (!eventStatus) {
            // Load styles
            lazy_styles.forEach(href => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            });
            // Load scripts
            lazy_scripts.forEach(src => {
                const script = document.createElement('script');
                script.src = src;
                document.body.appendChild(script);
            });
            eventStatus = true; // Prevent further execution
        }
    }, { once: true }) // Ensure the handler runs only once
);
