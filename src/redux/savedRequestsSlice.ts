import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type EditItem = {
  prevState: string;
  newState: string;
  results: number | string;
  sort: string;
};

type List = {
  search: string;
  results: number | string;
  sort: string;
};

type SearchListState = {
  value: List[];
};

const initialState: SearchListState = {
  value: [],
};

export const savedRequestsSlice = createSlice({
  name: "savedRequests",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.value.push({
        search: action.payload,
        results: 12,
        sort: "relevance",
      });
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const newArr = state.value.filter(item => item.search !== action.payload);
      return { ...state, value: newArr };
    },
    editItem: (state, action: PayloadAction<EditItem>) => {
      const { prevState, newState, results, sort } = action.payload;

      const isDuplicate = state.value.some(
        item =>
          item.search.toLowerCase().trim() === newState.toLowerCase().trim()
      );

      if (isDuplicate) {
        return state;
      }

      const newArr = state.value.map(item =>
        item.search === prevState
          ? {
              search: newState,
              results,
              sort,
            }
          : item
      );
      return { ...state, value: newArr };
    },
  },
});

export const { addItem, deleteItem, editItem } = savedRequestsSlice.actions;

export default savedRequestsSlice.reducer;
