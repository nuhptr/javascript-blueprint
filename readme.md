# JavaScript Blueprint

A structured, hands-on JavaScript learning repository designed to build mastery step by step — from core fundamentals to modern ES6+ patterns, object-oriented programming, asynchronous JavaScript, regular expressions, and DOM manipulation.

Every topic is organized as a standalone, runnable example (with practice `*-test.js` files where applicable) so you can read, run, and experiment directly from the terminal.

## Getting Started

Make sure [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) is installed, then run any example from the project root:

```bash
# Using Bun
bun app/beginners/primitives/variables.js

# Using Node.js
node app/beginners/primitives/variables.js
```

## Learning Path

All four tracks — **Beginner**, **Intermediate**, **Advanced**, and **DOM** — are available and ready to run.

### Beginner topics

- [Console & Comments](app/beginners/basics/) — basic output and code documentation
- [Primitives](app/beginners/primitives/) — variables, numbers, strings, booleans, type conversion, and comparison operators
- [Control Flow](app/beginners/control-flow/) — `if`/`switch` statements, logical operators, and `for`/`while`/`do...while` loops (includes [infinite-loop.js](app/beginners/control-flow/infinite-loop.js) as a read-only example)
- [Reference Types](app/beginners/reference-types/) — arrays, basic array methods, and objects
- [Functions](app/beginners/functions/) — function declarations, expressions, callbacks, methods, and [scope](app/beginners/functions/scope.js)
- [Date, Time & Timers](app/beginners/date-time-and-timers/) — `Date` handling, `setTimeout`, and `setInterval` ([set-interval-and-timeout.js](app/beginners/date-time-and-timers/set-interval-and-timeout.js))
- [JSON](app/beginners/json/) — serializing and parsing JSON data

### Intermediate topics

- **Syntax & Operators**
  - [Template Strings](app/intermediate/template-string/)
  - [Arrow Functions](app/intermediate/arrow-function/)
  - [Default Function Parameters](app/intermediate/default-function-parameter/)
  - [Enhanced Object Literals](app/intermediate/enhanced-object-literal/)
  - [Spread Operator](app/intermediate/spread-operator/), [Rest Operator](app/intermediate/rest-operator/), and [Spread vs Rest Note](app/intermediate/spread-vs-rest.md)
  - [Destructuring](app/intermediate/destructuring/) — array, object, rename, function, nested, and mixed patterns
  - [Ternary Operator](app/intermediate/ternary-operator/)
- **Iteration & Array Helpers**
  - [`for...of` Loop](app/intermediate/for-of-loop/)
  - [`forEach`](app/intermediate/foreach-helper/), [`map`](app/intermediate/map-helper/), [`filter`](app/intermediate/filter-helper/), [`find`](app/intermediate/find-helper/), [`every` & `some`](app/intermediate/every-and-some-helpers/), and [`reduce`](app/intermediate/reducer-helper/)
- **Data Structures & Symbols**
  - [Map](app/intermediate/maps/)
  - [Set](app/intermediate/sets/)
  - [Symbols](app/intermediate/symbols/)

### Advanced topics

- **Object-Oriented Programming (OOP)**
  - Foundations: [`this` Keyword](app/advanced/oop/this-keyword/), [Factory Function](app/advanced/oop/factory-function/), [Constructor Function](app/advanced/oop/constructor-function/), [Built-in Constructors](app/advanced/oop/built-in-constructors/), [`Object.create`](app/advanced/oop/object-create/)
  - Prototypes: [Prototype Model](app/advanced/oop/prototype-model/), [Prototypal Inheritance](app/advanced/oop/prototypal-inheritance/)
  - Classes & Pillars: [ES6 Classes](app/advanced/oop/es6-classes/), [Class Modifiers](app/advanced/oop/class-modifiers/), [Encapsulation](app/advanced/oop/encapsulation/), [Abstraction](app/advanced/oop/abstraction/), [Inheritance](app/advanced/oop/inheritance/), [Polymorphism](app/advanced/oop/polymorphism/)
- **Async Programming**
  - [Sync vs Async](app/advanced/async-programming/sync-vs-async/)
  - [Callback Hell](app/advanced/async-programming/callback-hell/)
  - [Promises](app/advanced/async-programming/promises/)
  - [`async` / `await`](app/advanced/async-programming/async-await/)
  - [Fetch API](app/advanced/async-programming/fetch-api/)
  - [`try` and `catch`](app/advanced/async-programming/try-and-catch/)
- **Regular Expressions**
  - [Regular Expressions (Regex)](app/advanced/regex/)

