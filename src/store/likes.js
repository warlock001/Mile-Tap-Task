import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: [],
};

export const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    setLikes: (state, action) => {
      state.likes = action.payload;
    },
    addLikes: (state, action) => {
      var index = state.likes.indexOf(action.payload);

      if (index === -1) {
        state.likes.push(action.payload);
      } else {
        state.likes.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLikes, addLikes } = likeSlice.actions;

export default likeSlice.reducer;
