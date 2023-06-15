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
      { title: 'Burger', id: 1 },
      { title: 'Taco', id: 2 },
      { title: 'Pizza', id: 3 },
    ],
  },

  reducers: {
    addFood: (state, action) => {
      state.foods.push({ title: action.payload.title, id: action.payload.id });
    },
    removeFood: (state, action) => {
      state.foods.splice(
        state.foods.indexOf({ title: action.payload.title }),
        1
      );
    },
  },
});

export const addFood = foodsSlice.actions.addFood;
export const removeFood = foodsSlice.actions.removeFood;
export default foodsSlice.reducer;
