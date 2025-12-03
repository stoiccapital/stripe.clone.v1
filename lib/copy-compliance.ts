/**
 * Copy Compliance System
 * Enforces Prime Directive rules for deterministic, unambiguous copy generation
 */

export interface CopyValidationResult {
  compliant: boolean;
  violations: string[];
}

/**
 * Forbidden patterns that must be eliminated
 */
export const FORBIDDEN_PATTERNS = [
  /\b(very|really|super|extremely|incredibly)\b/gi,
  /\b(better|faster|easier|best|greatest)\b/gi,
  /\b(amazing|awesome|fantastic|wonderful)\b/gi,
  /\b(love|hate|amazing|incredible)\b/gi,
  /\b(transform|revolutionize|game-changer)\b/gi,
  /\b(guaranteed|promise|assure)\b/gi,
  /\b(save time|save money)\b/gi, // Without context
];

/**
 * Allowed CTA patterns
 */
export const ALLOWED_CTA_PATTERNS = [
  /^Start\s+\w+/i,
  /^Get\s+\w+/i,
  /^Try\s+\w+/i,
  /^Learn\s+more$/i,
  /^See\s+\w+/i,
];

/**
 * Validates copy against Prime Directive rules
 */
export function validateCopy(
  text: string,
  rules: {
    maxLength?: number;
    maxSentences?: number;
    requireOutcome?: boolean;
    forbidPatterns?: boolean;
  } = {}
): CopyValidationResult {
  const violations: string[] = [];

  // Check for forbidden patterns
  if (rules.forbidPatterns !== false) {
    FORBIDDEN_PATTERNS.forEach((pattern, index) => {
      if (pattern.test(text)) {
        violations.push(`Contains forbidden pattern: ${pattern}`);
      }
    });
  }

  // Check length constraints
  if (rules.maxLength && text.length > rules.maxLength) {
    violations.push(`Exceeds max length of ${rules.maxLength} characters`);
  }

  // Check sentence count
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (rules.maxSentences && sentences.length > rules.maxSentences) {
    violations.push(`Exceeds max sentences of ${rules.maxSentences}`);
  }

  // Check for outcome orientation
  if (rules.requireOutcome) {
    const outcomeIndicators = [
      /\bincrease\b/i,
      /\bdecrease\b/i,
      /\breduce\b/i,
      /\bimprove\b/i,
      /\bachieve\b/i,
      /\bdeliver\b/i,
      /\bresult\b/i,
      /\boutcome\b/i,
    ];
    const hasOutcome = outcomeIndicators.some((pattern) => pattern.test(text));
    if (!hasOutcome) {
      violations.push('Missing outcome-oriented language');
    }
  }

  return {
    compliant: violations.length === 0,
    violations,
  };
}

/**
 * Validates CTA against allowed patterns
 */
export function validateCTA(cta: string): CopyValidationResult {
  const violations: string[] = [];

  // Check word count (2-6 words)
  const words = cta.trim().split(/\s+/);
  if (words.length < 2 || words.length > 6) {
    violations.push('CTA must be 2-6 words');
  }

  // Check against allowed patterns
  const matchesPattern = ALLOWED_CTA_PATTERNS.some((pattern) => pattern.test(cta));
  if (!matchesPattern) {
    violations.push('CTA does not match allowed patterns (Start/Get/Try + outcome, or Learn more)');
  }

  return {
    compliant: violations.length === 0,
    violations,
  };
}

/**
 * Headline templates (outcome-first, pain-relief, transformation-result)
 */
export const HEADLINE_TEMPLATES = {
  outcomeFirst: (outcome: string) => outcome,
  painRelief: (pain: string, solution: string) => `${solution} for ${pain}`,
  transformationResult: (before: string, after: string) => `From ${before} to ${after}`,
};

/**
 * Value Proposition Schema: Benefit → Why it matters → Measurable outcome
 */
export interface ValueProposition {
  benefit: string;
  whyItMatters: string;
  outcome: string;
}

export function formatValueProposition(vp: ValueProposition): string {
  return `${vp.benefit}. ${vp.whyItMatters} ${vp.outcome}`;
}

/**
 * Feature Schema: What it is → How it works → What outcome it enables
 */
export interface Feature {
  what: string;
  how: string;
  outcome: string;
}

export function formatFeature(feature: Feature): string {
  return `${feature.what} ${feature.how} ${feature.outcome}`;
}

/**
 * Testimonial Schema: Person/Company + Context/Role + Problem + Outcome/Result
 */
export interface Testimonial {
  person: string;
  role: string;
  company: string;
  problem: string;
  outcome: string;
  metric?: string;
}

export function formatTestimonial(testimonial: Testimonial): string {
  const metricText = testimonial.metric ? ` ${testimonial.metric}` : '';
  return `${testimonial.problem} ${testimonial.outcome}${metricText}`;
}

