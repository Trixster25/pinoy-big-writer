export function formatRank(rank: number | undefined) {
  if (rank === undefined) return;
  const lastDigit = rank % 10;
  const lastTwoDigits = rank % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${rank}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${rank} st`;
    case 2:
      return `${rank} nd`;
    case 3:
      return `${rank} rd`;
    default:
      return `${rank} th`;
  }
}
