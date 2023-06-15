import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';

import colors from '../config/colors';

import { useSelector, useDispatch } from 'react-redux';
import { addFood } from '../redux/foods';
import CostToggle from '../components/CostToggle';

function AddItemScreen({ navigation }) {
  const dispatch = useDispatch();

  const [item, onChangeItem] = useState('');
  const [itemCuisine, onChangeItemCuisine] = useState('');
  const [itemCost, setItemCost] = useState('$');

  const handleButtonPress = (cost) => {
    setItemCost(cost);
  };

  return (
    <SafeAreaView>
      <Text>Item Name: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeItem}
        value={item}
      ></TextInput>
      <Text>Cuisine Type: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeItemCuisine}
        value={itemCuisine}
      ></TextInput>
      <Text>Cost: </Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeCost}
        value={itemCost}
      ></TextInput> */}
      <View style={styles.costContainer}>
        {/* <Pressable
          style={styles.costButton}
          onPress={() => {
            setItemCost('$');
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>$</Text>
        </Pressable>
        <Pressable
          style={styles.costButton}
          onPress={() => {
            setItemCost('$$');
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>$$</Text>
        </Pressable>
        <Pressable
          style={styles.costButton}
          onPress={() => {
            setItemCost('$$$');
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>$$$</Text>
        </Pressable> */}

        <CostToggle itemCost={itemCost} setItemCost={setItemCost} />
      </View>
      <Button
        title="Add Item"
        onPress={() => {
          dispatch(
            addFood({
              title: item,
              id: Math.random(0, 1000),
              cuisine: itemCuisine,
              cost: itemCost,
            })
          );
          navigation.navigate('Eat', { newItem: item });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
  costContainer: { flexDirection: 'row', justifyContent: 'center' },
  // costButton: {
  //   backgroundColor: colors.primary,
  //   width: '20%',
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

export default AddItemScreen;
