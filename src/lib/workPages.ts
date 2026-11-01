export type WorkKind = "live" | "upcoming";

export function pageSize(kind: WorkKind, stacked: boolean) {
  if (kind === "live") return stacked ? 4 : 6;
  return stacked ? 2 : 3;
}

export function pageCount(total: number, size: number) {
  if (size < 1) return 1;
  return Math.max(1, Math.ceil(total / size));
}

export function pageSlice<T>(items: readonly T[], page: number, size: number) {
  const count = pageCount(items.length, size);
  const safe = Math.min(Math.max(page, 0), count - 1);
  const start = safe * size;
  return items.slice(start, start + size);
}

export function rowsOf<T>(items: readonly T[], columns: number) {
  const size = Math.max(1, columns);
  const rows: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }
  return rows;
}
