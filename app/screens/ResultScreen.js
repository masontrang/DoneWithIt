import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';
function ResultScreen({ route, navigation }) {
  const { result } = route.params;
  return (
    <SafeAreaView>
      <View style={styles.eatResult}>
        <Text style={styles.text}>{result} was selected!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eatResult: {
    height: 70,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
  text: { color: 'white', fontSize: 20 },
});

export default ResultScreen;
