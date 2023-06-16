import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Text, FlatList, Button } from 'react-native';

import FilterToggle from '../components/FilterToggle';

import { updateFilter } from '../redux/foods';

function EatFiltersScreen({ props, navigation }) {
  const [selectedToggles, setSelectedToggles] = useState([]);

  const handleToggle = (toggleValue) => {
    if (selectedToggles.includes(toggleValue)) {
      setSelectedToggles(
        selectedToggles.filter((value) => value !== toggleValue)
      );
    } else {
      setSelectedToggles([...selectedToggles, toggleValue]);
    }
  };
  const foods = useSelector((state) => state.foods);
  const unique = [...new Set(foods.foods.map((obj) => obj.cuisine))];

  useEffect(() => {
    setSelectedToggles([...unique]);
  }, []);

  console.log('filters', foods.filters);
  console.log('selectedToggles', selectedToggles);

  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(updateFilter(selectedToggles));
    navigation.navigate('Eat');
  };

  return (
    <View>
      {/* <Text>Filters {foods.filters}</Text>
      <Text>Foods {foods.foods.cuisine}</Text> */}
      {unique.map((item, index) => (
        <FilterToggle
          value={item}
          onToggle={handleToggle}
          selectedToggles={selectedToggles}
          key={index}
        />
      ))}

      {/* <FilterToggle
        value="toggle2"
        onToggle={handleToggle}
        selectedToggles={selectedToggles}
      />
      <FilterToggle
        value="toggle3"
        onToggle={handleToggle}
        selectedToggles={selectedToggles} */}
      {/* /> */}
      <Button title="Apply" onPress={handlePress} />
    </View>
  );
}

export default EatFiltersScreen;
