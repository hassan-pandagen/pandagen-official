export function getScoreColor(score: number): string {
  if (score >= 90) return '#16a34a';
  if (score >= 50) return '#ea580c';
  return '#dc2626';
}

export function getScoreLabel(score: number): string {
  if (score >= 90) return 'GOOD';
  if (score >= 50) return 'NEEDS WORK';
  return 'POOR';
}

export function getScoreTextClass(score: number): string {
  if (score >= 90) return 'text-green-600';
  if (score >= 50) return 'text-orange-500';
  return 'text-red-500';
}

export function getScoreBorderClass(score: number): string {
  if (score >= 90) return 'border-green-200 bg-green-50';
  if (score >= 50) return 'border-orange-200 bg-orange-50';
  return 'border-red-200 bg-red-50';
}
