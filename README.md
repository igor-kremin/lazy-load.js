# Lazy Load Script

This script dynamically loads additional styles and scripts upon the user's first interaction with the page (mouseover, click, or scroll) to optimize initial load time.

## Description

The `load.js` script improves the performance of your web page by deferring the loading of non-critical CSS and JavaScript files until the user interacts with the page. This ensures that the initial load time is faster, providing a better user experience.

## Usage

1. **Include the script in your HTML**:
    Add the `load.js` file to your project and include it in the `<head>` section of your HTML with the `defer` attribute.

    ```html
    <head>
        ...
        <meta name="style" content="/static/css/main.css">
        <meta name="style" content="/static/css/first.css">
        <meta name="style" content="/static/css/another.css">
        <meta name="script" content="/static/js/main.js">
        <meta name="script" content="/static/js/first.js">
        <meta name="script" content="/static/js/another.js">
        <script defer src="/path-to-js/load.js"></script> <!-- Replace 'path-to-js' with the actual path to your JS folder -->
    </head>
    ```

2. **Add meta tags for styles and scripts**:
    Use `<meta>` tags to specify the styles and scripts that should be loaded lazily. Each file should have its own `<meta>` tag.

    ```html
    <meta name="style" content="/static/css/main.css">
    <meta name="style" content="/static/css/first.css">
    <meta name="style" content="/static/css/another.css">
    <meta name="script" content="/static/js/main.js">
    <meta name="script" content="/static/js/first.js">
    <meta name="script" content="/static/js/another.js">
    ```

3. **Script file (`load.js`)**:
    Add the `load.js` script to your project:

## Example

Here is an example of a simple HTML document using the lazy load script:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lazy Load Example</title>
    <meta name="style" content="/static/css/main.css">
    <meta name="style" content="/static/css/first.css">
    <meta name="style" content="/static/css/another.css">
    <meta name="script" content="/static/js/main.js">
    <meta name="script" content="/static/js/first.js">
    <meta name="script" content="/static/js/another.js">
    <script defer src="/path-to-js/load.js"></script> <!-- Replace 'path-to-js' with the actual path to your JS folder -->
</head>
<body>
    <h1>Lazy Load Example</h1>
    <button onclick="getLocation()">Get Location</button>
    <p id="location"></p>
</body>
</html>
