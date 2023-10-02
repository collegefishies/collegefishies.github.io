Here's the provided information formatted as a valid markdown cheat sheet:

# CSS Pseudo-class and Pseudo-element Cheat Sheet

## Simple Selectors

| Selector  | Syntax       | Example            |
|-----------|--------------|--------------------|
| Element   | `element`    | `div { }`           |
| Class     | `.class`     | `.alpha { }`        |
| ID        | `#id`        | `#alpha { }`        |
| Universal | `*`          | `* { }`              |

## Variations of Simple Selectors

| Elements        | Syntax                      | Example          | Description                              |
|-----------------|-----------------------------|------------------|------------------------------------------|
| Two Classes     | `.first-class.second-class` | `.alpha.beta { }` | All elements with classes alpha and beta |
| Element and Class | `element.class`          | `p.alpha { }`    | All alpha class elements inside `<p>`     |
| Two Elements    | `element, element`           | `p, div { }`     | All `<p>` and `<div>` elements               |
| Two Elements    | `element element`            | `p div { }`      | All `<div>` elements inside `<p>`            |

## Descendant Selectors/Combinators

| Selector        | Syntax        | Example    | Description                        |
|-----------------|---------------|------------|------------------------------------|
| Descendant      | `element element` | `div p { }` | All `<p>` descendants of `<div>`      |
| Child           | `element>element` | `div > p { }` | All `<p>` direct descendants of `<div>` |
| Adjacent Sibling | `element+element` | `div + p { }` | `<p>` element directly after `<div>`    |
| General Sibling | `element~element` | `div ~ p { }` | All `<p>` element iterations after `<div>` |

## Attribute Selectors

| Selector | Syntax                    | Example          |
|----------|---------------------------|------------------|
| [attribute] | `[href] { }`             | Selects all elements with a href attribute |
| [attribute=value] | `[lang="fr"] { }`   | Selects all elements with lang attribute that has a value of "fr" |
| [attribute~=value] | `[input~=hello] { }` | Elements with input attribute containing the whitespace separated substring "hello" |
| `[attribute|=value]` | `[lang|=en] { }`    | Elements with lang attribute value equal to "en" or "en-" (en hyphen) |
| [attribute^=value] | `a[href^="https"] { }` | Every `<a>` element with href attribute value begins with "https" |
| [attribute$=value] | `a[href$=".docx"] { }` | Every `<a>` element with href attribute value ends with ".docx" |
| [attribute*=value] | `a[href*="meta"] { }`   | Every `<a>` element with href attribute value has substring "meta" |

## Pseudo-class

| Example       | Description of Selection    |
|---------------|-----------------------------|
| `:active`     | All active links            |
| `:checked`    | All the checked `<input>` elements |
| `:default`    | All default `<input>` elements |
| `:disabled`   | All disabled `<input>` elements |
| `:empty`      | All the `<div>` elements with no children |
| `:enabled`    | All the enabled `<input>` elements |
| `:first-child` | All the `<p>` elements who are the first child of a parent element |
| `:first-of-type` | All the `<p>` element who are the first `<p>` element of a parent element |
| `:focus`      | Input element under focus    |
| `:fullscreen` | The element in full-screen mode |
| `:hover`      | Action effect on mouse hover |
| `:invalid`    | Input elements with an invalid value |
| `:last-child` | All the `<p>` elements who are the last child of a parent element |
| `:last-of-type` | All the `<p>` elements who are the last `<p>` element of a parent element |
| `:link`       | All unvisited links         |
| `:not(selector)` | All the elements that are not a `<div>` element |
| `:nth-child(n)` | All the `<p>` elements that are the third child of a parent element |
| `:nth-last-child(n)` | All the `<div>` elements which are the third child of a parent element, counting from the last child element |
| `:nth-last-of-type(n)` | The second sibling from the last child of a parent element |
| `:nth-of-type(n)` | The second sibling of a parent element |
| `:only-of-type` | All the `<p>` elements which are only `<p>` elements inside its parent |
| `:only-child` | All the `<p>` elements which are only children of a parent element |
| `:optional`   | The input elements with no "required" attribute |
| `:required`   | Selects input elements with the "required" attribute specified |
| `:root`       | The Root element of the document |
| `::selection` | The portion of an element that is selected by a user |
| `:valid`      | All the input elements with a valid value |
| `:visited`    | Selects all visited links   |

## Pseudo-element Selectors

| Syntax       | Example         | Description                       |
|--------------|-----------------|-----------------------------------|
| ::after      | `p::after { }` | Inserts content after content of `<p>` element |
| ::before     | `p::before { }` | Inserts content before content of `<p>` element |
| ::first-letter | `p::first-letter { }` | Selects the first letter of every `<p>` element |
| ::first-line | `p::first-line { }` | Selects the first line of every `<p>` element |
| ::placeholder | `input::placeholder { }` | Selects input elements with "placeholder" attribute specified |
| ::marker     | `::marker { }` | Selects markers in a list |

Please note that this cheat sheet provides a quick reference for CSS pseudo-classes and pseudo-elements. For more detailed information, refer to CSS documentation and tutorials.