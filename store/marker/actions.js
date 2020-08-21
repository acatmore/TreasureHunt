export const CHECK_TREASURE = 'CHECK_TREASURE';
export const TREASURE_DATA_EXISTS = 'TREASURE_DATA_EXISTS';
export const FETCH_TREASURE_SUCCESS = 'FETCH_TREASURE_SUCCESS';
export const FETCH_TREASURE_ERROR = 'FETCH_TREASURE_ERROR';

export const checkTreasure = (item) => {
  return { type: CHECK_TREASURE, item };
};

export const fetchTreasureSuccess = (item, treasure) => {
  return { type: FETCH_TREASURE_SUCCESS, item, treasure };
};

export const fetchTreasureError = (error) => {
  return { type: FETCH_TREASURE_ERROR, error: error };
};

export const treasureExists = () => {
  return { type: TREASURE_DATA_EXISTS };
};
