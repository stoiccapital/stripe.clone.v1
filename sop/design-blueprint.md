# Landing Page Design Blueprint

## Design Token Reference

**Spacing Tokens:** py-16, py-24, px-4, px-6, px-8, gap-6, gap-8, mb-4, mb-8, mb-12, space-y-6
**Typography Tokens:** text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, font-semibold, font-medium
**Color Tokens:** bg-white, bg-gray-50, bg-gray-900, text-gray-900, text-gray-600, text-gray-700, text-white, bg-indigo-600, text-indigo-600
**Grid Tokens:** grid-cols-1, md:grid-cols-2, md:grid-cols-3, lg:grid-cols-4, lg:grid-cols-6
**Motion Tokens:** transition-colors, duration-200, duration-300, ease-in-out

---

## [SECTION: Hero]

**1. Layout Blueprint:**
- Alignment: Split-grid (left-aligned copy, right-aligned media)
- Grid: 12-column grid, copy spans 6 columns (lg:col-span-6), media spans 6 columns (lg:col-span-6)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: gap-8 (between copy and media), mb-4 (H1 to subheadline), mb-8 (subheadline to CTAs), gap-4 (between CTAs)
- Components: H1, paragraph, primary CTA button, secondary CTA button (optional), media container

**2. Typography Hierarchy:**
- H1: text-4xl lg:text-5xl font-semibold text-gray-900
- H3: N/A (no H3 in Hero)
- Body: text-lg text-gray-600

**3. Color Application Map:**
- Background: bg-gray-50
- Text H1: text-gray-900
- Text Body: text-gray-600
- Accent: N/A
- CTA Primary: bg-indigo-600 text-white hover:bg-indigo-700
- CTA Secondary: bg-white text-gray-900 border border-gray-200 hover:bg-gray-50

**4. Media Layout Plan:**
- Container: relative aspect-video rounded-2xl overflow-hidden
- Aspect ratio: aspect-video (16:9)
- Position: Right side of split-grid, equal width to copy block
- Symmetry: Balanced split, both blocks equal visual weight

**5. Visual Density:**
- Items count: 1 H1, 1 body paragraph, 1-2 CTAs, 1 media container
- CPL token: ~65-75 characters per line (max-w-2xl for copy block)
- Density validation: PASS - Single focused message, adequate whitespace, clear hierarchy

**6. Motion:**
- Entrance motion: N/A (static on load)
- Interaction states: transition-colors on CTAs (duration-200), hover states for buttons

**7. Token Compliance:**
- PASS - All spacing uses py-16/py-24, px-4/px-6/px-8 tokens
- PASS - Typography uses text-4xl/text-5xl/text-lg tokens only
- PASS - Colors use bg-gray-50, text-gray-900, text-gray-600, bg-indigo-600 tokens
- PASS - Grid uses standard 12-column split pattern
- PASS - Alignment is consistent (left-aligned copy)
- PASS - Media container is bounded with aspect-video
- PASS - No gradients, no arbitrary shadows/radius

---

## [SECTION: Social Proof]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, full width container, logo grid spans 12 columns, stats grid spans 4 columns each (md:grid-cols-3)
- Section spacing token: py-16
- Internal spacing tokens: mb-8 (H2 to logo grid), gap-8 (logo grid items), mt-12 (logo grid to stats), gap-6 (stats grid items)
- Components: H2, logo grid (6 items), statistics grid (3 items)

**2. Typography Hierarchy:**
- H2: text-2xl font-semibold text-gray-900
- H3: N/A
- Body: text-sm text-gray-600

**3. Color Application Map:**
- Background: bg-white
- Text H2: text-gray-900
- Text Body: text-gray-600
- Accent: opacity-60 (logo grid)
- CTA: N/A

**4. Media Layout Plan:**
- Container: N/A (logos are inline SVG/icon placeholders)
- Aspect ratio: N/A
- Position: N/A
- Symmetry: Centered logo grid, centered stats below

**5. Visual Density:**
- Items count: 1 H2, 6 logos, 3 statistics
- CPL token: ~50-60 characters per line (centered text)
- Density validation: PASS - Logo grid uses opacity to reduce visual weight, stats are spaced with gap-6

