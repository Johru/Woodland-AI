export function drawCircleOutline(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  effectiveRadius: number,
  color: string,
  lineWidth: number
) {
  context.strokeStyle = color;
  context.beginPath();
  context.arc(x, y, effectiveRadius, 0, Math.PI * 2);
  context.lineWidth = lineWidth;
  context.stroke();
}

export function drawCircle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  effectiveRadius: number,
  color: string
) {
  context.beginPath();
  context.arc(x, y, effectiveRadius, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

export function drawLine(
  context: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  lineWidth: number,
  color: string
) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();
}

export function clearCanvas(
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  context.clearRect(0, 0, width, height);
}
