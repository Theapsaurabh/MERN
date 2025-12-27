//! Type Aliases
type Point = {
  x: number;
  y: number;
};

type Direction = "up" | "down" | "left" | "right";

function move(point: Point, direction: Direction, distance: number): Point {
  switch (direction) {
    case "up":
      return { x: point.x, y: point.y + distance };
    case "down":
      return { x: point.x, y: point.y - distance };
    case "left":
      return { x: point.x - distance, y: point.y };
    case "right":
      return { x: point.x + distance, y: point.y };
  }
}

const startPoint: Point = { x: 0, y: 0 };
const newPoint = move(startPoint, "up", 10);
console.log(newPoint); // { x: 0, y: 10 }   