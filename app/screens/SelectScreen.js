import React from 'react';
import { View, Pressable, Text, StyleSheet, Button } from 'react-native';

import colors from '../config/colors';

function SelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.eatButton}
        onPress={() => navigation.navigate('Eat')}
      >
        <Text>Eat!</Text>
      </Pressable>
      <Pressable style={styles.playButton}>
        <Text>Play!</Text>
      </Pressable>
      <Pressable style={styles.goButton}>
        <Text>Go!</Text>
      </Pressable>
      <Button title="Setup" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  eatButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  playButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  goButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
export default SelectScreen;
