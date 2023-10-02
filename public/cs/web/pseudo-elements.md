### Pseudo-Elements Cheat Sheet

Pseudo-elements in CSS allow you to style specific parts of elements, enhancing the presentation and appearance of your web content. Here's a comprehensive cheat sheet explaining the syntax and usage of popular pseudo-elements:

#### Syntax

Pseudo-elements are denoted by two colons (`::`) and follow this syntax:

```css
selector::pseudo-element {
    property: value;
}
```

#### `::first-letter`

- Selects the first letter of an element.
- Commonly used for decorative text.
- Example:

```css
li::first-letter {
    color: coral;
    font-size: 1.3em;
    font-weight: bold;
    line-height: 1;
}
```

#### `::first-line`

- Selects the entire first line of an element.
- Useful for highlighting the initial sentence or paragraph.
- Example:

```css
ul {
    list-style-type: none;
}

li::first-line {
    color: lightseagreen;
    text-decoration: underline;
    line-height: 1;
}
```

#### `::selection`

- Styles the selected text when a user highlights it.
- Customizes the appearance of selected text.
- Example:

```css
ul {
    list-style-type: none;
}

li::selection {
    color: brown;
    background-color: antiquewhite;
    line-height: 1;
}
```

#### `::marker`

- Applies styles to list item markers (usually bullet points).
- Allows you to customize the appearance of list markers.
- Example:

```css
li::marker {
    color: cornflowerblue;
    content: '<> ';
    font-size: 1.1em;
}
```

#### `::before` and `::after`

- These pseudo-elements add content before and after an element.
- You can add text or decorative elements without modifying HTML.
- Example:

```html
<body>
    <p id="tips">Don't rinse your pasta after it is drained.</p>
    <p>Slice the tomatoes. Take the extra efforts to seed them.</p>
    <p id="tips">Peel and seed large tomatoes.</p>
</body>
```

```css
#tips::before {
    background: darkkhaki;
    color: darkslategray;
    content: "Tip:";
    padding-left: 3px;
    padding-right: 5px;
    border-radius: 10%;
}

#tips::after {
    background: darkkhaki;
    color: darkslategray;
    content: "!!";
    padding-right: 5px;
    border-radius: 20%;
}
```

These examples demonstrate how pseudo-elements can be used to enhance the visual presentation of web content. Pseudo-elements offer creative possibilities for improving the appearance of your website, and there are many more to explore beyond these examples.