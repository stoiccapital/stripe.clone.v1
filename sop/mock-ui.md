Prime Directive
Create deterministic, approved, token-perfect UI states that can be exported into mock images.
Mock UI must remain 100% aligned with the real design system and product architecture.

1. Scope

This SOP governs:

Mock UI built in Figma or staging React screens

Temporary UI states used to generate mock images

Placeholder UI used before backend exists

All blueprint UI used for landing pages, docs, marketing, and product previews

This SOP does NOT govern:

The final exported mock images (see Mock Image SOP)

Marketing image layout

Copywriting

Real screenshots from production

2. Non-Negligible Laws (Mock UI Rules)
2.1 No Fantasy UI

Mock UI MUST NOT include any UI elements that do not exist in the real product:

No fake charts

No unapproved components

No imaginary panels

No random displays

Everything must follow the product’s actual design system.

2.2 Only Approved Tokens

Every part of mock UI MUST use:

Approved spacing tokens

Approved color tokens

Approved typography

Approved border radii

Approved layout grid

If a token doesn’t exist in the system → you cannot use it.

2.3 Placeholder Data Must Be Neutral

Mock UI must not use:

Real user data

Fake names

Fake analytics

Fake companies

Fake amounts

Instead, use neutral placeholders, e.g.:

“Driver 001”

“Vehicle A1”

“Entry #04”

“Chart sample values”

This ensures compliance + long-term reuse.

2.4 Mock UI Must Be Clean & Simplified

Mock UI cannot show:

Full cluttered dashboard states

Overflowing tables

Collapsed sidebars

Noisy cards

Red/yellow alerts

It must show an idealized, clean representation of the feature.

2.5 Mock UI Must Be Built from Real Components

Every mock UI element must come from:

/components/ui/*

The official design system (Figma or code)

Your token-driven layout rules

No custom CSS.
No random Tailwind.
No “one-off” designs.

2.6 No Shadows / Effects Unless Approved

Use only shadows/effects defined in the design system.

Stripe-level rules → NO random shadows.

2.7 Strict Layout Grid Compliance

Mock UI must follow:

8px spacing grid

Container widths

12-column layout

Vertical rhythm rules

No freehand alignment.

3. Allowed Mock UI States

You are allowed to build:

Simplified tables with neutral rows

Highlighted components with empty states

Charts with dummy values

Panels with placeholder content

Populated cards following token spacing

Collapsed panels for clarity

One perfect view of a feature (hero view)

Mock UI should represent exactly one ideal state of the feature.

4. Forbidden Mock UI States

Do NOT include:

❌ Busy real dashboards
❌ Unapproved colors
❌ Overly complex tables
❌ Data that looks real
❌ New UI that doesn’t exist anywhere
❌ Experimental layouts
❌ Marketing-only components
❌ Real user avatars, names, emails
❌ No fake companies, no fake money amounts
❌ Random opacity or gradients
❌ Animations

Mock UI must be strict, controlled, and minimal.

5. Mock UI Creation Process
Step 1 — Define the Feature

What feature does this mock represent?

Example:
“Fleet – Driver table overview”

Step 2 — Locate Existing Components

Find the corresponding real:

Table

Card

Panel

Stats block

Chart

Buttons

If it doesn’t exist → mock UI CANNOT invent it.

Step 3 — Build the UI in Figma or Staging

Use:

Real components

Tokens

Placeholder data

Approved colors

Follow the spacing grid precisely.

Step 4 — Clean the UI (Marketing Rules)

Remove:

Sidebars (if irrelevant)

Navbars (unless required)

Filters (if cluttered)

Internal chrome

Scrollbars

Tooltips

Error/success states

Keep only what clarifies the feature.

Step 5 — Align to Aspect Ratio

Before exporting, adjust the frame to:

16:10 desktop

9:19.5 mobile

16:9 dashboard crop

This ensures your mock image will fit the next stage perfectly.

Step 6 — QA Check (Internal)

Verify:

No fantasy UI

Tokens correct

Colors correct

Spacing correct

Layout grid aligned

Placeholder data only

Clean + simplified

Deterministic state

Step 7 — Deliver for Screenshot Export

Once passed → hand off to the Mock Image pipeline.

At this moment the Mock UI is READY to become a Mock Image.

6. Mock UI QA Checklist (Speed Version)

Before exporting, ask:

Tokens

Is every spacing token valid?

Are we using only approved colors?

Components

Is every piece from the real design system?

No one-off UI?

Clarity

Is the feature clearly highlighted?

Is the screen clean and readable?

Simplicity

Did we remove noise and unnecessary UI?

Integrity

No fake names?

No fake data?

No fantasy UI?

Aspect Ratio

16:10

9:19.5

16:9

Framing

Enough padding for device frame?

Nothing clipped?

If ALL “Yes” → Mock UI is approved.