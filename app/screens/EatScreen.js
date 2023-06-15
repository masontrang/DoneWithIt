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

import colors from '../config/colors';

function EatScreen({ navigation, route }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Burger',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Taco',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Pizza',
    },
  ];

  const { newItem } = route.params;

  useEffect(() => {
    DATA.push({ id: '123', title: newItem });
  }, [newItem]);

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
        <Text>{newItem}</Text>
        <Button
          title="Add Item"
          onPress={() => {
            const result = DATA[Math.floor(Math.random() * DATA.length)].title;
            navigation.navigate('Add Item', { result });
          }}
        />
      </View>

      <Button
        title="Decide!"
        onPress={() => {
          const result = DATA[Math.floor(Math.random() * DATA.length)].title;
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
});

export default EatScreen;