**6. Motion:**
- Entrance motion: N/A
- Interaction states: N/A (logos are static)

**7. Token Compliance:**
- PASS - Spacing uses py-16, mb-8, gap-8, gap-6 tokens
- PASS - Typography uses text-2xl, text-sm tokens
- PASS - Colors use bg-white, text-gray-900, text-gray-600 tokens
- PASS - Grid uses standard 12-column with md:grid-cols-3, lg:grid-cols-6
- PASS - Alignment is center-aligned consistently
- PASS - No unbounded media
- PASS - No gradients or arbitrary values

---

## [SECTION: Value Propositions]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, H2 spans 12 columns, value prop cards span 4 columns each (md:grid-cols-3)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-12 (H2 to cards), gap-8 (between cards), p-6 (card internal padding)
- Components: H2, 3 value proposition cards (each with H3, body text)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: text-xl font-semibold text-gray-900
- Body: text-gray-600

**3. Color Application Map:**
- Background: bg-gray-50
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: N/A
- CTA: N/A

**4. Media Layout Plan:**
- Container: N/A (no media in this section)
- Aspect ratio: N/A
- Position: N/A
- Symmetry: Three equal-width cards, centered alignment

**5. Visual Density:**
- Items count: 1 H2, 3 value prop cards
- CPL token: ~60-70 characters per line (card width constraint)
- Density validation: PASS - Three cards provide balanced density, adequate spacing with gap-8, p-6 padding prevents crowding

**6. Motion:**
- Entrance motion: N/A
- Interaction states: N/A (cards are static)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-12, gap-8, p-6 tokens
- PASS - Typography uses text-3xl, text-xl, text-base (implicit) tokens
- PASS - Colors use bg-gray-50, text-gray-900, text-gray-600 tokens
- PASS - Grid uses md:grid-cols-3 pattern
- PASS - Alignment is center-aligned
- PASS - No media, no unbounded elements
- PASS - Shadow-sm uses standard token, rounded-xl uses standard token

---

## [SECTION: Feature Blocks]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, H2 spans 12 columns, feature cards span 3 columns each (lg:grid-cols-4)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-12 (H2 to cards), gap-6 (between cards), p-6 (card internal padding), mb-4 (icon to title), mb-2 (title to body), mb-4 (body to link)
- Components: H2, 4 feature cards (each with icon, H3, body, optional link)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: text-lg font-semibold text-gray-900
- Body: text-sm text-gray-600

**3. Color Application Map:**
- Background: bg-white
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: text-indigo-600 (link color)
- CTA: N/A (links use accent color)

**4. Media Layout Plan:**
- Container: N/A (icons are emoji/text, not media containers)
- Aspect ratio: N/A
- Position: Top of each card
- Symmetry: Four equal-width cards in grid

**5. Visual Density:**
- Items count: 1 H2, 4 feature cards
- CPL token: ~50-60 characters per line (narrower cards due to 4-column layout)
- Density validation: PASS - Four cards maintain readability, gap-6 prevents crowding, text-sm body keeps density appropriate

**6. Motion:**
- Entrance motion: N/A
- Interaction states: transition-colors on links (hover:text-indigo-700)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-12, gap-6, p-6 tokens
- PASS - Typography uses text-3xl, text-lg, text-sm tokens
- PASS - Colors use bg-white, text-gray-900, text-gray-600, text-indigo-600 tokens
- PASS - Grid uses lg:grid-cols-4 pattern
- PASS - Alignment is center-aligned
- PASS - No unbounded media
- PASS - rounded-xl uses standard token, bg-gray-50 uses standard token

---

## [SECTION: Deep Dives]

**1. Layout Blueprint:**
- Alignment: Split-grid (alternating left/right)
- Grid: 12-column grid, each deep dive uses 6 columns for copy, 6 columns for media, alternating sides
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: space-y-16 (between deep dives), gap-8 (between copy and media within each dive), mb-4 (H3 to body)
- Components: H2, 3 deep dive blocks (each with H3, body, media container)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: text-2xl font-semibold text-gray-900
- Body: text-gray-600 leading-relaxed

**3. Color Application Map:**
- Background: bg-gray-50
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: N/A
- CTA: N/A

