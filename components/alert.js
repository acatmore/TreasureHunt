import { Alert, Vibration } from 'react-native';

const createAlert = (treasure, message) => {
  const ONE_SECOND_IN_MS = 1000;
  // style for android
  treasure && Vibration.vibrate(10 * ONE_SECOND_IN_MS);
  Alert.alert(message);
};

export default createAlert;
