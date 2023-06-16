import { createSlice } from '@reduxjs/toolkit';

const foodsSlice = createSlice({
  name: 'foods',
  // initialState: [
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
  // ],
  initialState: {
    foods: [
      { title: 'Burger', id: 1, cuisine: 'american', cost: '$' },
      { title: 'Taco', id: 2, cuisine: 'mexican', cost: '$' },
      { title: 'Pizza', id: 3, cuisine: 'italian', cost: '$' },
      { title: 'Sushi', id: 4, cuisine: 'japanese', cost: '$$$' },
    ],
    filters: ['test'],
  },

  reducers: {
    addFood: (state, action) => {
      state.foods.push({
        title: action.payload.title,
        id: action.payload.id,
        cuisine: action.payload.cuisine,
        cost: action.payload.cost,
      });
    },
    removeFood: (state, action) => {
      state.foods.splice(
        state.foods.indexOf({ title: action.payload.title }),
        1
      );
    },
    updateFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const addFood = foodsSlice.actions.addFood;
export const removeFood = foodsSlice.actions.removeFood;
export const updateFilter = foodsSlice.actions.updateFilter;
export default foodsSlice.reducer;