**4. Media Layout Plan:**
- Container: relative aspect-video rounded-xl overflow-hidden
- Aspect ratio: aspect-video (16:9)
- Position: Alternating sides (left/right) relative to copy block
- Symmetry: Each deep dive maintains 50/50 split, alternating pattern creates visual rhythm

**5. Visual Density:**
- Items count: 1 H2, 3 deep dive blocks
- CPL token: ~65-75 characters per line (6-column copy block)
- Density validation: PASS - Three blocks with space-y-16 prevent crowding, alternating layout adds visual interest without overload

**6. Motion:**
- Entrance motion: N/A
- Interaction states: N/A (static content)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, space-y-16, gap-8 tokens
- PASS - Typography uses text-3xl, text-2xl, text-base (implicit) tokens
- PASS - Colors use bg-gray-50, text-gray-900, text-gray-600 tokens
- PASS - Grid uses lg:grid-cols-2 pattern with alternating logic
- PASS - Alignment alternates but maintains grid integrity
- PASS - Media containers bounded with aspect-video
- PASS - rounded-xl uses standard token, no arbitrary values

---

## [SECTION: Use Cases]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, H2 spans 12 columns, use case cards span 4 columns each (md:grid-cols-3)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-12 (H2 to cards), gap-8 (between cards), p-6 (card internal padding), mb-4 (media to title), mb-3 (title to body)
- Components: H2, 3 use case cards (each with media container, H3, body)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: text-xl font-semibold text-gray-900
- Body: text-gray-600

**3. Color Application Map:**
- Background: bg-white
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: N/A
- CTA: N/A

**4. Media Layout Plan:**
- Container: relative aspect-video rounded-lg overflow-hidden
- Aspect ratio: aspect-video (16:9)
- Position: Top of each card, above title
- Symmetry: Three equal-width cards with consistent media placement

**5. Visual Density:**
- Items count: 1 H2, 3 use case cards
- CPL token: ~60-70 characters per line (4-column card width)
- Density validation: PASS - Three cards with media and text, gap-8 spacing, p-6 padding maintain balanced density

**6. Motion:**
- Entrance motion: N/A
- Interaction states: N/A (static cards)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-12, gap-8, p-6 tokens
- PASS - Typography uses text-3xl, text-xl, text-base (implicit) tokens
- PASS - Colors use bg-white, text-gray-900, text-gray-600 tokens
- PASS - Grid uses md:grid-cols-3 pattern
- PASS - Alignment is center-aligned
- PASS - Media containers bounded with aspect-video
- PASS - rounded-lg and rounded-xl use standard tokens

---

## [SECTION: Testimonials]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, H2 spans 12 columns, testimonial cards span 4 columns each (md:grid-cols-3)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-12 (H2 to cards), gap-6 (between cards), p-6 (card internal padding), mb-4 (rating/quote to author), gap-3 (avatar to author info)
- Components: H2, 3 testimonial cards (each with rating, quote, avatar, author name, role/company)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: N/A
- Body: text-gray-600 italic (quote), text-sm text-gray-600 (author info)

**3. Color Application Map:**
- Background: bg-gray-50
- Text H2: text-gray-900
- Text Body: text-gray-600
- Accent: text-yellow-400 (star rating)
- CTA: N/A

**4. Media Layout Plan:**
- Container: w-10 h-10 rounded-full (avatar container)
- Aspect ratio: 1:1 (square/circle)
- Position: Left side of author info block
- Symmetry: Three equal-width cards, consistent avatar placement

**5. Visual Density:**
- Items count: 1 H2, 3 testimonial cards
- CPL token: ~55-65 characters per line (4-column card width)
- Density validation: PASS - Three cards with quotes and author info, gap-6 spacing, p-6 padding maintain readability

**6. Motion:**
- Entrance motion: N/A
- Interaction states: N/A (static cards)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-12, gap-6, p-6 tokens
- PASS - Typography uses text-3xl, text-sm tokens
- PASS - Colors use bg-gray-50, bg-white, text-gray-900, text-gray-600, text-yellow-400 tokens
- PASS - Grid uses md:grid-cols-3 pattern
- PASS - Alignment is center-aligned
- PASS - Avatar containers bounded with w-10 h-10
- PASS - rounded-xl, rounded-full, shadow-sm use standard tokens

