import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice ({
      name:'characters',
      initialState: {
            persons:[],
      },
      reducers:{},
});


export default charactersSlice.reducer;