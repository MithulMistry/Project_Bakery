document.addEventListener("DOMContentLoaded", () => {
    // Create the head elements
    const head = document.getElementsByTagName("head")[0];

    // Meta tags
    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");

    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

    // Title
    const title = document.createElement("title");
    title.textContent = "MATA SAGAR Bakery";

    // Link to CSS
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "bakery.css");

    // Append all elements to the head
    head.appendChild(metaCharset);
    head.appendChild(metaViewport);
    head.appendChild(title);
    head.appendChild(link);
});