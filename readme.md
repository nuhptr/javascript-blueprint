# JavaScript Blueprint

A collection of learning materials and exercises for studying JavaScript step by
step, from fundamental concepts to intermediate and advanced topics. Most topics
include independent code examples and practice files.

## About the project

This project is a JavaScript learning roadmap organized into `beginners`,
`intermediate`, and `advanced` materials. The repository currently covers core
language primitives, control flow, functions, reference types, timers, JSON,
template strings, collection helpers, modern ES6+ syntax, data structures,
object-oriented programming (OOP), and asynchronous JavaScript.

**Learning goals:**

- Understand JavaScript fundamentals through code examples.
- Experiment with and modify examples to see how they work.
- Complete the available `*-test.js` files as exercises.

## Getting started

Make sure [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) is installed.
From the project root, run an example with either runtime:

```bash
# Using Bun
bun app/beginners/primitives/variables.js

# Using Node.js
node app/beginners/primitives/variables.js
```

Replace the file path with the example you want to run.

## Learning progress

**Repository coverage: beginner, intermediate, and advanced materials are available.**
This describes the repository content, not a learner's mastery.

### Beginner topics

| Topic | Example and exercise location |
| --- | --- |
| Console and comments | [app/beginners/basics/](app/beginners/basics/) |
| Variables | [app/beginners/primitives/](app/beginners/primitives/) |
| Numbers | [app/beginners/primitives/](app/beginners/primitives/) |
| Strings | [app/beginners/primitives/](app/beginners/primitives/) |
| Type conversion | [app/beginners/primitives/](app/beginners/primitives/) |
| Booleans | [app/beginners/primitives/](app/beginners/primitives/) |
| Comparison and logical operators | [app/beginners/primitives/](app/beginners/primitives/) and [app/beginners/control-flow/](app/beginners/control-flow/) |
| `if` and `switch` statements | [app/beginners/control-flow/](app/beginners/control-flow/) |
| `for`, `while`, and `do...while` loops | [app/beginners/control-flow/](app/beginners/control-flow/) |
| Infinite loops | [infinite-loop.js](app/beginners/control-flow/infinite-loop.js) — example only; do not run |
| Arrays and basic array methods | [app/beginners/reference-types/](app/beginners/reference-types/) |
| Objects | [app/beginners/reference-types/](app/beginners/reference-types/) |
| Functions, function types, callbacks, and methods | [app/beginners/functions/](app/beginners/functions/) |
| Function scope | [scope.js](app/beginners/functions/scope.js) |
| Date and time | [app/beginners/date-time-and-timers/](app/beginners/date-time-and-timers/) |
| Timers with `setInterval` and `setTimeout` | [set-interval-and-timeout.js](app/beginners/date-time-and-timers/set-interval-and-timeout.js) |
| JSON | [app/beginners/json/](app/beginners/json/) |

### Intermediate topics

| Topic | Location |
| --- | --- |
| Template strings | [app/intermediate/template-string/](app/intermediate/template-string/) |
| `for...of` loop | [app/intermediate/for-of-loop/](app/intermediate/for-of-loop/) |
| `forEach` helper | [app/intermediate/foreach-helper/](app/intermediate/foreach-helper/) |
| `map` helper | [app/intermediate/map-helper/](app/intermediate/map-helper/) |
| `filter` helper | [app/intermediate/filter-helper/](app/intermediate/filter-helper/) |
| `find` helper | [app/intermediate/find-helper/](app/intermediate/find-helper/) |
| `every` and `some` helpers | [app/intermediate/every-and-some-helpers/](app/intermediate/every-and-some-helpers/) |
| `reduce` helper | [app/intermediate/reducer-helper/](app/intermediate/reducer-helper/) |
| Arrow functions | [app/intermediate/arrow-function/](app/intermediate/arrow-function/) |
| Default function parameters | [app/intermediate/default-function-parameter/](app/intermediate/default-function-parameter/) |
| Enhanced object literals | [app/intermediate/enhanced-object-literal/](app/intermediate/enhanced-object-literal/) |
| Spread operator | [app/intermediate/spread-operator/](app/intermediate/spread-operator/) |
| Rest operator | [app/intermediate/rest-operator/](app/intermediate/rest-operator/) |
| Destructuring (array, object, rename, function, nested, mixture) | [app/intermediate/destructuring/](app/intermediate/destructuring/) |
| Ternary operator | [app/intermediate/ternary-operator/](app/intermediate/ternary-operator/) |
| Map | [app/intermediate/maps/](app/intermediate/maps/) |
| Set | [app/intermediate/sets/](app/intermediate/sets/) |
| Symbols | [app/intermediate/symbols/](app/intermediate/symbols/) |

