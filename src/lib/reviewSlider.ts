export function reviewPages<T>(items: T[], pageSize: number): T[][] {
  if (items.length === 0) return [];
  if (pageSize <= 1) return items.map((item) => [item]);
  if (items.length <= pageSize) return [items];

  const lastStart = items.length - pageSize;
  const pages: T[][] = [];
  for (let start = 0; start < lastStart; start += pageSize) {
    pages.push(items.slice(start, start + pageSize));
  }
  pages.push(items.slice(lastStart));
  return pages;
}

export function paginationItems(current: number, total: number): Array<number | "ellipsis"> {
  if (total < 1) return [];

  const wanted = new Set<number>([1, total]);
  for (const page of [current - 1, current, current + 1]) {
    if (page >= 1 && page <= total) wanted.add(page);
  }

  const sorted = [...wanted].sort((a, b) => a - b);
  const items: Array<number | "ellipsis"> = [];
  for (let index = 0; index < sorted.length; index += 1) {
    const page = sorted[index];
    if (page == null) continue;
    if (index > 0) {
      const previous = sorted[index - 1];
      if (previous != null && page - previous > 1) items.push("ellipsis");
    }
    items.push(page);
  }
  return items;
}
