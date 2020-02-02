export function map(old: number, oldmin: number, oldmax: number, newmin: number, newmax: number): number {
  return ((old - oldmin) * (newmax - newmin)) / (oldmax - oldmin) + newmin;
}
