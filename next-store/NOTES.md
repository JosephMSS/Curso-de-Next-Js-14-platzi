**Table of Contents:**

- [Router](#router)

- [CSS Modules](#css-modules)
  - [Tips](#tips)
- [Sass](#sass)
  - [Configurations](#configurations)
- [Acknowledgements](#acknowledgements)

<!-- Router -->

<a id="router"></a>

## Router

| Type    | Path                     |
| ------- | ------------------------ |
| Dynamic | `[categories]/pages.tsx` |
| Static  | `store/pages.tsx`        |

<!-- CSS Modules -->

<a id="css-modules"></a>

## CSS Modules

<!-- Tips -->

<a id="tips"></a>

### Tips:

- Write the CSS classes in camelCase.
- If we choose conventions other than camelCase, we can access the class through `styles['class-name']`.
- Use the BEM convention.

<!-- Sass -->

<a id="sass"></a>

## Sass

<!-- Configurations -->

<a id="configurations"></a>

### Configurations

---

**Replace**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

**with**

1. We use ``prependData: `@import "main.sass"``, for global access to any `.sass` document.

```javascript
import { fileURLToPath } from "url";
import { dirname, join } from "path";

/** @type {import('next').NextConfig} */

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;
```

<!-- Acknowledgements -->

<a id="acknowledgements"></a>

## Acknowledgements

- [Platzi Next JS 14](https://platzi.com/cursos/nextjs-14/)
