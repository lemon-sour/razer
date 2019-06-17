<p align="center">
  <h1>:bento: razer</h1>
  <span>Elegant Console Logger for Node.js and browser</span>
</p>

  <a href="https://www.npmjs.com/package/razer"><img src="https://badgen.net/npm/dm/razer" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/razer"><img src="https://badgen.net/npm/v/razer" alt="Version"></a>
  <a href="https://www.npmjs.com/package/razer"><img src="https://badgen.net/npm/license/razer" alt="License"></a>
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

## Why razer?

- Easy to use
- Fancy output with fallback for minimal environments
- If the argument function returns false, console.log will not be executed

## Installation

Using yarn:

```bash
yarn add razer
```

Using npm:

```bash
npm i razer
```

## Getting Started

Basic usage:

```typescript
import razer from 'razer'

razer('Hello Razer!')
```

How to use for production:

```typescript
import razer from 'razer'

process.env.NODE_ENV = 'production'
const logger = razer(() => {
  process.env.NODE_ENV !== 'production'   // false
})

logger('Razer as console.log will not be executed')
```

Other using:

```typescript
import razer from 'razer'

process.env.NODE_ENV = 'development'
const logger = razer(() => {
  process.env.NODE_ENV !== 'production'   // true
})

logger('Razer as console.log will be executed')
```


## Maintainers

- [hisasann (Yoshiyuki Hisamatsu)](https://github.com/hisasann)

## License

MIT © [hisasann (Yoshiyuki Hisamatsu)](https://github.com/hisasann)

<a href="https://twitter.com/hisasann"><img src="https://badgen.net/twitter/follow/hisasann" alt="twitter"></a>
