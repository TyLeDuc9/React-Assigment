import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "eucyldt",
        age: "21",
        about: "Information Technology",
        avatarUrl: "https://i.pinimg.com/736x/b5/2c/7d/b52c7de911d26e9d702b97de94cc419f.jpg",
        themeColor:'#1f2937'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avatarUrl = action.payload.avatarUrl;
            state.themeColor=action.payload.themeColor;
        }
    }
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
