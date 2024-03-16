**Table of Contents:**

- [Router](#router)

- [CSS Modules](#css-modules)
  - [Tips](#tips)
- [Sass](#sass)
  - [Configurations](#configurations)
  - [Globals Sass](#globals-sass)
    - [Tips](#tips-sass)
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

#### Tips:

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

1. We use `` prependData: `@import "main.sass" ``, for global access to any `.sass` document.

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

<!-- Globals Sass -->

<a id="globals-sass"> </a>

### Global Sass
We include the global.scss into the main layout located in `app/layout`.
<!-- tips -->

<a id="tips-sass"></a>

#### Tips

1. If a rule isn't written in a specific component, the global rule will affect the component. This applies to the general style, such as paragraphs or font weight.
2. The global document should be as small as possible, including modifications for paragraphs or font weight.
3. Usually, modifications include paragraph and font weight to maintain consistency across components.
4. It should affect the components as little as possible.

<!-- Acknowledgements -->

<a id="acknowledgements"></a>

## Acknowledgements

- [Platzi Next JS 14](https://platzi.com/cursos/nextjs-14/)
