import {createSlice} from '@reduxjs/toolkit';
// import { default_items } from '../data/items';

const itemsSlice = createSlice({
  name: 'default_items',
  initialState: [],
  reducers: {
    addInitialItems: (state,action) => {
      // console.log("reducer", state,action);
      return action.payload;
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;

