/*
Difference between Window, Document and Screen in JavaScript


Window object and Document object often look alike and confusing ??

A clear understanding of Browser Object Model (BOM) and Document Object Model(DOM) resolves the problem.

Browser Object Model (BOM)
The Browser Object Model contains objects that represent the current browser window or tab. The topmost object in the BOM is the window object representing the window or tab or an iframe sometimes. Window object has properties like browser history, location and the device’s screen etc. In case of multi tab browser, a window object represents a single tab, but some of its properties like innerHeight, innerWidth and methods like resizeTo() will affect the whole browser window.

Document Object Model
When a web page is loaded, the browser creates a Document Object Model of the page. The document object represents the whole html document as a tree of Objects(HTML, HEAD, BODY, and other HTML tags). It is the root element that represents the html document.

*/