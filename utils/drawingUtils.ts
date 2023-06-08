export function drawCircle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  effectiveRadius: number,
  clearing: { color: string }
) {
  context.beginPath();
  context.arc(x, y, effectiveRadius, 0, Math.PI * 2);
  context.strokeStyle = clearing.color;
  context.lineWidth = 10;
  context.stroke();
}
