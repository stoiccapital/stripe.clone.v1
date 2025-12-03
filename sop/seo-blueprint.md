Prime Directive
Enforce deterministic, architecture-safe, search-optimized structures.
No improvisation. No creative SEO. Only strict, reproducible rules.

1. Purpose

Define EXACTLY how SEO must be implemented in every landing page — metadata, headings, canonical, OpenGraph, schema, slugs, and indexing behavior.

2. Scope

This SOP governs ONLY:

Metadata (title, description, OG, Twitter)

Canonical rules

Slugs & URL format

Heading hierarchy

Keyword placement

Indexing (robots, noindex rules)

Schema / JSON-LD

Image alt text rules

Everything else is controlled by other SOPs.

3. Non-Negotiable SEO Laws
3.1 Metadata Rules

Metadata must be exported from page.tsx or route-level metadata (Next.js).

Title length: 50–60 characters.

Description length: 130–160 characters.

Titles MUST follow:
Primary benefit → qualifier

Descriptions MUST follow:
Primary benefit → credibility/supporting detail

No keyword stuffing.

3.2 OpenGraph & Twitter Metadata

Every page MUST define:

og:title

og:description

og:url

og:image (Stripe-grade, deterministic size)

Twitter card: summary_large_image

Image MUST follow:
/og/[slug].png or official OG generator pattern.

3.3 Canonical Rules

Mandatory:

Every landing page MUST define a canonical.

Canonical MUST match the final production domain.

No query params.

No dynamic canonicals.

Canonical must be identical across environments except base domain.

3.4 Slug Rules

Slugs MUST:

be lowercase

be hyphenated

avoid stop words

not exceed 60 characters

be deterministic (no random slugs)

represent the page’s intent clearly

Example:
/fleet-management-software (correct)
/the-best-fleet-manager-software-for-you (incorrect)

3.5 Heading Hierarchy

Mandatory:

Exactly one H1 — in the Hero section.

All sections MUST start with an H2.

Subsections MUST use H3.

No skipping levels.

No decorative headings.

H1 MUST contain the primary keyword once only.

3.6 Keyword Placement Rules

Keywords may appear in:

Metadata title

Meta description

H1

First paragraph

One H2 only

Limits:

Max 1 keyword per 100 words

No keywords in:

component names

alt attributes

JS variables

Tailwind classes

filenames

3.7 Image SEO Rules

Every image MUST have alt text.

If decorative: alt="".

Alt text MUST describe meaning, not visuals.

❌ “blue illustration of fleet cars”

✅ “Dashboard showing fleet performance metrics”

Filenames MUST be lowercase and hyphenated.

No keywords in alt text.

3.8 Schema Rules (JSON-LD)

Must be inserted in a server component only.

Schema MUST match page intent:

Product page → Product

Software → SoftwareApplication

SaaS LP → WebApplication

Blog → Article

No unverified claims.

No dynamic or runtime-generated values.

Domain must match canonical URL.

3.9 Linking Rules

Internal links MUST use semantic anchor text:

“fleet dashboard features” → correct

“click here” → forbidden

Only one outbound link allowed above the fold.

All external links MUST use rel="noopener noreferrer".

3.10 Indexing Rules

All public landing pages MUST be indexable.

Non-canonical or A/B variants MUST include:
robots: { index: false, follow: false }

Duplicate or experimental pages MUST reference the canonical.

4. SEO Quality Gate (Mandatory Validation)

Before shipping any landing page, you must confirm:

4.1 Title & Description

Title 50–60 chars

Description 130–160 chars

Both contain 1 keyword max

4.2 Canonical

Correct domain

No query params

No environment variation

4.3 Headings

Exactly one H1

H2 sections aligned with architecture

No H4 unless H3 exists

4.4 Schema

Valid JSON-LD

Correct business type

No claims

Matches canonical URL

4.5 Images

Alt attributes correct

No keyword stuffing

Correct filenames

4.6 Keyword Density

< 1 per 100 words

Appears only in allowed positions

If ANY of these fail → the page is NOT SEO-compliant.

5. Failure Modes

SEO breaks when:

AI improvises metadata

Multiple H1s appear

Canonical mismatches occur

Keywords appear in wrong places

Alt text is descriptive of visuals not meaning

Schema is incorrect or unverified

Non-deterministic slugs are generated

Fix immediately.

6. Definition of Done

A landing page is SEO-complete when:

Metadata meets deterministic rules

Canonical is correct

H1/H2/H3 hierarchy is valid

Keywords follow placement rules

Schema is valid

All images have correct alt text

Indexing behavior matches intent

Once these are satisfied → SEO is DONE.