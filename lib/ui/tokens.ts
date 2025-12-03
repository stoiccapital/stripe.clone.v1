/**
 * Shared UI Tokens
 * 
 * Centralized token definitions for the landing page component system.
 * All components should import and use these tokens instead of defining their own.
 */

/**
 * Gap spacing tokens for layout components (Grid, Stack, Split)
 */
export type GapToken = "none" | "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Alignment tokens for layout and content components
 */
export type AlignToken = "left" | "center" | "right";

/**
 * Background variant tokens for Section component
 */
export type BackgroundToken = "default" | "subtle" | "inverted";

/**
 * Tone tokens for content components (Headline, Paragraph, Badge, etc.)
 */
export type ToneToken = "default" | "muted" | "highlight";

/**
 * Size tokens for action components (PrimaryButton, SecondaryButton)
 */
export type SizeToken = "sm" | "md" | "lg";

/**
 * Max width tokens for Container component
 */
export type MaxWidthToken = "standard" | "navbar" | "cta" | "faq";

/**
 * Aspect ratio tokens for ImageBlock component
 */
export type AspectToken = "video" | "square" | "auto";

/**
 * Variant tokens for conversion components (FeatureCard, PricingCard)
 */
export type VariantToken = "default" | "highlight";

/**
 * Maps GapToken to Tailwind gap classes
 */
export function getGapClass(gap: GapToken): string {
  switch (gap) {
    case "none":
      return "";
    case "xs":
      return "gap-2";
    case "sm":
      return "gap-4";
    case "md":
      return "gap-6";
    case "lg":
      return "gap-8";
    case "xl":
      return "gap-12";
    default:
      return "gap-6"; // default to md
  }
}

/**
 * Maps GapToken to Tailwind space-y classes (for Stack)
 */
export function getStackGapClass(gap: GapToken): string {
  switch (gap) {
    case "none":
      return "";
    case "xs":
      return "space-y-2";
    case "sm":
      return "space-y-4";
    case "md":
      return "space-y-6";
    case "lg":
      return "space-y-8";
    case "xl":
      return "space-y-12";
    default:
      return "space-y-6"; // default to md
  }
}

/**
 * Maps GapToken to Tailwind gap classes for Split component
 */
export function getSplitGapClass(gap: GapToken): string {
  switch (gap) {
    case "none":
      return "";
    case "xs":
      return "gap-2";
    case "sm":
      return "gap-4";
    case "md":
      return "gap-8";
    case "lg":
      return "gap-12";
    case "xl":
      return "gap-16";
    default:
      return "gap-8"; // default to md
  }
}

/**
 * Maps AlignToken to Tailwind text alignment classes
 */
export function getTextAlignClass(align: AlignToken): string {
  switch (align) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    case "left":
    default:
      return "text-left";
  }
}

/**
 * Maps AlignToken to Tailwind flex alignment classes
 */
export function getFlexAlignClass(align: AlignToken): string {
  switch (align) {
    case "center":
      return "items-center justify-center";
    case "right":
      return "items-end justify-end";
    case "left":
    default:
      return "items-start justify-start";
  }
}

/**
 * Maps AlignToken to Tailwind justify classes (for CTAGroup)
 */
export function getJustifyClass(align: AlignToken): string {
  switch (align) {
    case "center":
      return "justify-center";
    case "right":
      return "justify-end";
    case "left":
    default:
      return "justify-start";
  }
}

/**
 * Maps AlignToken to Tailwind items alignment classes (for Split component)
 */
export function getItemsAlignClass(align: AlignToken): string {
  switch (align) {
    case "center":
      return "items-center";
    case "right":
      return "items-end";
    case "left":
    default:
      return "items-start";
  }
}

/**
 * Maps BackgroundToken to Tailwind background classes
 */
export function getBackgroundClass(background: BackgroundToken): string {
  switch (background) {
    case "subtle":
      return "bg-gray-50";
    case "inverted":
      return "bg-gray-900";
    case "default":
    default:
      return "bg-white";
  }
}

/**
 * Maps MaxWidthToken to Tailwind max-width classes
 */
export function getMaxWidthClass(maxWidth: MaxWidthToken): string {
  switch (maxWidth) {
    case "navbar":
      return "max-w-7xl";
    case "cta":
      return "max-w-4xl";
    case "faq":
      return "max-w-3xl";
    case "standard":
    default:
      return "max-w-6xl";
  }
}

/**
 * Returns the standard section vertical spacing token
 * Used for major sections: py-16 lg:py-24
 */
export function getSectionSpacingClass(): string {
  return "py-16 lg:py-24";
}

/**
 * Returns the footer vertical spacing token
 * Used for footer: py-12
 */
export function getFooterSpacingClass(): string {
  return "py-12";
}

/**
 * Returns the standard container horizontal padding token
 * Used for containers: px-4 sm:px-6 lg:px-8
 */
export function getContainerPaddingClass(): string {
  return "px-4 sm:px-6 lg:px-8";
}

/**
 * Maps ToneToken to Tailwind text color classes for body text
 */
export function getTextColorClass(tone: ToneToken): string {
  switch (tone) {
    case "muted":
      return "text-gray-600";
    case "highlight":
      return "text-indigo-600";
    case "default":
    default:
      return "text-gray-900";
  }
}

/**
 * Returns the standard icon size token
 * Used for icons: text-3xl
 */
export function getIconSizeClass(): string {
  return "text-3xl";
}

