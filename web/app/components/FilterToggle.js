import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function FilterToggle({ value, onToggle, selectedToggles }) {
  const isSelected = selectedToggles.includes(value);

  const handleToggle = () => {
    onToggle(value);
  };

  return (
    <View style={styles.container}>
      <Switch
        style={styles.toggle}
        trackColor={{ false: '#767577', true: colors.primary }}
        value={isSelected}
        onValueChange={handleToggle}
      />
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    padding: 5,
  },
  toggle: {
    margin: 5,
  },
});
export default FilterToggle;
