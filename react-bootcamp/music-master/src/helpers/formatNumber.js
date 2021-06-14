export default function formatNumber(num) {
  return Math.abs(num) > 999
    ? Math.abs(num) > 999999
      ? Math.abs(num) > 999999999
        ? Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + 'B'
        : Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'M'
      : Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'K'
    : Math.sign(num) * Math.abs(num);
}
