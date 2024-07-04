import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GridSizeState {
  value: string;
}

const initialState: GridSizeState = {
  value: '',
};

const gridSizeReducer = createSlice({
  name: 'gridSize',
  initialState,
  reducers: {
    setGridSize: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {setGridSize} = gridSizeReducer.actions;
export default gridSizeReducer.reducer;
