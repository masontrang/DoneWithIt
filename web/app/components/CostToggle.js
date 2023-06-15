import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

const CostToggle = ({ itemCost, setItemCost }) => {
  // Function to handle button press
  const handleCostPress = (cost) => {
    setItemCost(cost);
  };

  return (
    <View style={styles.container}>
      {/* $ button */}
      <TouchableOpacity
        style={[styles.button, itemCost === '$' && styles.selectedButton]}
        onPress={() => handleCostPress('$')}
      >
        <Text style={styles.buttonText}>$</Text>
      </TouchableOpacity>

      {/* $$ button */}
      <TouchableOpacity
        style={[styles.button, itemCost === '$$' && styles.selectedButton]}
        onPress={() => handleCostPress('$$')}
      >
        <Text style={styles.buttonText}>$$</Text>
      </TouchableOpacity>

      {/* $$$ button */}
      <TouchableOpacity
        style={[styles.button, itemCost === '$$$' && styles.selectedButton]}
        onPress={() => handleCostPress('$$$')}
      >
        <Text style={styles.buttonText}>$$$</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,

    marginTop: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: '#000',
  },
});

export default CostToggle;