---

## [SECTION: Pricing]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, H2 spans 12 columns, pricing tiers span 4 columns each (md:grid-cols-3)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-12 (H2 to tiers), gap-8 (between tiers), p-8 (tier card padding), mb-4 (name to price), mb-4 (price to features), mb-8 (features to CTA), space-y-3 (feature list items)
- Components: H2, 3 pricing tier cards (each with badge optional, H3 name, price, period, feature list, CTA button)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: text-xl font-semibold text-gray-900
- Body: text-gray-600 (features), text-4xl font-semibold text-gray-900 (price)

**3. Color Application Map:**
- Background: bg-white
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: text-indigo-600 (checkmark), border-indigo-600 (popular badge border)
- CTA: bg-indigo-600 text-white hover:bg-indigo-700 (primary tier), bg-white text-gray-900 border border-gray-200 (other tiers)

**4. Media Layout Plan:**
- Container: N/A (no media in pricing section)
- Aspect ratio: N/A
- Position: N/A
- Symmetry: Three equal-width tier cards, centered alignment

**5. Visual Density:**
- Items count: 1 H2, 3 pricing tier cards
- CPL token: ~60-70 characters per line (4-column card width)
- Density validation: PASS - Three tiers with feature lists, gap-8 spacing, p-8 padding provide adequate breathing room

**6. Motion:**
- Entrance motion: N/A
- Interaction states: transition-colors on CTA buttons (hover states)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-12, gap-8, p-8, space-y-3 tokens
- PASS - Typography uses text-3xl, text-xl, text-4xl, text-base (implicit) tokens
- PASS - Colors use bg-white, bg-gray-50, text-gray-900, text-gray-600, text-indigo-600, bg-indigo-600 tokens
- PASS - Grid uses md:grid-cols-3 pattern
- PASS - Alignment is center-aligned
- PASS - No unbounded media
- PASS - rounded-xl, rounded-full use standard tokens, border-2 uses standard token

---

## [SECTION: FAQ]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, H2 spans 12 columns, FAQ items span 12 columns (max-w-3xl container centers content)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-12 (H2 to FAQ items), space-y-6 (between FAQ items), p-6 (FAQ item padding), mb-3 (question to answer)
- Components: H2, 5 FAQ items (each with H3 question, body answer)

**2. Typography Hierarchy:**
- H2: text-3xl font-semibold text-gray-900
- H3: text-lg font-semibold text-gray-900
- Body: text-gray-600

**3. Color Application Map:**
- Background: bg-gray-50
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: N/A
- CTA: N/A

**4. Media Layout Plan:**
- Container: N/A (no media in FAQ section)
- Aspect ratio: N/A
- Position: N/A
- Symmetry: Centered FAQ items, consistent card width

**5. Visual Density:**
- Items count: 1 H2, 5 FAQ items
- CPL token: ~70-80 characters per line (max-w-3xl constraint)
- Density validation: PASS - Five FAQ items with space-y-6 spacing, p-6 padding maintain readability without crowding

**6. Motion:**
- Entrance motion: N/A
- Interaction states: N/A (static FAQ items, expand/collapse not implemented per spec)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-12, space-y-6, p-6 tokens
- PASS - Typography uses text-3xl, text-lg, text-base (implicit) tokens
- PASS - Colors use bg-gray-50, bg-white, text-gray-900, text-gray-600 tokens
- PASS - Grid uses max-w-3xl centered container
- PASS - Alignment is center-aligned
- PASS - No unbounded media
- PASS - rounded-xl, shadow-sm use standard tokens

---

## [SECTION: Final CTA]

**1. Layout Blueprint:**
- Alignment: Center-aligned
- Grid: 12-column grid, content spans 12 columns (max-w-4xl container centers content)
- Section spacing token: py-16 lg:py-24
- Internal spacing tokens: mb-4 (H2 to body), mb-8 (body to CTA)
- Components: H2, body paragraph, primary CTA button

**2. Typography Hierarchy:**
- H2: text-3xl lg:text-4xl font-semibold text-white
- H3: N/A
- Body: text-lg text-gray-300

