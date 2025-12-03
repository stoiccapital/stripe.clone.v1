Prime Directive

Enforce deterministic, production-grade engineering rules for all landing pages.
Only one objective: consistent, safe, type-strong, predictable code generation.

No architecture. No design.
Only engineering discipline.

1. Allowed Technologies

Cursor MUST only use:

Next.js App Router

React Server Components by default

TypeScript (strict)

Tailwind CSS using design tokens only

next/image for all images

ES Modules

Relative imports only

Alias imports only when preconfigured

Forbidden:

JavaScript files

CSS modules

Inline styles

Arbitrary Tailwind values

Raw <img>

Fetching inside components

Server/client mixing

2. File Boundaries

Cursor MUST enforce:

One component per file

One responsibility per file

No business logic inside section components

No layout logic inside UI components

No nested component folders inside routes

No duplicate component logic

File types:

Components → .tsx

Utilities → .ts

No .jsx or .js

3. Component Rules

Components MUST follow:

Server components (default):

All components are server components unless interactivity is required.

Server components MUST NOT import client libraries.

Server components MUST NOT use "use client".

Client components:

Allowed ONLY if interaction exists.

Client components MUST:

Start with "use client"

Not import server-only utilities

Not fetch

Not mutate DOM manually

Be fully typed

General Component Rules:

No any

No inline styles

No margins on the component root

No arbitrary classNames

Use internal padding only

Props MUST be fully typed

Return type inferred or explicit

4. TypeScript Rules (Strict Mode)

Cursor MUST enforce strong typing:

No any

No unknown

No implicit any

No untyped function parameters

No untyped arrays

No untyped objects

Props must use interfaces or type aliases

All utilities MUST be typed

All arrays MUST have typed elements

Only .tsx for components

Only .ts for utilities

If Cursor outputs untyped values → MUST self-correct.

5. Import Rules

Cursor MUST enforce:

Relative imports for local files

Alias imports only via existing TS paths

No unused imports

No mixing server/client imports

No importing .css files in components

Exception: The root `app/layout.tsx` MAY import `./globals.css` for Tailwind and global resets. All other components and files MUST NOT import .css files.

Correct:

import Button from '@/components/ui/Button';
import Hero from './Hero';


Wrong:

import "../styles.css"
import * as React from 'react'
import Button from '../../../Button'

6. Tailwind Engineering Rules

Cursor MUST enforce:

Only approved design tokens

No arbitrary values

No percentage widths unless tokens

No margins on components

Only internal padding allowed

Spacing controlled by parent layout

No dynamic inline classNames

No className prop overrides unless component-specific policy permits

Examples:

✅ Allowed:
pt-12 pb-16 gap-6 text-gray-900 rounded-xl bg-gray-50

❌ Forbidden:
mt-[13px]
text-[#111111]
m-10
p-[3.5rem]
className={someDynamicVariable}

7. Image Optimization Rules

Cursor MUST enforce:

next/image ONLY

Must specify width + height

Must specify alt

No raw <img>

No missing dimensions

No remote URL without config

Correct example:

<Image
  src="/hero.png"
  width={800}
  height={600}
  alt="Hero illustration"
/>

8. Server/Client Behavior Separation

Cursor MUST enforce:

Server Components:

Default for all files

No "use client"

No browser APIs

No animations with JS

No interactive state

Client Components:

Allowed only when interaction required.

Client components:

MUST begin with "use client"

MUST use typed props

CANNOT fetch

CANNOT import server utilities

CANNOT use Node APIs

9. Spacing & Layout Control

Cursor MUST enforce:

Components MUST NOT apply margins

Page-level files define all section spacing

Components can ONLY use internal padding

No external spacing allowed inside reusable UI components

No special casing variants through className hacks

10. Deterministic Output Rules

Cursor MUST enforce consistency:

No creative variations

No className improvisation

Must use the same engineering patterns for all files

Must use same naming patterns for interfaces and props

Must generate predictable, reusable, clean TSX

Must never introduce new dependencies

11. Pre-Flight Engineering Checks

Cursor MUST run this before generating ANY code:

Type Safety:

Are all props typed?

Any any?

Any implicit any?

Arrays typed?

Objects typed?

Component Rules:

Only one component?

No margins?

No inline styles?

No random classNames?

Tailwind:

Only approved tokens?

No arbitrary values?

Server/Client:

Server component by default?

Client only when needed?

Image:

next/image only?

Width + height + alt?

If ANY fail → Cursor MUST fix before generating.

12. Prohibited Behavior

Cursor MUST NOT:

Mix server + client logic

Use <img>

Use arbitrary Tailwind values

Insert margins in components

Create untyped props

Add unnecessary wrappers

Duplicate logic

Create unused files

Import external styling

Add business logic inside components

DEFINITION OF DONE (Engineering Only)

An output is valid ONLY if:

Fully typed

Deterministic

No arbitrary utilities

No margins

next/image used correctly

No JS files

No mixed server/client

No drift from these engineering rules