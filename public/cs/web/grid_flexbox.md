# Grids and Flexbox Cheat Sheet

**Note**: '|' stands for alternatives or OR.

# Grid Layout in CSS

The Grid layout in CSS enables the creation of complex two-dimensional layouts for web pages. It's defined by a set of properties applied to a container and its child elements. 

## Syntax for Creating a Grid

To designate a container as a grid container, use the following:

```css
selector {
  display: grid; /* or inline-grid for inline-level grids */
}
```

## Grid Shorthand Properties

You can use the `grid` shorthand to specify various properties related to grid layout. However, it's often more maintainable to use the individual properties for clearer code.

### grid-template-rows

- **Default Value**: `none`
- **Description**: Specifies the size of the rows in the grid layout.
  
```css
.grid-container {
  grid-template-rows: 100px 200px;
}
```

### grid-template-columns

- **Default Value**: `none`
- **Description**: Specifies the size of the columns in the grid layout.
  
```css
.grid-container {
  grid-template-columns: 50% 50%;
}
```

### grid-template-areas

- **Default Value**: `none`
- **Description**: Defines a grid template by specifying named grid areas.

```css
.grid-container {
  grid-template-areas: "header header" "nav content";
}
```

### grid-auto-rows

- **Default Value**: `auto`
- **Description**: Sets the size for rows that are not explicitly defined.

```css
.grid-container {
  grid-auto-rows: minmax(100px, auto);
}
```

### grid-auto-columns

- **Default Value**: `auto`
- **Description**: Sets the size for columns that are not explicitly defined.

```css
.grid-container {
  grid-auto-columns: 1fr;
}
```

### grid-auto-flow

- **Default Value**: `row`
- **Description**: Controls the direction in which new grid items are placed when they don’t fit into existing rows or columns.

```css
.grid-container {
  grid-auto-flow: column;
}
```

### column-gap

- **Default Value**: `normal`
- **Description**: Sets the gap (spacing) between columns.

```css
.grid-container {
  column-gap: 20px;
}
```

### row-gap

- **Default Value**: `normal`
- **Description**: Sets the gap (spacing) between rows.

```css
.grid-container {
  row-gap: 20px;
}
```

---

### Grid Properties for Container

- `grid-template-columns: measurement units | % units | repeat()`: Defines the line names and maintains a constant size of column items. Can accept a range of different measurement sizes.

- `grid-template-rows: measurement units | % units | repeat()`: Defines the line names and maintains a constant size of rows. Can accept a range of different measurement sizes.

- `grid-auto-columns: measurement unit (fixed value for all columns)`: Determines the default size for columns that have not been explicitly configured.

- `grid-auto-rows: measurement unit (fixed value for all rows)`: Determines the default size for rows that have not been explicitly configured.

- `grid-template: "header header" auto "main right" 75vh "footer footer" 20rem`: This allows you to define and maintain named cells on a grid. For example, it defines two cells named "header" and "header" with auto sizing, two cells named "main" and "right" with a sizing of 75% of the viewport height, and two cells named "footer" and "footer" with a sizing of 20 root em (rem), relative to the HTML font size.

### Gap

- `grid-gap: measurement units`: Determines the gap between rows and columns.

- `grid-column-gap: measurement units`: Determines the gap between columns.

- `grid-row-gap: m-unit-1 m-unit-2`: Determines the gap between columns.

### Alignment

- `justify-items: start | center | end | stretch`: Defines the default space that is allotted to each item on the grid.

- `align-items: start | center | end | stretch`: Defines the default space related to an item along the grid’s block axis.

- `place-items: start | stretch /* shorthand for two properties above */`: This feature allows you to align items with the block and inline directions.

### Justification

- `justify-content: start | center | end | stretch | space-between | space-evenly | space-around`: Defines browser allocation of space to content items in relation to the main-axis.

- `align-content: start | center | end | stretch | space-between | space-evenly | space-around`: Defines browser allocation of space to content items in relation to the cross-axis and block axis.

- `place-content: center | start`: This feature allows you to align items with the block and inline directions.

### Positioning

- `grid-auto-flow: row | column | dense`: This relates to how the items are placed automatically within the grid.

- `grid-auto-columns: measurement units`: This relates to the size for columns created without specific size specifications.

- `grid-auto-rows: measurement units`: This relates to the size for rows created without specific size specifications.

## Grid Properties for Items (Child)

- `grid-column: column position /* E.g. 1/2 */`: Allows specifying where on the grid the column is to start.

- `grid-column-start: column start position`: Determines the starting column position an item is placed on a grid.

- `grid-column-end: column end position`: Determines the end column position an item is placed on a grid.

- `grid-row: row position /* E.g. 1/2 */`: Allows specifying where on the grid the row is to start.

- `grid-row-start: row start position`: Determines the starting row position an item is placed on a grid.

- `grid-row-end: row end position`: Determines the end row position an item is placed on a grid.

### Justification and Alignment

- `justify-self: start | center | end | stretch`: Determines how an item is positioned inside its aligned container in relation to the appropriate axis.

- `align-self: start | center | end | stretch`: Aligns an item within a grid area.

- `place-self: start | stretch /* shorthand for two properties above */`: This setting lets you align and justify an item within a block.

## Flexbox

The syntax for creating a flexbox:

```css
selector {
    display: flex | inline-flex;
}
```

Here, the selector can refer to any of the following flex attributes:

- Attribute selector
- Class Selector
- ID Selector
- Type Selectors
- Universal Selectors

The `display` relates to how you want the selector to be shown. Setting `display` to `flex` makes the given selector a flexbox. Setting `display` to `inline-flex` makes the selector a flexbox container while being inline.

### Properties for Flexbox Container

- `flex-direction: row | row-reverse | column | column-reverse`: It is possible to specify the direction your elements will follow.

- `flex-wrap: wrap | nowrap`: The standard layout is to plot the elements from left to right in a straight line. The wrap feature allows you to customize this to match the size of the window displaying the page.

- `align-items: flex-start | flex-end | center | stretch`: This determines how the flex items are to be positioned on the page.

- `justify-content: flex-start | flex-end | center | space-between | space-evenly`: `justify-content` determines the alignment of the flex items.

### Properties for Flexbox Items (Child)

- `flex-grow: factor of flex’s main size`: This attribute enables the flex container to grow proportionally to the other containers present.

- `flex-shrink: factor of flex’s main size`: This allows elements to shrink in relation to items around it.

- `flex-basis: auto | factor of main’s size | measurement unit`: This sets the initial main size of an item. It can be overridden if other stylized elements are configured.

- `order: position in flex /* Set ascending by default */`: The standard positioning of items is by source order, however, this feature will enable you to configure where the items appear on the page.

- `align-self: start | center | end | stretch`: This determines where on the page the child items will be positioned. Similar to the main flex attributes, start is to the left and end is to the right.