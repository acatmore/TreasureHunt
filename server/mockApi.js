const treasureApi = {
  getTreasureSites: async () => {
    await new Promise((res) =>
      setTimeout(() => res(), 750 + 750 * Math.random()),
    );
    return [
      // { id: 1, latitude: 47.6492166666667, longitude: -122.351333333333 },
      // { id: 2, latitude: 47.64605, longitude: -122.35015 },
      // { id: 3, latitude: 47.6514, longitude: -122.350833333333 },
      // { id: 4, latitude: 47.64945, longitude: -122.34815 },
      // { id: 5, latitude: 47.65015, longitude: -122.348733333333 },
      // { id: 6, latitude: 47.6478333333333, longitude: -122.347633333333 },
      // { id: 1, latitude: -52.64911693, longitude: -16.64003751 },
      // { id: 2, latitude: 14.2549848, longitude: -21.41576003 },
      // { id: 3, latitude: -7.30372562, longitude: 39.77651421 },
      // { id: 4, latitude: 27.78476463, longitude: -3.89751281 },
      // { id: 5, latitude: 8.51836097, longitude: 13.57190777 },
      // { id: 6, latitude: -7.03979092, longitude: -49.20228666 },
      // { id: 1, latitude: 72.59616881, longitude: -95.71876723 },
      // { id: 2, latitude: 68.36595772, longitude: -122.02255516 },
      // { id: 3, latitude: 75.42200037, longitude: -97.51170258 },
      // { id: 4, latitude: 74.90690721, longitude: -108.76328331 },
      // { id: 5, latitude: 68.58813616, longitude: -102.34690518 },
      // { id: 6, latitude: 70.00116525, longitude: -124.91617334 },
      { id: 1, latitude: 9.67154352, longitude: 49.73673404 },
      { id: 2, latitude: 10.25556086, longitude: 50.09049564 },
      { id: 3, latitude: 10.04499785, longitude: 49.74013518 },
      { id: 4, latitude: 10.01909665, longitude: 49.5763123 },
      { id: 5, latitude: 10.03591204, longitude: 50.41651996 },
      { id: 6, latitude: 9.69605314, longitude: 50.16696745 },
    ];
  },
  siteHasTreasure: async (id) => {
    await new Promise((res) =>
      setTimeout(() => res(), 750 + 750 * Math.random()),
    );
    return id % 2 === 0;
  },
};

export default treasureApi;
