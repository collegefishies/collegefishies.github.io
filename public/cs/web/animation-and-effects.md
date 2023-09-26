# Animation and Effects Cheat Sheet

## Transform Property

### Syntax

```css
transform: transform function-values;
```

### Example

```css
.sample-class {
  transform: rotate(60deg);
}
```

### Types and Variations

| Keyword-value type | Function-value type | Variations                  | Example                                         | Note                                             |
|--------------------|---------------------|-----------------------------|-------------------------------------------------|--------------------------------------------------|
| `none`             | `matrix()`          | `matrix(), matrix3d()`      | `.sample-class { transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);}` |                                                  |
|                    | `rotate(deg)`       | `rotate(), rotate3d(), rotateX(), rotateY(), rotateZ()` | `.sample-class { transform: rotate3d(3,2,1, 100deg);}` | In `rotate3d()`, values represent x, y, z coordinate and degree of rotations |
|                    | `translate(x,y)`    | `translate(), translate3d(), translateX(), translateY(), translateZ()` | `.sample-class { transform: translate3d(10px, 20px, 30px);}` | In `translate3d()`, values represent translation along the x, y, z coordinates |
|                    | `scale(factor)`     | `scale(), scale3d(), scaleX(), scaleY(), scaleZ()` | `.sample-class { transform: scale3d(2, 1, 0.3);}` | In `scale3d()`, values represent scaling times along the x, y, z coordinates |
|                    | `skew(deg, deg)`    | `skew(), skewX(), skewY()`   | `.sample-class { transform: skew(100deg);}`       |                                                  |

### Global Value Types

| Value         | Example                               |
|---------------|---------------------------------------|
| `inherit`     | `.sample-class { transform: inherit;}` |
| `initial`     | `.sample-class { transform: initial;}` |
| `revert`      | `.sample-class { transform: revert;}`  |
| `revert-layer`| `.sample-class { transform: revert-layer;}` |
| `unset`       | `.sample-class { transform: unset;}`   |

### Multiple Transforms Over The Same Element

**Syntax:**

```css
.sample-class { transform: rotate(45deg) scale(1.5) translate(45px); }
```

#### Additional Property Under Transform: Transform-Origin

**Example:**

```css
.sample-class { transform-origin: 10px 10px; }
.sample-class { transform-origin: right bottom; }
```

## Transition Property
###Transition shorthand 

Transition shorthand has four following sub-properties, each of which can also be individually defined. 

 * transition-property
 * transition-duration
 * transition-timing-function
 * transition-delay

You have to list the values without naming them individually. Values skipped will be assigned their default values.
### Syntax

```css
transition: property duration timing-function delay;
```

**Example:**

```css
transition: margin-left 2s ease-in-out 0.5s;
```

## Animations and @keyframes
### animation property
#### Syntax

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

**Example:**

```css
.sample-class { animation: none 2s ease 0.5s 4 normal none running; }
```

The animation property is a shorthand for the sub-properties below:



 * animation-name
 * animation-duration
 * animation-timing-function
 * animation-delay
 * animation-iteration-count
 * animation-direction
 * animation-fill-mode
 * animation-play-state

The values not mentioned are given default values.

Animation-name property is used to tie-in the @keyframes rule.
### @keyframes

**Syntax:**

```css
@keyframes mymove { 
  from {property: value} 
  to {property: value} 
}
```

**Example:**

```css
@keyframes animation-name { 
  from {bottom: 0px;} 
  to {bottom: 100px;} 
}
```


#### Percentage Denotes the Timing of the Animation

The percentages within the `@keyframes` specify at what proportion of the duration each keyframe should be applied.

#### Alternative Syntax for @keyframes

**Syntax:**

```css
@keyframes animation-name { /* declare actions here */ }
```

**Example:**

```css
@keyframes animation-name {
  0%, 100% {
    background-color: blue;
  }
  50% {
    background-color: green;
  }
}
```

This alternative syntax allows you to set keyframes at different percentages of the animation duration, giving you more fine-grained control over the animation's behavior. In the example, the background color will be blue at the start (0%) and end (100%) of the animation, and it will turn green at the halfway point (50%).
#### Multiple Animations

**Example:**

```css
#some-class {
  animation: animation-a 2s linear infinite alternate, 
             animation-b 3s ease infinite alternate;
}
```

