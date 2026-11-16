export const QR_SIZE = 25;

export const QR_GRID = (() => {
  const grid = Array.from({ length: QR_SIZE }, () =>
    Array(QR_SIZE).fill(false)
  );
  let seed = 987654321;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const inFinder = (r, c) =>
    (r < 8 && c < 8) || (r < 8 && c >= QR_SIZE - 8) || (r >= QR_SIZE - 8 && c < 8);

  for (let r = 0; r < QR_SIZE; r++) {
    for (let c = 0; c < QR_SIZE; c++) {
      if (inFinder(r, c)) continue;
      if (r === 6 || c === 6) {
        grid[r][c] = r === 6 ? c % 2 === 0 : r % 2 === 0;
        continue;
      }
      grid[r][c] = rand() > 0.5;
    }
  }

  const placeFinder = (r0, c0) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const edge = r === 0 || r === 6 || c === 0 || c === 6;
        const center = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        grid[r0 + r][c0 + c] = edge || center;
      }
    }
  };

  placeFinder(0, 0);
  placeFinder(0, QR_SIZE - 7);
  placeFinder(QR_SIZE - 7, 0);

  return grid;
})();
