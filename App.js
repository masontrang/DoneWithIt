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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';
import SelectScreen from './app/screens/SelectScreen';
import EatScreen from './app/screens/EatScreen';
import ResultScreen from './app/screens/ResultScreen';

import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ViewImage" component={ViewImageScreen} />
        <Stack.Screen
          name="Select"
          component={SelectScreen}
          options={{ title: 'Category Select' }}
        />
        <Stack.Screen
          name="Eat"
          component={EatScreen}
          // options={{ title: 'Choose' }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          // options={{ title: 'Category Select' }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
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