**3. Color Application Map:**
- Background: bg-gray-900
- Text H2: text-white
- Text Body: text-gray-300
- Accent: N/A
- CTA: bg-indigo-600 text-white hover:bg-indigo-700

**4. Media Layout Plan:**
- Container: N/A (no media in Final CTA section)
- Aspect ratio: N/A
- Position: N/A
- Symmetry: Centered content, single CTA button

**5. Visual Density:**
- Items count: 1 H2, 1 body paragraph, 1 CTA button
- CPL token: ~70-80 characters per line (max-w-4xl constraint)
- Density validation: PASS - Minimal content with adequate spacing, mb-4 and mb-8 create clear hierarchy

**6. Motion:**
- Entrance motion: N/A
- Interaction states: transition-colors on CTA button (hover:bg-indigo-700)

**7. Token Compliance:**
- PASS - Spacing uses py-16/py-24, mb-4, mb-8 tokens
- PASS - Typography uses text-3xl/text-4xl, text-lg tokens
- PASS - Colors use bg-gray-900, text-white, text-gray-300, bg-indigo-600 tokens
- PASS - Grid uses max-w-4xl centered container
- PASS - Alignment is center-aligned
- PASS - No unbounded media
- PASS - rounded-xl uses standard token, no arbitrary values

---

## [SECTION: Footer]

**1. Layout Blueprint:**
- Alignment: Left-aligned (within grid columns)
- Grid: 12-column grid, footer content spans 12 columns, link groups span 3 columns each (md:grid-cols-4)
- Section spacing token: py-12
- Internal spacing tokens: gap-8 (between link groups), mb-8 (link groups to bottom bar), mb-2 (company name to tagline), mb-4 (link group title to links), space-y-2 (link list items), pt-8 (top border to content)
- Components: Company info block, 3 link groups (each with H3 title, link list), bottom bar (copyright, legal links)

**2. Typography Hierarchy:**
- H2: text-lg font-semibold text-gray-900 (company name, treated as H2 equivalent)
- H3: text-sm font-semibold text-gray-900 (link group titles)
- Body: text-sm text-gray-600

**3. Color Application Map:**
- Background: bg-white
- Text H2: text-gray-900
- Text H3: text-gray-900
- Text Body: text-gray-600
- Accent: N/A
- CTA: N/A

**4. Media Layout Plan:**
- Container: N/A (no media in footer)
- Aspect ratio: N/A
- Position: N/A
- Symmetry: Four-column grid (company + 3 link groups), bottom bar spans full width

**5. Visual Density:**
- Items count: 1 company block, 3 link groups, 1 bottom bar
- CPL token: ~50-60 characters per line (narrower footer columns)
- Density validation: PASS - Four-column layout with gap-8 spacing, text-sm keeps density appropriate, space-y-2 prevents link crowding

**6. Motion:**
- Entrance motion: N/A
- Interaction states: hover:text-gray-900 on links (transition-colors)

**7. Token Compliance:**
- PASS - Spacing uses py-12, gap-8, mb-8, mb-2, mb-4, space-y-2, pt-8 tokens
- PASS - Typography uses text-lg, text-sm tokens
- PASS - Colors use bg-white, text-gray-900, text-gray-600 tokens
- PASS - Grid uses md:grid-cols-4 pattern
- PASS - Alignment is left-aligned within columns
- PASS - No unbounded media
- PASS - border-t uses standard token, no arbitrary values

---

## Global Design Token Summary

**Container Pattern:** max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 (standard), max-w-7xl (navbar), max-w-4xl (Final CTA), max-w-3xl (FAQ)

**Section Spacing:** py-16 (standard), py-16 lg:py-24 (major sections), py-12 (footer)

**Grid Patterns:** md:grid-cols-2, md:grid-cols-3, lg:grid-cols-4, lg:grid-cols-6

**Border Radius:** rounded-lg, rounded-xl, rounded-2xl, rounded-full

**Shadows:** shadow-sm (cards)

**Transitions:** transition-colors (all interactive elements)

**Color Palette:** white, gray-50, gray-200, gray-600, gray-700, gray-900, indigo-600, yellow-400

