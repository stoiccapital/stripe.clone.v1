# Component System Refactor Plan
## Bringing Codebase to Full SOP Compliance

---

## REFACTOR PRIORITIES

### Phase 1: Create Missing Registry Components (Foundation)
**Goal:** Establish all required component types from the registry

1. **Structural Components**
   - Create `components/structural/Split.tsx`
   - Create `components/structural/Stack.tsx`
   - Move and refactor `Section.tsx`, `Container.tsx`, `Grid.tsx`

2. **Content Components**
   - Create `components/content/Headline.tsx`
   - Create `components/content/Subheadline.tsx`
   - Create `components/content/Paragraph.tsx`
   - Create `components/content/Badge.tsx`
   - Create `components/content/IconBlock.tsx`

3. **Action Components**
   - Create `components/actions/PrimaryButton.tsx`
   - Create `components/actions/SecondaryButton.tsx`
   - Create `components/actions/CTAGroup.tsx`
   - Remove generic `Button.tsx`

4. **Media Components**
   - Create `components/media/ImageBlock.tsx`
   - Remove generic `MediaContainer.tsx`

5. **Conversion Components**
   - Create `components/conversion/FeatureCard.tsx`
   - Create `components/conversion/TestimonialCard.tsx`
   - Create `components/conversion/PricingCard.tsx`
   - Create `components/conversion/FAQItem.tsx`
   - Remove generic `Card.tsx`

6. **Navigation Components**
   - Move `Navbar.tsx` to `components/navigation/`
   - Move `Footer.tsx` to `components/navigation/`
   - Refactor to use `PrimaryButton`

---

### Phase 2: Fix Component Props & Types
**Goal:** Remove className props, tokenize enums, strict typing

1. **Structural Components**
   - Remove `className` from `Section`, `Container`, `Grid`
   - Add proper tokenized props (`background`, `GapToken`, etc.)
   - Fix `Grid` to use string tokens instead of numbers

2. **All Other Components**
   - Remove all `className` props
   - Ensure all variants use string unions
   - Ensure all sizes use string unions

---

### Phase 3: Refactor All Sections
**Goal:** Replace raw HTML with registry components

1. **Hero Section**
   - Replace `<h1>` → `Headline level={1}`
   - Replace `<p>` → `Paragraph`
   - Replace grid `<div>` → `Split`
   - Replace flex `<div>` → `Stack`
   - Replace `Button` → `CTAGroup`
   - Replace `MediaContainer` → `ImageBlock`

2. **All Other Sections**
   - Similar replacements for each section
   - Use `Grid` instead of raw grid divs
   - Use `Stack` instead of raw flex/space-y divs
   - Use `Split` for two-column layouts
   - Use content components for all text
   - Use conversion components for cards

---

### Phase 4: Cleanup & Verification
**Goal:** Remove old components, verify compliance

1. Delete old generic components
2. Update all imports
3. Verify no raw HTML in sections
4. Verify no className props on non-structural components
5. Verify proper component hierarchy

---

## IMPLEMENTATION ORDER

1. ✅ Create all missing structural components
2. ✅ Create all missing content components
3. ✅ Create all missing action components
4. ✅ Create all missing media components
5. ✅ Create all missing conversion components
6. ✅ Refactor existing structural components
7. ✅ Move navigation components
8. ✅ Refactor Hero section (template)
9. ✅ Refactor all other sections
10. ✅ Cleanup and delete old components

---

**Plan Status:** Ready for implementation
**Estimated Files to Create:** 15 new components
**Estimated Files to Refactor:** 12 sections + 6 existing components

