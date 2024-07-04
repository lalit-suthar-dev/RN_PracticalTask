import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SelectedItemsState {
  items: number[];
}

const initialState: SelectedItemsState = {
  items: [],
};

const selectedItemsReducer = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    setSelectedItems: (state, action: PayloadAction<number[]>) => {
      state.items = action.payload;
    },
    clearSelectedItems: state => {
      state.items = [];
    },
  },
});

export const {setSelectedItems, clearSelectedItems} =
  selectedItemsReducer.actions;
export default selectedItemsReducer.reducer;
