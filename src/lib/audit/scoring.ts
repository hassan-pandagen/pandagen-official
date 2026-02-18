export function getScoreColor(score: number): string {
  if (score >= 90) return '#22c55e';
  if (score >= 50) return '#f97316';
  return '#ef4444';
}

export function getScoreLabel(score: number): string {
  if (score >= 90) return 'GOOD';
  if (score >= 50) return 'NEEDS WORK';
  return 'POOR';
}

export function getScoreTextClass(score: number): string {
  if (score >= 90) return 'text-green-400';
  if (score >= 50) return 'text-orange-400';
  return 'text-red-400';
}

export function getScoreBorderClass(score: number): string {
  if (score >= 90) return 'border-green-500/20';
  if (score >= 50) return 'border-orange-500/20';
  return 'border-red-500/20';
}
