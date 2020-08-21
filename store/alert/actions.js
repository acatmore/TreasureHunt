export const SEND_ALERT = 'SEND_ALERT';

export const sendAlert = (treasure, message) => {
  return { type: SEND_ALERT, treasure, message };
};
