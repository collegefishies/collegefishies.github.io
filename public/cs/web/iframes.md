## iFrame Sandbox Cheat Sheet

The `<iframe>` is the inline frame element that embeds an HTML page into another page.

### allow

It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on.

Example:
```html
allow="fullscreen" <!-- Enables fullscreen mode -->
allow="geolocation" <!-- Allows access to the user’s location -->
```

To specify more than one feature, use a semicolon separator:
```html
<iframe src="https://example.com/…" allow="camera; microphone"></iframe>
```

### name

The name for the `<iframe>`.

Example:
```html
<iframe name="My Frame" width="400" height="300"></iframe>
```

### height

Specifies the height of the frame. Default value: 150 CSS pixels.

### width

Specifies the width of the frame. Default value: 300 CSS pixels.

### referrerpolicy

Indicates which referrer information to send when loading the frame resource.

Common values:
- `no-referrer`: No referrer header will be sent.
- `origin`: Referrer limited to the origin of the referring page.
- `strict-origin`: Origin of the document sent as the referrer only when using the same protocol security level (HTTPS to HTTPS).

### sandbox

Enforces security restrictions on the content in the `<iframe>`. Common permission tokens:

- `allow-downloads`: Allows the user to download an item.
- `allow-forms`: Allows the user to submit forms.
- `allow-modals`: The resource can open modal windows.
- `allow-orientation-lock`: Lets the resource lock the screen orientation.
- `allow-popups`: Allows popups to open.
- `allow-presentation`: Allows a presentation session to start.
- `allow-scripts`: Lets the resource run scripts without creating popup windows.

To apply more than one permission, use a space-separated list.
Example:
```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"></iframe>
```

### src

The URL of the page to embed in the `<iframe>`. You can use `about:blank` to embed an empty page.

### srcdoc

Lets you specify the inline HTML to embed in the `<iframe>`, overriding the `src` attribute.

Example:
```html
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>"></iframe>
```

### loading

This attribute lets you specify if the iframe should be loaded immediately when the web page loads (eager) or loaded when the iframe is displayed in the browser (lazy).

Example:
```html
<iframe src="my_iframe_src.html" loading="lazy"></iframe>
```

### title

This attribute lets you add a description to the iframe for accessibility purposes, accurately describing the iframe's content.

Example:
```html
<iframe src="history.html" title="An embedded document about the history of my family"></iframe>
```

Use this cheat sheet as a reference when working with `<iframe>` elements in your web development projects.