### Advanced topics

#### OOP

| Topic | Location |
| --- | --- |
| `this` keyword | [app/advanced/oop/this-keyword/](app/advanced/oop/this-keyword/) |
| Factory function | [app/advanced/oop/factory-function/](app/advanced/oop/factory-function/) |
| Constructor function | [app/advanced/oop/constructor-function/](app/advanced/oop/constructor-function/) |
| Built-in constructors | [app/advanced/oop/built-in-constructors/](app/advanced/oop/built-in-constructors/) |
| `Object.create` | [app/advanced/oop/object-create/](app/advanced/oop/object-create/) |
| Prototype model | [app/advanced/oop/prototype-model/](app/advanced/oop/prototype-model/) |
| Prototypal inheritance | [app/advanced/oop/prototypal-inheritance/](app/advanced/oop/prototypal-inheritance/) |
| ES6 classes | [app/advanced/oop/es6-classes/](app/advanced/oop/es6-classes/) |
| Class modifiers | [app/advanced/oop/class-modifiers/](app/advanced/oop/class-modifiers/) |
| Encapsulation | [app/advanced/oop/encapsulation/](app/advanced/oop/encapsulation/) |
| Abstraction | [app/advanced/oop/abstraction/](app/advanced/oop/abstraction/) |
| Inheritance | [app/advanced/oop/inheritance/](app/advanced/oop/inheritance/) |
| Polymorphism | [app/advanced/oop/polymorphism/](app/advanced/oop/polymorphism/) |

#### Async programming

| Topic | Location |
| --- | --- |
| Sync vs Async | [app/advanced/async-programming/sync-vs-async/](app/advanced/async-programming/sync-vs-async/) |
| Callback hell | [app/advanced/async-programming/callback-hell/](app/advanced/async-programming/callback-hell/) |
| Promises | [app/advanced/async-programming/promises/](app/advanced/async-programming/promises/) |
| `async` / `await` | [app/advanced/async-programming/async-await/](app/advanced/async-programming/async-await/) |
| Fetch API | [app/advanced/async-programming/fetch-api/](app/advanced/async-programming/fetch-api/) |
| `try` and `catch` | [app/advanced/async-programming/try-and-catch/](app/advanced/async-programming/try-and-catch/) |

## What's next

After completing the available beginner, intermediate, and advanced materials,
the planned next topics are:

1. **DOM** — select and modify web page elements.
2. **Modules** — organize code across multiple files and packages.
3. **Testing & custom error patterns** — write unit tests and structured error handling.

These topics are part of the learning roadmap and are not yet available in the
repository.

## How to learn

1. Follow the topics from top to bottom.
2. Read the example file and run it with Bun or Node.js.
3. Change the values or code, then run it again to observe the results.
4. Try completing the test file before looking at the implementation.
5. Track the topics you've studied and revisit anything that is still unclear.

> **Warning:** [infinite-loop.js](app/beginners/control-flow/infinite-loop.js)
> contains a loop that does not stop. Do not run it.

## Directory structure

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
│   └── oop/
│       ├── abstraction/
│       ├── built-in-constructors/
│       ├── class-modifiers/
│       ├── constructor-function/
│       ├── encapsulation/
│       ├── es6-classes/
│       ├── factory-function/
│       ├── inheritance/
│       ├── object-create/
│       ├── polymorphism/
│       ├── prototypal-inheritance/
│       ├── prototype-model/
│       └── this-keyword/
├── beginners/
│   ├── basics/
│   ├── control-flow/
│   ├── date-time-and-timers/
│   ├── functions/
│   ├── json/
│   ├── primitives/
│   └── reference-types/
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
    ├── symbols/
    ├── template-string/
    └── ternary-operator/
```

## Contributing

Contributions that clarify the materials, add examples, or improve exercises are welcome. Please keep each example focused on one concept and easy to run independently.
