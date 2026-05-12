export const projectTopics = {
  ai: 'AI',
  enterprise: 'Enterprise',
  systems: 'Design systems',
} as const;

export type ProjectTopic = keyof typeof projectTopics;

const topicsBySlug: Record<string, ProjectTopic[]> = {
  'enterprise-tax-workflow': ['enterprise'],
  'responsible-ai-toolkit': ['ai', 'enterprise'],
  'ai-document-data-platforms': ['ai', 'enterprise'],
  'enterprise-digital-products': ['enterprise'],
  'ai-at-pwc': ['ai', 'enterprise'],
  'financial-crime-suite': ['enterprise', 'ai'],
  'lighting-design-system': ['systems', 'enterprise'],
  'productivity-hub': ['enterprise'],
  'media-intelligence-platform': ['enterprise', 'ai'],
  'connected-identity': ['enterprise'],
  'audit-report-reader': ['enterprise'],
  'powerbi-templates': ['enterprise', 'systems'],
};

export function getProjectTopics(slug: string): ProjectTopic[] {
  return topicsBySlug[slug] ?? ['enterprise'];
}
