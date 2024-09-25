import {createSlice} from '@reduxjs/toolkit';
// import { default_items } from '../data/items';

const fetchStatus = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false=pending and true=done
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
       state.fetchDone = true;
       return state;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      return state;
    },
    markFetchingFinished: (state) => {
       state.currentlyFetching = false;
       return state;
    }
  }
});

export const fetchStatusActions = fetchStatus.actions;

export default fetchStatus;

