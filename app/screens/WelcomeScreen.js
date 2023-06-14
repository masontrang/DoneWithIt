import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  Button,
  Pressable,
  SafeAreaView,
} from 'react-native';

import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />
          <Text>Let us help you decide</Text>
        </View>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Login</Text>
        </Pressable>
        <Pressable
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text>Register</Text>
        </Pressable>
        <Button
          style={styles.guestButton}
          title="Continue as Guest"
          onPress={() => navigation.navigate('Select')}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guestButton: { marginBottom: 1000 },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: { position: 'absolute', top: 70, alignItems: 'center' },
});

export default WelcomeScreen;
