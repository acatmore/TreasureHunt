const averageCoord = (items) => {
  let long = 0;
  let lat = 0;
  for (let item of items) {
    long += item.longitude;
    lat += item.latitude;
  }
  long = long / items.length;
  lat = lat / items.length;
  return [lat, long];
};

export default averageCoord;
