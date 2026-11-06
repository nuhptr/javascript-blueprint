# JavaScript Blueprint

A collection of learning materials and exercises for studying JavaScript step by step, from fundamental concepts to advanced topics. Each topic includes code examples that can be run independently.

## About the project

This project is a JavaScript learning roadmap. The fundamental topics cover core concepts, decision-making, loops, and data structures.

**Learning goals:**

- Understand JavaScript fundamentals through code examples.
- Experiment with and modify examples to see how they work.
- Complete the `challenge.js` files as independent exercises.

## Getting started

Make sure [Node.js](https://nodejs.org/) is installed. From the project root, run an example with:

```bash
node app/beginner/variables/index.js
```

Replace the file path with the example you want to run. To practice, run the `challenge.js` file in the relevant topic folder.

## Fundamental learning progress

**Repository coverage: 17/17 listed fundamental topics have learning materials or code examples.** This reflects the availability of materials in the repository, not a learner's mastery or the completeness of the entire JavaScript curriculum.

|   # | Topic                                                    | Status                               |
| --: | -------------------------------------------------------- | ------------------------------------ |
|   1 | [Console and comments](app/beginner/)                    | Available                            |
|   2 | [Variables](app/beginner/variables/)                     | Available                            |
|   3 | [Numbers](app/beginner/numbers/)                         | Available                            |
|   4 | [Strings](app/beginner/strings/)                         | Available                            |
|   5 | [Type conversion](app/beginner/type-conversation/)       | Available                            |
|   6 | [Booleans](app/beginner/booleans/)                       | Available                            |
|   7 | [Comparison operators](app/beginner/comparison/)         | Available                            |
|   8 | [Logical operators](app/beginner/logical-operator/)      | Available                            |
|   9 | [`if` conditionals](app/beginner/statement-conditional/) | Available                            |
|  10 | [`switch` statements](app/beginner/statement-switch/)    | Available                            |
|  11 | [`for` loops](app/beginner/loop-for/)                    | Available                            |
|  12 | [`while` loops](app/beginner/loop-while/)                | Available                            |
|  13 | [`do...while` loops](app/beginner/loop-do-while/)        | Available                            |
|  14 | [Infinite loops](app/beginner/loop-infinite/)            | Available — example only; do not run |
|  15 | [Arrays](app/beginner/arrays/)                           | Available                            |
|  16 | [Basic array methods](app/beginner/array-basic-method/)  | Available                            |
|  17 | [Objects](app/beginner/objects/)                         | Available                            |

## What's next

After completing the fundamentals above, the planned next topics are:

1. **Functions** — create reusable blocks of code.
2. **Scope** — understand where variables can be accessed.
3. **Advanced arrays** — work with collections using methods such as `map`, `filter`, and `find`.
4. **DOM** — select and modify web page elements with JavaScript.
5. **Asynchronous JavaScript** — learn about Promises and `async`/`await`.

These topics are part of the learning roadmap and may not yet be available in the repository.

## How to learn

1. Follow the topics from top to bottom.
2. Read `index.js` and run the example with Node.js.
3. Change the values or code, then run it again to observe the results.
4. Try completing `challenge.js` before looking at the examples.
5. Track the topics you've studied and revisit anything that is still unclear.

> **Warning:** The file in `loop-infinite` contains a loop that does not stop. Do not run it.

## Directory structure

```text
app/
├── beginner/       # JavaScript fundamentals
├── intermediate/   # Intermediate topics
├── advanced/       # Advanced topics
├── dom/            # Document Object Model
└── gsap/           # Animation with GSAP
```

## Contributing

Contributions that clarify the materials, add examples, or improve exercises are welcome. Please keep each example focused on one concept and easy to run independently.
