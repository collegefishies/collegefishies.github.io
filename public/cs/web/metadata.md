### HTML `<meta>` Tags Cheat Sheet

HTML `<meta>` tags are crucial for providing information to browsers and search engines. They play a significant role in improving your web application's visibility and functionality. Here's a handy cheat sheet for using `<meta>` tags effectively:

#### Structure of a `<meta>` tag

- **Name:** The property's name, which can be any descriptive value.
- **Content:** Specifies the property's value.
- **Charset:** Specifies the character encoding used for the page.
- **HTTP-equiv:** Simulates HTTP response headers (rarely used).

#### Basic `<meta>` Tags (For SEO)

- `<meta name="description"/>`: Provides a brief description of the webpage.
- `<meta name="title"/>`: Specifies the title of the webpage.
- `<meta name="author" content="name"/>`: Specifies the author of the webpage.
- `<meta name="language" content="english"/>`: Specifies the language of the webpage.
- `<meta name="robots" content="index,follow"/>`: Instructs search engines on how to crawl or index the page.
- `<meta name="google"/>`: Tells Google not to show the sitelinks search box for your page.
- `<meta name="googlebot" content="notranslate"/>`: Informs Google not to provide automatic translation for your page.
- `<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm"/>`: Specifies the last modified date and time.
- `<meta name="rating" content="safe for kids"/>`: Specifies the expected audience for your page.
- `<meta name="copyright" content="Copyright 2022"/>`: Specifies copyright information.

#### `<meta http-equiv="..."/> Tags

- `<meta http-equiv="content-type" content="text/html"/>`: Specifies the format of the document returned by the server.
- `<meta http-equiv="default-style"/>`: Specifies the format of the styling document.
- `<meta http-equiv="refresh"/>`: Specifies the duration before the page is considered stale.
- `<meta http-equiv="Content-language"/>`: Specifies the language of the page.
- `<meta http-equiv="Cache-Control" content="no-cache"/>`: Instructs the browser on how to cache your page.

#### Responsive Design/Mobile `<meta>` Tags

- `<meta name="format-detection" content="telephone=yes"/>`: Indicates that telephone numbers should appear as clickable links for making phone calls.
- `<meta name="HandheldFriendly" content="true"/>`: Specifies that the page is suitable for visualization on mobile devices.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`: Defines the area of the window where web content can be seen, essential for responsive design.

Using these `<meta>` tags appropriately can enhance your web application's search engine optimization (SEO), accessibility, and mobile-friendliness. Make sure to include them in your HTML documents as needed to provide essential information to browsers and improve the user experience.