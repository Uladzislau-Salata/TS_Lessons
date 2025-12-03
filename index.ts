interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

function calculateArea(side: number): Square;
function calculateArea(a: number, b: number, c: number, d: number): Rect;

function calculateArea(
  a: number,
  b?: number,
  c?: number,
  d?: number
): Square | Rect {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

calculateArea(1);
calculateArea(1, 5, 1, 5);
