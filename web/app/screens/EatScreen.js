import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Button,
  Alert,
  Modal,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { addFood, removeFood } from '../redux/foods';

import colors from '../config/colors';

function EatScreen({ navigation, route }) {
  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'Burger',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Taco',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Pizza',
  //   },
  // ];
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  console.log('foods', foods.foods);

  const { newItem } = route.params || '';

  // useEffect(() => {
  //   dispatch(addFood({ title: newItem }));
  // }, [newItem]);

  type ItemProps = { title: string, cuisine: string };

  const Item = ({ title, cuisine, cost }: ItemProps) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        dispatch(removeFood({ title: title }));
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>{cuisine}</Text>
        <Text style={styles.details}>{cost}</Text>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={foods.foods}
          renderItem={({ item }) => (
            <Item title={item.title} cuisine={item.cuisine} cost={item.cost} />
          )}
          keyExtractor={(item) => item.id}
        />
        {/* <Text>{newItem}</Text> */}
        <Button
          title="Add Item"
          onPress={() => {
            navigation.navigate('Add Item');
          }}
        />
      </View>

      <Button
        title="Decide!"
        onPress={() => {
          const result =
            foods.foods[Math.floor(Math.random() * foods.foods.length)].title;
          navigation.navigate('Result', { result });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: colors.primary,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  details: { fontSize: 20, color: 'white' },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EatScreen;
