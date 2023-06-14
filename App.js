import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './app/screens/WelcomeScreen';

import { useDeviceOrientation } from '@react-native-community/hooks';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreen />
      <ViewImageScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'dodgerblue',
    // paddingTop: Platform.OS === 'android' ? 0 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
