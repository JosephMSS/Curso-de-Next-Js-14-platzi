**Table of Contents:**

- [Router](#router)

- [CSS Modules](#css-modules)
  - [Tips](#tips)
- [Sass](#sass)
  - [Configurations](#configurations)
  - [Globals Sass](#globals-sass)
    - [Tips](#tips-sass)
- [Static Files](#static-files)

  - [Optimization](#static-files-optimization)
  - [Responsive](#static-files-responsive)
  - [Blur Effect](#static-files-blur)

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

<!-- Static Files -->

<a id="static-files"> </a>

## Static Files

1. We include static files in the public directory.
2. To access the file, we don't import the file; simply writing the path is enough.
   **Example:**

```
<img src="/images/description.jpeg" alt="products marketplace" />

```

<!-- Static Files -->

<a id="static-files-optimization"> </a>

### Optimization Image

Once you reach 1000 images, Vercel will begin billing you. [More information on pricing can be found here](https://vercel.com/docs/image-optimization/limits-and-pricing).

1. Utilize the Next.js `Image` component.
2. Define `height` and `width` attributes.
3. The `priority` attribute removes lazy loading from the image.

<a id="static-files-responsive"> </a>

### Responsive

1. Remove `height` and `width` attributes.
2. Use the `fill` attribute to fill the parent component.
   - If we don't need the image to fill the entire component, we can handle this by wrapping the image inside a `<div>` and assigning a CSS class to contain the image.

```jsx
<div class="image-container">
  <Image
    src="/images/description.jpeg"
    alt="products marketplace"
    priority={false}
    fill={true}
  />
</div>
```
<a id="static-files-blur"> </a>

#### Blur effect

Utilize the `blur` attribute to present a preloaded optimized image.
**Requirements:**

1. Utilize `placeholder='blur'`.
2. Add the `blurDataURL` attribute.
    - Create the blurDataURL base64 at [blurred.dev](https://blurred.dev/).
<!-- Acknowledgements -->

<a id="acknowledgements"></a>

## Acknowledgements

- [Platzi Next JS 14](https://platzi.com/cursos/nextjs-14/)
