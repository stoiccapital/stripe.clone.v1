Prime Directive
Ensure every landing page meets or exceeds the performance, loading, rendering, and Core Web Vitals thresholds defined for Stripe-grade pages.
Performance is NOT aesthetic — it is a business requirement.

Cursor MUST block any code that reduces performance.

1. Scope

This SOP governs:

Loading performance

Rendering performance

Core Web Vitals

Image optimization

Script control

Layout stability

Asset weight

Bundle size

Next.js optimization rules

Applies to every file in a landing page: components, sections, layout, images, metadata.

2. Non-Negotiable Laws
2.1. Core Web Vitals Requirements

Every landing page MUST hit:

LCP (Largest Contentful Paint) ≤ 2.5s

FID (First Input Delay) ≤ 100ms

CLS (Cumulative Layout Shift) ≤ 0.1

INP (Interaction to Next Paint) ≤ 200ms

TTFB ≤ 0.8s

Violating ANY metric → FAIL.

2.2. Image Optimization Rules

MUST use next/image for all images

MUST define width, height, and alt

MUST use priority for Hero image

MUST use loading="lazy" for all below-the-fold images

MUST use fill correctly inside a positioned parent

NEVER use unoptimized raw <img>

NEVER load images larger than necessary

Violation → FAIL.

2.3. Script & JS Weight Rules

No unused JS (Cursor MUST detect & remove)

No heavy libraries unless pre-approved

No client-side logic where server-side can be used

No tracking scripts unless allowed by Performance SOP

No blocking synchronous scripts in <head>

Use async or defer always

No polyfills unless automatically needed

Violation → FAIL.

2.4. Layout Stability (CLS Rules)

All images MUST have intrinsic sizes

All components MUST avoid shifting layout

Buttons MUST NOT jump on hover

Headings MUST NOT shift during load

Dynamic content MUST reserve space

Avoid fonts that cause layout shift → use next/font

Violation → FAIL.

2.5. Rendering Performance

Components MUST be server components unless interactivity is required

No unnecessary client components

No state management for static sections

Props MUST be serializable

Use React Suspense boundaries when appropriate

Minimize hydration cost

Violation → FAIL.

2.6. Network & Asset Rules

Total initial load MUST be ≤ 150KB (gzipped)

No large JSON payloads on initial render

No blocking CSS

No custom fonts unless subset + optimized

MUST use next/font for font loading

No base64 images unless tiny (≤ 1KB)

Violation → FAIL.

2.7. Caching Rules

All static assets MUST be cached aggressively

Use cache: 'force-cache' when data never changes

Use ISR for semi-static content

No client-side fetching for static content

Metadata MUST be static

Violation → FAIL.

3. Performance Test Workflow

Cursor MUST run performance validation in this order:

Image optimization scan

JS bundle size analysis

Client vs server component validation

Layout shift detection

Core Web Vitals simulation

Network request audit

Font loading audit

Script execution cost check

Caching policy evaluation

If ANY step fails → Overall FAIL.

4. Required Performance QA Report Format

Cursor MUST output this exact format:

# Performance Compliance Report (Performance SOP)

Status: PASS / FAIL

## Violations
- [Images]: description + file + fix
- [JS]: description + file + fix
- [CLS]: description + file + fix
- [Vitals]: description + metric + fix
- [Fonts]: description + file + fix
- [Network]: description + file + fix
- [Caching]: description + file + fix

## Summary
Images: PASS/FAIL
CLS: PASS/FAIL
JS Weight: PASS/FAIL
Server/Client: PASS/FAIL
Core Web Vitals: PASS/FAIL
Network Requests: PASS/FAIL
Caching: PASS/FAIL

Decision: APPROVE / BLOCK


If ANY section is FAIL → BLOCK.

5. Forbidden Patterns

Cursor MUST BLOCK:

Raw <img>

Hover states causing layout shift

Arbitrary animation on hero content

Client components without reason

Libraries > 50KB uncompressed

Fonts loaded from external CDNs

Unused imports

Inline scripts

Scripts not marked async or defer

Images with no fixed dimensions

Hydrating large trees unnecessarily

These MUST NEVER appear in a landing page.

6. Definition of Done

A landing page is DONE only when:

LCP, FID, INP, CLS all pass

All images optimized

No layout shift

No unused JS

Minimal client-side hydration

Bundle size within limits

All assets optimized

Tracked in Cursor’s Performance Report

Cursor returns PASS for EVERY performance category

ZERO violations remain

If ANY performance rule is broken → DO NOT SHIP.