import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { addFood } from '../redux/foods';

function AddItemScreen({ navigation }) {
  const dispatch = useDispatch();

  const [item, onChangeItem] = useState('');

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
          dispatch(addFood({ title: item, id: Math.random(0, 1000) }));
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