### DOM topics

> [!NOTE]
> DOM examples run in a browser environment. Open each topic's `index.html` in a browser and check the DevTools Console.

- [What is DOM](app/dom/what-is-dom/) — `document` object tree and basic properties
- [Accessing the DOM](app/dom/accessing-dom/) — `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll`
- [`innerText`, `textContent`, and `innerHTML`](app/dom/innertext-textcontent-innerhtml/) — reading and updating element content safely
- [`classList`](app/dom/classlist/) — `add()`, `remove()`, `toggle()`, `contains()`, and `replace()`
- [Getting and Setting Attributes](app/dom/getting-and-setting-attributes/) — DOM properties, `getAttribute()`, `setAttribute()`, and `dataset`
- [Siblings & Traversal](app/dom/siblings/) — `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling`
- [Style](app/dom/style/) — inline `element.style` and `getComputedStyle()`
- [Create, Insert & Remove Elements](app/dom/create-insert-remove-elements/) — `createElement()`, `append()`, `prepend()`, `insertBefore()`, `insertAdjacentElement()`, `removeChild()`, and `remove()`
- [Three Ways to Add Events](app/dom/three-ways-to-add-events/) — inline handlers, `onclick`, `addEventListener()`, and the `event` object
- **Events In-Depth**
  - [Mouse Events](app/dom/events-in-depth/mouse/)
  - [Keyboard Events](app/dom/events-in-depth/keyboard/)

## How to Learn

1. Follow the learning path from **Beginner** to **Advanced**.
2. Read the code and JSDoc notes, then execute the file with `bun` or `node`.
3. Modify values and edge cases to observe how the behavior changes.
4. Attempt `*-test.js` exercise files before checking the reference examples.

> [!WARNING]
> [infinite-loop.js](app/beginners/control-flow/infinite-loop.js) intentionally demonstrates an unbounded loop. Read it as a reference only — do not run it.

## Roadmap

Planned topics for future additions:

- **Modules** — organizing code with ES Modules across files and packages
- **Testing & Custom Errors** — writing unit tests and structured error handling

## Directory structure

<details>
<summary>View full directory tree</summary>

```text
app/
├── advanced/
│   ├── async-programming/
│   │   ├── async-await/
│   │   ├── callback-hell/
│   │   ├── fetch-api/
│   │   ├── promises/
│   │   ├── sync-vs-async/
│   │   └── try-and-catch/
│   ├── oop/
│   │   ├── abstraction/
│   │   ├── built-in-constructors/
│   │   ├── class-modifiers/
│   │   ├── constructor-function/
│   │   ├── encapsulation/
│   │   ├── es6-classes/
│   │   ├── factory-function/
│   │   ├── inheritance/
│   │   ├── object-create/
│   │   ├── polymorphism/
│   │   ├── prototypal-inheritance/
│   │   ├── prototype-model/
│   │   └── this-keyword/
│   └── regex/
├── beginners/
│   ├── basics/
│   ├── control-flow/
│   ├── date-time-and-timers/
│   ├── functions/
│   ├── json/
│   ├── primitives/
│   └── reference-types/
├── dom/
│   ├── accessing-dom/
│   ├── classlist/
│   ├── create-insert-remove-elements/
│   ├── events-in-depth/
│   │   ├── keyboard/
│   │   └── mouse/
│   ├── getting-and-setting-attributes/
│   ├── innertext-textcontent-innerhtml/
│   ├── siblings/
│   ├── style/
│   ├── three-ways-to-add-events/
│   └── what-is-dom/
└── intermediate/
    ├── arrow-function/
    ├── default-function-parameter/
    ├── destructuring/
    │   ├── array-destructuring.js
    │   ├── destructuring-mixture.js
    │   ├── function-destructuring.js
    │   ├── index.js
    │   ├── nested-destructuring.js
    │   ├── object-destructuring.js
    │   └── rename-destructuring.js
    ├── enhanced-object-literal/
    ├── every-and-some-helpers/
    ├── filter-helper/
    ├── find-helper/
    ├── for-of-loop/
    ├── foreach-helper/
    ├── map-helper/
    ├── maps/
    ├── reducer-helper/
    ├── rest-operator/
    ├── sets/
    ├── spread-operator/
    ├── spread-vs-rest.md
    ├── symbols/
    ├── template-string/
    └── ternary-operator/
```

</details>

## Contributing

Contributions that clarify explanations, add runnable examples, or expand exercises are welcome. Keep each example focused on a single concept and runnable independently with both Node.js and Bun.
