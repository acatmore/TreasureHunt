const regionCoord = (points) => {
  let minX, maxX, minY, maxY;
  const padding = 0.002;
  // first point
  ((point) => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);

  // calculate viewbox
  points.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = maxX - minX + padding;
  const deltaY = maxY - minY + padding;
  return [midX, midY, deltaX, deltaY];
};

export default regionCoord;
