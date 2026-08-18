# Pixel Perfect Replica

# TASK: PIXEL-ACCURATE RECREATION — PART 1

Act as a senior frontend engineer, UI reverse-engineering specialist, and pixel-perfect web developer.

We are recreating this website:

REFERENCE URL:
https://www.mhssce.ac.in/IEEE.php

The goal is NOT to redesign the website.

The goal is to recreate the existing website as faithfully as possible.

The reference website is the visual source of truth.

## PRIMARY RULE

Do NOT create a modern SaaS-style redesign.

Do NOT introduce:

* Glassmorphism
* Gradient backgrounds
* Large modern hero sections
* Excessive rounded cards
* Floating dashboards
* Unnecessary animations
* Modern UI patterns that are not present in the reference
* AI-generated decorative elements

Preserve the original institutional website's visual character.

---

# PHASE 1 — INSPECT THE REFERENCE

Before making significant UI decisions, inspect:

https://www.mhssce.ac.in/IEEE.php

Analyze the rendered page carefully.

Determine:

* Overall page width
* Main content width
* Header height
* Navigation height
* Logo dimensions
* Logo position
* Header spacing
* Navigation spacing
* Typography
* Font family
* Font sizes
* Font weights
* Line heights
* Text colors
* Background colors
* Borders
* Separators
* Shadows
* Section spacing
* Container padding
* Image dimensions
* Footer dimensions
* Mobile behavior
* Tablet behavior
* Desktop behavior
* Dropdown behavior
* Hover states
* Active states
* Link styles

Do not guess values that can be determined by inspecting the reference.

---

# PHASE 2 — CREATE THE APPLICATION FOUNDATION

Use the existing Lovable project if one already exists.

Do not unnecessarily replace the project's architecture.

Use a clean React-based implementation compatible with Lovable.

Prefer:

* React
* TypeScript
* CSS/Tailwind as appropriate to the existing project
* Semantic HTML
* Reusable components

Do not install unnecessary libraries.

Keep the implementation lightweight.

---

# PHASE 3 — CREATE THE GLOBAL PAGE STRUCTURE

Create the following high-level structure:

App
│
├── Institutional Header
│   ├── Top information area
│   ├── Logo / branding
│   └── Main navigation
│
├── Main Content
│   └── IEEE Page
│
└── Footer
├── Contact information
├── Map
├── Login links
└── Copyright

The website must behave like a complete institutional website, not an isolated IEEE article.

---

# PHASE 4 — HEADER

Recreate the header from the reference.

Pay extremely close attention to:

* Vertical stacking
* Header height
* Logo size
* Logo position
* Contact information
* Utility information
* Navigation alignment
* Navigation spacing
* Background colors
* Text colors
* Font weights
* Borders
* Separators
* Dropdown arrows

The navigation includes categories such as:

* Institution
* Admissions
* Examinations
* Department
* Training & Placement
* NAAC
* EDC
* Fee Payment
* Scholarship
* Life @MHSS
* Alumni

Preserve the hierarchy visible in the reference.

Do not simplify the navigation merely because the current page is an IEEE page.

---

# PHASE 5 — RESPONSIVE HEADER

The header must be responsive.

Desktop:

* Preserve the reference's horizontal navigation
* Preserve menu spacing
* Implement dropdowns where required
* Keep dropdowns above page content
* Prevent clipping

Mobile:

* Convert the navigation into an appropriate mobile navigation
* Preserve all important navigation items
* Support nested navigation
* Prevent viewport overflow
* Maintain the original visual style

Do not simply shrink the desktop navigation until it becomes unusable.

---

# PHASE 6 — GLOBAL DESIGN SYSTEM

Create reusable design variables/tokens based on the reference.

For example:

* Primary color
* Secondary color
* Text color
* Muted text
* Border color
* Background color
* Container width
* Font family
* Standard spacing

Do not invent a new design language.

Extract approximate values from the reference.

Use consistent spacing throughout the page.

---

# PHASE 7 — CONTAINER

Determine the actual content width from the reference.

Do not make the entire website permanently full-width.

Use a centered responsive container where the reference uses one.

Desktop should reproduce:

* Left/right margins
* Maximum content width
* Text width
* Heading alignment
* Table width

Mobile should naturally adapt to the viewport.

---

# PHASE 8 — ASSET INSPECTION

Inspect the reference for:

* College logo
* IEEE-related images
* Gallery images
* Icons
* Background images
* Social icons
* Menu icons
* Favicon where relevant

Use the original publicly accessible assets where appropriate.

Do not stretch or distort assets.

Preserve aspect ratios.

If an asset cannot be retrieved:

1. Identify its purpose.
2. Preserve its dimensions.
3. Use the closest appropriate placeholder.
4. Do not allow the missing asset to break the layout.

---

# PHASE 9 — IMPORTANT IMPLEMENTATION RULE

Do not stop after creating a rough skeleton.

The first implementation should already establish:

* Correct page width
* Correct header proportions
* Correct navigation structure
* Correct typography hierarchy
* Correct responsive container
* Correct footer structure

Do not spend time on decorative improvements.

Accuracy is more important than creativity.

---

# PHASE 10 — VALIDATION

After creating the foundation:

1. Run the application.
2. Open the IEEE page.
3. Compare it visually against:
   https://www.mhssce.ac.in/IEEE.php
4. Check desktop.
5. Check mobile.
6. Fix obvious structural differences.

Do NOT move to decorative redesign.

At the end of Part 1, the project should have a strong, accurate institutional shell ready for the IEEE-specific content.

## SUCCESS CRITERIA

[ ] Header exists
[ ] Logo/branding positioned correctly
[ ] Navigation exists
[ ] Navigation hierarchy is preserved
[ ] Dropdown structure exists
[ ] Mobile navigation works
[ ] Main content container matches reference
[ ] Global typography is established
[ ] Responsive foundation exists
[ ] Footer structure exists
[ ] Assets have been inspected
[ ] No unnecessary redesign has been introduced
[ ] Application runs without errors

Do not proceed by inventing a different visual design.

Build the foundation from the reference.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4e8d872a-7506-491c-9301-24a16ca605fc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
