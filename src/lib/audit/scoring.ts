export function getScoreTextClass(score: number): string {
  if (score >= 90) return 'text-green-700';
  if (score >= 50) return 'text-orange-700';
  return 'text-red-600';
}
