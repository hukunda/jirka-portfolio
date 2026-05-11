import activityIcon from 'lucide-static/icons/activity.svg?raw';
import brainCircuitIcon from 'lucide-static/icons/brain-circuit.svg?raw';
import briefcaseBusinessIcon from 'lucide-static/icons/briefcase-business.svg?raw';
import chartColumnIcon from 'lucide-static/icons/chart-column.svg?raw';
import chartPieIcon from 'lucide-static/icons/chart-pie.svg?raw';
import clipboardCheckIcon from 'lucide-static/icons/clipboard-check.svg?raw';
import kanbanIcon from 'lucide-static/icons/kanban.svg?raw';
import keyRoundIcon from 'lucide-static/icons/key-round.svg?raw';
import landmarkIcon from 'lucide-static/icons/landmark.svg?raw';
import layersIcon from 'lucide-static/icons/layers.svg?raw';
import layoutGridIcon from 'lucide-static/icons/layout-grid.svg?raw';
import libraryBigIcon from 'lucide-static/icons/library-big.svg?raw';
import shieldCheckIcon from 'lucide-static/icons/shield-check.svg?raw';

const projectIconsBySlug = {
  'enterprise-tax-workflow': landmarkIcon,
  'responsible-ai-toolkit': shieldCheckIcon,
  'ai-document-data-platforms': brainCircuitIcon,
  'enterprise-digital-products': layoutGridIcon,
  'ai-at-pwc': libraryBigIcon,
  'financial-crime-suite': activityIcon,
  'lighting-design-system': layersIcon,
  'productivity-hub': kanbanIcon,
  'media-intelligence-platform': chartColumnIcon,
  'connected-identity': keyRoundIcon,
  'audit-report-reader': clipboardCheckIcon,
  'powerbi-templates': chartPieIcon,
} as const;

export type ProjectIconSlug = keyof typeof projectIconsBySlug;

export function getProjectIconSvg(slug: string): string {
  return projectIconsBySlug[slug as ProjectIconSlug] ?? briefcaseBusinessIcon;
}
