import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice';
import fetchStatus from './fetchStatus';
import bagSlice from './bagSlice';
// import { name } from 'browser-sync'


const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatus.reducer ,
    bag: bagSlice.reducer
  }

})

export default myntraStore;