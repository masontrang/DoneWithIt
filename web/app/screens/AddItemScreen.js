import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

function AddItemScreen({ navigation }) {
  const [item, onChangeItem] = useState('Input Item Name');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeItem}
        value={item}
      ></TextInput>
      <Button
        title="Add Item"
        onPress={() => {
          navigation.navigate('Eat', { newItem: item });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
});

export default AddItemScreen;
