export const categories = {
  'developer-tools': { label: 'Developer Tools', emoji: '🛠' },
  'design': { label: 'Design', emoji: '🎨' },
  'productivity': { label: 'Productivity', emoji: '⚡' },
  'notes': { label: 'Notes & Writing', emoji: '📝' },
  'security': { label: 'Security & Privacy', emoji: '🔒' },
  'utilities': { label: 'System Utilities', emoji: '🔧' },
  'media': { label: 'Photo & Video', emoji: '📷' },
  'finance': { label: 'Finance', emoji: '💰' },
} as const;

export type CategorySlug = keyof typeof categories;
